import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import RecipeDetail from './pages/RecipeDetail';
import Contact from './pages/Contact';
import KullanimSartlari from './pages/KullanimSartlari';
import GizlilikPolitikasi from './pages/GizlilikPolitikasi';
import { ThemeProvider } from './context/ThemeContext';
import { MouseProvider } from './context/MouseContext';
import './App.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <MouseProvider>
        <Router>
          <div className="app">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tarifler" element={<Recipes />} />
                <Route path="/tarifler/:id" element={<RecipeDetail />} />
                <Route path="/iletisim" element={<Contact />} />
                <Route path="/kullanimsartlari" element={<KullanimSartlari />} />
                <Route path="/privacy-policy" element={<GizlilikPolitikasi />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </MouseProvider>
    </ThemeProvider>
  );
};

export default App;
