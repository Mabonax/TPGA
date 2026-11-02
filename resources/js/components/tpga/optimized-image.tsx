import type { ComponentProps } from 'react';
import imageManifest from '@/lib/image-manifest.json';

type DeliveryImage = {
    src: string;
    width: number;
    height: number;
    variants: { width: number; src: string; bytes: number }[];
};
const images: Record<string, DeliveryImage> = imageManifest;

export default function OptimizedImage({
    name,
    alt,
    sizes = '(max-width: 700px) 88vw, 50vw',
    loading = 'lazy',
    ...props
}: Omit<ComponentProps<'img'>, 'src' | 'srcSet'> & { name: string }) {
    const entry = images[name];
    return (
        <img
            {...props}
            src={entry?.src ?? `/assets/tpga/${name}`}
            srcSet={entry?.variants
                .map((variant) => `${encodeURI(variant.src)} ${variant.width}w`)
                .join(', ')}
            sizes={entry ? sizes : undefined}
            width={entry?.width}
            height={entry?.height}
            alt={alt}
            loading={loading}
            decoding="async"
        />
    );
}
