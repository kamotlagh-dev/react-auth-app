import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout.jsx';
import Input from '../components/Input.jsx';
import Button from '../components/Button.jsx';
import Message from '../components/Message.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { DEFAULT_USER } from '../services/authService.js';
import { isValidEmail } from '../utils/validators.js';

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ email: location.state?.email || '', password: '' });
  const [error, setError] = useState('');

  const success = location.state?.registered ? 'ثبت‌نام انجام شد. اکنون وارد شوید.' : '';
  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(form.email)) return setError('ایمیل معتبر وارد کنید.');
    try {
      login(form.email, form.password);
      navigate('/main', { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  const fillTestUser = () => setForm({ email: DEFAULT_USER.email, password: DEFAULT_USER.password });

  return (
    <AuthLayout title="خوش آمدید" subtitle="برای ادامه وارد حساب خود شوید" active="login">
      <form onSubmit={handleSubmit} noValidate>
        <Input id="email" label="ایمیل" type="email" placeholder="you@example.com" autoComplete="email" value={form.email} onChange={update('email')} />
        <Input id="password" label="رمز عبور" type="password" placeholder="••••••" autoComplete="current-password" value={form.password} onChange={update('password')} />
        <Message type="success">{!error && success}</Message>
        <Message>{error}</Message>
        <Button type="submit">ورود</Button>
      </form>
      <div className="hint" onClick={fillTestUser}>
        حساب تست (برای پر کردن خودکار لمس کنید):<br />
        <b>{DEFAULT_USER.email}</b><br />
        Pass: <b>{DEFAULT_USER.password}</b>
      </div>
    </AuthLayout>
  );
}
