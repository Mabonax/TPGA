<?php

use Illuminate\Support\Facades\Route;

Route::get('/sitemap.xml', function () {
    $paths = [
        ...array_keys(config('public-site.pages')),
        ...array_map(fn ($slug) => '/portfolio/'.$slug, array_keys(config('public-site.projects'))),
        ...array_map(fn ($slug) => '/insights/'.$slug, array_keys(config('public-site.articles'))),
    ];

    return response()->view('sitemap', ['paths' => $paths])->header('Content-Type', 'application/xml; charset=UTF-8');
})->name('sitemap');

Route::inertia('/', 'public/home')->name('home');
Route::inertia('/about', 'public/about')->name('about');
Route::inertia('/studio', 'public/studio')->name('studio');
Route::inertia('/capabilities', 'public/capabilities')->name('capabilities');
Route::inertia('/services', 'public/services')->name('services');
Route::inertia('/packages', 'public/packages')->name('packages');
Route::inertia('/testimonials', 'public/testimonials')->name('testimonials');
Route::inertia('/team', 'public/team')->name('team');
Route::get('/team/{slug}', function (string $slug) {
    abort_unless(in_array($slug, ['keneilwe-baloyi', 'thapelo-mkhontho', 'neo-molekwa', 'lerato-maluleka', 'boitumelo-mahasane', 'graig-jimu']), 404);

    return inertia('public/member', ['slug' => $slug]);
})->name('team.member');
Route::inertia('/portfolio', 'public/portfolio')->name('portfolio');
Route::inertia('/insights', 'public/portfolio', ['insights' => true, 'articles' => array_values(config('public-site.articles'))])->name('insights');
Route::get('/insights/{slug}', function (string $slug) {
    if (array_key_exists($slug, config('public-site.projects'))) {
        return to_route('portfolio.story', ['slug' => $slug], 301);
    }
    $articles = config('public-site.articles');
    abort_unless(isset($articles[$slug]), 404);

    return inertia('public/article', ['article' => $articles[$slug]]);
})->name('insights.article');
Route::get('/portfolio/{slug}', function (string $slug) {
    abort_unless(array_key_exists($slug, config('public-site.projects')), 404);

    return inertia('public/story', ['slug' => $slug]);
})->name('portfolio.story');
Route::inertia('/contact', 'public/contact')->name('contact');
Route::inertia('/start-a-project', 'public/contact', ['project' => true])->name('project.start');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
