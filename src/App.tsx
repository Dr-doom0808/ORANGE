import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ShowcasePage from './pages/ShowcasePage';
import FAQPage from './pages/FAQPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="bg-black text-white min-h-screen flex flex-col">
        <Header isMenuOpen={isMobileMenuOpen} setIsMenuOpen={setIsMobileMenuOpen} />
        {isMobileMenuOpen && <div className="h-screen md:h-0"></div>}
        <main className={`flex-grow relative`}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/showcase" element={<ShowcasePage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;