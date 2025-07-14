import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingFashion from './components/LoadingFashion';

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // simulasi proses fetching: 3 detik → pindah ke /home
    const t = setTimeout(() => navigate('/home', { replace: true }), 3000);
    return () => clearTimeout(t);
  }, [navigate]);

  // hanya render layar loading
  return <LoadingFashion />;
}
