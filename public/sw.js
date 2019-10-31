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
    "revision": "4b0d3d2e346f3158ec039ec77f3df605"
  },
  {
    "url": "css/clean-blog.min.css",
    "revision": "a102ab987e38e81ababd8d780e21a97e"
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
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
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
    "revision": "1d6912e06a4c09fee111cafd75ff9eee"
  },
  {
    "url": "js/clean-blog.js",
    "revision": "5c5da44b414001c67a91a5784fe4f011"
  },
  {
    "url": "js/clean-blog.min.js",
    "revision": "d1230cf41e89baaadb43a67156d56e57"
  },
  {
    "url": "js/contact_me.js",
    "revision": "57178cdd29a7fdb5debae95e4c62705d"
  },
  {
    "url": "js/jqBootstrapValidation.js",
    "revision": "f345fca5f823232e58cdd66252ed624f"
  },
  {
    "url": "manifest.json",
    "revision": "691ec55b0031460f367ff9940459bf6a"
  },
  {
    "url": "robots.txt",
    "revision": "b6216d61c03e6ce0c9aea6ca7808f7ca"
  },
  {
    "url": "scss/_bootstrap-overrides.scss",
    "revision": "2f7847d72bd7531d7a3c5429790431e2"
  },
  {
    "url": "scss/_contact.scss",
    "revision": "ffebf658e69b4b7bae634d60577d4c12"
  },
  {
    "url": "scss/_footer.scss",
    "revision": "2d22af81c0a73423b821a4c38108c1a9"
  },
  {
    "url": "scss/_global.scss",
    "revision": "dfa3a2222f205f9b76914177bf04bad5"
  },
  {
    "url": "scss/_masthead.scss",
    "revision": "1a32a393c801dd76ff1b9c6bae92212a"
  },
  {
    "url": "scss/_mixins.scss",
    "revision": "e3ffe6678db56b94a321e8b169fa85ce"
  },
  {
    "url": "scss/_navbar.scss",
    "revision": "71ecd6fc71d1e9a097418f66a029b1e7"
  },
  {
    "url": "scss/_post.scss",
    "revision": "44de5ecbe5a5cea41d8c54ac55c0fc59"
  },
  {
    "url": "scss/_variables.scss",
    "revision": "cec18be4c21c17b9ca1255018b3d8793"
  },
  {
    "url": "scss/clean-blog.scss",
    "revision": "2dc968167bf6b81997c73f327adc21cd"
  },
  {
    "url": "vendor/bootstrap/css/bootstrap-grid.css",
    "revision": "59e3488e09a8bc96de5884586f3c67ec"
  },
  {
    "url": "vendor/bootstrap/css/bootstrap-grid.min.css",
    "revision": "7aba9868c6ffadaf2c45d1bafe86d2c3"
  },
  {
    "url": "vendor/bootstrap/css/bootstrap-reboot.css",
    "revision": "b53d1eaf9daeab26f2772281ae060120"
  },
  {
    "url": "vendor/bootstrap/css/bootstrap-reboot.min.css",
    "revision": "220e4dc01283a9e9c5c146f984eb8934"
  },
  {
    "url": "vendor/bootstrap/css/bootstrap.css",
    "revision": "bd551f56ce2be3eba2812e605ab4f5b2"
  },
  {
    "url": "vendor/bootstrap/css/bootstrap.min.css",
    "revision": "a15c2ac3234aa8f6064ef9c1f7383c37"
  },
  {
    "url": "vendor/bootstrap/js/bootstrap.bundle.js",
    "revision": "a9247b1fe21ee409d0b37e74100de687"
  },
  {
    "url": "vendor/bootstrap/js/bootstrap.bundle.min.js",
    "revision": "a454220fc07088bf1fdd19313b6bfd50"
  },
  {
    "url": "vendor/bootstrap/js/bootstrap.js",
    "revision": "7f827fe484ec04346553202782b0664b"
  },
  {
    "url": "vendor/bootstrap/js/bootstrap.min.js",
    "revision": "e1d98d47689e00f8ecbc5d9f61bdb42e"
  },
  {
    "url": "vendor/fontawesome-free/css/all.css",
    "revision": "4cd5b86baba794f3e4f6e54b501f0b6e"
  },
  {
    "url": "vendor/fontawesome-free/css/all.min.css",
    "revision": "164a58dcca37a5b00c22e06ee8e2fc68"
  },
  {
    "url": "vendor/fontawesome-free/css/brands.css",
    "revision": "28ab16676debf5194d4a168ab7305611"
  },
  {
    "url": "vendor/fontawesome-free/css/brands.min.css",
    "revision": "27c105d6b1d79b59f9c59e0916d5251b"
  },
  {
    "url": "vendor/fontawesome-free/css/fontawesome.css",
    "revision": "f9696932582e4061778f0035eb8e8831"
  },
  {
    "url": "vendor/fontawesome-free/css/fontawesome.min.css",
    "revision": "df3b5091bcf015feb9f8dab2a8579ca9"
  },
  {
    "url": "vendor/fontawesome-free/css/regular.css",
    "revision": "2e526933cb77bfeab639228211e7887f"
  },
  {
    "url": "vendor/fontawesome-free/css/regular.min.css",
    "revision": "6b92c90246f17fbba6faf5d94e1f2aa9"
  },
  {
    "url": "vendor/fontawesome-free/css/solid.css",
    "revision": "d0a3f0ba3fe0c06e5471385f36ed244d"
  },
  {
    "url": "vendor/fontawesome-free/css/solid.min.css",
    "revision": "685230fe920360c8d423498ebe891455"
  },
  {
    "url": "vendor/fontawesome-free/css/svg-with-js.css",
    "revision": "ed43a369a56fecb6131bbebfc9f688f3"
  },
  {
    "url": "vendor/fontawesome-free/css/svg-with-js.min.css",
    "revision": "3b4cea40c72e186dd5fdea6e99195b88"
  },
  {
    "url": "vendor/fontawesome-free/css/v4-shims.css",
    "revision": "9062d26cf93b0264514b75c482f5b52d"
  },
  {
    "url": "vendor/fontawesome-free/css/v4-shims.min.css",
    "revision": "e0fe4a6191bf975ee1a105ea1cb4c41e"
  },
  {
    "url": "vendor/fontawesome-free/webfonts/fa-brands-400.eot",
    "revision": "14c590d124662eb50efa4c00f027b79c"
  },
  {
    "url": "vendor/fontawesome-free/webfonts/fa-brands-400.svg",
    "revision": "bfa9c38bd6081dafe7278dedc4aad1d9"
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
    "revision": "95f13e0be408d117bd3d9b366084a3ef"
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
    "revision": "6ed5e3bc9018d2a03e2f1fadbf8a0a4a"
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
    "revision": "11c05eb286ed576526bf4543760785b9"
  },
  {
    "url": "vendor/jquery/jquery.min.js",
    "revision": "220afd743d9e9643852e31a135a9f3ae"
  },
  {
    "url": "vendor/jquery/jquery.slim.js",
    "revision": "1a94b73b4b451a7872de5d76f57024e4"
  },
  {
    "url": "vendor/jquery/jquery.slim.min.js",
    "revision": "d9b11ca4d877c327889805b73bb79edd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
