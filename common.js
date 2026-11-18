/* Umumiy yordamchilar (index.html va admin.html uchun) */
(function () {
  'use strict';
  var K = window.SINF_KURS, D = K.darslar;
  var H = window.SH = {};
  H.esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  H.$ = function (s, r) { return (r || document).querySelector(s); };
  H.$$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  H.TOTAL = D.reduce(function (a, d) { return a + d.tasks.length; }, 0);
  H.lesson = function (n) { return D[n - 1]; };
  H.two = function (n) { return (n < 10 ? '0' : '') + n; };
  H.taskName = function (t) { return t === 'mini' ? 'Mini-loyiha' : (/^t\d+$/.test(t) ? (+t.slice(1)) + '-topshiriq' : t); };
  H.ago = function (ts) {
    if (!ts) return '—';
    var s = Math.max(0, Math.round((Date.now() - ts) / 1000));
    if (s < 60) return 'hozirgina';
    var m = Math.round(s / 60); if (m < 60) return m + ' daqiqa oldin';
    var h = Math.round(m / 60); if (h < 24) return h + ' soat oldin';
    var d = Math.round(h / 24); if (d < 30) return d + ' kun oldin';
    return new Date(ts).toLocaleDateString('uz-UZ');
  };
  H.dayKey = function (ts) { var d = new Date(ts); return d.getFullYear() + '-' + H.two(d.getMonth() + 1) + '-' + H.two(d.getDate()); };
  /* bitta dars bo'yicha */
  H.ls = function (p, n) {
    var L = ((p && p.lessons) || {})[n] || {}, def = D[n - 1], done = 0;
    def.tasks.forEach(function (t) { if (L.done && L.done[t]) done++; });
    var fails = 0; Object.keys(L.fails || {}).forEach(function (t) { fails += L.fails[t] || 0; });
    return { done: done, total: def.tasks.length, fails: fails, quiz: L.quiz || null, lastAt: L.lastAt || 0, doneMap: L.done || {}, failMap: L.fails || {} };
  };
  /* butun kurs bo'yicha */
  H.sum = function (p) {
    var o = { done: 0, fails: 0, lessons: 0, started: 0, quizSum: 0, quizN: 0, per: {} };
    D.forEach(function (d) {
      var s = H.ls(p, d.n); o.per[d.n] = s; o.done += s.done; o.fails += s.fails;
      if (s.done === s.total) o.lessons++; if (s.done > 0) o.started++;
      if (s.quiz) { o.quizSum += s.quiz.s / Math.max(1, s.quiz.n); o.quizN++; }
    });
    o.pct = Math.round(1000 * o.done / H.TOTAL) / 10;
    return o;
  };
  /* o'quvchi hozir qayerda */
  H.pos = function (p) {
    for (var i = 0; i < D.length; i++) {
      var d = D[i], s = H.ls(p, d.n);
      if (s.done < s.total) {
        var nxt = d.tasks.find(function (t) { return !s.doneMap[t]; });
        return { lesson: d.n, task: nxt, finished: false, label: d.n + '-dars · ' + H.taskName(nxt) };
      }
    }
    return { lesson: D.length, task: null, finished: true, label: 'Kursni tugatdi 🎉' };
  };
  H.theme = function () {
    var b = H.$('#theme'); if (!b) return;
    function paint() { b.textContent = document.documentElement.classList.contains('dark') ? '☀️ Kunduzgi' : '🌙 Tungi'; }
    b.onclick = function () { var d = document.documentElement.classList.toggle('dark'); try { localStorage.setItem('js-kurs-mavzu', d ? 'tungi' : 'kunduzgi'); } catch (e) {} paint(); };
    paint();
  };
  H.modal = function (html, onMount) {
    var bg = document.createElement('div'); bg.className = 'modal-bg';
    bg.innerHTML = '<div class="modal" role="dialog" aria-modal="true">' + html + '</div>';
    function close() { bg.remove(); document.removeEventListener('keydown', esc); }
    function esc(e) { if (e.key === 'Escape') close(); }
    bg.addEventListener('mousedown', function (e) { if (e.target === bg) close(); });
    document.addEventListener('keydown', esc);
    document.body.appendChild(bg);
    var f = bg.querySelector('input,select,textarea,button'); if (f) f.focus();
    if (onMount) onMount(bg.firstChild, close);
    return close;
  };
  H.pwModal = function () {
    H.modal('<h2>Parolni almashtirish</h2><label class="f">Joriy parol</label><input class="t" id="pw0" type="password" autocomplete="current-password"><label class="f">Yangi parol (kamida 6 belgi)</label><input class="t" id="pw1" type="password" autocomplete="new-password"><div id="pwe" class="err" hidden></div><div class="row" style="margin-top:18px;justify-content:flex-end"><button class="btn" id="pwx">Bekor</button><button class="btn pri" id="pws">Saqlash</button></div>',
      function (m, close) {
        H.$('#pwx', m).onclick = close;
        H.$('#pws', m).onclick = async function () {
          var e = H.$('#pwe', m); e.hidden = true;
          try { await SINF.changePassword(H.$('#pw0', m).value, H.$('#pw1', m).value); close(); alert('Parol almashtirildi.'); }
          catch (x) { e.textContent = x.message; e.hidden = false; }
        };
      });
  };
  H.csvEscape = function (v) { v = String(v == null ? '' : v); return /[",\n;]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; };
  H.download = function (name, text) {
    var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob(['﻿' + text], { type: 'text/csv;charset=utf-8' })); a.download = name; document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  };
})();
