import { Link } from 'react-router-dom';

export default function AuthLayout({ title, subtitle, active, children }) {
  return (
    <div className="screen">
      <header className="hero">
        <div className="logo">🔐</div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </header>
      <section className="card">
        <nav className="tabs">
          <Link to="/login" className={active === 'login' ? 'on' : ''}>ورود</Link>
          <Link to="/signup" className={active === 'signup' ? 'on' : ''}>ثبت‌نام</Link>
        </nav>
        {children}
      </section>
    </div>
  );
}
