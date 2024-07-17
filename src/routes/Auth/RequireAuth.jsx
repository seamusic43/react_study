import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RequireAuth({ children }) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true); // zustand 로 로그인 값 가져오기
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
    if (!isLogin) {
      console.log("isLogin", isLogin);
      navigate('/coggiri_login');
    }
  }, [isLogin, navigate]);
  return <>{children}</>;
}