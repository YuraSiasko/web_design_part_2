import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage'; 
import ItemPage from './pages/ItemPage'; 
import CartPage from './pages/CartPage'; // <-- НОВИЙ
import { ClipProvider } from './context/ClipContext'; 
import './assets/styles.css'; 

const App = () => {
    return (
        <Router>
            <ClipProvider> 
                <div className="app-container">
                    <Header /> 
                    
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/catalog" element={<CatalogPage />} />
                        
                        <Route path="/item/:id" element={<ItemPage />} /> 
                        
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/about" element={<h2>Про нас</h2>} />
                    </Routes>

                    <Footer />
                </div>
            </ClipProvider>
        </Router>
    );
};

export default App;