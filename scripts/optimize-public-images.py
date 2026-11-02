"""Generate web delivery variants; never change the supplied original files."""
import hashlib
import json
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / 'public/assets/tpga'
DEST = ASSETS / 'optimized'
manifest = {}
source_bytes = 0
default_bytes = 0
client_files = {'geospace international.jpg', 'AB4IR Logo .png', 'DFA-Logo-–-White-Text.webp', 'DSAC-LOGO_2020-scaled.jpg', 'GBI-Logo_Original.png'}

for source in sorted(ASSETS.rglob('*')):
    if not source.is_file() or DEST in source.parents or source.suffix.lower() not in {'.png', '.jpg', '.jpeg', '.webp'}:
        continue
    name = source.relative_to(ASSETS).as_posix()
    if name.startswith('clients/') and source.name not in client_files:
        continue
    with Image.open(source) as original:
        image = ImageOps.exif_transpose(original)
        image = image.convert('RGBA' if 'A' in image.getbands() or 'transparency' in image.info else 'RGB')
        width, height = image.size
        variants = []
        widths = sorted({min(width, size) for size in [320, 640, 960, 1600, 2048]})
        lossless = any(word in name for word in ['logo', 'emblem.png', 'about-pattern', 'about-rings', 'globe'])
        for size in widths:
            output = DEST / Path(name).parent / f'{Path(name).stem}-{size}.webp'
            output.parent.mkdir(parents=True, exist_ok=True)
            if not output.exists() or output.stat().st_mtime < source.stat().st_mtime:
                resized = image.resize((size, round(height * size / width)), Image.Resampling.LANCZOS)
                resized.save(output, 'WEBP', quality=90 if lossless else 85, lossless=lossless, method=4, icc_profile=original.info.get('icc_profile', b''))
            variants.append({'width': size, 'src': '/assets/tpga/' + output.relative_to(ASSETS).as_posix(), 'bytes': output.stat().st_size})
        default = min(variants, key=lambda item: abs(item['width'] - 960))
        manifest[name] = {'width': width, 'height': height, 'src': default['src'], 'variants': variants}
        source_bytes += source.stat().st_size
        default_bytes += default['bytes']

(ROOT / 'resources/js/lib/image-manifest.json').write_text(json.dumps(manifest, indent=2) + '\n', encoding='utf-8')
report = {'images': len(manifest), 'original_bytes': source_bytes, 'default_variant_bytes': default_bytes, 'reduction_percent': round(100 * (1 - default_bytes / source_bytes), 2), 'original_hashes': {name: hashlib.sha256((ASSETS / name).read_bytes()).hexdigest() for name in manifest}}
(ROOT / 'docs/image-optimization.json').write_text(json.dumps(report, indent=2) + '\n', encoding='utf-8')
print(json.dumps({key: value for key, value in report.items() if key != 'original_hashes'}))
