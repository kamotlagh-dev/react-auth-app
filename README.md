# React Auth App (Login / Sign Up / Main)

پروژه React (Vite) با صفحه‌های ورود، ثبت‌نام و صفحه اصلی؛ طراحی Mobile-first با تم آبی.

## اجرا

```bash
npm install
npm run dev
```

سپس آدرس نمایش‌داده‌شده (معمولاً http://localhost:5173) را باز کنید.

## حساب تست

- Email: kamotlagh.dev@gmail.com
- Pass: 123456

## ساختار پروژه

```
src/
├── main.jsx              نقطه شروع و Providerها
├── App.jsx               مسیرها (Routes)
├── components/           Input, Button, Message, AuthLayout, ProtectedRoute
├── pages/                LoginPage, SignUpPage, MainPage
├── context/AuthContext   وضعیت کاربر واردشده
├── services/authService  ورود/ثبت‌نام (localStorage) - قابل جایگزینی با API
├── utils/validators      اعتبارسنجی ایمیل و رمز
└── styles/               global.css, auth.css, main.css
```

## ساخت نسخه نهایی

```bash
npm run build
```
