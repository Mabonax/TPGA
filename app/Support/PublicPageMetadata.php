<?php

namespace App\Support;

use Illuminate\Http\Request;

final class PublicPageMetadata
{
    /** @return array{title: string, description: string, url: string, image: string, indexable: bool, type: string} */
    public static function forRequest(Request $request): array
    {
        $path = '/'.trim($request->path(), '/');
        /** @var array<string, array{0: string, 1: string}> $pages */
        $pages = config('public-site.pages');
        $entry = $pages[$path] ?? null;
        $image = 'social-preview.jpg';
        $type = 'website';

        if ($request->routeIs('insights.article')) {
            /** @var array<string, array{title: string, description: string, image: string}> $articles */
            $articles = config('public-site.articles');
            $article = $articles[(string) $request->route('slug')] ?? null;
            if ($article !== null) {
                $entry = [$article['title'], $article['description']];
                $type = 'article';
            }
        } elseif ($request->routeIs('portfolio.story')) {
            /** @var array<string, array{0: string, 1: string, 2: string}> $projects */
            $projects = config('public-site.projects');
            $project = $projects[(string) $request->route('slug')] ?? null;
            if ($project !== null) {
                $entry = [$project[0], $project[1]];
            }
        } elseif ($request->routeIs('team.member')) {
            $name = ucwords(str_replace('-', ' ', (string) $request->route('slug')));
            $entry = [$name, 'Meet '.$name.', part of the TonicPunkGraphics creative collective in Pretoria.'];
        }

        return [
            'title' => ($entry[0] ?? 'Studio Account').' - TonicPunkGraphics',
            'description' => $entry[1] ?? 'Manage your TonicPunkGraphics studio account securely.',
            'url' => $entry !== null || in_array($path, ['/login', '/register', '/forgot-password'], true)
                ? $request->url()
                : url('/login'),
            'image' => url('/assets/tpga/'.$image),
            'indexable' => $entry !== null,
            'type' => $type,
        ];
    }
}
