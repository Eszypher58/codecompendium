"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","681deede52f10b3b7728d3d0ad6da0b7"],["/static/css/main.046b975e.css","fab49611501f3645ffca0fd2cc8cd820"],["/static/js/main.84b91ca5.js","b408787edcdf9116899de849cdcc2b93"],["/static/media/add.34f39194.png","34f39194afa02f6c28dc3f85fbc4fec4"],["/static/media/angular.92fc45e8.png","92fc45e8b9c4533a08d5fc50179df594"],["/static/media/api.554b6783.png","554b67830a98a04531228423f884cc12"],["/static/media/bg.5b98b169.png","5b98b169b33c8197a1b0fc2bb543384a"],["/static/media/c++.d3ac5365.png","d3ac53657bd79d4afacb116da1289500"],["/static/media/col-angular.74d01ce6.png","74d01ce675330c080f3fbd9776fd56d2"],["/static/media/col-api.7db3d894.png","7db3d8949f69424409f117d3331589b2"],["/static/media/col-css.5d67a215.png","5d67a215d6e36fd1fd3796abaf5d26eb"],["/static/media/col-database.80d946bb.png","80d946bb0207d409957f97e09612ec23"],["/static/media/col-design.97df2803.png","97df2803062b6df91023820a26ce953f"],["/static/media/col-frameworks.c8f9a6ee.png","c8f9a6ee0cdda49a6829eb16d0b33b7a"],["/static/media/col-html.5954e928.png","5954e9287009d20d9e92870a0f00a27f"],["/static/media/col-jquery.b22e7829.png","b22e7829fc830cc85ea48f32d393f34a"],["/static/media/col-js.80e4fe53.png","80e4fe5307cdf315d6a51e6431db16fa"],["/static/media/col-node.525b73ba.png","525b73ba91bc9f45d4a8a0c65f2147c6"],["/static/media/col-npm.3b6b1211.png","3b6b1211a5b4c6a48a65ffc622c396cf"],["/static/media/col-react.9e2212d1.png","9e2212d18d4fdb9f85c076e2220fdbaa"],["/static/media/col-ruby.9e80cb8f.png","9e80cb8ff0700b9be7cf12fbd41dcc60"],["/static/media/css.cb2ee7bb.png","cb2ee7bb6af5aea3996a3ba7f5ffde57"],["/static/media/database.7008ae50.png","7008ae50f7beb9d203231c9f24b316b7"],["/static/media/design.fe695993.png","fe6959933b31222ec7c805ad60e08738"],["/static/media/html.6f4c4420.png","6f4c4420718b958c57f9af5870d839d4"],["/static/media/humor.222d48e9.png","222d48e97b0209728f09fd7b55366115"],["/static/media/javascript.c7f14068.png","c7f14068b966a331b06b2a47b02a18e8"],["/static/media/jobs.922fbe5f.png","922fbe5fabe774f4969edd9b2ec085ad"],["/static/media/jquery.94990bfe.png","94990bfeec9a3c58190b81951683250b"],["/static/media/logo.0842eebc.png","0842eebcc2812a0d2f1b9caf42d0d786"],["/static/media/misc.8dcbf33d.png","8dcbf33d183aee947b3c8bed838d241d"],["/static/media/nodejs.92848a1e.png","92848a1e15ec2edef5176187b7981aea"],["/static/media/python.69f4d01b.png","69f4d01b302ea924ee267320cedd5ded"],["/static/media/react.a6ef365c.png","a6ef365cb35abe183293065996e8e93d"],["/static/media/ruby.9436759d.png","9436759de77eeadb64064d493dac8aab"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});