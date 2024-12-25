import React from 'react';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Dashboard from './components/chatbot/Chatbot';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <Router>
    <div>
      <Routes>
      <Route path="/" element={<><Navbar /><Hero /></>} />
      {/* <Analytics /> */}
      {/* <Newsletter /> */}
      {/* <Cards /> */}
      {/* <Footer /> */}
      <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

    </div>
    </Router>
  );
}

export default App;
