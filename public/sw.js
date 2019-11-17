/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/clean-blog.css",
    "revision": "3405046aa60094cd88bdc2ffefc2b8a8"
  },
  {
    "url": "css/clean-blog.min.css",
    "revision": "e1519adce7b95909226ced88a3daa7a4"
  },
  {
    "url": "favicon.ico",
    "revision": "1ba2ae710d927f13d483fd5d1e548c9b"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "cd4c155c60592ada808a13722d2068b9"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "c6dcb45c87df4c945edb69738818ec79"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "e84e59802b7ba1ddacde01abef20d64e"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "3e55d15af8aecccdc5dc4b797c2f68a4"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "6f9f137baa31057795820651592c0cd0"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "83112440b6cf02b0e0bf543db55594f9"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "72bef2888d8c161c0e068cc1862ac918"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "19a117ca0730cdee27ce0069b127c8e3"
  },
  {
    "url": "img_old/icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "img_old/icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "img_old/icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "img_old/icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "img_old/icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "img_old/icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "img_old/icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "img_old/icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "img_old/icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "img_old/icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "img_old/icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "img_old/icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "img_old/icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "img/contact-bg.jpg",
    "revision": "a899cacd2a159db7fd5a08154a55ea3c"
  },
  {
    "url": "img/home-bg.jpg",
    "revision": "be70d7dd4747afad93cef1636ef707c0"
  },
  {
    "url": "img/post-bg.jpg",
    "revision": "b7cb6307e902faf3ba0393219229e4c8"
  },
  {
    "url": "img/post-sample-image.jpg",
    "revision": "931b7933bf7337abb96513ab29f112e8"
  },
  {
    "url": "index.html",
    "revision": "36f05194bb668e8c4b5f1764e6f24728"
  },
  {
    "url": "js/clean-blog.js",
    "revision": "c97160238bfcc00f43a68a31c993be48"
  },
  {
    "url": "js/clean-blog.min.js",
    "revision": "945636dd35b9ede618b068a4b28c1d6f"
  },
  {
    "url": "js/contact_me.js",
    "revision": "ec4aba3bd91ba8fa3c7b304f66fcd7ea"
  },
  {
    "url": "js/jqBootstrapValidation.js",
    "revision": "e60319e9f06ebc1798c2f3701fbf2898"
  },
  {
    "url": "manifest.json",
    "revision": "82e5ee9db430b4ce7c7ee5d0ecfa4537"
  },
  {
    "url": "robots.txt",
    "revision": "735ab4f94fbcd57074377afca324c813"
  },
  {
    "url": "scss/_bootstrap-overrides.scss",
    "revision": "9363ae21282eede298b05d8bc8bf1281"
  },
  {
    "url": "scss/_contact.scss",
    "revision": "d9213fb35bd1a878d8c01243dfc0ab85"
  },
  {
    "url": "scss/_footer.scss",
    "revision": "e58e5e5b0ddee965fd372427a3a329ed"
  },
  {
    "url": "scss/_global.scss",
    "revision": "af0d7be868ae7d286f0c67d9408b6921"
  },
  {
    "url": "scss/_masthead.scss",
    "revision": "d61689d432d10d87a344244656b0089b"
  },
  {
    "url": "scss/_mixins.scss",
    "revision": "fcef6fd936f578d4e65767505bea036f"
  },
  {
    "url": "scss/_navbar.scss",
    "revision": "53552bbba7b9af92e23f7972a9d1fff0"
  },
  {
    "url": "scss/_post.scss",
    "revision": "2b59519e65db2694655d68050b748f9f"
  },
  {
    "url": "scss/_variables.scss",
    "revision": "bcfb6ace77263f173d03b9df65adc305"
  },
  {
    "url": "scss/clean-blog.scss",
    "revision": "b0efac33b6c71c58f423fde1ae33caf0"
  },
  {
    "url": "vendor/bootstrap/css/bootstrap-grid.css",
    "revision": "c4cf38a1be22c3d8e660e00bd307c436"
  },
  {
    "url": "vendor/bootstrap/css/bootstrap-grid.min.css",
    "revision": "3654b807c094151ff379c873f462b1da"
  },
  {
    "url": "vendor/bootstrap/css/bootstrap-reboot.css",
    "revision": "a6cd05cb930cdf828abf6a6ae37e3821"
  },
  {
    "url": "vendor/bootstrap/css/bootstrap-reboot.min.css",
    "revision": "db63058f8ae01765f995eab3e7a3688d"
  },
  {
    "url": "vendor/bootstrap/css/bootstrap.css",
    "revision": "c496036354fa5512674ddd744e845edb"
  },
  {
    "url": "vendor/bootstrap/css/bootstrap.min.css",
    "revision": "8fe70898895271ddc62823321011273a"
  },
  {
    "url": "vendor/bootstrap/js/bootstrap.bundle.js",
    "revision": "bd1604da466f7535f07899082f104eec"
  },
  {
    "url": "vendor/bootstrap/js/bootstrap.bundle.min.js",
    "revision": "b41fe9374205bd087a4d4f0ab5a195be"
  },
  {
    "url": "vendor/bootstrap/js/bootstrap.js",
    "revision": "5e7d168ed3203dab385e83f97f98f725"
  },
  {
    "url": "vendor/bootstrap/js/bootstrap.min.js",
    "revision": "0a958254db529f99f475080fe2a6dcdb"
  },
  {
    "url": "vendor/fontawesome-free/css/all.css",
    "revision": "d097a65dea8ac13aaebc64e4b2621cf7"
  },
  {
    "url": "vendor/fontawesome-free/css/all.min.css",
    "revision": "75025fc21912338f3edf1525b374f23c"
  },
  {
    "url": "vendor/fontawesome-free/css/brands.css",
    "revision": "121b49132a527bcc9cd48aff577e34bd"
  },
  {
    "url": "vendor/fontawesome-free/css/brands.min.css",
    "revision": "1f1b220d86695c266723193e49f3f146"
  },
  {
    "url": "vendor/fontawesome-free/css/fontawesome.css",
    "revision": "b1fa86c10ea7da8185a8a091a9259c87"
  },
  {
    "url": "vendor/fontawesome-free/css/fontawesome.min.css",
    "revision": "150433d65c2dfcce7f6b3515a03ab7d6"
  },
  {
    "url": "vendor/fontawesome-free/css/regular.css",
    "revision": "ce540f27c6394f06074606a991e5b3e8"
  },
  {
    "url": "vendor/fontawesome-free/css/regular.min.css",
    "revision": "9da97e2bf8b7318f8e67aa16dca7f342"
  },
  {
    "url": "vendor/fontawesome-free/css/solid.css",
    "revision": "e08b68c8c0a6fde8527143f738ac9e9e"
  },
  {
    "url": "vendor/fontawesome-free/css/solid.min.css",
    "revision": "5a1d540df3a717c87cb6660280041686"
  },
  {
    "url": "vendor/fontawesome-free/css/svg-with-js.css",
    "revision": "81edf30f15dd105b468f2f37e2dbdbc9"
  },
  {
    "url": "vendor/fontawesome-free/css/svg-with-js.min.css",
    "revision": "07063e52b443c78161c0d13a214b050b"
  },
  {
    "url": "vendor/fontawesome-free/css/v4-shims.css",
    "revision": "5ba3378654a427881929cc0caa66d3c7"
  },
  {
    "url": "vendor/fontawesome-free/css/v4-shims.min.css",
    "revision": "b0b42da5e2053810a8699bd43d1f71b6"
  },
  {
    "url": "vendor/fontawesome-free/webfonts/fa-brands-400.eot",
    "revision": "14c590d124662eb50efa4c00f027b79c"
  },
  {
    "url": "vendor/fontawesome-free/webfonts/fa-brands-400.svg",
    "revision": "a5a8a66847a0fa86485fc5530a1fa6a9"
  },
  {
    "url": "vendor/fontawesome-free/webfonts/fa-brands-400.ttf",
    "revision": "5e8aa9ea0ebcd2218178f554cdd8e6b0"
  },
  {
    "url": "vendor/fontawesome-free/webfonts/fa-brands-400.woff",
    "revision": "df02c782834b113d605d8329368737b4"
  },
  {
    "url": "vendor/fontawesome-free/webfonts/fa-brands-400.woff2",
    "revision": "3e1b2a654a784ceb385157140b4ccd71"
  },
  {
    "url": "vendor/fontawesome-free/webfonts/fa-regular-400.eot",
    "revision": "aa66d0e0e38c75666e98db33abae955e"
  },
  {
    "url": "vendor/fontawesome-free/webfonts/fa-regular-400.svg",
    "revision": "88f0c5bd0da36b4a5d3cadbb793254cd"
  },
  {
    "url": "vendor/fontawesome-free/webfonts/fa-regular-400.ttf",
    "revision": "285a9d2a28886ad64c4e45cbd733cf7c"
  },
  {
    "url": "vendor/fontawesome-free/webfonts/fa-regular-400.woff",
    "revision": "5623624dd1b017c66c29d1ac69cdcfa3"
  },
  {
    "url": "vendor/fontawesome-free/webfonts/fa-regular-400.woff2",
    "revision": "ac21cac3f22cc9642f5af32e0c750797"
  },
  {
    "url": "vendor/fontawesome-free/webfonts/fa-solid-900.eot",
    "revision": "42e1fbd2cf655a0b44a2dfae9ca2f8c1"
  },
  {
    "url": "vendor/fontawesome-free/webfonts/fa-solid-900.svg",
    "revision": "6c36adff85a9daa51869d2ce16609c9f"
  },
  {
    "url": "vendor/fontawesome-free/webfonts/fa-solid-900.ttf",
    "revision": "896e20e26ad07dc63c9526ed814117e9"
  },
  {
    "url": "vendor/fontawesome-free/webfonts/fa-solid-900.woff",
    "revision": "3ded831d708bf90b2da86756551b5c1c"
  },
  {
    "url": "vendor/fontawesome-free/webfonts/fa-solid-900.woff2",
    "revision": "d6d8d5da9214dc7d46b297672a602d55"
  },
  {
    "url": "vendor/jquery/jquery.js",
    "revision": "320fa28debd36316365bb42ed6964314"
  },
  {
    "url": "vendor/jquery/jquery.min.js",
    "revision": "a6b6350ee94a3ea74595c065cbf58af0"
  },
  {
    "url": "vendor/jquery/jquery.slim.js",
    "revision": "b66f82bff95817faddf776d5cfacd5c5"
  },
  {
    "url": "vendor/jquery/jquery.slim.min.js",
    "revision": "50dc009b65de5def1626271a5117f970"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(
  /\.js$/,
  new workbox.strategies.CacheFirst()
 
);

workbox.routing.registerRoute(
  // Cache CSS files.
  /\.css$/,
  // Use cache but update in the background.
  new workbox.strategies.StaleWhileRevalidate({
    // Use a custom cache name.
    cacheName: 'css-cache',
  })
);

workbox.routing.registerRoute(
  // Cache image files.
  /\.(?:png|jpg|jpeg|svg|gif)$/,
  // Use the cache if it's available.
  new workbox.strategies.CacheFirst({
    // Use a custom cache name.
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.Plugin({
        // Cache only 20 images.
        maxEntries: 20,
        // Cache for a maximum of a week.
        maxAgeSeconds: 7 * 24 * 60 * 60,
      })
    ],
  })
);
