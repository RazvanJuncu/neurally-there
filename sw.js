// Static/offline app shell. External learning resources and cloud data are not cached.
const CACHE = 'neurally-there-offline-v1';
const CORE = ['./','./index.html','./styles.css','./src/app.js','./src/content.js','./manifest.webmanifest','./assets/icon-192.png','./assets/icon-512.png','./assets/favicon.svg'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))),self.clients.claim()]));
});
self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
  event.respondWith(fetch(req).then(response=>{
    if(response.ok&&CORE.some(item=>new URL(item,self.registration.scope).pathname===new URL(req.url).pathname)){
      const cloned=response.clone();void caches.open(CACHE).then(cache=>cache.put(req,cloned));
    }
    return response;
  }).catch(()=>caches.match(req).then(hit=>hit|| (req.mode==='navigate'?caches.match('./index.html'):Response.error()))));
});
