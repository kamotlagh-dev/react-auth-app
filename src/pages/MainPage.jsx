import { useAuth } from '../context/AuthContext.jsx';

const TILES = [
  { icon: '📊', value: '۱۲۸', label: 'بازدید امروز' },
  { icon: '✅', value: '۲۴', label: 'کار انجام‌شده' },
  { icon: '💬', value: '۹', label: 'پیام جدید' },
  { icon: '⭐', value: '۴.۸', label: 'امتیاز' },
];

const ACTIVITIES = [
  { icon: '🔔', text: 'ورود موفق به حساب' },
  { icon: '📁', text: 'پروژه جدید ایجاد شد' },
  { icon: '👤', text: 'پروفایل به‌روزرسانی شد' },
];

export default function MainPage() {
  const { user, logout } = useAuth();

  return (
    <div className="screen">
      <header className="top">
        <div className="who">
          <div className="av">{user.name.trim().charAt(0).toUpperCase()}</div>
          <div>
            <small>سلام 👋</small>
            <b>{user.name}</b>
          </div>
        </div>
        <button className="out" onClick={logout}>خروج</button>
      </header>

      <div className="grid">
        {TILES.map((t) => (
          <div className="tile" key={t.label}>
            <div className="ic">{t.icon}</div>
            <b>{t.value}</b>
            <span>{t.label}</span>
          </div>
        ))}
      </div>

      <section className="sec">
        <h3>اطلاعات حساب</h3>
        <div className="row"><i>✉️</i><span style={{ direction: 'ltr' }}>{user.email}</span></div>
      </section>

      <section className="sec">
        <h3>فعالیت‌های اخیر</h3>
        {ACTIVITIES.map((a) => (
          <div className="row" key={a.text}><i>{a.icon}</i><span>{a.text}</span></div>
        ))}
      </section>

      <div style={{ flex: 1 }} />
      <nav className="nav"><span className="on">🏠</span><span>🔍</span><span>🔔</span><span>👤</span></nav>
    </div>
  );
}
