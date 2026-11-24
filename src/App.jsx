import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import MainPage from './pages/MainPage.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import { useAuth } from './context/AuthContext.jsx';

export default function App() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={user ? <Navigate to="/main" replace /> : <LoginPage />} />
      <Route path="/signup" element={user ? <Navigate to="/main" replace /> : <SignUpPage />} />
      <Route
        path="/main"
        element={
          <ProtectedRoute>
            <MainPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to={user ? '/main' : '/login'} replace />} />
    </Routes>
  );
}
