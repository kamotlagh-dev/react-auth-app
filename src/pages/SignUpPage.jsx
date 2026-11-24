import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout.jsx';
import Input from '../components/Input.jsx';
import Button from '../components/Button.jsx';
import Message from '../components/Message.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { isValidEmail, MIN_PASSWORD_LENGTH } from '../utils/validators.js';

export default function SignUpPage() {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [error, setError] = useState('');

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name.trim().length < 2) return setError('نام را وارد کنید.');
    if (!isValidEmail(form.email)) return setError('ایمیل معتبر وارد کنید.');
    if (form.password.length < MIN_PASSWORD_LENGTH) return setError(`رمز عبور حداقل ${MIN_PASSWORD_LENGTH} کاراکتر باشد.`);
    if (form.password !== form.confirm) return setError('تکرار رمز عبور مطابقت ندارد.');
    try {
      signUp(form);
      navigate('/login', { replace: true, state: { registered: true, email: form.email.trim().toLowerCase() } });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <AuthLayout title="ساخت حساب جدید" subtitle="اطلاعات خود را وارد کنید" active="signup">
      <form onSubmit={handleSubmit} noValidate>
        <Input id="name" label="نام" rtl placeholder="نام و نام خانوادگی" value={form.name} onChange={update('name')} />
        <Input id="email" label="ایمیل" type="email" placeholder="you@example.com" autoComplete="email" value={form.email} onChange={update('email')} />
        <Input id="password" label="رمز عبور" type="password" placeholder="••••••" autoComplete="new-password" value={form.password} onChange={update('password')} />
        <Input id="confirm" label="تکرار رمز عبور" type="password" placeholder="••••••" autoComplete="new-password" value={form.confirm} onChange={update('confirm')} />
        <Message>{error}</Message>
        <Button type="submit">ثبت‌نام</Button>
      </form>
    </AuthLayout>
  );
}
