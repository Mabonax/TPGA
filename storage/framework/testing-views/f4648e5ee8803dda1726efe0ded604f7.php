<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>" class="<?php echo \Illuminate\Support\Arr::toCssClasses(['dark' => ($appearance ?? 'system') == 'dark']); ?>">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        
        <script>
            (function() {
                const appearance = '<?php echo e($appearance ?? "system"); ?>';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        
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

        <?php echo app('Illuminate\Foundation\Vite')->fonts(); ?>

        <?php echo app('Illuminate\Foundation\Vite')->reactRefresh(); ?>
        <?php echo app('Illuminate\Foundation\Vite')(['resources/css/app.css', 'resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"]); ?>
        <?php if (isset($component)) { $__componentOriginal56673881198e3a2924721e242dee6899 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal56673881198e3a2924721e242dee6899 = $attributes; } ?>
<?php $component = Inertia\View\Components\Head::resolve([] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('inertia::head'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Inertia\View\Components\Head::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
            <?php ($seo = $page['props']['seo']); ?>
            <title><?php echo e($seo['title']); ?></title>
            <meta data-inertia="description" name="description" content="<?php echo e($seo['description']); ?>">
            <meta data-inertia="robots" name="robots" content="<?php echo e($seo['indexable'] ? 'index,follow' : 'noindex,nofollow'); ?>">
            <link data-inertia="canonical" rel="canonical" href="<?php echo e($seo['url']); ?>">
            <meta data-inertia="og:title" property="og:title" content="<?php echo e($seo['title']); ?>">
            <meta data-inertia="og:description" property="og:description" content="<?php echo e($seo['description']); ?>">
            <meta data-inertia="og:url" property="og:url" content="<?php echo e($seo['url']); ?>">
            <meta data-inertia="og:image" property="og:image" content="<?php echo e($seo['image']); ?>">
            <meta data-inertia="og:image:alt" property="og:image:alt" content="TonicPunkGraphics — Design. Innovation. Culture. Technology.">
            <meta data-inertia="og:type" property="og:type" content="<?php echo e($seo['type']); ?>">
            <meta data-inertia="og:site_name" property="og:site_name" content="TonicPunkGraphics">
            <meta data-inertia="twitter:card" name="twitter:card" content="summary_large_image">
            <meta data-inertia="twitter:title" name="twitter:title" content="<?php echo e($seo['title']); ?>">
            <meta data-inertia="twitter:description" name="twitter:description" content="<?php echo e($seo['description']); ?>">
            <meta data-inertia="twitter:image" name="twitter:image" content="<?php echo e($seo['image']); ?>">
         <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal56673881198e3a2924721e242dee6899)): ?>
<?php $attributes = $__attributesOriginal56673881198e3a2924721e242dee6899; ?>
<?php unset($__attributesOriginal56673881198e3a2924721e242dee6899); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal56673881198e3a2924721e242dee6899)): ?>
<?php $component = $__componentOriginal56673881198e3a2924721e242dee6899; ?>
<?php unset($__componentOriginal56673881198e3a2924721e242dee6899); ?>
<?php endif; ?>
    </head>
    <body class="font-sans antialiased">
        <?php if (isset($component)) { $__componentOriginal1830bdc8f8b965a5838ec47487b5507c = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal1830bdc8f8b965a5838ec47487b5507c = $attributes; } ?>
<?php $component = Inertia\View\Components\App::resolve([] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('inertia::app'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Inertia\View\Components\App::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal1830bdc8f8b965a5838ec47487b5507c)): ?>
<?php $attributes = $__attributesOriginal1830bdc8f8b965a5838ec47487b5507c; ?>
<?php unset($__attributesOriginal1830bdc8f8b965a5838ec47487b5507c); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal1830bdc8f8b965a5838ec47487b5507c)): ?>
<?php $component = $__componentOriginal1830bdc8f8b965a5838ec47487b5507c; ?>
<?php unset($__componentOriginal1830bdc8f8b965a5838ec47487b5507c); ?>
<?php endif; ?>
    </body>
</html>
<?php /**PATH C:\xampp\htdocs\TPGA\resources\views/app.blade.php ENDPATH**/ ?>