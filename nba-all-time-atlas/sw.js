const CACHE='nba-atlas-shell-v29';
const CORE=['/','/manifest.webmanifest','/icon.svg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(async c=>{await c.addAll(CORE);try{await c.add(new URL('/players.json',self.location.origin).href);}catch(_){/* The page can still load online if the large data cache fails. */}}).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
 const u=new URL(e.request.url);
 if(e.request.method!=='GET'||u.origin!==location.origin)return;
 e.respondWith(fetch(e.request).then(async r=>{
  if(r.ok){const key=new Request(e.request.url,{method:'GET'});await caches.open(CACHE).then(c=>c.put(key,r.clone()));}
  return r;
 }).catch(()=>caches.match(e.request).then(r=>r||caches.match(new URL('/',self.location.origin).href))));
});
