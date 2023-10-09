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
    </>
  );
};

export default App;
