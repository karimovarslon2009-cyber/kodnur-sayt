/* Al Xorazmiy — umumiy: ikonkalar, yuqori panel, mavzu, yordamchilar */
(function(){
  /* ---------- SVG ikonkalar (24x24, stroke) ---------- */
  var P = {
    code:'<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    terminal:'<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>',
    braces:'<path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1"/><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/>',
    globe:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    server:'<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>',
    layout:'<rect x="3" y="3" width="18" height="7" rx="1"/><rect x="3" y="14" width="9" height="7" rx="1"/><rect x="16" y="14" width="5" height="7" rx="1"/>',
    database:'<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>',
    bot:'<rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8.01" y2="16"/><line x1="16" y1="16" x2="16.01" y2="16"/>',
    palette:'<circle cx="13.5" cy="6.5" r=".6"/><circle cx="17.5" cy="10.5" r=".6"/><circle cx="8.5" cy="7.5" r=".6"/><circle cx="6.5" cy="12.5" r=".6"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.65-.75 1.65-1.69 0-.44-.18-.84-.44-1.13-.29-.29-.44-.65-.44-1.13a1.64 1.64 0 0 1 1.67-1.67h2c3.05 0 5.55-2.5 5.55-5.55C21.97 6.01 17.46 2 12 2z"/>',
    git:'<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',
    phone:'<rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>',
    cpu:'<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>',
    book:'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    check:'<polyline points="20 6 9 17 4 12"/>',
    checkc:'<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
    xc:'<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>',
    lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    unlock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>',
    user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
    moon:'<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
    right:'<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
    left:'<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
    trophy:'<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>',
    target:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',
    key:'<circle cx="7.5" cy="15.5" r="4.5"/><path d="M10.7 12.3 21 2"/><path d="m16 7 3 3"/>',
    panel:'<rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/>',
    clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    layers:'<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
    save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>',
    lightbulb:'<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
    list:'<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>',
    chart:'<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
    hourglass:'<path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.17a2 2 0 0 0-.59-1.42L12 12l-4.41 4.41A2 2 0 0 0 7 17.83V22"/><path d="M7 2v4.17a2 2 0 0 0 .59 1.42L12 12l4.41-4.41A2 2 0 0 0 17 6.17V2"/>'
  };
  var IK = window.IK = {
    svg:function(n,s,cls){
      s = s || 20;
      return '<svg class="i'+(cls?' '+cls:'')+'" width="'+s+'" height="'+s+'" viewBox="0 0 24 24" aria-hidden="true">'+(P[n]||P.code)+'</svg>';
    }
  };

  /* Brend belgisi: Xorazm ornamenti — ikki kvadratdan sakkiz uchli yulduz + >_ */
  var MARK = '<svg width="38" height="38" viewBox="0 0 32 32" aria-hidden="true">'+
    '<rect x="5" y="5" width="22" height="22" rx="3" fill="currentColor"/>'+
    '<rect x="5" y="5" width="22" height="22" rx="3" fill="currentColor" transform="rotate(45 16 16)"/>'+
    '<path d="M12.5 12.5 16.5 16 12.5 19.5M17.5 20h3" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  /* Kurs -> ikonka (id yoki nomi bo'yicha) */
  var RULES = [
    [/python/,'terminal'],[/javascript|typescript|\bjs\b|node|react|vue/,'braces'],
    [/backend|django|flask|fastapi|\bapi\b|server/,'server'],
    [/frontend|html|css|veb|\bweb\b/,'layout'],
    [/sql|baza|database|postgres|mysql/,'database'],
    [/bot|telegram/,'bot'],[/dizayn|design|\bux\b|\bui\b|figma/,'palette'],
    [/git|devops|docker|ci\/cd|cicd/,'git'],
    [/mobil|android|ios|flutter|kotlin|swift/,'phone'],
    [/\bai\b|sun'iy|machine|\bml\b|data ?sci|tahlil/,'cpu'],
    [/ingliz|english|\bil\b/,'book'],[/mat/,'layers']
  ];
  function kname(c){
    var t = ((c.id||'')+' '+(c.nom||'')).toLowerCase();
    for(var i=0;i<RULES.length;i++) if(RULES[i][0].test(t)) return RULES[i][1];
    return 'code';
  }

  var PARTS=[
    {t:"1-bo'lim. Asoslar",d:"print va input, o'zgaruvchilar, matn, shartlar va sikllar. Birinchi konsol o'yinlari.",a:1,b:7},
    {t:"2-bo'lim. Ma'lumot tuzilmalari",d:"Ro'yxat, tuple, set, lug'at va comprehension. Baholar jurnali loyihasi.",a:8,b:12},
    {t:"3-bo'lim. Funksiyalar va kod tuzilishi",d:"Funksiyalar, xatolar bilan ishlash, modullar, algoritmik fikrlash. Matn tahlilchisi.",a:13,b:18},
    {t:"4-bo'lim. Fayllar va ma'lumotlar",d:"Fayllar, CSV va JSON, sana-vaqt, regex. Xarajatlar hisobchisi.",a:19,b:22},
    {t:"5-bo'lim. OOP",d:"Sinflar, meros, maxsus metodlar, property va dataclass. Kutubxona tizimi.",a:23,b:26},
    {t:"6-bo'lim. Professional Python",d:"Generator, dekorator, type hints, testlash, SQLite va API.",a:27,b:30},
    {t:"7-bo'lim. Yakuniy loyiha",d:"«Xorazm Market» do'kon tizimi: ma'lumotlar bazasi, buyurtmalar, hisobotlar va kompyuterga ko'chirish.",a:31,b:32}
  ];

  /* ---------- Mavzu ---------- */
  function isDark(){ return document.documentElement.classList.contains('dark'); }
  function paintTheme(){
    var b = document.getElementById('theme'); if(!b) return;
    var d = isDark();
    b.innerHTML = IK.svg(d?'sun':'moon',18);
    var lbl = d ? 'Kunduzgi rejim' : 'Tungi rejim';
    b.title = lbl;
    b.setAttribute('aria-label', lbl);
  }
  function toggleTheme(){
    var d = !isDark();
    document.documentElement.classList.toggle('dark', d);
    try{ localStorage.setItem('js-kurs-mavzu', d?'tungi':'kunduzgi'); }catch(e){}
    paintTheme();
  }

  /* ---------- Yuqori panel ---------- */
  function nav(active){
    var L=[['darslar','index.html','Darslar'],['kurslar','index.html#kurslar','Kurslar'],['natijalar','natijalar.html','Natijalar']];
    return L.map(function(x){
      return '<a href="'+x[1]+'"'+(x[0]===active?' class="on" aria-current="page"':'')+'>'+x[2]+'</a>';
    }).join('');
  }
  var YN = window.YN = {
    PARTS: PARTS,
    kname: kname,
    /* Kurslar ro'yxati: kurslar.js bo'lmasa, faqat Python kursi ko'rsatiladi */
    courses: function(){
      var K = window.KURSLAR;
      if(K && K.length) return K;
      var d = (window.SINF_KURS && SINF_KURS.darslar) ? SINF_KURS.darslar.length : 32;
      return [{id:'python', nom:(window.SINF_KURS && SINF_KURS.nom) || 'Python — amaliy kurs',
        tavsif:"Noldan boshlab funksiyalar, fayllar, OOP, ma'lumotlar bazasi, API va yakuniy do'kon loyihasigacha.",
        daraja:"Boshlang'ich", darslar:d, holat:'tayyor', rang:'#0f766e'}];
    },
    kicon: function(c,s){ return IK.svg(kname(c), s||26); },
    ring: function(pct,size){
      var r=54, C=2*Math.PI*r;
      return '<svg viewBox="0 0 120 120" aria-hidden="true"><circle class="tr" cx="60" cy="60" r="'+r+'" fill="none" stroke-width="9"/>'+
        '<circle class="pg" cx="60" cy="60" r="'+r+'" fill="none" stroke-width="9" stroke-linecap="round" stroke-dasharray="'+C+'" stroke-dashoffset="'+C+'" data-to="'+(C*(1-pct/100))+'"/></svg>';
    },
    animateRing: function(root){
      var el = root.querySelector('.pg'); if(!el) return;
      requestAnimationFrame(function(){ requestAnimationFrame(function(){ el.style.strokeDashoffset = el.getAttribute('data-to'); }); });
    },
    /* Sinf: eski dars sahifalari bilan bir xil sarlavha, ammo yangi ko'rinish. Skript <body> ichida chaqiriladi. */
    header: function(active){
      document.write(
        '<header class="top"><div class="top-in">'+
        '<a class="brand" href="index.html"><span class="mark">'+MARK+'</span>'+
          '<span class="b-txt"><b data-brend="markaz">Al Xorazmiy</b><span data-brend="kurs">Python — noldan real loyihagacha</span></span></a>'+
        '<nav class="nav" aria-label="Asosiy">'+nav(active)+'</nav>'+
        '<div class="right">'+
          '<span class="pill" id="who" hidden></span><span class="pill demo" id="demo" hidden>DEMO</span>'+
          '<button class="btn sm ico" id="theme" type="button"></button>'+
          '<button class="btn sm" id="panel" type="button" hidden>'+IK.svg('panel',16)+'<span>Panel</span></button>'+
          '<button class="btn sm ico" id="pw" type="button" title="Parolni almashtirish" aria-label="Parolni almashtirish">'+IK.svg('key',16)+'</button>'+
          '<button class="btn sm ico" id="out" type="button" title="Chiqish" aria-label="Chiqish">'+IK.svg('logout',16)+'</button>'+
        '</div></div></header>'
      );
    },
    /* Foydalanuvchi ma'lumoti va tugmalarni ulash */
    wire: function(u){
      paintTheme();
      document.getElementById('theme').onclick = toggleTheme;
      var who = document.getElementById('who');
      who.hidden = false;
      who.innerHTML = IK.svg('user',15)+'<span>'+SH.esc(u.name)+'</span>'+(u.groupName?'<span class="grp" style="color:var(--muted)">· '+SH.esc(u.groupName)+'</span>':'');
      if(SINF.mode==='demo') document.getElementById('demo').hidden = false;
      if(u.role==='admin'){ var pb=document.getElementById('panel'); pb.hidden=false; pb.onclick=function(){ location.href='admin.html'; }; }
      document.getElementById('pw').onclick = SH.pwModal;
      document.getElementById('out').onclick = async function(){ try{ await SINF.flush(); }catch(e){} await SINF.logout(); location.href='login.html'; };
    },
    /* Xonaki ornament (hero fon) */
    ornament: function(){
      return '<svg class="orn" aria-hidden="true" preserveAspectRatio="xMidYMid slice"><defs>'+
        '<pattern id="orn" width="64" height="64" patternUnits="userSpaceOnUse">'+
        '<rect x="14" y="14" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.4"/>'+
        '<rect x="14" y="14" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.4" transform="rotate(45 32 32)"/>'+
        '<circle cx="32" cy="32" r="3" fill="currentColor"/></pattern>'+
        '<linearGradient id="ofade" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".55" stop-color="#fff" stop-opacity=".35"/><stop offset="1" stop-color="#fff"/></linearGradient>'+
        '<mask id="omask"><rect width="100%" height="100%" fill="url(#ofade)"/></mask></defs>'+
        '<rect width="100%" height="100%" fill="url(#orn)" mask="url(#omask)"/></svg>';
    },
    foot: function(){ return '<footer class="foot">Al Xorazmiy · dasturlash kurslari</footer>'; }
  };
})();
