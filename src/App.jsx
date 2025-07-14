import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home', { replace: true });
    }, 2500); // sama dengan default duration SplashScreen
    return () => clearTimeout(timer);
  }, [navigate]);

  // render splash lebih dulu
  return <SplashScreen onFinish={() => navigate('/home', { replace: true })} />;
}
