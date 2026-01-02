import React from 'react';
// 1. Додано імпорти для роутера
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage'; 
import './assets/styles.css'; 

const App = () => {
    return (
        <Router> {/* 3. Обгортаємо весь додаток у Router */}
            <div className="app-container">
                <Header /> 
                
                {/* 4. Визначаємо маршрути */}
                <Routes>
                    {/* Маршрут для Головної сторінки */}
                    <Route path="/" element={<HomePage />} />
                    
                    {/* Маршрут для Каталогу */}
                    <Route path="/catalog" element={<CatalogPage />} />
                    
                    {/* Маршрути для майбутніх робіт (Item Page) */}
                    <Route path="/item/:id" element={<h2>Сторінка окремого кліпу</h2>} />
                    <Route path="/cart" element={<h2>Сторінка кошика</h2>} />
                    
                    {/* Обробка неіснуючих маршрутів */}
                    <Route path="*" element={<h2>404: Сторінка не знайдена</h2>} />
                </Routes>

                <Footer />
            </div>
        </Router>
    );
};

export default App;