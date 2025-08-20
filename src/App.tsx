import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Donation from './pages/Donation';
import FAQ from './pages/FAQ';
import StudentPortal from './pages/StudentPortal';
import Onboarding from './pages/Onboarding';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/portal" element={<StudentPortal />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/donation" element={<Donation />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;