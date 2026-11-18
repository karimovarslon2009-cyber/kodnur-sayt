/* Python — amaliy kurs. Prism (MIT) + kurs dasturi. Python: Pyodide (MPL-2.0) */
window.Prism = window.Prism || {}; window.Prism.manual = true;
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(e){var n=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,t=0,r={},a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof i?new i(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function e(n,t){var r,i;switch(t=t||{},a.util.type(n)){case"Object":if(i=a.util.objId(n),t[i])return t[i];for(var l in r={},t[i]=r,n)n.hasOwnProperty(l)&&(r[l]=e(n[l],t));return r;case"Array":return i=a.util.objId(n),t[i]?t[i]:(r=[],t[i]=r,n.forEach((function(n,a){r[a]=e(n,t)})),r);default:return n}},getLanguage:function(e){for(;e;){var t=n.exec(e.className);if(t)return t[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,t){e.className=e.className.replace(RegExp(n,"gi"),""),e.classList.add("language-"+t)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(r){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var t in n)if(n[t].src==e)return n[t]}return null}},isActive:function(e,n,t){for(var r="no-"+n;e;){var a=e.classList;if(a.contains(n))return!0;if(a.contains(r))return!1;e=e.parentElement}return!!t}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(e,n){var t=a.util.clone(a.languages[e]);for(var r in n)t[r]=n[r];return t},insertBefore:function(e,n,t,r){var i=(r=r||a.languages)[e],l={};for(var o in i)if(i.hasOwnProperty(o)){if(o==n)for(var s in t)t.hasOwnProperty(s)&&(l[s]=t[s]);t.hasOwnProperty(o)||(l[o]=i[o])}var u=r[e];return r[e]=l,a.languages.DFS(a.languages,(function(n,t){t===u&&n!=e&&(this[n]=l)})),l},DFS:function e(n,t,r,i){i=i||{};var l=a.util.objId;for(var o in n)if(n.hasOwnProperty(o)){t.call(n,o,n[o],r||o);var s=n[o],u=a.util.type(s);"Object"!==u||i[l(s)]?"Array"!==u||i[l(s)]||(i[l(s)]=!0,e(s,t,o,i)):(i[l(s)]=!0,e(s,t,null,i))}}},plugins:{},highlightAll:function(e,n){a.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var r={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var i,l=0;i=r.elements[l++];)a.highlightElement(i,!0===n,r.callback)},highlightElement:function(n,t,r){var i=a.util.getLanguage(n),l=a.languages[i];a.util.setLanguage(n,i);var o=n.parentElement;o&&"pre"===o.nodeName.toLowerCase()&&a.util.setLanguage(o,i);var s={element:n,language:i,grammar:l,code:n.textContent};function u(e){s.highlightedCode=e,a.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,a.hooks.run("after-highlight",s),a.hooks.run("complete",s),r&&r.call(s.element)}if(a.hooks.run("before-sanity-check",s),(o=s.element.parentElement)&&"pre"===o.nodeName.toLowerCase()&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!s.code)return a.hooks.run("complete",s),void(r&&r.call(s.element));if(a.hooks.run("before-highlight",s),s.grammar)if(t&&e.Worker){var c=new Worker(a.filename);c.onmessage=function(e){u(e.data)},c.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else u(a.highlight(s.code,s.grammar,s.language));else u(a.util.encode(s.code))},highlight:function(e,n,t){var r={code:e,grammar:n,language:t};if(a.hooks.run("before-tokenize",r),!r.grammar)throw new Error('The language "'+r.language+'" has no grammar.');return r.tokens=a.tokenize(r.code,r.grammar),a.hooks.run("after-tokenize",r),i.stringify(a.util.encode(r.tokens),r.language)},tokenize:function(e,n){var t=n.rest;if(t){for(var r in t)n[r]=t[r];delete n.rest}var a=new s;return u(a,a.head,e),o(e,a,n,a.head,0),function(e){for(var n=[],t=e.head.next;t!==e.tail;)n.push(t.value),t=t.next;return n}(a)},hooks:{all:{},add:function(e,n){var t=a.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=a.hooks.all[e];if(t&&t.length)for(var r,i=0;r=t[i++];)r(n)}},Token:i};function i(e,n,t,r){this.type=e,this.content=n,this.alias=t,this.length=0|(r||"").length}function l(e,n,t,r){e.lastIndex=n;var a=e.exec(t);if(a&&r&&a[1]){var i=a[1].length;a.index+=i,a[0]=a[0].slice(i)}return a}function o(e,n,t,r,s,g){for(var f in t)if(t.hasOwnProperty(f)&&t[f]){var h=t[f];h=Array.isArray(h)?h:[h];for(var d=0;d<h.length;++d){if(g&&g.cause==f+","+d)return;var v=h[d],p=v.inside,m=!!v.lookbehind,y=!!v.greedy,k=v.alias;if(y&&!v.pattern.global){var x=v.pattern.toString().match(/[imsuy]*$/)[0];v.pattern=RegExp(v.pattern.source,x+"g")}for(var b=v.pattern||v,w=r.next,A=s;w!==n.tail&&!(g&&A>=g.reach);A+=w.value.length,w=w.next){var E=w.value;if(n.length>e.length)return;if(!(E instanceof i)){var P,L=1;if(y){if(!(P=l(b,A,e,m))||P.index>=e.length)break;var S=P.index,O=P.index+P[0].length,j=A;for(j+=w.value.length;S>=j;)j+=(w=w.next).value.length;if(A=j-=w.value.length,w.value instanceof i)continue;for(var C=w;C!==n.tail&&(j<O||"string"==typeof C.value);C=C.next)L++,j+=C.value.length;L--,E=e.slice(A,j),P.index-=A}else if(!(P=l(b,0,E,m)))continue;S=P.index;var N=P[0],_=E.slice(0,S),M=E.slice(S+N.length),W=A+E.length;g&&W>g.reach&&(g.reach=W);var z=w.prev;if(_&&(z=u(n,z,_),A+=_.length),c(n,z,L),w=u(n,z,new i(f,p?a.tokenize(N,p):N,k,N)),M&&u(n,w,M),L>1){var I={cause:f+","+d,reach:W};o(e,n,t,w.prev,A,I),g&&I.reach>g.reach&&(g.reach=I.reach)}}}}}}function s(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function u(e,n,t){var r=n.next,a={value:t,prev:n,next:r};return n.next=a,r.prev=a,e.length++,a}function c(e,n,t){for(var r=n.next,a=0;a<t&&r!==e.tail;a++)r=r.next;n.next=r,r.prev=n,e.length-=a}if(e.Prism=a,i.stringify=function e(n,t){if("string"==typeof n)return n;if(Array.isArray(n)){var r="";return n.forEach((function(n){r+=e(n,t)})),r}var i={type:n.type,content:e(n.content,t),tag:"span",classes:["token",n.type],attributes:{},language:t},l=n.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(i.classes,l):i.classes.push(l)),a.hooks.run("wrap",i);var o="";for(var s in i.attributes)o+=" "+s+'="'+(i.attributes[s]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+o+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(n){var t=JSON.parse(n.data),r=t.language,i=t.code,l=t.immediateClose;e.postMessage(a.highlight(i,a.languages[r],r)),l&&e.close()}),!1),a):a;var g=a.util.currentScript();function f(){a.manual||a.highlightAll()}if(g&&(a.filename=g.src,g.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var h=document.readyState;"loading"===h||"interactive"===h&&g&&g.defer?document.addEventListener("DOMContentLoaded",f):window.requestAnimationFrame?window.requestAnimationFrame(f):window.setTimeout(f,16)}return a}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};
Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python;
Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json;
!function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",a={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},n={bash:a,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:n},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:a}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:n},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:n.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:n.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},a.inside=e.languages.bash;for(var s=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],o=n.variable[1].inside,i=0;i<s.length;i++)o[s[i]]=e.languages.bash[s[i]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash}(Prism);
window.__PYW = "/* Python kursi ishchi oqimi (Worker). Oldidan: pyodide.asm.js va pyodide.js manbalari. */\nvar VF = {}, PY = null, BOOT = null;\nvar _realFetch = self.fetch;\nself.fetch = function (u, o) {\n  var k = String(u).replace(/^.*\\//, '');\n  if (VF[k]) {\n    var ct = /\\.wasm$/.test(k) ? 'application/wasm' : /\\.json$/.test(k) ? 'application/json' : 'application/octet-stream';\n    return Promise.resolve(new Response(VF[k], { status: 200, headers: { 'Content-Type': ct } }));\n  }\n  return _realFetch ? _realFetch(u, o) : Promise.reject(new Error('fetch yo\\'q'));\n};\nasync function boot(m) {\n  VF['pyodide.asm.wasm'] = m.wasm; VF['python_stdlib.zip'] = m.stdlib; VF['pyodide-lock.json'] = new TextEncoder().encode(m.lock);\n  PY = await loadPyodide({ indexURL: 'https://kurs.local/pyodide/', fullStdLib: false, checkAPIVersion: false });\n  PY.setStdout({ batched: function () {} }); PY.setStderr({ batched: function () {} });\n  PY.FS.mkdirTree('/kurs'); PY.FS.writeFile('/kurs/pyrt.py', m.rt);\n  PY.runPython(\"import sys; sys.path.insert(0, '/kurs'); import pyrt; pyrt.warm()\");\n  VF = {};\n}\nasync function addSqlite(bytes) {\n  if (self.__sql) return;\n  PY.unpackArchive(bytes, 'zip', { extractDir: '/lib/python3.12/site-packages' });\n  self.__sql = true;\n}\nself.onmessage = async function (e) {\n  var m = e.data;\n  try {\n    if (m.k === 'boot') { BOOT = boot(m); await BOOT; self.postMessage({ k: 'warm' }); return; }\n    await BOOT;\n    if (m.sqlite) await addSqlite(m.sqlite);\n    var rt = PY.pyimport('pyrt');\n    if (m.k === 'run') { var r = rt.run_main(JSON.stringify(m.spec)); self.postMessage({ k: 'done', id: m.id, r: JSON.parse(r) }); }\n    else if (m.k === 'check') { var r2 = rt.run_checks(JSON.stringify(m.spec)); self.postMessage({ k: 'done', id: m.id, r: JSON.parse(r2) }); }\n  } catch (err) {\n    self.postMessage({ k: 'fatal', id: m.id, err: String(err && err.message || err) });\n  }\n};\n";
window.__PYRT = "# -*- coding: utf-8 -*-\n\"\"\"Python kursi: ish vaqti va tekshiruv dvigateli.\nCPython (tekshirish uchun) va Pyodide (brauzer) da bir xil ishlaydi.\"\"\"\nimport sys, io, os, json, re, ast, math, builtins, contextlib, random, shutil, tempfile, tokenize, traceback, types\n\nMAXOUT = 120000\n\n\nclass NeedInput(BaseException):\n    \"\"\"input() uchun kirish yetmadi (BaseException: o'quvchi `except Exception` bilan yutib yubormasin).\"\"\"\n    def __init__(self, prompt=''):\n        self.prompt = prompt\n\n\nclass _Cap(io.StringIO):\n    def write(self, s):\n        if self.tell() > MAXOUT:\n            raise RuntimeError(\"Dastur juda ko'p matn chiqardi (cheksiz print bo'lishi mumkin)\")\n        return io.StringIO.write(self, s)\n\n\n# ---------------------------------------------------------------- yordamchilar\ndef _norm(s):\n    s = str(s).replace('\\r\\n', '\\n').replace('\\r', '\\n')\n    s = re.sub(u\"[\u02bb\u02bc\u2019\u2018\u00b4]\", \"'\", s)\n    lines = [l.rstrip() for l in s.split('\\n')]\n    while lines and lines[-1] == '':\n        lines.pop()\n    while lines and lines[0] == '':\n        lines.pop(0)\n    return '\\n'.join(lines)\n\n\ndef _r(x, n=240):\n    try:\n        s = repr(x)\n    except Exception:\n        s = '<repr xato>'\n    return s if len(s) <= n else s[:n] + '\u2026'\n\n\ndef _dec(x):\n    if isinstance(x, dict):\n        if len(x) == 1:\n            k = next(iter(x))\n            if k == '$tuple':\n                return tuple(_dec(i) for i in x[k])\n            if k == '$set':\n                return set(_dec(i) for i in x[k])\n            if k == '$dict':\n                return {_dec(a): _dec(b) for a, b in x[k]}\n            if k == '$float':\n                return float(x[k])\n        return {k: _dec(v) for k, v in x.items()}\n    if isinstance(x, list):\n        return [_dec(i) for i in x]\n    return x\n\n\ndef _eq(a, b, tol=1e-9):\n    if isinstance(b, bool) or isinstance(a, bool):\n        return type(a) is type(b) and a == b\n    if isinstance(a, (int, float)) and isinstance(b, (int, float)):\n        if isinstance(a, float) and math.isnan(a) and isinstance(b, float) and math.isnan(b):\n            return True\n        if isinstance(a, float) or isinstance(b, float):\n            return abs(a - b) <= max(tol, tol * abs(b))\n        return a == b\n    if type(a) is not type(b):\n        return False\n    if isinstance(a, (list, tuple)):\n        return len(a) == len(b) and all(_eq(x, y, tol) for x, y in zip(a, b))\n    if isinstance(a, dict):\n        return set(a.keys()) == set(b.keys()) and all(_eq(a[k], b[k], tol) for k in a)\n    return a == b\n\n\ndef _short_err(e):\n    return '%s: %s' % (type(e).__name__, e)\n\n\n# ---------------------------------------------------------------- izohlarsiz matn (kod qoidalari uchun)\ndef strip_code(src, keep_strings=True):\n    out = []\n    try:\n        toks = list(tokenize.generate_tokens(io.StringIO(src).readline))\n    except Exception:\n        return src\n    last = (1, 0)\n    res = ''\n    lines = src.split('\\n')\n    # oddiy usul: tokenlardan qayta yig'ish emas, balki izoh va satrlarni almashtirish\n    spans = []\n    for t in toks:\n        if t.type == tokenize.COMMENT:\n            spans.append((t.start, t.end, ''))\n        elif t.type == tokenize.STRING and not keep_strings:\n            spans.append((t.start, t.end, '\"\"'))\n    if not spans:\n        return src\n    # bir nechta qatorli tokenlar uchun: absolyut ofsetlar\n    offs = [0]\n    for l in lines:\n        offs.append(offs[-1] + len(l) + 1)\n    def pos(rc):\n        return offs[rc[0] - 1] + rc[1]\n    s = src\n    for a, b, rep in sorted(spans, key=lambda z: -pos(z[0])):\n        s = s[:pos(a)] + rep + s[pos(b):]\n    return s\n\n\ndef _strip_docstrings(tree):\n    for n in ast.walk(tree):\n        if isinstance(n, (ast.FunctionDef, ast.AsyncFunctionDef, ast.ClassDef, ast.Module)):\n            if n.body and isinstance(n.body[0], ast.Expr) and isinstance(getattr(n.body[0], 'value', None), ast.Constant) and isinstance(n.body[0].value.value, str):\n                n.body[0].value.value = ''\n\n\n# ---------------------------------------------------------------- o'quv API (requests o'rniga)\ndef _make_requests():\n    m = types.ModuleType('requests')\n    exc = types.ModuleType('requests.exceptions')\n\n    class RequestException(Exception):\n        pass\n\n    class ConnectionError(RequestException):\n        pass\n\n    class Timeout(RequestException):\n        pass\n\n    class HTTPError(RequestException):\n        def __init__(self, msg='', response=None):\n            RequestException.__init__(self, msg)\n            self.response = response\n\n    class JSONDecodeError(RequestException, ValueError):\n        pass\n\n    for c in (RequestException, ConnectionError, Timeout, HTTPError, JSONDecodeError):\n        setattr(exc, c.__name__, c)\n        setattr(m, c.__name__, c)\n    m.exceptions = exc\n\n    MAHSULOT = [\n        {\"id\": 1, \"nom\": \"Non\", \"narx\": 4000, \"kategoriya\": \"oziq-ovqat\", \"qoldiq\": 50},\n        {\"id\": 2, \"nom\": \"Sut\", \"narx\": 12000, \"kategoriya\": \"oziq-ovqat\", \"qoldiq\": 30},\n        {\"id\": 3, \"nom\": \"Daftar\", \"narx\": 6000, \"kategoriya\": \"maktab\", \"qoldiq\": 100},\n        {\"id\": 4, \"nom\": \"Ruchka\", \"narx\": 3000, \"kategoriya\": \"maktab\", \"qoldiq\": 0},\n        {\"id\": 5, \"nom\": \"Choy\", \"narx\": 25000, \"kategoriya\": \"oziq-ovqat\", \"qoldiq\": 12},\n        {\"id\": 6, \"nom\": \"Sumka\", \"narx\": 180000, \"kategoriya\": \"maktab\", \"qoldiq\": 7},\n    ]\n    SHAHAR = {\"urganch\": (21, \"quyoshli\"), \"xiva\": (23, \"quyoshli\"), \"toshkent\": (17, \"bulutli\"), \"samarqand\": (19, \"yomg'irli\")}\n    BASE = 'https://api.xorazm-market.uz'\n    state = {\"orders\": [], \"calls\": []}\n\n    class Response(object):\n        def __init__(self, code, data, url):\n            self.status_code = code\n            self._data = data\n            self.url = url\n            self.headers = {'Content-Type': 'application/json'}\n            self.text = json.dumps(data, ensure_ascii=False)\n            self.reason = {200: 'OK', 201: 'Created', 400: 'Bad Request', 404: 'Not Found', 500: 'Internal Server Error'}.get(code, '')\n\n        @property\n        def ok(self):\n            return self.status_code < 400\n\n        def json(self):\n            return json.loads(json.dumps(self._data))\n\n        def raise_for_status(self):\n            if self.status_code >= 400:\n                raise HTTPError('%s %s: %s' % (self.status_code, self.reason, self.url), self)\n\n        def __repr__(self):\n            return '<Response [%s]>' % self.status_code\n\n    def request(method, url, params=None, json=None, timeout=None, headers=None, **kw):\n        state['calls'].append((method, url))\n        url = str(url)\n        if not url.startswith(BASE):\n            raise ConnectionError(\"Server topilmadi: %s (bu o'quv muhitida faqat %s ishlaydi)\" % (url, BASE))\n        path = url[len(BASE):] or '/'\n        if '?' in path:\n            path, q = path.split('?', 1)\n            params = dict(params or {})\n            for kv in q.split('&'):\n                if '=' in kv:\n                    a, b = kv.split('=', 1)\n                    params[a] = b\n        params = params or {}\n        path = path.rstrip('/') or '/'\n        if path == '/sekin':\n            if timeout is None or timeout < 3:\n                raise Timeout('Server %s soniyada javob bermadi' % (timeout if timeout is not None else 'juda uzoq'))\n            return Response(200, {\"xabar\": \"kech bo'lsa ham keldim\"}, url)\n        if path == '/xato500':\n            return Response(500, {\"xato\": \"Serverda ichki xato\"}, url)\n        if path == '/mahsulotlar' and method == 'GET':\n            items = [dict(x) for x in MAHSULOT]\n            kat = params.get('kategoriya')\n            if kat:\n                items = [x for x in items if x['kategoriya'] == kat]\n            if params.get('limit'):\n                try:\n                    items = items[:int(params['limit'])]\n                except ValueError:\n                    return Response(400, {\"xato\": \"limit son bo'lishi kerak\"}, url)\n            return Response(200, {\"soni\": len(items), \"natija\": items}, url)\n        mm = re.match(r'^/mahsulotlar/(\\w+)$', path)\n        if mm and method == 'GET':\n            try:\n                pid = int(mm.group(1))\n            except ValueError:\n                return Response(400, {\"xato\": \"id son bo'lishi kerak\"}, url)\n            for x in MAHSULOT:\n                if x['id'] == pid:\n                    return Response(200, dict(x), url)\n            return Response(404, {\"xato\": \"Mahsulot topilmadi\"}, url)\n        if path == '/buyurtmalar' and method == 'POST':\n            d = json or {}\n            if not isinstance(d, dict) or 'mahsulot_id' not in d or 'soni' not in d:\n                return Response(400, {\"xato\": \"mahsulot_id va soni kerak\"}, url)\n            for x in MAHSULOT:\n                if x['id'] == d['mahsulot_id']:\n                    if not isinstance(d['soni'], int) or d['soni'] <= 0:\n                        return Response(400, {\"xato\": \"soni musbat butun son bo'lishi kerak\"}, url)\n                    if d['soni'] > x['qoldiq']:\n                        return Response(400, {\"xato\": \"Omborda yetarli mahsulot yo'q\"}, url)\n                    o = {\"id\": len(state['orders']) + 1, \"jami\": x['narx'] * d['soni'], \"holat\": \"yangi\"}\n                    state['orders'].append(o)\n                    return Response(201, o, url)\n            return Response(404, {\"xato\": \"Mahsulot topilmadi\"}, url)\n        mm = re.match(r'^/ob-havo/(.+)$', path)\n        if mm and method == 'GET':\n            nom = mm.group(1).lower()\n            if nom in SHAHAR:\n                t, h = SHAHAR[nom]\n                return Response(200, {\"shahar\": nom.capitalize(), \"harorat\": t, \"holat\": h}, url)\n            return Response(404, {\"xato\": \"Shahar topilmadi\"}, url)\n        if path == '/valyuta' and method == 'GET':\n            return Response(200, {\"USD\": 12650.0, \"EUR\": 13800.0, \"RUB\": 135.5}, url)\n        return Response(404, {\"xato\": \"Manzil topilmadi\"}, url)\n\n    m.get = lambda url, **kw: request('GET', url, **kw)\n    m.post = lambda url, **kw: request('POST', url, **kw)\n    m.put = lambda url, **kw: request('PUT', url, **kw)\n    m.delete = lambda url, **kw: request('DELETE', url, **kw)\n    m.Response = Response\n    m.codes = types.SimpleNamespace(ok=200, created=201, not_found=404, bad_request=400)\n    m._state = state\n    sys.modules['requests.exceptions'] = exc\n    return m\n\n\n# ---------------------------------------------------------------- bajarish\nclass Ctx(object):\n    \"\"\"Bitta bajarish uchun vaqtinchalik papka, kirish va chiqish.\"\"\"\n    def __init__(self, files, inputs, seed, echo=False, prompts=False):\n        self.prompts = prompts\n        self.files = files or {}\n        self.inputs = list(inputs or [])\n        self.pos = 0\n        self.seed = seed\n        self.echo = echo\n        self.out = _Cap()\n        self.err = _Cap()\n        self.tmp = None\n\n    def fake_input(self, prompt=''):\n        if self.echo or self.prompts:\n            self.out.write(str(prompt))\n        if self.pos >= len(self.inputs):\n            raise NeedInput(str(prompt))\n        v = str(self.inputs[self.pos])\n        self.pos += 1\n        if self.echo:\n            self.out.write(v + '\\n')\n        return v\n\n    def __enter__(self):\n        self.tmp = tempfile.mkdtemp(prefix='kurs')\n        for name, text in self.files.items():\n            p = os.path.join(self.tmp, name)\n            d = os.path.dirname(p)\n            if d and not os.path.isdir(d):\n                os.makedirs(d)\n            with open(p, 'w', encoding='utf-8', newline='') as f:\n                f.write(text)\n        self.old_cwd = os.getcwd()\n        os.chdir(self.tmp)\n        self.old_path = list(sys.path)\n        sys.path.insert(0, self.tmp)\n        self.old_mods = set(sys.modules)\n        self.old_in = builtins.input\n        self.old_rl = sys.getrecursionlimit()\n        if sys.platform == 'emscripten':\n            sys.setrecursionlimit(min(self.old_rl, 350))\n        builtins.input = self.fake_input\n        self.so, self.se = sys.stdout, sys.stderr\n        sys.stdout, sys.stderr = self.out, self.err\n        random.seed(self.seed)\n        sys.modules['requests'] = _make_requests()\n        return self\n\n    def __exit__(self, *a):\n        sys.stdout, sys.stderr = self.so, self.se\n        builtins.input = self.old_in\n        sys.setrecursionlimit(self.old_rl)\n        sys.path[:] = self.old_path\n        for m in list(sys.modules):\n            if m not in self.old_mods:\n                del sys.modules[m]\n        try:\n            os.chdir(self.old_cwd)\n        except Exception:\n            pass\n        self.after = self.read_files()\n        shutil.rmtree(self.tmp, ignore_errors=True)\n        return False\n\n    def read_files(self):\n        res = {}\n        for root, dirs, fs in os.walk(self.tmp):\n            dirs[:] = [d for d in dirs if d != '__pycache__']\n            for fn in fs:\n                p = os.path.join(root, fn)\n                rel = os.path.relpath(p, self.tmp).replace(os.sep, '/')\n                try:\n                    with open(p, 'r', encoding='utf-8', newline='') as f:\n                        res[rel] = f.read(200000)\n                except Exception:\n                    pass\n        return res\n\n\ndef _err_info(e, ctx, mainname):\n    \"\"\"Xato haqida: tur, xabar, qator va qisqa traceback (faqat o'quvchi kodi).\"\"\"\n    info = {'type': type(e).__name__, 'msg': str(e), 'line': None, 'file': mainname, 'frames': []}\n    if isinstance(e, SyntaxError):\n        info['line'] = e.lineno\n        fn = getattr(e, 'filename', None) or mainname\n        info['file'] = os.path.relpath(fn, ctx.tmp).replace(os.sep, '/') if fn and os.path.isabs(fn) else (fn or mainname)\n        info['msg'] = e.msg or str(e)\n        info['text'] = (e.text or '').rstrip('\\n')\n        info['offset'] = e.offset\n        return info\n    tb = e.__traceback__\n    for fr in traceback.extract_tb(tb):\n        fn = fr.filename\n        if ctx.tmp and fn.startswith(ctx.tmp):\n            rel = os.path.relpath(fn, ctx.tmp).replace(os.sep, '/')\n            info['frames'].append({'file': rel, 'line': fr.lineno, 'name': fr.name, 'text': (fr.line or '')})\n    if info['frames']:\n        info['line'] = info['frames'][-1]['line']\n        info['file'] = info['frames'][-1]['file']\n    return info\n\n\ndef tb_text(info):\n    if not info:\n        return ''\n    s = []\n    if info.get('frames'):\n        s.append('Xato yo\\'li:')\n        for f in info['frames']:\n            where = '%s, %s-qator' % (f['file'], f['line'])\n            if f['name'] and f['name'] != '<module>':\n                where += ', %s() ichida' % f['name']\n            s.append('  ' + where + (':  ' + f['text'].strip() if f.get('text') else ''))\n    elif info.get('line'):\n        s.append('%s, %s-qator' % (info['file'], info['line']))\n        if info.get('text'):\n            s.append('  ' + info['text'].strip())\n    s.append('%s: %s' % (info['type'], info['msg']))\n    return '\\n'.join(s)\n\n\ndef run_files(files, main, inputs=None, seed=1, echo=False, name='__main__', keep_ns=False, extra=None, prompts=False):\n    \"\"\"Dasturni ishga tushiradi. Qaytaradi: dict(ok, out, err, error, need, ns, after).\"\"\"\n    res = {'ok': True, 'out': '', 'err': '', 'error': None, 'need': None, 'after': {}}\n    ctx = Ctx(files, inputs, seed, echo, prompts)\n    ns = {'__name__': name, '__file__': main}\n    with ctx:\n        try:\n            src = files[main]\n            code = compile(src, os.path.join(ctx.tmp, main), 'exec')\n            if extra:\n                ns.update(extra)\n            exec(code, ns)\n        except NeedInput as ni:\n            res['need'] = ni.prompt\n            res['ok'] = False\n        except SystemExit:\n            pass\n        except BaseException as e:\n            res['ok'] = False\n            res['error'] = _err_info(e, ctx, main)\n            if isinstance(e, RecursionError):\n                res['error']['msg'] = \"maksimal rekursiya chuqurligi oshdi (funksiya o'zini cheksiz chaqiryapti)\"\n        res['out'] = ctx.out.getvalue()\n        res['err'] = ctx.err.getvalue()\n    res['after'] = ctx.after\n    if keep_ns:\n        res['ns'] = ns\n    return res\n\n\ndef run_main(spec):\n    \"\"\"\u25b6 Ishga tushir: spec = {files, main, inputs, seed}. JSON qaytaradi.\"\"\"\n    spec = json.loads(spec) if isinstance(spec, str) else spec\n    r = run_files(spec['files'], spec.get('main', 'main.py'), spec.get('inputs') or [], spec.get('seed', 1), echo=True)\n    return json.dumps({'ok': r['ok'], 'out': r['out'], 'err': r['err'], 'error': r['error'], 'tb': tb_text(r['error']), 'need': r['need']}, ensure_ascii=False)\n\n\n# ---------------------------------------------------------------- tekshiruv\nclass _Fail(Exception):\n    pass\n\n\ndef _explain_run(r, chk=None):\n    \"\"\"Dastur xatosi bo'lsa qisqa matn.\"\"\"\n    if r.get('need') is not None:\n        return \"Dastur kutilganidan ko'proq input() chaqirdi (kirish ma'lumoti tugadi).\"\n    if r.get('error'):\n        return tb_text(r['error'])\n    return ''\n\n\ndef _check_io(chk, files, main):\n    r = run_files(files, main, chk.get('in') or [], seed=chk.get('seed', 1), echo=False, name='__main__', prompts=chk.get('prompts', False))\n    if r['need'] is not None:\n        return False, \"Dastur kutilganidan ko'proq input() chaqirdi.\\nKirish: %s\\nChiqqan matn:\\n%s\" % (_inputs_txt(chk), r['out'])\n    if r['error']:\n        return False, \"Dastur xato bilan to'xtadi:\\n%s\\n(kirish: %s)\" % (tb_text(r['error']), _inputs_txt(chk))\n    got = _norm(r['out'])\n    cmpm = chk.get('cmp', 'exact')\n    if 'files' in chk:\n        for fn, want in chk['files'].items():\n            have = r['after'].get(fn)\n            if have is None:\n                return False, \"`%s` fayli yaratilmadi.\" % fn\n            if _norm(have) != _norm(want):\n                return False, \"`%s` fayli mazmuni mos emas.\\nKutilgan:\\n%s\\nSizda:\\n%s\" % (fn, _norm(want), _norm(have))\n        if 'out' not in chk:\n            return True, ''\n    exp = _norm(chk.get('out', ''))\n    if cmpm == 'exact':\n        ok = got == exp\n    elif cmpm == 'contains':\n        ok = all(_norm(p) in got for p in ([chk['out']] if isinstance(chk['out'], str) else chk['out']))\n    elif cmpm == 'regex':\n        ok = re.search(chk['out'], got, re.S) is not None\n    elif cmpm == 'lines':\n        ok = sorted(got.split('\\n')) == sorted(exp.split('\\n'))\n    else:\n        ok = got == exp\n    if ok:\n        return True, ''\n    head = ('Kirish: %s\\n' % _inputs_txt(chk)) if chk.get('in') else ''\n    return False, head + 'Kutilgan natija:\\n%s\\nSizda chiqdi:\\n%s' % (exp if exp else '(bo\\'sh)', got if got else '(hech narsa chiqmadi)')\n\n\ndef _inputs_txt(chk):\n    if not chk.get('in'):\n        return '(yo\\'q)'\n    return ' | '.join(str(x) for x in chk['in'])\n\n\ndef _build_ns(files, main, inputs=None, setup=None):\n    \"\"\"Modul darajasidagi kodni bajarib, nomlar maydonini qaytaradi (name='student').\"\"\"\n    return run_files(files, main, inputs or [], seed=1, name='student', keep_ns=True)\n\n\nclass _Env(object):\n    \"\"\"py-tekshiruvlar uchun muhit: o'quvchi nomlari + yordamchilar.\"\"\"\n    pass\n\n\ndef _with_student(files, main, chk, fn):\n    \"\"\"O'quvchi kodini bajarib (ctx ichida qoldirib), fn(ns, ctx) ni chaqiradi.\"\"\"\n    ctx = Ctx(files, chk.get('in') or [], chk.get('seed', 1), False)\n    ns = {'__name__': 'student', '__file__': main}\n    with ctx:\n        try:\n            exec(compile(files[main], os.path.join(ctx.tmp, main), 'exec'), ns)\n        except NeedInput:\n            return False, \"Funksiyalardan tashqarida `input()` chaqirilgan. Tekshiruv uchun uni `if __name__ == \\\"__main__\\\":` ichiga oling yoki funksiya ichiga qo'ying.\"\n        except SystemExit:\n            pass\n        except BaseException as e:\n            info = _err_info(e, ctx, main)\n            return False, \"Kod ishga tushmadi:\\n\" + tb_text(info)\n        try:\n            return fn(ns, ctx)\n        except NeedInput as ni:\n            return False, \"Kod kutilmagan `input()` chaqirdi (%s).\" % ni.prompt\n        except _Fail as e:\n            return False, str(e)\n        except AssertionError as e:\n            msg = str(e) or 'Shart bajarilmadi'\n            return False, msg\n        except BaseException as e:\n            info = _err_info(e, ctx, main)\n            return False, \"Tekshiruv paytida xato:\\n\" + tb_text(info)\n\n\ndef _check_func(chk, files, main):\n    def go(ns, ctx):\n        fname = chk['fn']\n        if 'setup' in chk:\n            exec(chk['setup'], ns)\n        if fname not in ns:\n            raise _Fail(\"`%s` nomli funksiya topilmadi. Nomini aynan shunday yozing.\" % fname)\n        f = ns[fname]\n        if not callable(f):\n            raise _Fail(\"`%s` funksiya emas.\" % fname)\n        args = [_dec(a) for a in chk.get('args', [])]\n        kwargs = {k: _dec(v) for k, v in chk.get('kwargs', {}).items()}\n        call = '%s(%s)' % (fname, ', '.join([_r(a, 80) for a in args] + ['%s=%s' % (k, _r(v, 80)) for k, v in kwargs.items()]))\n        if 'in' in chk:\n            ctx.inputs = list(chk['in']); ctx.pos = 0\n        before = ctx.out.tell()\n        if 'raises' in chk:\n            want = chk['raises']\n            try:\n                f(*args, **kwargs)\n            except BaseException as e:\n                names = [c.__name__ for c in type(e).__mro__]\n                if want in names:\n                    return True, ''\n                raise _Fail(\"%s: `%s` xatosi kutilgan edi, lekin `%s` chiqdi.\" % (call, want, type(e).__name__))\n            raise _Fail(\"%s: `%s` xatosi kutilgan edi, lekin xato chiqmadi.\" % (call, want))\n        argcopy = None\n        if 'args_after' in chk:\n            argcopy = args\n        try:\n            ret = f(*args, **kwargs)\n        except NeedInput:\n            raise\n        except Exception as e:\n            info = _err_info(e, ctx, main)\n            raise _Fail(\"%s chaqirilganda xato chiqdi:\\n%s\" % (call, tb_text(info)))\n        printed = ctx.out.getvalue()[before:]\n        if 'ret' in chk:\n            want = _dec(chk['ret'])\n            if not _eq(ret, want, chk.get('approx', 1e-9)):\n                extra = ''\n                if ret is None and printed.strip():\n                    extra = \"\\n(Funksiya `print` qilgan, lekin `return` qilmagan: natijani qaytarish kerak.)\"\n                raise _Fail(\"%s\\nKutilgan: %s\\nSizda: %s%s\" % (call, _r(want), _r(ret), extra))\n        if 'args_after' in chk:\n            want = _dec(chk['args_after'])\n            if not _eq(args, want):\n                raise _Fail(\"%s dan keyin argumentlar %s bo'lishi kerak edi, sizda %s.\" % (call, _r(want), _r(args)))\n        if 'stdout' in chk:\n            if _norm(printed) != _norm(chk['stdout']):\n                raise _Fail(\"%s\\nKutilgan chiqish:\\n%s\\nSizda chiqdi:\\n%s\" % (call, _norm(chk['stdout']), _norm(printed) or '(hech narsa)'))\n        return True, ''\n    return _with_student(files, main, chk, go)\n\n\ndef _check_expr(chk, files, main):\n    def go(ns, ctx):\n        if 'setup' in chk:\n            exec(chk['setup'], ns)\n        try:\n            val = eval(chk['expr'], ns)\n        except NeedInput:\n            raise\n        except Exception as e:\n            raise _Fail(\"`%s` hisoblanmadi: %s\" % (chk['expr'], _short_err(e)))\n        want = _dec(chk['ret'])\n        if not _eq(val, want, chk.get('approx', 1e-9)):\n            raise _Fail(\"`%s`\\nKutilgan: %s\\nSizda: %s\" % (chk['expr'], _r(want), _r(val)))\n        return True, ''\n    return _with_student(files, main, chk, go)\n\n\ndef _check_var(chk, files, main):\n    def go(ns, ctx):\n        name = chk['name']\n        if name not in ns:\n            raise _Fail(\"`%s` nomli o'zgaruvchi topilmadi. Nomini aynan shunday yozing.\" % name)\n        want = _dec(chk['val'])\n        if not _eq(ns[name], want, chk.get('approx', 1e-9)):\n            raise _Fail(\"`%s` qiymati\\nKutilgan: %s\\nSizda: %s\" % (name, _r(want), _r(ns[name])))\n        return True, ''\n    return _with_student(files, main, chk, go)\n\n\ndef _helpers(ns, ctx, files, main):\n    def check(cond, msg='Shart bajarilmadi'):\n        if not cond:\n            raise AssertionError(msg)\n\n    def same(a, b, msg=None):\n        if not _eq(a, b):\n            raise AssertionError((msg + '\\n' if msg else '') + 'Kutilgan: %s\\nSizda: %s' % (_r(b), _r(a)))\n\n    def printed(f, *a, **k):\n        b = ctx.out.tell()\n        r = f(*a, **k)\n        return ctx.out.getvalue()[b:]\n\n    def feed(*lines):\n        ctx.inputs = list(lines); ctx.pos = 0\n\n    def run_again(inputs=None):\n        r = run_files(files, main, inputs or [], seed=1)\n        return r\n\n    def program_output(inputs=None, extra_files=None, prompts=False):\n        fl = dict(files)\n        if extra_files:\n            fl.update(extra_files)\n        r = run_files(fl, main, inputs or [], seed=1, prompts=prompts)\n        if r['need'] is not None:\n            raise AssertionError(\"Dastur ko'proq input() so'radi\")\n        if r['error']:\n            raise AssertionError('Dastur xato berdi:\\n' + tb_text(r['error']))\n        return r['out'].replace('\\r\\n', '\\n').rstrip('\\n')\n\n    def program_files(inputs=None, extra_files=None):\n        \"\"\"Dastur ishlagach fayllar holati: {fayl_nomi: mazmun}.\"\"\"\n        fl = dict(files)\n        if extra_files:\n            fl.update(extra_files)\n        r = run_files(fl, main, inputs or [], seed=1)\n        if r['error']:\n            raise AssertionError('Dastur xato berdi:\\n' + tb_text(r['error']))\n        return dict(r['after'])\n\n    ns.update({'check': check, 'same': same, 'printed': printed, 'feed': feed, 'program_output': program_output, 'program_files': program_files,\n               'dec': _dec, 'eq': _eq, 'student_src': files[main], 'student_files': dict(files)})\n    return ns\n\n\ndef _check_py(chk, files, main):\n    def go(ns, ctx):\n        env = dict(ns)\n        _helpers(env, ctx, files, main)\n        exec(compile(chk['code'], '<tekshiruv>', 'exec'), env)\n        return True, ''\n    return _with_student(files, main, chk, go)\n\n\ndef _check_code(chk, files, main):\n    src = files[main] if not chk.get('file') else files.get(chk['file'], '')\n    try:\n        tree = ast.parse(src)\n    except SyntaxError as e:\n        return False, \"Kodda sintaksis xatosi bor (%s-qator): %s\" % (e.lineno, e.msg)\n    _strip_docstrings(tree)\n    text = src if chk.get('raw') else strip_code(src, keep_strings=not chk.get('nostr'))\n    names_called = set()\n    node_types = set()\n    defs = set()\n    classes = set()\n    imports = set()\n    for n in ast.walk(tree):\n        node_types.add(type(n).__name__)\n        if isinstance(n, ast.Call):\n            f = n.func\n            if isinstance(f, ast.Name):\n                names_called.add(f.id)\n            elif isinstance(f, ast.Attribute):\n                names_called.add(f.attr)\n        if isinstance(n, (ast.FunctionDef, ast.AsyncFunctionDef)):\n            defs.add(n.name)\n        if isinstance(n, ast.ClassDef):\n            classes.add(n.name)\n        if isinstance(n, ast.Import):\n            for a in n.names:\n                imports.add(a.name.split('.')[0])\n        if isinstance(n, ast.ImportFrom) and n.module:\n            imports.add(n.module.split('.')[0])\n    msgs = []\n    for m in chk.get('must', []):\n        rx, msg = (m['re'], m.get('msg')) if isinstance(m, dict) else (m, None)\n        if not re.search(rx, text, re.M):\n            msgs.append(msg or \"Kodda `%s` bo'lishi kerak.\" % rx)\n    for m in chk.get('mustnot', []):\n        rx, msg = (m['re'], m.get('msg')) if isinstance(m, dict) else (m, None)\n        if re.search(rx, text, re.M):\n            msgs.append(msg or \"Kodda `%s` ishlatilmasligi kerak.\" % rx)\n    for t in chk.get('has', []):\n        if t not in node_types:\n            msgs.append(\"Kodda %s bo'lishi kerak.\" % _AST_UZ.get(t, t))\n    for t in chk.get('hasnot', []):\n        if t in node_types:\n            msgs.append(\"Kodda %s ishlatilmasligi kerak.\" % _AST_UZ.get(t, t))\n    for t in chk.get('calls', []):\n        if t not in names_called:\n            msgs.append(\"Kodda `%s()` chaqirilishi kerak.\" % t)\n    for t in chk.get('calls_not', []):\n        if t in names_called:\n            msgs.append(\"Kodda `%s()` ishlatilmasligi kerak.\" % t)\n    for t in chk.get('defs', []):\n        if t not in defs:\n            msgs.append(\"`%s` nomli funksiya yozilishi kerak (`def %s(...)`).\" % (t, t))\n    for t in chk.get('classes', []):\n        if t not in classes:\n            msgs.append(\"`%s` nomli sinf yozilishi kerak.\" % t)\n    for t in chk.get('imports', []):\n        if t not in imports:\n            msgs.append(\"`import %s` kerak.\" % t)\n    for t in chk.get('imports_not', []):\n        if t in imports:\n            msgs.append(\"`%s` modulini ishlatmang.\" % t)\n    if 'max_lines' in chk:\n        n = len([l for l in strip_code(src).split('\\n') if l.strip()])\n        if n > chk['max_lines']:\n            msgs.append(\"Kod juda uzun: %d qator, ko'pi bilan %d qator bo'lishi kerak.\" % (n, chk['max_lines']))\n    if msgs:\n        return False, '\\n'.join(msgs)\n    return True, ''\n\n\n_AST_UZ = {'For': '`for` sikli', 'While': '`while` sikli', 'If': '`if` sharti', 'ListComp': 'ro\\'yxat comprehension', 'DictComp': 'lug\\'at comprehension',\n           'SetComp': 'to\\'plam comprehension', 'GeneratorExp': 'generator ifodasi', 'FunctionDef': '`def` (funksiya)', 'ClassDef': 'sinf (`class`)',\n           'Try': '`try/except`', 'With': '`with`', 'Lambda': '`lambda`', 'Return': '`return`', 'Yield': '`yield`', 'JoinedStr': 'f-satr', 'AugAssign': '`+=` kabi amal',\n           'Raise': '`raise`', 'Assert': '`assert`', 'Dict': 'lug\\'at', 'List': 'ro\\'yxat', 'Tuple': 'tuple', 'Set': 'set', 'Import': '`import`', 'ImportFrom': '`from ... import`',\n           'Break': '`break`', 'Continue': '`continue`', 'Global': '`global`', 'Slice': 'kesim (slice)', 'IfExp': 'qisqa `a if shart else b`', 'Match': '`match`'}\n\n\ndef _check_noerr(chk, files, main):\n    r = run_files(files, main, chk.get('in') or [], seed=chk.get('seed', 1))\n    if r['need'] is not None:\n        return False, \"Dastur kutilganidan ko'proq input() chaqirdi.\"\n    if r['error']:\n        return False, tb_text(r['error'])\n    return True, ''\n\n\n_KINDS = {'io': _check_io, 'func': _check_func, 'expr': _check_expr, 'var': _check_var, 'py': _check_py, 'code': _check_code, 'noerr': _check_noerr}\n\n\ndef _default_label(c):\n    t = c.get('t')\n    if t == 'io':\n        return 'Kirish %s bo\\'lganda natija to\\'g\\'ri' % _inputs_txt(c) if c.get('in') else 'Dastur kutilgan natijani chiqaradi'\n    if t == 'func':\n        return '%s(%s) to\\'g\\'ri ishlaydi' % (c.get('fn'), ', '.join(_r(_dec(a), 40) for a in c.get('args', [])))\n    if t == 'expr':\n        return '`%s` = %s' % (c['expr'], _r(_dec(c['ret']), 60))\n    if t == 'var':\n        return '`%s` = %s' % (c['name'], _r(_dec(c['val']), 60))\n    if t == 'noerr':\n        return 'Dastur xatosiz ishlaydi'\n    return 'Talab bajarildi'\n\n\ndef get_files(spec):\n    files = dict(spec.get('fixed') or {})\n    files.update(spec['files'])\n    return files\n\n\ndef run_checks(spec):\n    \"\"\"spec = {files:{...}, fixed:{...}, main:'main.py', checks:[...]} -> JSON\"\"\"\n    spec = json.loads(spec) if isinstance(spec, str) else spec\n    main = spec.get('main', 'main.py')\n    files = get_files(spec)\n    res = []\n    # sintaksis tekshiruvi (hamma fayllar)\n    syn = None\n    for fn, src in spec['files'].items():\n        if fn.endswith('.py'):\n            try:\n                compile(src, fn, 'exec')\n            except SyntaxError as e:\n                syn = {'type': 'SyntaxError', 'msg': e.msg, 'line': e.lineno, 'file': fn, 'text': (e.text or '').rstrip('\\n'), 'offset': e.offset, 'frames': []}\n                break\n            except Exception as e:\n                syn = {'type': type(e).__name__, 'msg': str(e), 'line': None, 'file': fn, 'frames': []}\n                break\n    for chk in spec['checks']:\n        label = chk.get('l') or _default_label(chk)\n        if syn and chk.get('t') != 'code':\n            res.append({'ok': False, 'l': label, 'd': \"Kodda sintaksis xatosi bor, shuning uchun dastur ishga tushmadi:\\n\" + tb_text(syn)})\n            continue\n        try:\n            ok, d = _KINDS[chk['t']](chk, files, main)\n        except Exception as e:  # tekshiruvchining o'z xatosi\n            ok, d = False, 'Tekshiruvda ichki xato: ' + traceback.format_exc()[-600:]\n        res.append({'ok': bool(ok), 'l': label, 'd': d if not ok else ''})\n    return json.dumps({'results': res, 'syntax': syn}, ensure_ascii=False)\n\n\ndef run_answer(spec):\n    \"\"\"Bashorat topshirig'i: javob matnini tekshiradi.\"\"\"\n    spec = json.loads(spec) if isinstance(spec, str) else spec\n    got = _norm(spec['got'])\n    for a in spec['answers']:\n        if got == _norm(a):\n            return json.dumps({'ok': True})\n    return json.dumps({'ok': False})\n\n\ndef describe(spec):\n    \"\"\"Qurish paytida: yechimdan 'kutilgan natija' namunalarini oladi.\"\"\"\n    main = spec.get('main', 'main.py')\n    files = get_files(spec)\n    out = {'io': [], 'calls': []}\n    for c in spec['checks']:\n        if c.get('hid'):\n            continue\n        if c['t'] == 'io' and len(out['io']) < 3 and 'out' in c and c.get('cmp', 'exact') == 'exact':\n            out['io'].append({'in': c.get('in') or [], 'out': _norm(c['out'])})\n        elif c['t'] == 'func' and len(out['calls']) < 5 and 'ret' in c:\n            args = [_dec(a) for a in c.get('args', [])]\n            out['calls'].append('%s(%s) \u2192 %s' % (c['fn'], ', '.join(_r(a, 60) for a in args), _r(_dec(c['ret']), 80)))\n        elif c['t'] == 'expr' and len(out['calls']) < 5:\n            out['calls'].append('%s \u2192 %s' % (c['expr'], _r(_dec(c['ret']), 80)))\n        elif c['t'] == 'var' and len(out['calls']) < 5:\n            out['calls'].append('%s = %s' % (c['name'], _r(_dec(c['val']), 80)))\n    return out\n\n\ndef warm():\n    import re, json, math, random, collections, itertools, functools, datetime, csv, string, textwrap, statistics  # isitish\n    try:\n        import sqlite3  # noqa\n    except Exception:\n        pass\n    return 'ok'\n";
/* =====================================================================
   Python kursi — dars sahifasining asosiy dasturi
   Og'ir fayllar (Pyodide) assets/py-*.js dan kerak bo'lganda yuklanadi.
   ===================================================================== */
(function () {
  'use strict';
  var META = window.DARS_META || { num: 0 };
  function two(n) { return (n < 10 ? '0' : '') + n; }
  var PFX = 'python-kurs-d' + two(META.num);
  var SOL_AFTER = 10;       // yechim shuncha muvaffaqiyatsiz tekshiruvdan keyin ochiladi
  var OCHIQ = /[?&]ochiq=1\b/.test(location.search) && !(window.SINF_USER && window.SINF_USER.role !== 'admin');
  var HK = window.SINF_HOOK || null;
  var TESTMODE = /[?&]test=1\b/.test(location.search);

  /* ---------------- Yordamchilar ---------------- */
  function el(tag, cls, text) { var d = document.createElement(tag); if (cls) d.className = cls; if (text != null) d.textContent = text; return d; }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function lsGet(k, def) { try { var v = localStorage.getItem(k); return v === null ? def : JSON.parse(v); } catch (e) { return def; } }
  function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function stripComments(src) { return String(src).split('\n').map(function (l) { var i = l.indexOf('#'); return i < 0 ? l : l.slice(0, i); }).join('\n'); }
  function normOut(s) {
    var lines = String(s).replace(/\r\n?/g, '\n').replace(/[ʻʼ’‘´]/g, "'").split('\n').map(function (l) { return l.replace(/\s+$/, ''); });
    while (lines.length && lines[lines.length - 1] === '') lines.pop();
    while (lines.length && lines[0] === '') lines.shift();
    return lines.join('\n');
  }
  function decode(b64) {
    var KEY = 'al-xorazmiy-py', bin = atob(b64.trim()), bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i) ^ KEY.charCodeAt(i % KEY.length);
    return JSON.parse(new TextDecoder().decode(bytes));
  }
  function b64bytes(s) { var bin = atob(s), u = new Uint8Array(bin.length); for (var i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); return u; }
  var DATA = decode($('#dars-data').textContent);
  var TASKS = DATA.tasks || {};
  var EXP = DATA.exp || {};
  var EXAMPLES = DATA.examples || {};

  /* ---------------- Python xatolari uchun izohlar ---------------- */
  var HINTS = [
    [/IndentationError|unexpected indent|expected an indented block|unindent does not match/, "Chekinish xatosi. Python'da `if`, `for`, `def` dan keyingi qatorlar ichkariga (odatda 4 ta bo'shliq) surilgan bo'lishi kerak, bir blokdagi qatorlar esa bir xil chekinishda."],
    [/expected ':'/, "Qator oxirida ikki nuqta (:) yetishmayapti. `if`, `elif`, `else`, `for`, `while`, `def`, `class` qatorlari : bilan tugaydi."],
    [/was never closed/, "Qavs yopilmagan. Har bir ochilgan ( [ { uchun yopuvchi ) ] } bo'lishi kerak."],
    [/unterminated string literal|EOL while scanning|unterminated triple/, "Matn (qo'shtirnoq) yopilmagan. Boshlangan qo'shtirnoq bilan tugagan qo'shtirnoq bir xil bo'lishi kerak."],
    [/SyntaxError|invalid syntax/, "Yozuv xatosi (SyntaxError): qavslar, qo'shtirnoqlar, vergul va ikki nuqta (:) o'z joyida ekanini tekshiring. Xato ko'rsatilgan qatorda yoki undan oldingi qatorda bo'ladi."],
    [/NameError: name '(\w+)' is not defined/, "Bu nom topilmadi. O'zgaruvchi avval yaratilganmi? Katta-kichik harf va imloni tekshiring (Python `Ism` va `ism` ni farqlaydi). Matn bo'lsa, qo'shtirnoq ichiga oling."],
    [/UnboundLocalError/, "Funksiya ichida o'zgaruvchi qiymat berilmasdan ishlatilmoqda. Avval unga qiymat bering."],
    [/ZeroDivisionError/, "Nolga bo'lib bo'lmaydi. Bo'luvchi 0 bo'lishi mumkin bo'lgan holatni `if` bilan tekshiring."],
    [/IndexError: list index out of range|IndexError: string index out of range|IndexError: tuple index out of range/, "Indeks chegaradan chiqdi. Uzunligi n bo'lgan ro'yxatda indekslar 0 dan n-1 gacha. `len()` bilan tekshiring."],
    [/KeyError/, "Lug'atda bunday kalit yo'q. `d[kalit]` o'rniga `d.get(kalit)` ishlating yoki avval `kalit in d` bilan tekshiring."],
    [/ValueError: invalid literal for int|ValueError: could not convert string to float/, "Matnni songa aylantirib bo'lmadi: unda raqam bo'lmagan belgilar (harf, bo'shliq, vergul) bor."],
    [/TypeError: can only concatenate str|unsupported operand type|must be str, not int|can't multiply sequence/, "Har xil turdagi qiymatlarni aralashtiryapsiz (masalan, matn + son). `str()` yoki `int()` bilan turini moslang yoki f-satr ishlating: f\"Yosh: {yosh}\"."],
    [/TypeError: '(\w+)' object is not callable/, "Qiymatni funksiya kabi chaqiryapsiz. O'zgaruvchi nomi funksiya nomi (masalan, `print`, `str`, `list`) bilan bir xil bo'lib qolmaganmi?"],
    [/TypeError: .* takes \d+ positional arguments? but \d+ (were|was) given|missing \d+ required positional argument/, "Funksiyaga berilgan qiymatlar soni parametrlar soniga mos emas. `def` qatoridagi parametrlarni sanang."],
    [/TypeError: '(\w+)' object is not subscriptable/, "Bu turdagi qiymatdan [ ] bilan element olib bo'lmaydi. Qiymat ro'yxat/matn/lug'at ekaniga ishonch hosil qiling."],
    [/TypeError: '(\w+)' object does not support item assignment/, "Matn (str) va tuple o'zgarmas: ularning ichidagi elementni o'zgartirib bo'lmaydi. Yangi qiymat yarating."],
    [/AttributeError: '(\w+)' object has no attribute '(\w+)'/, "Bu turdagi qiymatda bunday metod yoki atribut yo'q. Nomni imlo bilan tekshiring va qiymat turi (ro'yxat, matn, lug'at) to'g'riligini ko'ring."],
    [/ModuleNotFoundError|ImportError/, "Modul topilmadi. `import` qatoridagi nomni tekshiring (masalan, `import math`)."],
    [/FileNotFoundError/, "Fayl topilmadi. Fayl nomi va papkasini tekshiring."],
    [/RecursionError|maximum recursion/, "Funksiya o'zini to'xtovsiz chaqirmoqda. Rekursiyada to'xtash sharti (base case) bo'lishi shart."],
    [/EOFError|input\(\)/, "`input()` ko'proq ma'lumot kutdi. Dasturni ▶ bilan ishga tushirganda terminalda yozish maydoni chiqadi."],
    [/StopIteration/, "Iterator tugadi. `next()` ni haddan ko'p chaqirmang."],
    [/AssertionError/, "`assert` sharti bajarilmadi."],
    [/UnicodeEncodeError|UnicodeDecodeError/, "Matn kodlashda xato. Faylni `encoding=\"utf-8\"` bilan oching."]
  ];
  function hintFor(msg) {
    for (var i = 0; i < HINTS.length; i++) if (HINTS[i][0].test(msg)) return HINTS[i][1];
    return null;
  }

  /* =====================================================================
     1. Python (Pyodide) ishga tushirgich
     ===================================================================== */
  var ASSET_FILES = ['py-asm.js', 'py-wasm.js', 'py-stdlib.js'];
  if (DATA.sqlite) ASSET_FILES.push('py-sqlite.js');
  var assetsP = null, WURL = null, BIN = null;
  function loadScript(src) {
    return new Promise(function (res, rej) {
      var s = document.createElement('script'); s.src = src; s.onload = res;
      s.onerror = function () { rej(new Error('Fayl yuklanmadi: ' + src)); };
      document.head.appendChild(s);
    });
  }
  function assets() {
    if (assetsP) return assetsP;
    window.__PYA = window.__PYA || {};
    assetsP = Promise.all(ASSET_FILES.map(function (f) { return loadScript('assets/' + f); })).then(function () {
      var A = window.__PYA;
      BIN = { wasm: b64bytes(A.wasm), stdlib: b64bytes(A.stdlib), lock: A.lock, rt: window.__PYRT, sqlite: A.sqlite ? b64bytes(A.sqlite) : null };
      WURL = URL.createObjectURL(new Blob([A.asm + '\n' + A.pyodide + '\n' + window.__PYW], { type: 'text/javascript' }));
      A.wasm = A.stdlib = A.sqlite = null;
    });
    return assetsP;
  }
  var seq = 0;
  function Srv() {
    var s = this;
    s.handlers = {}; s.dead = false;
    s.ready = assets().then(function () {
      return new Promise(function (res, rej) {
        s.w = new Worker(WURL);
        s.w.onmessage = function (e) {
          var m = e.data;
          if (m.k === 'warm') { res(); return; }
          if (m.k === 'fatal' && !m.id) { rej(new Error(m.err)); return; }
          var h = s.handlers[m.id]; if (h) { delete s.handlers[m.id]; h(m); }
        };
        s.w.onerror = function (e) { rej(new Error(e.message || 'Worker xatosi')); };
        s.w.postMessage({ k: 'boot', wasm: BIN.wasm, stdlib: BIN.stdlib, lock: BIN.lock, rt: BIN.rt });
      });
    });
  }
  Srv.prototype.call = function (msg, timeout) {
    var s = this;
    return s.ready.then(function () {
      return new Promise(function (res) {
        if (s.dead) { res({ k: 'dead' }); return; }
        var id = ++seq; msg.id = id;
        if (BIN.sqlite && DATA.sqlite && !s.sqlSent) { msg.sqlite = BIN.sqlite; s.sqlSent = true; }
        var tm = setTimeout(function () { delete s.handlers[id]; s.kill(); res({ k: 'timeout' }); }, timeout || 12000);
        s.handlers[id] = function (m) { clearTimeout(tm); res(m); };
        s.w.postMessage(msg);
      });
    });
  };
  Srv.prototype.kill = function () { this.dead = true; if (this.w) this.w.terminate(); };
  /* Bitta umumiy ishchi; cheksiz sikl bo'lsa o'ldirilib, yangisi ochiladi */
  var RT = {
    srv: null, chain: Promise.resolve(), booted: false,
    get: function () { if (!RT.srv || RT.srv.dead) RT.srv = new Srv(); return RT.srv; },
    warm: function () { RT.get(); },
    call: function (msg, timeout) {
      var p = RT.chain.then(function () { return RT.get().call(msg, timeout); });
      RT.chain = p.catch(function () {}).then(function () { if (RT.srv && RT.srv.dead) setTimeout(RT.warm, 200); });
      return p;
    }
  };

  function filesOf(spec, student) {
    var all = {};
    Object.keys(spec.fixed || {}).forEach(function (k) { all[k] = spec.fixed[k]; });
    Object.keys(student).forEach(function (k) { all[k] = student[k]; });
    return all;
  }
  function loadingText() { return BIN ? 'Dastur ishga tushmoqda…' : 'Python yuklanmoqda (birinchi marta 10–30 soniya, keyingi safar tezroq)…'; }

    function langOf(fn) {
    if (/\.html?$/.test(fn)) return 'django';
    if (/\.css$/.test(fn)) return 'css';
    if (/\.js$/.test(fn)) return 'javascript';
    if (/\.json$/.test(fn)) return 'json';
    if (/\.(sh|txt)$/.test(fn)) return 'bash';
    return 'python';
  }
  function hl(code, text) {
    code.textContent = text + (text.slice(-1) === '\n' ? ' ' : '');
    if (window.Prism) Prism.highlightElement(code);
  }
  function layer(body, errLine) {
    var ta = body.querySelector('textarea'), lay = body.querySelector('.ln-layer');
    if (!lay) { lay = el('div', 'ln-layer'); lay.setAttribute('aria-hidden', 'true'); body.insertBefore(lay, body.firstChild); }
    lay.innerHTML = '';
    ta.value.split('\n').forEach(function (t, k) { lay.appendChild(el('div', 'ln' + (errLine === k + 1 ? ' err' : ''), t || '​')); });
  }

  var AC = (function () {
    var WORDS = ['def', 'return', 'import', 'from', 'class', 'if', 'elif', 'else', 'for', 'while', 'in', 'not', 'and', 'or', 'is', 'None', 'True', 'False',
      'print', 'input', 'len', 'str', 'int', 'float', 'bool', 'list', 'dict', 'set', 'tuple', 'range', 'enumerate', 'zip', 'sorted', 'reversed', 'sum', 'min', 'max', 'abs', 'round', 'type', 'isinstance',
      'self', 'pass', 'try', 'except', 'finally', 'raise', 'with', 'as', 'lambda', 'yield', 'break', 'continue', 'global', 'assert', 'open', 'sep', 'end',
      'math', 'random', 'datetime', 'json', 'csv', 'os', 'sys', 'sqlite3', 'collections', 'dataclass', 'Counter', 'defaultdict', 'pathlib', 'Path', 'unittest', 'requests'];
    var KEYWORDS = {};
    'def return import from class if elif else for while in not and or is None True False pass try except raise with as lambda yield global del assert break continue'.split(' ').forEach(function (k) { KEYWORDS[k] = 1; });
    var COMMON = ['append', 'extend', 'insert', 'remove', 'pop', 'sort', 'reverse', 'index', 'count', 'get', 'items', 'keys', 'values', 'update', 'add', 'discard', 'split', 'join', 'strip', 'lstrip', 'rstrip', 'lower', 'upper', 'title', 'capitalize', 'replace', 'find', 'startswith', 'endswith', 'isdigit', 'isalpha', 'format', 'read', 'readline', 'readlines', 'write', 'close', 'copy', 'clear', 'setdefault'];
    var MEMBERS = {
      math: ['sqrt', 'pi', 'floor', 'ceil', 'pow', 'sin', 'cos', 'factorial', 'gcd', 'log', 'e', 'inf'],
      random: ['randint', 'choice', 'shuffle', 'random', 'sample', 'seed', 'uniform', 'randrange'],
      json: ['dumps', 'loads', 'dump', 'load'], csv: ['reader', 'writer', 'DictReader', 'DictWriter'],
      datetime: ['datetime', 'date', 'timedelta', 'time'], os: ['path', 'listdir', 'getcwd', 'remove'],
      sqlite3: ['connect', 'Row'], collections: ['Counter', 'defaultdict', 'deque', 'namedtuple'],
      requests: ['get', 'post', 'exceptions']
    };
    var box = null, st = null, skip = false;
    function hide() { if (box) box.hidden = true; st = null; }
    function caretRect(ta, pos) {
      var m = el('div', 'ac-mirror'); m.textContent = ta.value.slice(0, pos);
      var sp = el('span', '', '​'); m.appendChild(sp); ta.parentNode.appendChild(m);
      var r = sp.getBoundingClientRect(); m.remove(); return r;
    }
    function match(word, qq) {
      var w = word.toLowerCase(), k = qq.toLowerCase(), idx = [], from = 0;
      for (var i = 0; i < k.length; i++) { var p = w.indexOf(k[i], from); if (p === -1) return null; idx.push(p); from = p + 1; }
      return idx;
    }
    function update(ta) {
      if (skip) { skip = false; return; }
      var pos = ta.selectionStart;
      if (pos !== ta.selectionEnd) return hide();
      var before = ta.value.slice(0, pos), line = before.slice(before.lastIndexOf('\n') + 1);
      var isPy = langOf(ta.getAttribute('data-file') || '') === 'python';
      if (isPy && /#/.test(line.replace(/(["'])(?:\\.|(?!\1).)*\1/g, ''))) return hide();
      if (isPy && ((line.split('"').length - 1) % 2 === 1 || (line.split("'").length - 1) % 2 === 1)) return hide();
      var word = (before.match(/[A-Za-z_][\w]*$/) || [''])[0], start = pos - word.length;
      if (word.length < 2) return hide();
      var om = before.slice(0, start).match(/([A-Za-z_][\w]*|\)|\])\s*\.$/), list;
      if (om) list = (MEMBERS[om[1]] || []).concat(COMMON);
      else {
        var rest = stripComments(ta.value.slice(0, start) + ' ' + ta.value.slice(pos)).replace(/(["'])(?:\\.|(?!\1).)*\1/g, '');
        var ids = rest.match(/[A-Za-z_][\w]*/g) || [];
        list = ids.filter(function (w) { return w.length > 1; }).concat(WORDS);
      }
      var seen = {}, items = [];
      list.forEach(function (w, n) {
        if (seen[w] || w === word) return; seen[w] = 1;
        var idx = match(w, word); if (!idx) return;
        var pre = w.toLowerCase().indexOf(word.toLowerCase()) === 0;
        if (!pre) return;
        items.push({ w: w, idx: idx, rank: idx[idx.length - 1] + n / 1000 });
      });
      if (!items.length) return hide();
      items.sort(function (a, b) { return a.rank - b.rank; });
      st = { ta: ta, items: items.slice(0, 8), sel: 0, start: start, pos: pos, member: !!om };
      render();
    }
    function render() {
      if (!box) { box = el('ul', 'ac-box'); box.setAttribute('aria-hidden', 'true'); document.body.appendChild(box); }
      box.innerHTML = '';
      st.items.forEach(function (it, k) {
        var li = el('li', k === st.sel ? 'sel' : '');
        li.appendChild(el('span', 'ac-ico', st.member ? 'ƒ' : (KEYWORDS[it.w] ? 'k' : 'x')));
        var name = el('span', '');
        for (var c = 0; c < it.w.length; c++) name.appendChild(it.idx.indexOf(c) !== -1 ? el('b', '', it.w[c]) : document.createTextNode(it.w[c]));
        li.appendChild(name);
        li.appendChild(el('span', 'ac-kind', st.member ? 'xususiyat' : (KEYWORDS[it.w] ? "kalit so'z" : 'nom')));
        li.addEventListener('mousedown', function (e) { e.preventDefault(); st.sel = k; accept(); });
        box.appendChild(li);
      });
      box.appendChild(el('li', 'ac-help', '↑ ↓ tanlash · Enter yoki Tab — qabul · Esc — yopish'));
      box.hidden = false;
      var r = caretRect(st.ta, st.start);
      var left = Math.max(8, Math.min(r.left, window.innerWidth - box.offsetWidth - 8));
      box.style.left = (left + window.scrollX) + 'px';
      box.style.top = (r.bottom + window.scrollY + 3) + 'px';
    }
    function accept() {
      var ta = st.ta, w = st.items[st.sel].w;
      ta.focus(); ta.setRangeText(w, st.start, st.pos, 'end');
      hide(); skip = true; ta.dispatchEvent(new Event('input'));
    }
    function key(e) {
      if (!st || !box || box.hidden) return false;
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); var n = st.items.length; st.sel = (st.sel + (e.key === 'ArrowDown' ? 1 : n - 1)) % n; render(); return true; }
      if ((e.key === 'Enter' && !e.ctrlKey && !e.metaKey) || e.key === 'Tab') { e.preventDefault(); accept(); return true; }
      if (e.key === 'Escape') { e.preventDefault(); hide(); return true; }
      if (/^(ArrowLeft|ArrowRight|Home|End)$/.test(e.key)) hide();
      return false;
    }
    window.addEventListener('resize', hide);
    return { update: update, key: key, hide: hide };
  })();

  var PAIRS = { '(': ')', '[': ']', '{': '}', '"': '"', "'": "'" };
  function pairKey(ta, e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return false;
    var s = ta.selectionStart, en = ta.selectionEnd, v = ta.value, nx = v[s] || '', pv = v[s - 1] || '', k = e.key;
    var isPy = langOf(ta.getAttribute('data-file') || '') === 'python';
    function fire() { ta.dispatchEvent(new Event('input')); }
    var line = v.slice(v.lastIndexOf('\n', s - 1) + 1, s);
    // Shablon teglari: {% → {%  %}, {{ → {{  }}
    if (!isPy && k === '%' && pv === '{' && nx === '}' && s === en) { e.preventDefault(); ta.setRangeText('%  %', s, en, 'end'); ta.selectionStart = ta.selectionEnd = s + 2; fire(); return true; }
    if (!isPy && k === '{' && pv === '{' && nx === '}' && s === en) { e.preventDefault(); ta.setRangeText('{  }', s, en, 'end'); ta.selectionStart = ta.selectionEnd = s + 2; fire(); return true; }
    if (s === en && k.length === 1 && ')]}"\''.indexOf(k) !== -1 && nx === k) { e.preventDefault(); ta.selectionStart = ta.selectionEnd = s + 1; return true; }
    if (PAIRS[k]) {
      if (s !== en) { e.preventDefault(); ta.setRangeText(k + v.slice(s, en) + PAIRS[k], s, en, 'end'); ta.selectionStart = s + 1; ta.selectionEnd = en + 1; fire(); return true; }
      var quote = k === '"' || k === "'";
      var closing = quote && (line.split(k).length - 1) % 2 === 1;
      if ((!nx || /[\s)\]};,:"'%]/.test(nx)) && !(quote && /[\w]/.test(pv)) && !closing) {
        e.preventDefault(); ta.setRangeText(k + PAIRS[k], s, en, 'end'); ta.selectionStart = ta.selectionEnd = s + 1; fire(); return true;
      }
    }
    if (k === 'Backspace' && s === en && PAIRS[pv] && PAIRS[pv] === nx) { e.preventDefault(); ta.setRangeText('', s - 1, s + 1, 'end'); fire(); return true; }
    if (k === 'Backspace' && s === en && isPy && /^( {4})+$/.test(line)) { e.preventDefault(); ta.setRangeText('', s - 4, s, 'end'); fire(); return true; }
    if (k === 'Enter' && s === en) {
      var ind = (line.match(/^\s*/) || [''])[0];
      if ((pv === '{' && nx === '}') || (pv === '[' && nx === ']') || (pv === '(' && nx === ')')) {
        e.preventDefault(); ta.setRangeText('\n' + ind + '    \n' + ind, s, en, 'end'); ta.selectionStart = ta.selectionEnd = s + 5 + ind.length; fire(); return true;
      }
      if (isPy && /:\s*$/.test(line.replace(/#.*$/, ''))) { e.preventDefault(); ta.setRangeText('\n' + ind + '    ', s, en, 'end'); fire(); return true; }
      if (!isPy && /<(div|ul|ol|li|section|main|nav|header|footer|form|table|tr|body|head|html|article)\b[^>]*>\s*$/.test(line) && /^<\//.test(v.slice(s))) {
        e.preventDefault(); ta.setRangeText('\n' + ind + '    \n' + ind, s, en, 'end'); ta.selectionStart = ta.selectionEnd = s + 5 + ind.length; fire(); return true;
      }
      if (ind) { e.preventDefault(); ta.setRangeText('\n' + ind, s, en, 'end'); fire(); return true; }
    }
    return false;
  }


  var codes = lsGet(PFX + '-kod', {});
  function saveCodes() { lsSet(PFX + '-kod', codes); }

  /* =====================================================================
     2. Muharrir obyekti: bir yoki bir nechta fayl, terminal, input()
     ===================================================================== */
  function Editor(node) {
    var ed = this;
    ed.node = node; ed.id = node.getAttribute('data-ed');
    ed.kind = node.getAttribute('data-kind') || 'example';
    ed.task = ed.kind === 'task' ? (TASKS[ed.id] || null) : null;
    ed.ex = ed.kind === 'example' ? (EXAMPLES[ed.id] || null) : null;
    ed.bodies = $$('.ed-body', node);
    ed.main = (ed.task || ed.ex || {}).main || 'main.py';
    ed.inputs = []; ed.seed = 1; ed.gen = 0;
    ed.bodies.forEach(function (body) {
      var ta = body.querySelector('textarea'), code = body.querySelector('pre code');
      var fkey = ed.id + '/' + ta.getAttribute('data-file');
      var original = ta.defaultValue;
      if (ed.kind === 'task' && typeof codes[fkey] === 'string') ta.value = codes[fkey]; else ta.value = original;
      hl(code, ta.value); layer(body, null);
      ta.addEventListener('input', function () {
        hl(code, ta.value); layer(body, null);
        if (ed.kind === 'task') { codes[fkey] = ta.value; saveCodes(); }
        AC.update(ta);
      });
      ta.addEventListener('blur', function () { AC.hide(); });
      ta.addEventListener('mousedown', function () { AC.hide(); });
      ta.addEventListener('keydown', function (e) {
        if (AC.key(e)) return;
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); ed.run(true); return; }
        if (pairKey(ta, e)) return;
        if (e.key === 'Tab') { e.preventDefault(); ta.setRangeText('    ', ta.selectionStart, ta.selectionEnd, 'end'); ta.dispatchEvent(new Event('input')); }
      });
      if (ed.kind === 'task') {
        var stop = function (e) {
          e.preventDefault();
          ed.note("✋ Topshiriqda kod qo'lda yoziladi — tayyor matnni joylashtirish o'chirilgan. Yozib chiqish — eng yaxshi mashq!");
        };
        ta.addEventListener('paste', stop); ta.addEventListener('drop', stop);
      }
      body._reset = function () { ta.value = original; delete codes[fkey]; hl(code, ta.value); layer(body, null); };
    });
    // fayl yorliqlari (bir nechta fayl bo'lsa)
    ed.tabs = $$('.ed-tab', node);
    ed.tabs.forEach(function (t) {
      t.addEventListener('click', function () { ed.showFile(t.getAttribute('data-file')); });
    });
    var rb = $('.run', node), xb = $('.reset', node);
    if (rb) rb.addEventListener('click', function () { ed.run(true); });
    if (xb) xb.addEventListener('click', function () { ed.reset(); });
    ed.out = $('.out', node); ed.chk = $('.check-out', node);
    if (ed.tabs.length) ed.showFile(ed.main);
  }
  Editor.prototype.showFile = function (fn) {
    this.bodies.forEach(function (b) { b.hidden = b.querySelector('textarea').getAttribute('data-file') !== fn; });
    this.tabs.forEach(function (t) { t.classList.toggle('sel', t.getAttribute('data-file') === fn); });
  };
  Editor.prototype.value = function () {
    var f = {};
    this.bodies.forEach(function (b) { var ta = b.querySelector('textarea'); f[ta.getAttribute('data-file')] = ta.value; });
    return f;
  };
  Editor.prototype.reset = function () {
    this.bodies.forEach(function (b) { b._reset(); });
    saveCodes(); this.gen++;
    this.out.hidden = true; if (this.chk) this.chk.hidden = true;
    this.markError(null, null);
  };
  Editor.prototype.note = function (text) {
    var box = this.chk || this.out;
    box.hidden = false; box.innerHTML = '';
    box.appendChild(el('div', 'c-sum no', text));
  };
  Editor.prototype.markError = function (line, file) {
    var ed = this;
    this.bodies.forEach(function (b) {
      var ta = b.querySelector('textarea');
      layer(b, line && ta.getAttribute('data-file') === file ? line : null);
    });
    if (line && file && this.tabs.length) this.showFile(file);
  };
  Editor.prototype.spec = function () { return this.task || this.ex || {}; };
  Editor.prototype.run = function (fresh) {
    var self = this;
    if (fresh) { self.inputs = []; self.seed = 1 + Math.floor(Math.random() * 99999); }
    AC.hide();
    var out = self.out, myGen = ++self.gen;
    out.hidden = false;
    if (!out.firstChild) { out.appendChild(el('div', 'o-head', 'Terminal')); }
    var pre = $('.o-pre', out), status = $('.o-status', out);
    if (!pre) { pre = el('pre', 'o-pre'); out.appendChild(pre); status = el('div', 'o-status muted'); out.appendChild(status); }
    $$('.o-inrow, .o-errbox', out).forEach(function (n) { n.remove(); });
    status.textContent = '⏳ ' + loadingText();
    self.markError(null, null);
    var spec = self.spec();
    var files = self.value();
    return RT.call({ k: 'run', spec: { files: filesOf(spec, files), main: self.main, inputs: self.inputs, seed: self.seed } }, 10000).then(function (m) {
      if (myGen !== self.gen) return;
      if (m.k === 'timeout') { status.textContent = ''; pre.textContent = ''; out.appendChild(el('div', 'o-errbox err', "⏱ Dastur 10 soniyada tugamadi. Cheksiz sikl bo'lishi mumkin: `while` sharti hech qachon yolg'on bo'lmayapti yoki sikl ichida o'zgaruvchi o'zgarmayapti. Kodni tuzatib, qayta ▶ bosing.")); return; }
      if (m.k === 'dead') return;
      if (m.k === 'fatal') { status.textContent = ''; out.appendChild(el('div', 'o-errbox err', '❌ ' + m.err)); return; }
      var r = m.r;
      pre.textContent = r.out || '';
      status.textContent = '';
      if (r.err) { var ep = el('pre', 'o-errout', r.err); out.appendChild(ep); ep.className = 'o-errbox o-errout'; }
      if (r.need !== null && r.need !== undefined) {
        var row = el('div', 'o-inrow'), inp = el('input', 'o-in'); inp.type = 'text'; inp.autocomplete = 'off'; inp.spellcheck = false;
        inp.setAttribute('aria-label', 'input() uchun javob'); inp.placeholder = 'Javobni yozing va Enter bosing…';
        row.appendChild(inp); row.appendChild(el('span', 'o-hint muted', '↵ Enter — input() ga yuboriladi'));
        out.appendChild(row);
        inp.addEventListener('keydown', function (e) {
          if (e.key === 'Enter') { e.preventDefault(); self.inputs.push(inp.value); self.run(false); }
        });
        setTimeout(function () { try { inp.focus({ preventScroll: true }); } catch (e) { inp.focus(); } }, 30);
        return;
      }
      if (r.error) {
        var box = el('div', 'o-errbox err');
        box.appendChild(el('pre', 'o-tb', r.tb));
        var h = hintFor(r.error.type + ': ' + r.error.msg); if (h) box.appendChild(el('div', 'hint', '💡 ' + h));
        out.appendChild(box);
        self.markError(r.error.line, r.error.file);
      } else {
        status.textContent = '✔ Dastur tugadi.';
      }
    }).catch(function (e) {
      status.textContent = '';
      out.appendChild(el('div', 'o-errbox err', '❌ ' + (e && e.message || e) + " — sahifani yangilab ko'ring. Kurs fayllari (assets papkasi) to'liq ekaniga ishonch hosil qiling."));
    });
  };

  /* Bashorat topshirig'i: javob matni */
  function Answer(node) {
    var a = this;
    a.node = node; a.id = node.getAttribute('data-ans'); a.task = TASKS[a.id] || {};
    a.ta = $('textarea.ans', node); a.chk = $('.check-out', node); a.kind = 'answer';
    var key = a.id + '/ans', saved = codes[key];
    if (typeof saved === 'string') a.ta.value = saved;
    a.ta.addEventListener('input', function () { codes[key] = a.ta.value; saveCodes(); });
    a.ta.addEventListener('keydown', function (e) { if (e.key === 'Tab') { e.preventDefault(); a.ta.setRangeText('    ', a.ta.selectionStart, a.ta.selectionEnd, 'end'); } });
    a.key = key;
  }
  Answer.prototype.value = function () { return { answer: this.ta.value }; };
  Answer.prototype.reset = function () { this.ta.value = ''; delete codes[this.key]; saveCodes(); if (this.chk) this.chk.hidden = true; };
  Answer.prototype.note = function (t) { this.chk.hidden = false; this.chk.innerHTML = ''; this.chk.appendChild(el('div', 'c-sum no', t)); };

  /* =====================================================================
     3. Tekshiruv
     ===================================================================== */
  function diffAnswer(got, want) {
    var g = normOut(got).split('\n'), w = normOut(want).split('\n');
    if (!normOut(got)) return "Javob maydoni bo'sh.";
    if (g.length !== w.length) return 'Qatorlar soni mos emas: sizda ' + g.length + ' qator, kerak bo\'lgani ' + w.length + ' qator.';
    for (var i = 0; i < w.length; i++) if (g[i] !== w[i]) return (i + 1) + '-qator mos emas. Bo\'shliqlar, katta-kichik harf va tinish belgilarigacha tekshiring.';
    return '';
  }
  async function evaluate(id, input) {
    var t = TASKS[id];
    if (t.type === 'bashorat') {
      var got = input.answer || '', ok = (t.answers || []).some(function (a) { return normOut(a) === normOut(got); });
      var lab = 'Javobingiz dasturning haqiqiy chiqishiga mos';
      return { results: [{ ok: ok, l: lab, d: ok ? '' : diffAnswer(got, (t.answers || [''])[0]) + '\n(Dasturni boshdan oxirigacha qo\'lda bajarib ko\'ring: har bir print nima chiqaradi?)' }] };
    }
    var m = await RT.call({ k: 'check', spec: { files: input, fixed: t.fixed || {}, main: t.main || 'main.py', checks: t.checks } }, 25000);
    if (m.k === 'timeout') return { results: [{ ok: false, l: 'Dastur vaqtida tugamadi', d: "⏱ Dastur belgilangan vaqtda tugamadi. Cheksiz sikl bo'lishi mumkin: `while` sharti hech qachon yolg'on bo'lmayapti yoki sikl ichida o'zgaruvchi o'zgarmayapti." }] };
    if (m.k === 'fatal' || m.k === 'dead') return { results: [{ ok: false, l: 'Tekshiruvni ishga tushirib bo\'lmadi', d: m.err || 'Python to\'xtatildi. Qayta urinib ko\'ring.' }] };
    return m.r;
  }

  /* =====================================================================
     4. Jarayon: bajarilganlar, qulflash, yechimlar
     ===================================================================== */
  var done = lsGet(PFX, {}) || {};
  var stat = lsGet(PFX + '-stat', {}) || {};
  if (!stat.active) stat.active = 0;
  function save() { lsSet(PFX, done); }
  function saveStat() { lsSet(PFX + '-stat', stat); }
  var order = [];   // topshiriqlar tartibi (t01..t20, mini)
  var editors = {};

  function isLocked(i) { return !OCHIQ && i > 0 && !done[order[i - 1].id]; }
  function showSolution(o) {
    if (!o.sol || !o.sol.hidden) return;
    o.sol.hidden = false;
    var t = TASKS[o.id], holder = $('.sol-code', o.sol);
    if (holder && !holder.childNodes.length) {
      if (t.type === 'bashorat') {
        holder.appendChild(el('div', 'sol-file', "To'g'ri javob (dastur shuni chiqaradi)"));
        var pr = el('pre', 'sol'), cd = el('code', 'language-none', (t.answers || [''])[0]); pr.appendChild(cd); holder.appendChild(pr);
      } else {
        Object.keys(t.sol || {}).forEach(function (fn) {
          holder.appendChild(el('div', 'sol-file', fn));
          var pre = el('pre', 'sol'), code = el('code', 'language-python', t.sol[fn]); pre.appendChild(code); holder.appendChild(pre);
          if (window.Prism) Prism.highlightElement(code);
        });
      }
      if (t.bug) { var bd = el('div', 'bug-note'); bd.innerHTML = t.bug; holder.appendChild(bd); }
    }
  }
  function refresh() {
    var n = 0;
    order.forEach(function (o, i) {
      var locked = isLocked(i);
      o.card.classList.toggle('locked', locked);
      o.card.classList.toggle('is-done', !!done[o.id]);
      o.badge.textContent = done[o.id] ? '✅ Bajarildi' : (locked ? '🔒 Yopiq' : '▶ Navbatdagi');
      if (i > 0) o.lock.textContent = '🔒 Yopiq — avval «' + order[i - 1].title + '» topshirig\'ini bajaring.';
      if (o.navBtn) {
        var stt = done[o.id] ? 'done' : (locked ? 'lock' : 'now');
        o.navBtn.classList.remove('done', 'lock', 'now'); o.navBtn.classList.add(stt);
        o.navIco.textContent = done[o.id] ? '✓' : o.num;
      }
      if (done[o.id]) n++;
    });
    var pt = $('.prog-text'), pb = $('.prog-track span');
    if (pt) pt.textContent = 'Bajarildi: ' + n + ' / ' + order.length + (OCHIQ ? " · o'qituvchi rejimi" : '');
    if (pb) pb.style.width = (100 * n / Math.max(1, order.length)) + '%';
    summary();
  }
  function markDone(id) { if (done[id]) return false; done[id] = true; save(); refresh(); if (HK && !OCHIQ && !TESTMODE) { try { HK.done(META.num, id, order.length); } catch (e) {} } return true; }

  async function check(i) {
    var o = order[i], ed = editors[o.id], box = ed.chk, btn = $('.check', ed.node);
    if (btn.disabled) return;
    btn.disabled = true; var oldTxt = btn.textContent; btn.textContent = '⏳ Tekshirilmoqda…';
    box.hidden = false; box.innerHTML = '';
    box.appendChild(el('div', 'c-head', 'Tekshiruv'));
    var wait = el('div', 'c-note', TASKS[o.id].type === 'bashorat' ? 'Javob tekshirilmoqda…' : (BIN ? 'Dastur turli ma\'lumotlar bilan ishga tushirilib, tekshirilmoqda…' : 'Python yuklanmoqda, so\'ng talablar tekshiriladi (birinchi marta 10–30 soniya)…')); box.appendChild(wait);
    var ev;
    try { ev = await evaluate(o.id, ed.value()); }
    finally { btn.disabled = false; btn.textContent = oldTxt; }
    wait.remove();
    var passed = 0, list = ev.results;
    stat.checks = (stat.checks || 0) + 1;
    var firstErr = null;
    list.forEach(function (r) {
      if (r.ok) passed++;
      var row = el('div', 'c-row ' + (r.ok ? 'ok' : 'no'));
      row.appendChild(el('span', 'c-ico', r.ok ? '✅' : '❌'));
      var txt = el('span', '', r.l);
      if (!r.ok && r.d) { txt.appendChild(el('pre', 'c-detail', r.d)); if (!firstErr) firstErr = r.d; }
      row.appendChild(txt);
      box.appendChild(row);
    });
    if (ev.syntax && ed.markError) ed.markError(ev.syntax.line, ev.syntax.file);
    if (passed === list.length) {
      saveStat(); markDone(o.id); showSolution(o);
      box.appendChild(el('div', 'c-sum ok', '🎉 Barakalla! Hamma talab bajarildi (' + passed + ' / ' + list.length + ').' + (i + 1 < order.length ? ' Keyingi topshiriq ochildi.' : ' Darsning barcha topshiriqlari tugadi!')));
      if (i + 1 < order.length) {
        var nb = el('button', 'next-btn', 'Keyingi topshiriqqa o\'tish →'); nb.type = 'button';
        nb.addEventListener('click', function () { select(order[i + 1].key, true); });
        box.appendChild(nb);
      }
    } else {
      o.fails++; stat.fails = (stat.fails || 0) + 1; saveStat(); summary(); if (HK && !OCHIQ && !TESTMODE) { try { HK.fail(META.num, o.id, order.length); } catch (e) {} }
      var h = firstErr && hintFor(firstErr);
      if (h) box.appendChild(el('div', 'c-note hint', '💡 ' + h));
      box.appendChild(el('div', 'c-sum no', 'Hozircha ' + passed + ' / ' + list.length + ' talab bajarildi. ❌ belgili qatorlarni tuzatib, qayta tekshiring.'));
      if (o.fails >= SOL_AFTER) { showSolution(o); box.appendChild(el('div', 'c-note', 'Yechim ochildi — pastda ko\'ring, solishtiring va o\'zingiz qayta yozing.')); }
      else if (o.sol) box.appendChild(el('div', 'c-note', 'Yechim ' + SOL_AFTER + ' ta muvaffaqiyatsiz urinishdan keyin ochiladi (hozir: ' + o.fails + '). Avval «💡 Yordam» ni o\'qing.'));
    }
  }

  /* Yordam: 3 bosqichli maslahat */
  function wireHint(det) {
    var id = det.getAttribute('data-hint'), t = TASKS[id], body = $('.d-body', det), list = (t && t.hint) || [], shown = 0;
    if (!list.length) return;
    det.addEventListener('toggle', function () { if (det.open && !shown) more(); });
    var btn = el('button', 'next-btn hint-more', ''); btn.type = 'button';
    function more() {
      if (shown >= list.length) return;
      var d = el('div', 'hint-step'); d.innerHTML = '<b>' + (shown + 1) + '-bosqich:</b> ' + list[shown]; body.insertBefore(d, btn);
      shown++;
      btn.hidden = shown >= list.length; btn.textContent = 'Yana maslahat kerak (' + (shown + 1) + '/' + list.length + ')';
    }
    btn.addEventListener('click', more);
    body.appendChild(btn);
  }

  /* Kutilgan natija: yechimdan oldindan hisoblangan namuna */
  function wireExpect(det) {
    var id = det.getAttribute('data-expect'), e = EXP[id], body = $('.d-body', det), filled = false;
    det.addEventListener('toggle', function () {
      if (!det.open || filled) return; filled = true;
      if (!e || (!(e.io || []).length && !(e.calls || []).length)) { body.appendChild(el('p', 'c-note', "Bu topshiriqda aniq natija shartda yozilgan (yuqoridagi «✅ Natija shunday chiqishi kerak» blokiga qarang).")); return; }
      (e.io || []).forEach(function (c, k) {
        var w = el('div', 'exp-case');
        w.appendChild(el('div', 'exp-h', (e.io.length > 1 ? (k + 1) + '-misol' : 'Misol')));
        if (c.in && c.in.length) { w.appendChild(el('div', 'exp-l', 'Kirish (input):')); w.appendChild(el('pre', 'exp-pre', c.in.join('\n'))); }
        w.appendChild(el('div', 'exp-l', 'Dastur chiqarishi kerak:')); w.appendChild(el('pre', 'exp-pre', c.out));
        body.appendChild(w);
      });
      if ((e.calls || []).length) {
        var w2 = el('div', 'exp-case'); w2.appendChild(el('div', 'exp-l', 'Misollar:'));
        w2.appendChild(el('pre', 'exp-pre', e.calls.join('\n'))); body.appendChild(w2);
      }
    });
  }

    /* =====================================================================
     5. Navigatsiya (yon menyu, sahifalar, qidiruv)
     ===================================================================== */
  var secs = [], navMap = {}, sel = null, pagerBox = null, topTitle = null;
  function select(key, scroll) {
    if (!navMap[key]) return;
    sel = key;
    secs.forEach(function (s) { s.node.classList.toggle('off', s.key !== key); });
    Object.keys(navMap).forEach(function (k) {
      var b = navMap[k].btn, on = k === key;
      b.classList.toggle('sel', on);
      if (on) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current');
    });
    AC.hide(); pager();
    if (topTitle) topTitle.textContent = navMap[key].title;
    document.body.classList.remove('nav-open');
    lsSet(PFX + '-joy', key); if (HK && !OCHIQ && !TESTMODE) { try { HK.visit(META.num, key); } catch (e) {} }
    if (scroll) window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  function pager() {
    if (!pagerBox) return;
    var keys = secs.map(function (s) { return s.key; }), k = keys.indexOf(sel);
    pagerBox.innerHTML = '';
    function mk(idx, cls, pre) {
      var b = el('button', 'pg ' + cls, ''); b.type = 'button';
      if (idx < 0 || idx >= keys.length) { b.style.visibility = 'hidden'; return b; }
      b.appendChild(el('small', '', pre)); b.appendChild(el('span', '', navMap[keys[idx]].title));
      b.addEventListener('click', function () { select(keys[idx], true); });
      return b;
    }
    pagerBox.appendChild(mk(k - 1, 'prev', '← Oldingi')); pagerBox.appendChild(mk(k + 1, 'next', 'Keyingi →'));
  }
  function buildNav() {
    var side = $('.side'), nav = $('.s-nav', side), groups = {};
    $$('.sec').forEach(function (s) {
      var key = s.getAttribute('data-key'), g = s.getAttribute('data-group'), ico = s.getAttribute('data-ico') || '•', title = s.getAttribute('data-title');
      if (!groups[g]) { var gd = el('div', 's-group'); gd.appendChild(el('div', 's-head', g)); nav.appendChild(gd); groups[g] = gd; }
      var b = el('button', 'nav-i', ''); b.type = 'button';
      var ic = el('span', 'n-ico', ico), stt = el('span', 'n-st', '');
      b.appendChild(ic); b.appendChild(el('span', 'n-ttl', title)); b.appendChild(stt);
      b.title = title;
      b.addEventListener('click', function () { select(key, true); });
      groups[g].appendChild(b);
      if (s.getAttribute('data-task')) b.classList.add('ex');
      navMap[key] = { btn: b, title: title, node: s, ico: ic, st: stt };
      secs.push({ key: key, node: s });
    });
    var noRes = el('p', 's-empty', 'Hech narsa topilmadi.'); noRes.hidden = true; nav.appendChild(noRes);
    var search = $('.s-search');
    function flat(s) { return String(s).toLowerCase().replace(/[ʻʼ’‘`]/g, "'"); }
    search.addEventListener('input', function () {
      var qq = flat(search.value.trim()), any = false;
      Object.keys(navMap).forEach(function (k) {
        var m = navMap[k], ok = !qq || flat(m.title + ' ' + m.node.textContent).indexOf(qq) !== -1;
        m.btn.hidden = !ok; if (ok) any = true;
      });
      $$('.s-group', nav).forEach(function (g) { g.hidden = !g.querySelector('.nav-i:not([hidden])'); });
      noRes.hidden = any;
    });
    var mb = $('.menu-btn'); topTitle = $('.top-ttl');
    if (mb) mb.addEventListener('click', function () { document.body.classList.toggle('nav-open'); });
    var shade = $('.shade'); if (shade) shade.addEventListener('click', function () { document.body.classList.remove('nav-open'); });
    pagerBox = $('.pager');
  }

  /* Tema */
  function wireTheme() {
    var tb = $('.theme-btn'); if (!tb) return;
    function paint() { var d = document.documentElement.classList.contains('dark'); tb.textContent = d ? '☀️ Kunduzgi' : '🌙 Tungi rejim'; tb.setAttribute('aria-pressed', d ? 'true' : 'false'); }
    tb.addEventListener('click', function () {
      var d = document.documentElement.classList.toggle('dark');
      try { localStorage.setItem('js-kurs-mavzu', d ? 'tungi' : 'kunduzgi'); } catch (e) {}
      paint();
    });
    paint();
  }

  /* =====================================================================
     6. Mini-test va dars yakuni
     ===================================================================== */
  var Quiz = (function () {
    var qs = [], ans = lsGet(PFX + '-test', []) || [], res = null;
    function saveQ() { lsSet(PFX + '-test', ans); }
    function paint(q, i) {
      var pick = ans[i] || null;
      q.opts.forEach(function (b) {
        b.disabled = !!pick; b.className = 'opt'; b.textContent = b._text;
        if (!pick) return;
        if (b._letter === q.correct) { b.className = 'opt right'; b.textContent = '✅ ' + b._text; }
        else if (b._letter === pick) { b.className = 'opt wrong'; b.textContent = '❌ ' + b._text; }
      });
      q.fb.hidden = !pick;
      if (pick) {
        var ok = pick === q.correct;
        q.fb.className = 'q-fb' + (ok ? '' : ' no');
        q.fb.textContent = (ok ? '✅ To\'g\'ri! ' : '❌ Noto\'g\'ri. ') + q.explain;
      }
    }
    function score() { return qs.filter(function (q, i) { return ans[i] === q.correct; }).length; }
    function answered() { return qs.filter(function (q, i) { return !!ans[i]; }).length; }
    function result() {
      if (!res) return;
      var a = answered(), n = qs.length; res.innerHTML = '';
      if (a < n) { res.className = 'quiz-res'; res.appendChild(el('span', '', 'Javob berildi: ' + a + ' / ' + n + '. Hamma savolga javob bersangiz, natija shu yerda chiqadi.')); return; }
      var s = score();
      if (HK && !OCHIQ && !TESTMODE) { try { HK.quiz(META.num, s, n); } catch (e) {} }
      res.className = 'quiz-res full';
      res.appendChild(el('span', '', '📊 Test natijasi: ' + s + ' / ' + n + ' — ' + (s === n ? "a'lo, hammasi to'g'ri!" : s >= n - 2 ? 'yaxshi natija.' : "xato qilingan savollar mavzusini qayta o'qib chiqing.")));
      var b = el('button', '', '↺ Testni qayta ishlash'); b.type = 'button'; b.addEventListener('click', reset); res.appendChild(b);
      var nb = navMap.test; if (nb) nb.st.textContent = s + '/' + n;
    }
    function reset() { ans = []; saveQ(); qs.forEach(paint); result(); summary(); if (navMap.test) navMap.test.st.textContent = ''; }
    function init() {
      $$('.quiz .q').forEach(function (node, i) {
        var q = { correct: node.getAttribute('data-ok'), explain: $('.q-ex', node).textContent, opts: [], fb: el('div', 'q-fb', '') };
        $$('.opt', node).forEach(function (b) {
          b._text = b.textContent; b._letter = b.getAttribute('data-l');
          b.addEventListener('click', function () { if (ans[i]) return; ans[i] = b._letter; saveQ(); paint(q, i); result(); summary(); });
          q.opts.push(b);
        });
        q.fb.hidden = true; q.fb.setAttribute('role', 'status'); node.appendChild(q.fb);
        qs.push(q); paint(q, i);
      });
      res = $('.quiz-res'); result();
    }
    return { init: init, reset: reset, score: score, answered: answered, total: function () { return qs.length; } };
  })();

  function two(n) { return (n < 10 ? '0' : '') + n; }
  function fmtMin(sec) { var m = Math.max(1, Math.round(sec / 60)); return m < 60 ? m + ' daqiqa' : Math.floor(m / 60) + ' soat ' + (m % 60) + ' daq.'; }
  function summary() {
    var box = $('.sum-card'); if (!box) return;
    var n = order.filter(function (o) { return done[o.id]; }).length, qa = Quiz.answered(), qt = Quiz.total();
    var complete = n === order.length && qa === qt && qt > 0;
    if (complete && !stat.end) { stat.end = Date.now(); saveStat(); }
    if (!complete && stat.end) { delete stat.end; saveStat(); }
    box.innerHTML = ''; box.className = 'sum-card' + (complete ? ' done' : '');
    var name = lsGet('python-kurs-oquvchi', '');
    var nm = el('label', 'sum-name'); nm.appendChild(el('span', '', "O'quvchi:"));
    var inp = el('input'); inp.type = 'text'; inp.placeholder = 'Ism va familiyangizni yozing'; inp.value = name || '';
    inp.addEventListener('change', function () { lsSet('python-kurs-oquvchi', inp.value.trim()); });
    nm.appendChild(inp);
    function cell(v, t) { var c = el('div', 'sum-cell'); c.appendChild(el('b', '', v)); c.appendChild(document.createTextNode(t)); return c; }
    var grid = el('div', 'sum-grid');
    if (!complete) {
      box.appendChild(el('h3', '', '🏁 Dars yakuni'));
      box.appendChild(el('p', '', 'Hamma topshiriq va mini-test tugagach, bu yerda yakuniy natija chiqadi.'));
      box.appendChild(nm);
      grid.appendChild(cell((n === order.length ? '✅ ' : '⬜ ') + n + ' / ' + order.length, 'topshiriq bajarildi'));
      grid.appendChild(cell((qa === qt ? '✅ ' : '⬜ ') + qa + ' / ' + qt, 'test savoliga javob berildi'));
      grid.appendChild(cell(fmtMin(stat.active || 0), 'faol ishlangan vaqt'));
      box.appendChild(grid); return;
    }
    var d = new Date(stat.end);
    box.appendChild(el('h3', '', '🎉 ' + META.num + '-dars yakunlandi!'));
    box.appendChild(el('p', '', "Barakalla! Shu kartani o'qituvchingizga ko'rsating."));
    box.appendChild(nm);
    grid.appendChild(cell(n + ' / ' + order.length, 'topshiriq bajarildi'));
    grid.appendChild(cell(Quiz.score() + ' / ' + qt, 'mini-test natijasi'));
    grid.appendChild(cell(String(stat.checks || 0), 'marta tekshirildi (' + (stat.fails || 0) + ' tasi muvaffaqiyatsiz)'));
    grid.appendChild(cell(fmtMin(stat.active || 0), 'faol ishlangan vaqt'));
    grid.appendChild(cell(two(d.getDate()) + '.' + two(d.getMonth() + 1) + '.' + d.getFullYear(), 'tugatilgan sana, soat ' + two(d.getHours()) + ':' + two(d.getMinutes())));
    box.appendChild(grid);
  }
  // Faol vaqt: sahifa ko'rinib turgan va oxirgi 2 daqiqada harakat bo'lgan vaqtgina hisoblanadi.
  var lastAct = Date.now();
  ['keydown', 'mousedown', 'scroll', 'touchstart', 'mousemove'].forEach(function (ev) { window.addEventListener(ev, function () { lastAct = Date.now(); }, { passive: true }); });
  setInterval(function () {
    if (document.visibilityState === 'visible' && Date.now() - lastAct < 120000 && !stat.end) {
      stat.active = (stat.active || 0) + 15; saveStat();
      var cells = $$('.sum-card .sum-cell'); if (cells.length && !$('.sum-card.done')) summary();
    }
  }, 15000);

  /* Jarayonni tozalash */
  function wireReset() {
    var clr = $('.reset-btn'); if (!clr) return;
    var CLR = clr.textContent, armed = false;
    clr.addEventListener('click', function () {
      if (!armed) {
        armed = true; clr.textContent = '⚠️ Natijalar, kod va test o\'chadi. Yana bosing';
        setTimeout(function () { armed = false; clr.textContent = CLR; }, 5000); return;
      }
      armed = false; clr.textContent = CLR;
      done = {}; save(); codes = {}; saveCodes();
      Object.keys(editors).forEach(function (k) { editors[k].reset(); });
      order.forEach(function (o) { o.fails = 0; if (o.sol && !OCHIQ) o.sol.hidden = true; });
      stat = { active: 0, checks: 0, fails: 0 }; saveStat(); Quiz.reset(); refresh();
      select(secs[0].key, true);
    });
  }


  /* =====================================================================
     7. Ishga tushirish
     ===================================================================== */
  function init() {
    if (window.Prism) $$('pre.static code').forEach(function (c) { Prism.highlightElement(c); });
    buildNav(); wireTheme(); wireReset();
    $$('.editor').forEach(function (n) { var e = new Editor(n); editors[e.id] = e; });
    $$('.ans-wrap').forEach(function (n) { var a = new Answer(n); editors[a.id] = a; });
    $$('.card.step[data-task]').forEach(function (card) {
      var id = card.getAttribute('data-task'), h3 = $('h3', card);
      var badge = el('span', 'st-badge', ''); h3.appendChild(badge);
      var lock = el('p', 'lock-msg', ''); card.appendChild(lock);
      var secKey = card.closest('.sec').getAttribute('data-key');
      var o = { id: id, key: secKey, card: card, title: card.getAttribute('data-title'), num: card.getAttribute('data-num'),
        badge: badge, lock: lock, sol: $('details.solution', card), fails: 0 };
      if (navMap[secKey]) { o.navBtn = navMap[secKey].btn; o.navIco = navMap[secKey].ico; }
      order.push(o);
      var ed = editors[id];
      var cb = $('.check', ed.node);
      cb.addEventListener('click', function () { check(order.indexOf(o)); });
      if (o.sol) { o.sol.hidden = !(OCHIQ || done[id]); if (!o.sol.hidden) { o.sol.hidden = true; showSolution(o); } }
    });
    $$('details.expect').forEach(wireExpect);
    $$('details.hintbox').forEach(wireHint);
    Quiz.init();
    refresh();
    var saved = lsGet(PFX + '-joy', null);
    select(saved && navMap[saved] ? saved : secs[0].key, false);
    if (order.length || $$('.editor').length) setTimeout(RT.warm, TESTMODE ? 0 : 50);
    if (TESTMODE) window.__kursReadyFlag = true;
  }

  /* Avtomatik sinov (ishlab chiquvchi): yechim hamma tekshiruvdan o'tadimi, boshlang'ich kod o'tmaydimi */
  window.__kursSelfTest = async function (only) {
    var out = [];
    for (var i = 0; i < order.length; i++) {
      var o = order[i], t = TASKS[o.id];
      if (only && only.indexOf(o.id) === -1) continue;
      var ed = editors[o.id], starter, sol;
      if (t.type === 'bashorat') { starter = { answer: '' }; sol = { answer: (t.answers || [''])[0] }; }
      else {
        starter = {}; ed.bodies.forEach(function (b) { var ta = b.querySelector('textarea'); starter[ta.getAttribute('data-file')] = ta.defaultValue; });
        sol = t.sol;
      }
      var a = await evaluate(o.id, sol), b = await evaluate(o.id, starter);
      out.push({ id: o.id, solOk: a.results.every(function (r) { return r.ok; }), solFails: a.results.filter(function (r) { return !r.ok; }),
        starterPasses: b.results.every(function (r) { return r.ok; }) });
    }
    return out;
  };
  window.__kursEditors = editors;

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
