import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import LoadingFashion from '../components/LoadingFashion';

/**
 * Menampilkan LoadingFashion satu kali setiap hard-reload/tab baru,
 * lalu merender Outlet (halaman sebenarnya).
 */
export default function InitialLoaderLayout() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowLoader(false), 3000); // 3 detik
    return () => clearTimeout(t);
  }, []);

  return showLoader ? <LoadingFashion /> : <Outlet />;
}
