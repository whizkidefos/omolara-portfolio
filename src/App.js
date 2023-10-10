import React, { useContext } from 'react';
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';

import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from './components/Footer';
import { CursorContext } from './context/CursorContext';

const App = () => {
  const { cursorVariants, cursorBg } = useContext(CursorContext);

  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
        <Footer />
      </Router>

      {/* Cursor */}
      <motion.aside 
        variants={cursorVariants}
        animate={cursorBg}
        className="bg-primary w-[32px] h-[32px] fixed top-0 left-0 pointer-events-none z-50 rounded-full"></motion.aside>
    </>
  );
};

export default App;
