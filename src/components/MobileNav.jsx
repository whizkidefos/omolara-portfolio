import React, { useState, useContext } from 'react';

import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ImLinkedin, ImBehance, ImTwitter, ImInstagram, ImDribbble, ImFacebook } from 'react-icons/im';
import { CursorContext } from '../context/CursorContext';

const menuVariants = {
  hidden: {
    x: '100%',
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.1,
      duration: 0.5,
      type: 'spring',
      stiffness: 120,
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { handleMouseEnter, handleMouseLeave } = useContext(CursorContext);

  return (
    <nav className='text-primary xl:hidden'>
      {/* Nav open button */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => setOpenMenu(!openMenu)}
        className="text-3xl cursor-pointer">
        <CgMenuRight />
      </div>

      {/* Menu */}
      <motion.div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? 'visible' : 'hidden'}
        className="absolute top-0 right-0 z-20 w-full h-screen max-w-xs bg-white shadow-2xl">
        {/* Close icon */}
        <div 
          onClick={() => setOpenMenu(!openMenu)}
          className="mt-4 ml-3 text-4xl cursor-pointer">
          <IoMdClose />
        </div>

        {/* Nav lnks */}
        <ul className="flex flex-col items-center justify-center h-full text-3xl font-bold text-primary gap-y-8 font-primary">
          <li className=""><Link to={'/'}>Home</Link></li>
          <li className=""><Link to={'/about'}>About</Link></li>
          <li className=""><Link to={'/portfolio'}>Portfolio</Link></li>
          <li className=""><Link to={'/contact'}>Contact</Link></li>
        </ul>
        
        {/* Socials lnks */}
        <ul className="absolute flex justify-center w-full text-center gap-x-3 bottom-10 justify-self-center">
        <li className="">
          <a href="https://www.behance.net/anitalever" target="_blank" rel="noopener noreferrer">
            <ImBehance />
          </a>
        </li>

        <li className="">
          <a href="https://dribbble.com/Lever101" target="_blank" rel="noopener noreferrer">
            <ImDribbble />
          </a>
        </li>

        <li className="">
          <a href="https://www.linkedin.com/in/anita-lever-bb35a1209/" target="_blank" rel="noopener noreferrer">
            <ImLinkedin />
          </a>
        </li>

        <li className="">
          <a href="https://www.instagram.com/anita_lever/" target="_blank" rel="noopener noreferrer">
            <ImInstagram />
          </a>
        </li>

        <li className="">
          <a href="https://twitter.com/anita_lever" target="_blank" rel="noopener noreferrer">
            <ImTwitter />
          </a>
        </li>

        <li className="">
          <a href="https://www.facebook.com/lever.anita" target="_blank" rel="noopener noreferrer">
            <ImFacebook />
          </a>
        </li>
      </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
