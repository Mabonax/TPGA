<?php

use Illuminate\Support\Facades\Route;
use Inertia\Testing\AssertableInertia as Assert;

test('public metadata is present in the initial HTML and excludes query strings', function () {
    $this->get('/about?campaign=preview')
        ->assertOk()
        ->assertSee('About Agency - TonicPunkGraphics', false)
        ->assertSee('property="og:title"', false)
        ->assertSee('name="twitter:card"', false)
        ->assertSee('rel="canonical" href="'.url('/about').'"', false)
        ->assertDontSee('href="'.url('/about').'?campaign=preview"', false);
});

test('account metadata does not expose password reset query parameters', function () {
    $this->get('/login?token=private-preview')
        ->assertOk()
        ->assertSee('name="robots" content="noindex,nofollow"', false)
        ->assertSee('rel="canonical" href="'.url('/login').'"', false)
        ->assertDontSee('content="'.url('/login').'?token=', false);
});

test('insights use distinct articles and render the matching content', function () {
    $this->get('/insights')->assertOk()->assertInertia(fn (Assert $page) => $page
        ->component('public/portfolio')->has('articles', 3)
        ->where('articles.0.slug', 'before-you-design-a-logo'));

    $this->get('/insights/before-you-design-a-logo')->assertOk()->assertInertia(fn (Assert $page) => $page
        ->component('public/article')
        ->where('article.title', 'Before you design a logo, define the brand.')
        ->has('article.sections', 4)->where('seo.type', 'article'));
});

test('reset tokens are excluded from canonical and sharing URLs', function () {
    $response = $this->get('/reset-password/a-private-preview-token?email=preview%40example.invalid')->assertOk();
    $response->assertSee('rel="canonical" href="'.url('/login').'"', false)
        ->assertDontSee('content="'.url('/reset-password/a-private-preview-token'), false)
        ->assertDontSee('href="'.url('/reset-password/a-private-preview-token'), false);
});

test('previous insights project URLs keep working through a permanent redirect', function () {
    $this->get('/insights/bani-brand')->assertStatus(301)->assertRedirect('/portfolio/bani-brand');
});

test('unknown public content returns the branded error and the correct status', function (string $path) {
    $this->get($path)->assertNotFound()
        ->assertSee('This page took a different direction.')
        ->assertSee('Back to the studio')
        ->assertSee('name="robots" content="noindex,nofollow"', false);
})->with(['/page-that-does-not-exist', '/portfolio/not-a-project', '/insights/not-an-article', '/team/not-a-member']);

test('branded error views preserve status and JSON exception handling', function (int $status) {
    Route::get('/presentation-error-check', fn () => abort($status));
    $this->get('/presentation-error-check')->assertStatus($status)->assertSee('Back to the studio');
    $this->getJson('/presentation-error-check')->assertStatus($status)->assertJsonStructure(['message']);
})->with([403, 419, 429, 503]);

test('the production server error view keeps the error status', function () {
    config(['app.debug' => false]);
    Route::get('/presentation-server-error-check', fn () => abort(500));
    $this->get('/presentation-server-error-check')->assertStatus(500)
        ->assertSee('Something interrupted the experience.')
        ->assertDontSee('Stack trace');
});

test('the sitemap lists public content and excludes account pages', function () {
    $this->get('/sitemap.xml')->assertOk()
        ->assertHeader('Content-Type', 'application/xml; charset=UTF-8')
        ->assertSee('/insights/before-you-design-a-logo', false)
        ->assertSee('/portfolio/bani-brand', false)
        ->assertDontSee('/login', false)->assertDontSee('/dashboard', false);
});
