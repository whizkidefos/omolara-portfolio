import React, { useState, useEffect, createContext } from 'react';

// Create context
export const CursorContext = createContext();
const mobileViewPort = window.innerWidth < 960;

const CursorProvider = ({ children }) => {
  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  }); // Initial state 

  // Cursor bg state
  const [cursorBg, setCursorBg] = useState('default');

  // Update cursor position
  useEffect(() => {
    if (!mobileViewPort) {
      const move = (e) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY,
      });
    }
      window.addEventListener('mousemove', move);

      return () => {
        window.removeEventListener('mousemove', move);
      }
    } else {
      setCursorBg('none');
    }
  });

  // Cursor variants
  const cursorVariants = {
    default: {
      x: cursorPosition.x - 16,
      y: cursorPosition.y - 16,
      backgroundColor: '#0e1112',
    },
    text: {
      width: '80px',
      height: '80px',
      x: cursorPosition.x - 40,
      y: cursorPosition.y - 40,
      backgroundColor: '#ffffff',
      mixBlendMode: 'difference',
    },
    none: {
      opacity: 0,
    },
  };

  // Handle mouse enter
  const handleMouseEnter = (e) => {
    setCursorBg('text');
  }

  // Handle mouse leave
  const handleMouseLeave = (e) => {
    setCursorBg('default');
  }

  return <CursorContext.Provider value={{ cursorVariants, cursorBg, handleMouseEnter, handleMouseLeave }}>
    {children}
  </CursorContext.Provider>;
};

export default CursorProvider;
