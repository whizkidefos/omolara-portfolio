import React from 'react';
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';

import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
        <Footer />
      </Router>

      {/* Cursor */}
      <aside className="bg-primary w-[32px] h-[32px] fixed top-0 left-0 pointer-events-none z-50"></aside>
    </>
  );
};

export default App;
