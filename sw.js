if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const t=e=>n(e,l),c={module:{uri:l},exports:o,require:t};s[l]=Promise.all(i.map((e=>c[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-6cd28afd"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/apple-icon-180.2d412b4c.png",revision:null},{url:"assets/favicon-196.62234d57.png",revision:null},{url:"assets/index.0031c4bd.css",revision:null},{url:"assets/index.8681275d.js",revision:null},{url:"assets/lion.7d9bbd07.png",revision:null},{url:"assets/vendor.1c54d592.js",revision:null},{url:"index.html",revision:"ad26241ed8674b78ff543da9fdc452a2"},{url:"manifest.webmanifest",revision:"b9be2651038306256dccd2e84899c54d"},{url:"manifest-icon-192.maskable.png",revision:"5099fc0f9fcc6a3fca3d8eccd086013a"},{url:"manifest-icon-512.maskable.png",revision:"0e9c47215991974c3be68ca83fa49f05"},{url:"manifest.webmanifest",revision:"b9be2651038306256dccd2e84899c54d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
