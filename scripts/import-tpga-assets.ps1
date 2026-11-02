param([string]$SourceRoot = 'J:\2026\punk\TPGA Website\TPGA Website')
$ErrorActionPreference = 'Stop'
$target = Join-Path $PSScriptRoot '../public/assets/tpga'
New-Item -ItemType Directory -Path $target -Force | Out-Null
$assets = [ordered]@{
    'logo-landscape.png' = '1. Sign Up Page/TPG Logo/TPG Logo landscape.png'
    'logo.png' = '1. Sign Up Page/TPG Logo/TPG Logo.png'
    'emblem.png' = '1. Sign Up Page/Wireframes/TPG Embem.png'
    'pattern.svg' = '3. Landing Page/Wireframes/Stroke Pattern.svg'
    'pattern-fill.svg' = '3. Landing Page/Wireframes/Stroke Pattern fill.svg'
    'rings.svg' = '3. Landing Page/Wireframes/Stroke emblem.svg'
    'reception.jpg' = '3. Landing Page/Images/TPG Reception.jpg'
    'meeting-room.jpg' = '3. Landing Page/Images/TPG Meeting Room.jpg'
    'studio-background.jpeg' = '4. Discover Our Studio/Images/Background.jpeg'
    'founder.jpg' = '4. Discover Our Studio/Images/Founder Image.jpg'
    'media-analyst.png' = '4. Discover Our Studio/Images/Media Analyst.png'
    'globe.png' = '4. Discover Our Studio/Africa Map/Asset 1.png'
    'logo-colour.png' = '7. About Agency/Logo/Asset 23.png'
    'blueprint.jpeg' = '5. Services/Background/Background (2).jpeg'
    'emblem-render.png' = '5. Services/Image/image-gen (21).png'
    'office.jpeg' = '6. Meet The Team/Office.jpeg'
    'keneilwe.png' = '6. Meet The Team/The founders agency/Keneilwe baloyi/image-gen.png'
    'thapelo.png' = '6. Meet The Team/The founders agency/Thapelo Mkhontho/TP.png'
    'neo.png' = '6. Meet The Team/The founders agency/Neo Molekwa/Asset 2.png'
    'lerato.png' = '6. Meet The Team/The founders agency/Lerato Maluleka/Lerato.png'
    'boitumelo.png' = '6. Meet The Team/The founders agency/Boitumelo Mahasane/Melo.jpg'
    'jimu.png' = '6. Meet The Team/The founders agency/Graig Jimu/Jimu.png'
    'about-pattern.png' = '7. About Agency/Wireframes/Assset.png'
    'about-rings.png' = '7. About Agency/Wireframes/Stroke logo.png'
    'bani-logo.png' = '8. Latest News & Insights/Bani Foods/Logos/Bani Foods Logo With Colour-01.png'
    'bani-website.png' = '8. Latest News & Insights/Bani Foods/Website.png'
    'bani-sauces.png' = '8. Latest News & Insights/Bani Foods/Product designs/sauce mockup.png'
    'bani-eggs.png' = '8. Latest News & Insights/Bani Foods/Product designs/Eggs/Egg Mockup.png'
    'bani-chicken.png' = '8. Latest News & Insights/Bani Foods/Product designs/Chicken Tray/Chicken Mockup.png'
    'bani-mockup.jpg' = '8. Latest News & Insights/Bani Foods/Product designs/Sauce/Mockup.jpg'
    'portrait.png' = 'Tonic.png'
}
$manifest = foreach ($item in $assets.GetEnumerator()) {
    $source = Join-Path $SourceRoot $item.Value
    Copy-Item -LiteralPath $source -Destination (Join-Path $target $item.Key)
    [pscustomobject]@{asset=$item.Key; source=$item.Value; sha256=(Get-FileHash -LiteralPath $source -Algorithm SHA256).Hash}
}
$icons = Join-Path $target 'icons'
New-Item -ItemType Directory -Path $icons -Force | Out-Null
Get-ChildItem -LiteralPath (Join-Path $SourceRoot '5. Services/Service icons') -Filter '*.svg' | Copy-Item -Destination $icons
$logos = Join-Path $target 'clients'
New-Item -ItemType Directory -Path $logos -Force | Out-Null
Get-ChildItem -LiteralPath (Join-Path $SourceRoot '5. Services/Logos') -File | Copy-Item -Destination $logos
$manifest | ConvertTo-Json | Set-Content -LiteralPath (Join-Path $PSScriptRoot '../docs/asset-manifest.json')
