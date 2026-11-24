// سرویس احراز هویت (نسخه آزمایشی با localStorage)
// برای محصول واقعی، این توابع را به API سرور وصل کنید.

const USERS_KEY = 'auth_users';
const SESSION_KEY = 'auth_session';

export const DEFAULT_USER = {
  name: 'کاربر تست',
  email: 'kamotlagh.dev@gmail.com',
  password: '123456',
};

const read = (key) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const write = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* ignore */
  }
};

const getUsers = () => read(USERS_KEY) || [DEFAULT_USER];

export function login(email, password) {
  const normalized = email.trim().toLowerCase();
  const user = getUsers().find((u) => u.email.toLowerCase() === normalized && u.password === password);
  if (!user) throw new Error('ایمیل یا رمز عبور اشتباه است.');
  const session = { name: user.name, email: user.email };
  write(SESSION_KEY, session);
  return session;
}

export function signUp({ name, email, password }) {
  const users = getUsers();
  const normalized = email.trim().toLowerCase();
  if (users.some((u) => u.email.toLowerCase() === normalized)) {
    throw new Error('این ایمیل قبلاً ثبت شده است.');
  }
  write(USERS_KEY, [...users, { name: name.trim(), email: normalized, password }]);
}

export function logout() {
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch {
    /* ignore */
  }
}

export const getSession = () => read(SESSION_KEY);
