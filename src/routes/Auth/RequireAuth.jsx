import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RequireAuth({ children }) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true); // zustand 로 로그인 값 가져오
  useEffect(() => {
    if (!isLogin) {
      console.log("isLogin", isLogin);
      navigate('/coggiri_login');
    }
  }, [isLogin, navigate]);
  return <>{children}</>;
}