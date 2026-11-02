<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex,nofollow">
    <meta name="theme-color" content="#327b98">
    <title><?php echo $__env->yieldContent('title'); ?> - TonicPunkGraphics</title>
    <link rel="icon" href="/assets/tpga/logo-colour.png">
    <style>
        *{box-sizing:border-box}body{margin:0;min-height:100svh;background:#35383f;color:#fff;font:16px/1.7 system-ui,sans-serif;display:flex;flex-direction:column}header{padding:28px max(6vw,24px)}header img{width:240px;max-width:80vw}main{flex:1;width:100%;max-width:1000px;margin:auto;padding:50px max(6vw,24px) 90px;position:relative;isolation:isolate}main:before{content:'';position:absolute;right:0;top:10%;width:420px;height:480px;background:url('/assets/tpga/optimized/emblem-640.webp') center/contain no-repeat;opacity:.1;z-index:-1}small{color:#ffd33e;text-transform:uppercase;letter-spacing:.2em}h1{font-size:clamp(34px,6vw,64px);line-height:1.1;letter-spacing:-.04em;max-width:700px;margin:20px 0}p{color:#e1e6eb;max-width:570px}.actions{display:flex;gap:16px;flex-wrap:wrap;margin-top:35px}a{color:#ffd33e}a:focus-visible{outline:3px solid #64afb4;outline-offset:5px}.button{border-radius:30px;padding:11px 22px;background:#ffd33e;color:#35383f;text-decoration:none;font-weight:600}.secondary{border:1px solid #b9cbd1;border-radius:30px;padding:10px 22px;text-decoration:none;color:white}footer{padding:22px max(6vw,24px);border-top:1px solid #ffffff20;color:#b9cbd1;font-size:12px}@media(prefers-reduced-motion:reduce){*{scroll-behavior:auto}}
    </style>
</head>
<body>
    <header><a href="/" aria-label="TonicPunkGraphics home"><img src="/assets/tpga/optimized/logo-landscape-640.webp" alt="TonicPunkGraphics" width="240" height="60"></a></header>
    <main>
        <small>Error <?php echo $__env->yieldContent('code'); ?></small>
        <h1><?php echo $__env->yieldContent('title'); ?></h1>
        <p><?php echo $__env->yieldContent('message'); ?></p>
        <div class="actions"><a class="button" href="/">Back to the studio</a><a class="secondary" href="/contact">Contact us</a></div>
    </main>
    <footer>Design. Innovation. Culture. Technology.</footer>
</body>
</html>
<?php /**PATH C:\xampp\htdocs\TPGA\resources\views/errors/layout.blade.php ENDPATH**/ ?>