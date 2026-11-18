/* Dars sahifasi eshigi: kirmagan o'quvchini login sahifasiga yo'naltiradi,
   bulutdagi progressni shu qurilmaga tushiradi, so'ng kurs skriptini ishga tushiradi. */
(function () {
  'use strict';
  var me = document.currentScript, next = me.getAttribute('data-next');
  var dark = false; try { dark = localStorage.getItem('js-kurs-mavzu') === 'tungi'; } catch (e) {}
  var cover = document.createElement('div');
  cover.id = 'sinf-cover';
  cover.style.cssText = 'position:fixed;inset:0;z-index:99999;display:grid;place-items:center;font:600 16px system-ui,sans-serif;background:' + (dark ? '#0f1115;color:#e8eaf0' : '#f7f8fb;color:#1c2330');
  cover.textContent = 'Yuklanmoqda…';
  document.documentElement.appendChild(cover);

  function load(src) { return new Promise(function (ok, no) { var s = document.createElement('script'); s.src = src; s.onload = ok; s.onerror = function () { no(new Error(src)); }; document.head.appendChild(s); }); }
  function ls(k, d) { try { var v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } }
  function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function two(n) { return (n < 10 ? '0' : '') + n; }

  Promise.all([load('sinf/config.js'), load('sinf/kurs-map.js')]).then(function () { return load('sinf/backend.js'); })
    .then(function () { return SINF.ready; })
    .then(async function (u) {
      if (!u) { location.replace('login.html?next=' + encodeURIComponent(location.pathname.split('/').pop() + location.search)); return; }
      window.SINF_USER = u;
      if (u.role === 'student') {
        // boshqa o'quvchi shu kompyuterda ishlagan bo'lsa — uning mahalliy natijalarini tozalaymiz
        var owner = ls('sinf-owner', null);
        if (owner !== u.uid) {
          try { Object.keys(localStorage).forEach(function (k) { if (/^python-kurs-/.test(k)) localStorage.removeItem(k); }); } catch (e) {}
          lsSet('sinf-owner', u.uid);
        }
        try {
          var p = await SINF.getMyProgress(), lessons = p.lessons || {};
          // bulut -> mahalliy
          Object.keys(lessons).forEach(function (n) {
            var key = 'python-kurs-d' + two(+n), cur = ls(key, {}) || {}, dn = (lessons[n] && lessons[n].done) || {};
            Object.keys(dn).forEach(function (t) { cur[t] = true; });
            lsSet(key, cur);
          });
          // mahalliy -> bulut (tizimdan oldin bajarilganlar)
          var num = (window.DARS_META && DARS_META.num) || 0;
          if (num) {
            var loc = ls('python-kurs-d' + two(num), {}) || {}, cd = ((lessons[num] || {}).done) || {}, total = (SINF_KURS.darslar[num - 1] || { tasks: [] }).tasks.length;
            Object.keys(loc).forEach(function (t) { if (loc[t] && !cd[t]) SINF.hook.done(num, t, total); });
          }
        } catch (e) { /* internet yo'q bo'lsa ham dars ishlayveradi */ }
        if (window.DARS_META) { try { SINF.hook.visit(DARS_META.num, 'ochildi'); } catch (e) {} }
      }
      mountBar(u);
      cover.remove();
      if (next) await load(next);
    })
    .catch(function (e) { cover.textContent = 'Xatolik: ' + (e && e.message || e) + '. Sahifani yangilang.'; });

  function mountBar(u) {
    var b = document.createElement('div');
    b.style.cssText = 'position:fixed;right:12px;bottom:12px;z-index:9000;display:flex;gap:8px;align-items:center;background:rgba(20,24,32,.92);color:#fff;padding:7px 8px 7px 12px;border-radius:99px;font:600 12.5px system-ui,sans-serif;box-shadow:0 4px 16px rgba(0,0,0,.25)';
    var t = document.createElement('span'); t.textContent = '👤 ' + u.name + (u.groupName ? ' · ' + u.groupName : '') + (SINF.mode === 'demo' ? ' · DEMO' : '');
    var a = document.createElement('a'); a.textContent = u.role === 'admin' ? 'Panel' : 'Darslar'; a.href = u.role === 'admin' ? 'admin.html' : 'index.html'; a.style.cssText = 'color:#fff;background:rgba(255,255,255,.16);padding:4px 10px;border-radius:99px;text-decoration:none';
    var o = document.createElement('button'); o.type = 'button'; o.textContent = 'Chiqish'; o.style.cssText = 'font:inherit;color:#fff;background:rgba(255,255,255,.16);border:0;padding:4px 10px;border-radius:99px;cursor:pointer';
    o.onclick = async function () { try { await SINF.flush(); } catch (e) {} await SINF.logout(); location.href = 'login.html'; };
    b.appendChild(t); b.appendChild(a); b.appendChild(o); document.body.appendChild(b);
  }
})();
