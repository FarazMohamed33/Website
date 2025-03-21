import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa"; // Import icons
import Home from "./pages/Home";
import Download from "./pages/Download";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import "./App.css";
import websiteLogo from "./images/logo_white.png"; // Import website logo

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router basename="/Website">
      <div className="App">
        <header className="header">
          <div className="header-content">
            {/* Logo on the far left with Link to Homepage */}
            <Link to="/" className="logo-link">
              <img src={websiteLogo} alt="App Logo" className="logo" />
            </Link>

            {/* Title in the center */}
            <div className="header-title">My Watt</div>

            {/* Mobile menu button */}
            <button className="mobile-menu-btn" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Navigation tabs */}
            <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <NavLink to="/" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
              <NavLink to="/download" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Download</NavLink>
              <NavLink to="/team" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Team</NavLink>
              <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
            </nav>
          </div>
        </header>

        <main className="main-content">
          <AnimatePresence mode="wait">
            <Routes>
              {/* Make home page the default route */}
              <Route path="/" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Home />
                </motion.div>
              } />
              <Route
                path="/download"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Download />
                  </motion.div>
                }
              />
              <Route
                path="/team"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Team />
                  </motion.div>
                }
              />
              <Route
                path="/contact"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Contact />
                  </motion.div>
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AnimatePresence>
        </main>

        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} MyWatt. All rights reserved.</p>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/mywatt_app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="icon" />
            </a>
            <a
              href="https://github.com/tp2042/F29SO-project"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/company/106917105"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="icon" />
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;