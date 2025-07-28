import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import ShortEasts from './pages/shortEasts.jsx'; 
import './index.css';
import Beverages from './pages/beverages.jsx';
import Order from './pages/order.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shortEats" element={<ShortEasts />} />
        <Route path="/bevarages" element={<Beverages />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </Router>
  </StrictMode>
);
