# Python kursi — o'quvchi kirishi va o'qituvchi paneli (Firebase)

Bu papka — oddiy HTML/CSS/JS sayt. Server yozish shart emas: kirish (login/parol) va natijalar
**Firebase** (Google'ning bepul bulut xizmati) orqali saqlanadi.

## Nima bor

| Fayl | Vazifasi |
|---|---|
| `login.html` | Kirish sahifasi (birinchi marta — administrator yaratish) |
| `index.html` | O'quvchi paneli: progress, «Davom etish», darslar ro'yxati |
| `admin.html` | O'qituvchi paneli: guruhlar, o'quvchilar, statistika |
| `dars-01.html … dars-32.html` | Darslar (kirmagan odam ochsa, login sahifasiga yo'naltiriladi) |
| `sinf/config.js` | **Firebase kalitlari shu yerga yoziladi** |
| `firestore.rules` | Ma'lumotlar bazasi xavfsizlik qoidalari (Firebase'ga qo'yiladi) |

`sinf/config.js` bo'sh qolsa, sayt **DEMO rejimida** ishlaydi: hamma narsa faqat shu brauzerda saqlanadi
(sinab ko'rish uchun yaxshi, lekin o'quvchilar natijasini o'qituvchi ko'ra olmaydi).

## 1. Firebase loyihasini yaratish (5 daqiqa)

1. <https://console.firebase.google.com> ga Google akkauntingiz bilan kiring.
2. **Add project** (Loyiha qo'shish) → nom: `django-kurs` (Django kursi uchun yaratgan loyihangiz bo'lsa, **yangisini ochmang — o'shandan foydalaning**, 7-bo'limga qarang) → Google Analytics'ni **o'chirib qo'ying** → **Create**.

## 2. Kirish usulini yoqish

1. Chap menyu: **Build → Authentication → Get started**.
2. **Sign-in method** → **Email/Password** → faqat birinchi tumblerni (*Enable*) yoqing → **Save**.
   (O'quvchilarga haqiqiy pochta kerak emas: login `ali` bo'lsa, ichkarida `ali@sinf.uz` bo'ladi.)

## 3. Ma'lumotlar bazasi va qoidalar

1. **Build → Firestore Database → Create database**.
2. Joylashuv: `eur3 (europe-west)` yoki sizga yaqini → **Production mode** → **Create**.
3. **Rules** (Qoidalar) yorlig'iga o'ting, ichidagi hamma narsani o'chirib, shu papkadagi
   **`firestore.rules`** faylining ichini to'liq joylang → **Publish**.

## 4. Kalitlarni saytga ulash

1. Chap tepada ⚙️ **Project settings → General**.
2. Pastda **Your apps → `</>` (Web)** → nom bering (masalan `kurs`) → **Register app**.
3. Chiqqan `firebaseConfig = { apiKey: "...", ... }` ichidagi qiymatlarni
   **`sinf/config.js`** dagi `firebase: { ... }` ga ko'chiring (faqat 6 ta qiymat).

> `apiKey` yashirin kalit emas — u brauzerda ochiq turadi. Himoyani 3-qadamdagi qoidalar ta'minlaydi.

## 5. Internetga joylash

Butun papkani Netlify, Cloudflare Pages yoki shunga o'xshash xizmatga yuklang.
Keyin Firebase'da: **Authentication → Settings → Authorized domains → Add domain** va
saytingiz manzilini (masalan `kurs.netlify.app`) qo'shing — bo'lmasa kirish ishlamaydi.

> Faylni to'g'ridan-to'g'ri ikki marta bosib (file://) ochsangiz kirish ishlamaydi — sayt http(s) orqali ochilishi kerak.

## 6. Birinchi ishga tushirish

1. Saytning `login.html` sahifasini oching — **«Birinchi sozlash»** formasi chiqadi.
2. O'z ismingiz, login va parolingizni yozing → **Administratorni yaratish**. Bu faqat **bir marta** ishlaydi.
3. **Guruhlar → + Guruh qo'shish** (masalan `11-A`).
4. Guruh ichida **Ro'yxat bilan qo'shish**: o'quvchilar ismini har qatorga yozing:
   ```
   Ali Valiyev
   Hasan Karimov
   Dilnoza Rahimova; dilnoza; parol123
   ```
   Login va parol o'zi tuziladi (yoki `Ism; login; parol` ko'rinishida o'zingiz bering).
5. Chiqqan **login/parol jadvalini yuklab oling yoki chop eting** — parollar keyin ko'rinmaydi.

## Kundalik ishlash

- **O'quvchi**: `login.html` → login/parol → `index.html` da «Davom etish». Natijalar avtomatik bulutga yoziladi.
  Boshqa kompyuterdan kirsa ham bajargan topshiriqlari qaytadi.
- **O'qituvchi**: `admin.html` →
  - **Guruhlar**: har guruh uchun o'rtacha progress, bugun ishlaganlar, ortda qolganlar.
  - Guruh ichida: o'quvchilar jadvali (kim qaysi dars/topshiriqda), 14 kunlik faollik grafigi,
    **eng qiyin topshiriqlar** (eng ko'p xato qilingan), darslar xaritasi, CSV yuklash.
  - O'quvchini bosing: dars-ma'dars natija, qaysi topshiriqda qiynalgani, tahrirlash,
    parol tiklash, natijani nolga tushirish.
  - **O'qituvchilar** yorlig'i: boshqa o'qituvchi qo'shish.
- Panel har daqiqada o'zi yangilanadi (↻ tugmasi — darhol yangilash).

## Parolni unutsa

Xavfsizlik uchun parollar hech qayerda saqlanmaydi, shuning uchun eskisini ko'rib bo'lmaydi.
O'quvchini bosing → **Parol tiklash**: yangi login/parol beriladi, barcha natijalar yangisiga ko'chiriladi.
O'quvchi o'zi ham parolini almashtirishi mumkin (tepada **Parol** tugmasi).

## Chegaralar (bilib qo'ying)

- Natijani brauzer yuboradi, shuning uchun juda tajribali o'quvchi uni soxtalashtirishi mumkin. Sinf uchun
  bu odatda muammo emas, lekin imtihon sifatida ishonchli emas.
- Yechimlar dars fayllari ichida shifrlangan holda turadi (kursning o'zi shunday qurilgan) — yetarlicha
  qiziqqan o'quvchi ularni topishi mumkin.
- Bepul Firebase tarifi (Spark) kichik/o'rta sinf uchun yetadi (kuniga 50 ming o'qish, 20 ming yozish).
  Ochiq turgan admin paneli har daqiqada guruh sonicha hujjat o'qiydi.
- Bir kompyuterda ikki o'quvchi ishlasa, almashganda oldingisining shu kompyuterdagi yozgan kodi tozalanadi
  (bajarilgan topshiriqlar bulutda saqlanadi, kod esa faqat brauzerda turadi).
- Akkauntni «o'chirish» uni faqat bloklaydi (Firebase'dan to'liq o'chirish konsol orqali: Authentication → Users).

## 7. Django kursi bilan bir Firebase loyihasi

Python kursi Django kursi bilan **bir xil Firebase loyihasini** ishlata oladi: o'quvchi logini ikkala kursda bir xil,
natijalar esa alohida (`progress` — Django, `progress_python` — Python) saqlanadi.

1. `sinf/config.js` ga Django kursidagi **o'sha** `firebase: { ... }` qiymatlarini ko'chiring.
2. Firebase → Firestore → **Rules**: shu papkadagi **`firestore.rules`** ni to'liq joylab **Publish** qiling
   (unda `progress_python` qoidasi bor; Django qoidalari ham saqlangan).
3. **Authentication → Settings → Authorized domains** ga Python kursi joylashgan yangi manzilni qo'shing.
4. Foydalanuvchilar (o'quvchilar, guruhlar) ikkala kursda umumiy bo'ladi — qayta yaratish shart emas.

## 8. Kurs tarkibi

32 dars, 7 bo'lim; har darsda 20 topshiriq + mini-loyiha, 8 savollik test, lug'at, xatolar, uyga vazifa.
Python brauzerning o'zida (Pyodide) ishlaydi, hech narsa o'rnatish shart emas. 32-dars oxirida o'quvchi loyihani
o'z kompyuteriga (Python, VS Code, venv, git, GitHub) ko'chirishni o'rganadi; uning «Yakuniy himoya» qismini o'qituvchi baholaydi.
