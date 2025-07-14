import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import './index.css';          // tailwind imports

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Fourteendecy">
<Routes>
  <Route index element={<App />} />          {/* loader */}
  <Route path="home" element={<Home />} />   {/* konten */}
  <Route path="*" element={<Navigate to="home" replace />} />
</Routes>

    </BrowserRouter>
  </React.StrictMode>,
);
