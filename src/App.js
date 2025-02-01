import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Download from "./pages/Download";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1>Watt</h1>
          <nav>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/download" className="nav-link">Download</Link>
            <Link to="/team" className="nav-link">Team</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>
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
        </footer>
      </div>
    </Router>
  );
}

export default App;