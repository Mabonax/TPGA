<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <meta name="theme-color" content="#327b98">
        <link rel="icon" href="/assets/tpga/logo-colour.png" type="image/png">
        <link rel="apple-touch-icon" href="/assets/tpga/logo-colour.png">

        @fonts

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        <x-inertia::head>
            @php($seo = $page['props']['seo'])
            <title>{{ $seo['title'] }}</title>
            <meta data-inertia="description" name="description" content="{{ $seo['description'] }}">
            <meta data-inertia="robots" name="robots" content="{{ $seo['indexable'] ? 'index,follow' : 'noindex,nofollow' }}">
            <link data-inertia="canonical" rel="canonical" href="{{ $seo['url'] }}">
            <meta data-inertia="og:title" property="og:title" content="{{ $seo['title'] }}">
            <meta data-inertia="og:description" property="og:description" content="{{ $seo['description'] }}">
            <meta data-inertia="og:url" property="og:url" content="{{ $seo['url'] }}">
            <meta data-inertia="og:image" property="og:image" content="{{ $seo['image'] }}">
            <meta data-inertia="og:image:alt" property="og:image:alt" content="TonicPunkGraphics — Design. Innovation. Culture. Technology.">
            <meta data-inertia="og:type" property="og:type" content="{{ $seo['type'] }}">
            <meta data-inertia="og:site_name" property="og:site_name" content="TonicPunkGraphics">
            <meta data-inertia="twitter:card" name="twitter:card" content="summary_large_image">
            <meta data-inertia="twitter:title" name="twitter:title" content="{{ $seo['title'] }}">
            <meta data-inertia="twitter:description" name="twitter:description" content="{{ $seo['description'] }}">
            <meta data-inertia="twitter:image" name="twitter:image" content="{{ $seo['image'] }}">
        </x-inertia::head>
    </head>
    <body class="font-sans antialiased">
        <x-inertia::app />
    </body>
</html>
