# 🚀 SBM - Smart Business Maker

منصة متكاملة لتطوير الأفكار وتحويلها إلى تطبيقات ويب وتطبيقات إلكترونية باستخدام الذكاء الاصطناعي

## 🎯 الرؤية
منصة ذكية تجمع بين:
- 💬 **نقاش وتحليل الأفكار** مع AI متعدد
- 💻 **محرر أكواد متقدم** مع معاينة حية
- 🚀 **نشر وإطلاق التطبيقات** تلقائياً
- 📊 **إدارة المشاريع والبيانات** المستقلة

## 🎯 المرحلة الأولى (MVP - Minimum Viable Product)

### الميزات الأساسية:
- ✅ صفحة رئيسية وتسجيل دخول آمن
- ✅ لوحة تحكم للمشاريع
- ✅ نافذة chat مع AI (Claude / GPT-4)
- ✅ محرر أكواد مدمج مع اكمال ذكي
- ✅ معاينة حية للتطبيقات
- ✅ قاعدة بيانات لحفظ المشاريع

## 📁 هيكل المشروع
```
SBM/
├── frontend/              # واجهة المستخدم (React + Vite)
│   ├── src/
│   │   ├── components/   # مكونات React
│   │   ├── pages/        # الصفحات الرئيسية
│   │   ├── hooks/        # React Hooks مخصص
│   │   ├── styles/       # التصميمات (Tailwind)
│   │   └── App.jsx
│   └── package.json
│
├── backend/               # الخادم (Node.js + Express)
│   ├── src/
│   │   ├── routes/       # المسارات والـ APIs
│   │   ├── controllers/  # معالجات الطلبات
│   │   ├── models/       # نماذج قاعدة البيانات
│   │   ├── middleware/   # Middleware مخصص
│   │   └── server.js
│   └── package.json
│
├── database/              # قاعدة البيانات
│   ├── schema.sql        # هيكل قاعدة البيانات
│   └── migrations/       # تحديثات قاعدة البيانات
│
├── docs/                  # التوثيق
│   ├── API.md            # توثيق APIs
│   ├── ARCHITECTURE.md   # معمارية المشروع
│   └── SETUP.md          # كيفية البدء
│
└── README.md
```

## 🛠️ التقنيات المستخدمة

### Frontend
- **React 18** - مكتبة واجهات المستخدم
- **Vite** - بناء سريع وتطوير
- **Tailwind CSS** - تصميم عصري
- **Monaco Editor** - محرر أكواد احترافي
- **Socket.io** - تواصل حي مع السيرفر

### Backend
- **Node.js** - بيئة تنفيذ JavaScript
- **Express.js** - إطار العمل
- **PostgreSQL** - قاعدة بيانات قوية
- **OpenAI / Anthropic API** - الذكاء الاصطناعي
- **JWT** - المصادقة الآمنة

### DevOps
- **Docker** - حزم التطبيق
- **GitHub Actions** - CI/CD
- **Vercel / Railway** - الاستضافة

## 🚀 البدء السريع

### المتطلبات:
- Node.js 18+
- PostgreSQL 13+
- npm أو yarn

### التثبيت والتشغيل:
```bash
# 1. استنساخ المستودع
git clone https://github.com/ecoffercom-dot/SBM.git
cd SBM

# 2. تثبيت المتطلبات - Frontend
cd frontend
npm install
npm run dev

# 3. تثبيت المتطلبات - Backend (في terminal جديد)
cd ../backend
npm install
npm run dev

# 4. قاعدة البيانات
# تأكد من تشغيل PostgreSQL وشغل:
psql < database/schema.sql
```

## 📈 خريطة الطريق (Roadmap)

### Phase 1 - MVP (الحالي) 🟢
- [x] إعداد هيكل المشروع
- [ ] صفحة تسجيل الدخول
- [ ] لوحة التحكم الأساسية
- [ ] نافذة Chat مع AI
- [ ] محرر أكواد بسيط
- [ ] قاعدة بيانات للمشاريع

### Phase 2 - التطور 🟡
- [ ] نشر تلقائي للتطبيقات
- [ ] دعم عدة لغات برمجية
- [ ] نماذج وقوالب جاهزة
- [ ] التعاون بين المستخدمين

### Phase 3 - المتقدم 🟠
- [ ] AI يكتب الاختبارات
- [ ] تحسين الأداء والأمان
- [ ] Marketplace للتطبيقات
- [ ] تحليلات متقدمة

## 👥 المساهمة
نرحب بالمساهمات! اتبع الخطوات:
1. Fork المستودع
2. أنشئ branch جديد (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m 'Add some AmazingFeature'`)
4. Push إلى Branch (`git push origin feature/AmazingFeature`)
5. افتح Pull Request

## 📝 الترخيص
MIT License - انظر `LICENSE` للمزيد

---

**الحالة:** 🟢 في التطوير  
**النسخة:** 1.0.0-alpha  
**المطورون:** جماعي بالتعاون  
**آخر تحديث:** 2026-07-28
