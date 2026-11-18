/* =====================================================================
   SINF — kirish, progress va guruhlar qatlami.
   Ikki rejim:  1) Firebase (haqiqiy, hamma qurilmada umumiy)
                2) DEMO (faqat shu brauzerda, sinash uchun) — config.js bo'sh bo'lsa
   Ikkalasi bir xil API beradi:  window.SINF
   ===================================================================== */
(function () {
  'use strict';
  var C = window.SINF_CONFIG || {};
  var FBC = C.firebase || {};
  var FB = !!(FBC.apiKey && FBC.projectId);
  var DOMAIN = (C.emailDomain || 'sinf.uz').toLowerCase();
  var SDK = 'https://www.gstatic.com/firebasejs/10.12.2/';

  /* ---------- yordamchilar ---------- */
  function cleanLogin(l) { return String(l || '').trim().toLowerCase(); }
  function checkLogin(l) {
    if (!/^[a-z0-9._-]{3,30}$/.test(l)) throw new Error("Login 3–30 belgi bo'lsin: faqat lotin harflari (a–z), raqam, nuqta, pastki chiziq yoki tire. Bo'shliq mumkin emas.");
  }
  function checkPass(p) { if (String(p || '').length < 6) throw new Error("Parol kamida 6 belgidan iborat bo'lsin."); }
  function toEmail(l) { return l + '@' + DOMAIN; }
  function ls(k, d) { try { var v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } }
  function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function lsDel(k) { try { localStorage.removeItem(k); } catch (e) {} }
  function uid8() { return 'u' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4); }
  function fail(m) { return new Error(m); }
  function nice(e) {
    var c = (e && e.code) || '', m = (e && e.message) || String(e);
    if (/invalid-credential|user-not-found|wrong-password|invalid-login/.test(c)) return "Login yoki parol noto'g'ri.";
    if (/too-many-requests/.test(c)) return "Juda ko'p urinish bo'ldi. Bir necha daqiqadan keyin qayta urinib ko'ring.";
    if (/email-already-in-use/.test(c)) return "Bu login band. Boshqa login tanlang.";
    if (/weak-password/.test(c)) return "Parol juda oddiy (kamida 6 belgi).";
    if (/network-request-failed/.test(c)) return "Internet bilan aloqa yo'q.";
    if (/permission-denied/.test(c)) return "Ruxsat yo'q (Firestore qoidalari to'g'ri joylanganini tekshiring).";
    if (/operation-not-allowed/.test(c)) return "Firebase'da «Email/Password» kirish usuli yoqilmagan (Authentication → Sign-in method).";
    if (/requires-recent-login/.test(c)) return "Xavfsizlik uchun qaytadan kiring va yana urinib ko'ring.";
    return m;
  }

  /* ---------- hodisalar navbati (ikkala rejim uchun umumiy) ---------- */
  var Q = [], flushT = null, lastVisitSent = 0;
  function qKey() { return 'sinf-q-' + (S.user ? S.user.uid : '-'); }
  function enqueue(ev) {
    ev.at = Date.now(); Q.push(ev);
    lsSet(qKey(), Q);
    clearTimeout(flushT); flushT = setTimeout(flush, ev.k === 'visit' ? 2500 : 600);
  }
  // hodisalar ro'yxatini yagona "yamoq"ga aylantirish
  function collapse(evs) {
    var P = { lessons: {}, inc: {}, last: null };
    evs.forEach(function (e) {
      var L = P.lessons[e.l] = P.lessons[e.l] || { done: {}, quiz: null, total: 0, lastAt: 0 };
      if (e.total) L.total = e.total;
      L.lastAt = Math.max(L.lastAt, e.at);
      if (e.k === 'done') L.done[e.t] = e.at;
      if (e.k === 'fail') { var kk = e.l + '|' + e.t; P.inc[kk] = (P.inc[kk] || 0) + 1; }
      if (e.k === 'quiz') L.quiz = { s: e.s, n: e.n, at: e.at };
      if (e.k === 'visit' || e.k === 'done' || e.k === 'fail') P.last = { lesson: e.l, key: e.t, at: e.at };
    });
    return P;
  }
  var flushing = false;
  async function flush() {
    if (flushing || !Q.length || !S.user || S.user.role === 'admin') return;
    flushing = true;
    var batch = Q.slice();
    try { await S._write(collapse(batch)); Q = Q.slice(batch.length); lsSet(qKey(), Q); }
    catch (e) { /* tarmoq yo'q — navbatda qoladi, keyinroq qayta uriniladi */ clearTimeout(flushT); flushT = setTimeout(flush, 20000); }
    flushing = false;
    if (Q.length && !flushT) flushT = setTimeout(flush, 800);
  }
  window.addEventListener('pagehide', function () { if (Q.length) flush(); });
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden' && Q.length) flush(); });

  /* ---------- umumiy obyekt ---------- */
  var S = window.SINF = {
    mode: FB ? 'firebase' : 'demo', user: null, config: C,
    login: null, logout: null, ready: null,
    hook: {
      done: function (l, t, total) { enqueue({ k: 'done', l: l, t: t, total: total }); },
      fail: function (l, t, total) { enqueue({ k: 'fail', l: l, t: t, total: total }); },
      visit: function (l, t) { if (Date.now() - lastVisitSent < 2000) { Q = Q.filter(function (e) { return e.k !== 'visit'; }); } lastVisitSent = Date.now(); enqueue({ k: 'visit', l: l, t: t }); },
      quiz: function (l, s, n) { enqueue({ k: 'quiz', l: l, s: s, n: n }); }
    },
    flush: flush,
    cleanLogin: cleanLogin, nice: nice
  };
  window.SINF_HOOK = S.hook;

  /* =====================================================================
     DEMO REJIMI (localStorage)
     ===================================================================== */
  function demoImpl() {
    var KEY = 'sinf-demo-db', SESS = 'sinf-demo-sess';
    function db() { return ls(KEY, null) || { users: {}, groups: {}, progress: {}, setup: false }; }
    function put(d) { lsSet(KEY, d); }
    function prof(u) { var d = db(), g = u.groupId && d.groups[u.groupId]; return { uid: u.uid, login: u.login, name: u.name, role: u.role, groupId: u.groupId || null, groupName: g ? g.name : '', active: u.active !== false }; }
    S.ready = (async function () {
      var id = ls(SESS, null), d = db();
      if (id && d.users[id] && d.users[id].active !== false) { S.user = prof(d.users[id]); }
      Q = ls(qKey(), []) || [];
      return S.user;
    })();
    S.login = async function (l, p) {
      l = cleanLogin(l); var d = db(), u = Object.keys(d.users).map(function (k) { return d.users[k]; }).find(function (x) { return x.login === l; });
      if (!u || u.password !== p) throw fail("Login yoki parol noto'g'ri.");
      if (u.active === false) throw fail("Bu akkaunt o'chirilgan. O'qituvchingizga murojaat qiling.");
      lsSet(SESS, u.uid); S.user = prof(u); Q = ls(qKey(), []) || []; return S.user;
    };
    S.logout = async function () { lsDel(SESS); S.user = null; };
    S.changePassword = async function (oldP, newP) {
      checkPass(newP); var d = db(), u = d.users[S.user.uid];
      if (u.password !== oldP) throw fail("Joriy parol noto'g'ri.");
      u.password = newP; put(d);
    };
    S.setupOpen = async function () { return !db().setup; };
    S.setupAdmin = async function (l, p, name) {
      l = cleanLogin(l); checkLogin(l); checkPass(p);
      var d = db(); if (d.setup) throw fail("Administrator allaqachon yaratilgan.");
      var id = uid8(); d.users[id] = { uid: id, login: l, name: name || l, role: 'admin', password: p, active: true, createdAt: Date.now() };
      d.setup = true; put(d); lsSet(SESS, id); S.user = prof(d.users[id]); return S.user;
    };
    S._write = async function (P) {
      var d = db(), pr = d.progress[S.user.uid]; if (!pr) return;
      pr.lessons = pr.lessons || {};
      Object.keys(P.lessons).forEach(function (l) {
        var a = P.lessons[l], b = pr.lessons[l] = pr.lessons[l] || { done: {}, fails: {} };
        b.done = b.done || {}; b.fails = b.fails || {};
        if (a.total) b.total = a.total; b.lastAt = a.lastAt;
        Object.keys(a.done).forEach(function (t) { b.done[t] = a.done[t]; });
        if (a.quiz) b.quiz = a.quiz;
      });
      Object.keys(P.inc).forEach(function (k) { var x = k.split('|'); var b = pr.lessons[x[0]] = pr.lessons[x[0]] || { done: {}, fails: {} }; b.fails = b.fails || {}; b.fails[x[1]] = (b.fails[x[1]] || 0) + P.inc[k]; });
      if (P.last) pr.last = P.last; pr.updatedAt = Date.now(); put(d);
    };
    S.getMyProgress = async function () { var p = db().progress[S.user.uid]; return p ? JSON.parse(JSON.stringify(p)) : { lessons: {} }; };
    // --- admin ---
    S.listGroups = async function () { var d = db(); return Object.keys(d.groups).map(function (k) { return d.groups[k]; }).sort(function (a, b) { return a.name.localeCompare(b.name); }); };
    S.addGroup = async function (name) { name = String(name || '').trim(); if (!name) throw fail('Guruh nomini yozing.'); var d = db(), id = uid8(); d.groups[id] = { id: id, name: name, createdAt: Date.now() }; put(d); return d.groups[id]; };
    S.renameGroup = async function (id, name) { var d = db(); d.groups[id].name = String(name).trim(); put(d); };
    S.removeGroup = async function (id) {
      var d = db(); var n = Object.keys(d.users).filter(function (k) { return d.users[k].groupId === id; }).length;
      if (n) throw fail("Guruhda " + n + " ta o'quvchi bor. Avval ularni boshqa guruhga ko'chiring.");
      delete d.groups[id]; put(d);
    };
    S.listUsers = async function () { var d = db(); return Object.keys(d.users).map(function (k) { var u = prof(d.users[k]); u.createdAt = d.users[k].createdAt; return u; }); };
    S.addUser = async function (o) {
      var l = cleanLogin(o.login); checkLogin(l); checkPass(o.password);
      var d = db(); if (Object.keys(d.users).some(function (k) { return d.users[k].login === l; })) throw fail('Bu login band: ' + l);
      var id = uid8(), role = o.role === 'admin' ? 'admin' : 'student';
      d.users[id] = { uid: id, login: l, name: o.name || l, role: role, groupId: role === 'student' ? (o.groupId || null) : null, password: o.password, active: true, createdAt: Date.now() };
      if (role === 'student') d.progress[id] = { uid: id, login: l, name: o.name || l, groupId: o.groupId || null, lessons: {}, updatedAt: Date.now() };
      put(d); return prof(d.users[id]);
    };
    S.editUser = async function (id, o) {
      var d = db(), u = d.users[id]; if (o.name != null) u.name = o.name; if (o.groupId !== undefined) u.groupId = o.groupId; if (o.active != null) u.active = o.active;
      if (d.progress[id]) { d.progress[id].name = u.name; d.progress[id].groupId = u.groupId; } put(d);
    };
    S.moveProgress = async function (fromUid, toUid) { var d = db(); if (d.progress[fromUid] && d.progress[toUid]) { var keep = { uid: toUid, login: d.progress[toUid].login, name: d.progress[toUid].name, groupId: d.progress[toUid].groupId }; d.progress[toUid] = Object.assign({}, d.progress[fromUid], keep); put(d); } };
    S.listProgress = async function () { var d = db(); return Object.keys(d.progress).map(function (k) { return JSON.parse(JSON.stringify(d.progress[k])); }); };
    S.resetProgress = async function (id) { var d = db(); if (d.progress[id]) { d.progress[id].lessons = {}; delete d.progress[id].last; put(d); } };
  }

  /* =====================================================================
     FIREBASE REJIMI
     ===================================================================== */
  function firebaseImpl() {
    var A, Au, F, app, auth, db, ready;
    function boot() {
      if (ready) return ready;
      ready = (async function () {
        var m = await Promise.all([import(SDK + 'firebase-app.js'), import(SDK + 'firebase-auth.js'), import(SDK + 'firebase-firestore.js')]);
        A = m[0]; Au = m[1]; F = m[2];
        app = A.initializeApp(FBC); auth = Au.getAuth(app); db = F.getFirestore(app);
      })();
      return ready;
    }
    async function loadProfile(fu) {
      var snap = await F.getDoc(F.doc(db, 'users', fu.uid));
      if (!snap.exists()) { await Au.signOut(auth); return null; }
      var u = snap.data(); if (u.active === false) { await Au.signOut(auth); return null; }
      var gname = '';
      if (u.groupId) { try { var g = await F.getDoc(F.doc(db, 'groups', u.groupId)); if (g.exists()) gname = g.data().name; } catch (e) {} }
      return { uid: fu.uid, login: u.login, name: u.name, role: u.role, groupId: u.groupId || null, groupName: gname, active: true };
    }
    S.ready = (async function () {
      await boot();
      var fu = await new Promise(function (res) { var off = Au.onAuthStateChanged(auth, function (x) { off(); res(x); }); });
      if (fu) { try { S.user = await loadProfile(fu); } catch (e) { S.user = null; } }
      Q = ls(qKey(), []) || [];
      return S.user;
    })();
    S.login = async function (l, p) {
      await boot(); l = cleanLogin(l);
      try { var c = await Au.signInWithEmailAndPassword(auth, toEmail(l), p); } catch (e) { throw fail(nice(e)); }
      var u = await loadProfile(c.user);
      if (!u) throw fail("Bu akkaunt faol emas yoki o'chirilgan. O'qituvchingizga murojaat qiling.");
      S.user = u; Q = ls(qKey(), []) || []; return u;
    };
    S.logout = async function () { await boot(); await Au.signOut(auth); S.user = null; };
    S.changePassword = async function (oldP, newP) {
      checkPass(newP); await boot();
      try {
        var cred = Au.EmailAuthProvider.credential(auth.currentUser.email, oldP);
        await Au.reauthenticateWithCredential(auth.currentUser, cred);
        await Au.updatePassword(auth.currentUser, newP);
      } catch (e) { throw fail(/invalid-credential|wrong-password/.test(e.code || '') ? "Joriy parol noto'g'ri." : nice(e)); }
    };
    S.setupOpen = async function () {
      await boot();
      try { var s = await F.getDoc(F.doc(db, 'config', 'setup')); return !s.exists(); }
      catch (e) { throw fail(nice(e)); }
    };
    S.setupAdmin = async function (l, p, name) {
      await boot(); l = cleanLogin(l); checkLogin(l); checkPass(p);
      if (!(await S.setupOpen())) throw fail("Administrator allaqachon yaratilgan. Shu login bilan kiring.");
      var c;
      try { c = await Au.createUserWithEmailAndPassword(auth, toEmail(l), p); } catch (e) { throw fail(nice(e)); }
      var b = F.writeBatch(db), now = Date.now();
      b.set(F.doc(db, 'users', c.user.uid), { uid: c.user.uid, login: l, name: name || l, role: 'admin', active: true, createdAt: now });
      b.set(F.doc(db, 'config', 'setup'), { by: c.user.uid, at: now });
      try { await b.commit(); } catch (e) { try { await Au.deleteUser(c.user); } catch (e2) {} throw fail(nice(e)); }
      S.user = { uid: c.user.uid, login: l, name: name || l, role: 'admin', groupId: null, groupName: '', active: true };
      return S.user;
    };
    S._write = async function (P) {
      var patch = { updatedAt: Date.now(), lessons: {} };
      Object.keys(P.lessons).forEach(function (l) {
        var a = P.lessons[l], o = { lastAt: a.lastAt };
        if (a.total) o.total = a.total;
        if (Object.keys(a.done).length) o.done = a.done;
        if (a.quiz) o.quiz = a.quiz;
        patch.lessons[l] = o;
      });
      Object.keys(P.inc).forEach(function (k) {
        var x = k.split('|'); var o = patch.lessons[x[0]] = patch.lessons[x[0]] || {};
        o.fails = o.fails || {}; o.fails[x[1]] = F.increment(P.inc[k]);
      });
      if (P.last) patch.last = P.last;
      var ref = F.doc(db, 'progress_python', S.user.uid);
      try { await F.setDoc(ref, patch, { merge: true }); }
      catch (e) { throw e; }
    };
    S.getMyProgress = async function () {
      await boot(); var s = await F.getDoc(F.doc(db, 'progress_python', S.user.uid));
      return s.exists() ? s.data() : { lessons: {} };
    };
    // --- admin ---
    S.listGroups = async function () {
      await boot(); var s = await F.getDocs(F.collection(db, 'groups'));
      return s.docs.map(function (d) { return Object.assign({ id: d.id }, d.data()); }).sort(function (a, b) { return a.name.localeCompare(b.name); });
    };
    S.addGroup = async function (name) {
      await boot(); name = String(name || '').trim(); if (!name) throw fail('Guruh nomini yozing.');
      var r = F.doc(F.collection(db, 'groups')); var o = { id: r.id, name: name, createdAt: Date.now() };
      try { await F.setDoc(r, o); } catch (e) { throw fail(nice(e)); } return o;
    };
    S.renameGroup = async function (id, name) { await boot(); await F.updateDoc(F.doc(db, 'groups', id), { name: String(name).trim() }); };
    S.removeGroup = async function (id) {
      await boot();
      var s = await F.getDocs(F.query(F.collection(db, 'users'), F.where('groupId', '==', id)));
      if (s.size) throw fail("Guruhda " + s.size + " ta o'quvchi bor. Avval ularni boshqa guruhga ko'chiring.");
      await F.deleteDoc(F.doc(db, 'groups', id));
    };
    S.listUsers = async function () {
      await boot(); var s = await F.getDocs(F.collection(db, 'users'));
      return s.docs.map(function (d) { var u = d.data(); return { uid: d.id, login: u.login, name: u.name, role: u.role, groupId: u.groupId || null, active: u.active !== false, createdAt: u.createdAt }; });
    };
    S.addUser = async function (o) {
      await boot(); var l = cleanLogin(o.login); checkLogin(l); checkPass(o.password);
      var role = o.role === 'admin' ? 'admin' : 'student';
      // ikkinchi (vaqtincha) ilova: admin o'z sessiyasidan chiqib ketmasligi uchun
      var sec = A.initializeApp(FBC, 'sec-' + Date.now() + Math.random().toString(36).slice(2, 6)), sa = Au.getAuth(sec), id;
      try {
        try { var c = await Au.createUserWithEmailAndPassword(sa, toEmail(l), o.password); id = c.user.uid; }
        catch (e) { throw fail(/email-already-in-use/.test(e.code || '') ? 'Bu login band: ' + l : nice(e)); }
        await Au.signOut(sa);
      } finally { try { await A.deleteApp(sec); } catch (e) {} }
      var now = Date.now(), b = F.writeBatch(db), gid = role === 'student' ? (o.groupId || null) : null;
      b.set(F.doc(db, 'users', id), { uid: id, login: l, name: o.name || l, role: role, groupId: gid, active: true, createdAt: now });
      if (role === 'student') b.set(F.doc(db, 'progress_python', id), { uid: id, login: l, name: o.name || l, groupId: gid, lessons: {}, updatedAt: now });
      try { await b.commit(); } catch (e) { throw fail(nice(e)); }
      return { uid: id, login: l, name: o.name || l, role: role, groupId: gid, active: true };
    };
    S.editUser = async function (id, o) {
      await boot(); var u = {}, p = {};
      if (o.name != null) { u.name = o.name; p.name = o.name; }
      if (o.groupId !== undefined) { u.groupId = o.groupId; p.groupId = o.groupId; }
      if (o.active != null) u.active = o.active;
      var b = F.writeBatch(db); b.update(F.doc(db, 'users', id), u);
      if (Object.keys(p).length) b.set(F.doc(db, 'progress_python', id), p, { merge: true });
      await b.commit();
    };
    S.moveProgress = async function (fromUid, toUid) {
      await boot(); var s = await F.getDoc(F.doc(db, 'progress_python', fromUid)); if (!s.exists()) return;
      var d = s.data(); delete d.uid; delete d.login; delete d.name; delete d.groupId;
      await F.setDoc(F.doc(db, 'progress_python', toUid), d, { merge: true });
    };
    S.listProgress = async function () {
      await boot(); var s = await F.getDocs(F.collection(db, 'progress_python'));
      return s.docs.map(function (d) { return Object.assign({ uid: d.id }, d.data()); });
    };
    S.resetProgress = async function (id) {
      await boot(); await F.setDoc(F.doc(db, 'progress_python', id), { lessons: F.deleteField(), last: F.deleteField(), updatedAt: Date.now() }, { merge: true });
    };
  }

  if (FB) firebaseImpl(); else demoImpl();
  // navbatni sahifa ochilganda yuborib qo'yish
  S.ready.then(function (u) { if (u && Q.length) flush(); });
})();
