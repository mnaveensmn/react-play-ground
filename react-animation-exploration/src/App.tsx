import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";
import FramerMotionPage from "./components/Page/FramerMotionPage";
import LottieAnimationPage from "./components/Page/LottieAnimationPage";
import CssAnimationPage from "./components/Page/CssAnimationPage";
import CssAnimationLottiePage from "./components/Page/CssAnimationLottiePage";
import CssAnimationLottieJsonPage from "./components/Page/CssAnimationLottieJsonPage";
import ColleqtPage from "./components/Page/ColleqtPage";

// Navigation component to handle the nav bar
const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu when link is clicked
  };

  return (
    <nav className="main-nav">
      <button 
        className="hamburger-menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
      </button>
      
      <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link
          to="/framer-motion"
          className={isActive("/framer-motion") ? "active" : ""}
          onClick={handleLinkClick}
        >
          🎬 Motion + CSS
        </Link>
        <Link
          to="/"
          className={isActive("/") ? "active" : ""}
          onClick={handleLinkClick}
        >
          🎨 Lottie + CSS
        </Link>
        <Link
          to="/css-animation"
          className={isActive("/css-animation") ? "active" : ""}
          onClick={handleLinkClick}
        >
          CSS Replica of Framer Motion 
        </Link>
        <Link
          to="/css-lottie"
          className={isActive("/css-lottie") ? "active" : ""}
          onClick={handleLinkClick}
        >
          🔄 CSS Replica of Lottie
        </Link>
        <Link
          to="/css-lottie-json"
          className={isActive("/css-lottie-json") ? "active" : ""}
          onClick={handleLinkClick}
        >
          🎯 CSS Replica of Lottie JSON
        </Link>
        <Link
          to="/colleqt"
          className={isActive("/colleqt") ? "active" : ""}
          onClick={handleLinkClick}
        >
          ✨ Colleqt DotLottie
        </Link>
      </div>
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Navigation />        
        <Routes>
          <Route path="/" element={<LottieAnimationPage />} />
          <Route path="/framer-motion" element={<FramerMotionPage />} />
          <Route path="/css-animation" element={<CssAnimationPage />} />
          <Route path="/css-lottie" element={<CssAnimationLottiePage />} />
          <Route path="/css-lottie-json" element={<CssAnimationLottieJsonPage />} />
          <Route path="/colleqt" element={<ColleqtPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
