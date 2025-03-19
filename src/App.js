import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons
import Home from "./pages/Home";
import Download from "./pages/Download";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import "./App.css";
import websiteLogo from "./images/websitelogo.png"; // Import website logo

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="header-content">
            {/* Logo on the far left with Link to Homepage */}
            <Link to="/" className="logo-link">
              <img src={websiteLogo} alt="App Logo" className="logo" />
            </Link>

            {/* Title in the center */}
            <div className="header-title">My Watt</div>

            {/* Navigation tabs on the right */}
            <nav className="nav-links">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/download" className="nav-link">Download</Link>
              <Link to="/team" className="nav-link">Team</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="main-content">
          <AnimatePresence mode="wait">
            <Routes>
              <Route
                path="/"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Home />
                  </motion.div>
                }
              />
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
            </Routes>
          </AnimatePresence>
        </main>

        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Watt. All rights reserved.</p>
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
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="icon" />
            </a>
            <a
              href="https://www.linkedin.com"
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