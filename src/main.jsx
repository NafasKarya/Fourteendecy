import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import './index.css';          // tailwind imports

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* initial route menampilkan App (loading lalu redirect) */}
        <Route path="/" element={<App />} />
        {/* tujuan akhir */}
        <Route path="/home" element={<Home />} />

        {/* fallback: apa pun selain rute di atas -> home */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
