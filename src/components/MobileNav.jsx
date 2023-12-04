import React, { useState, useContext } from 'react';

import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ImLinkedin, ImBehance, ImTwitter, ImInstagram, ImDribbble, ImFacebook } from 'react-icons/im';
import { AiFillBehanceCircle, AiFillDribbbleCircle, AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
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
          <li className=""><Link to={'/'} onClick={() => setOpenMenu(!openMenu)}>Home</Link></li>
          <li className=""><Link to={'/about'} onClick={() => setOpenMenu(!openMenu)}>About</Link></li>
          <li className=""><Link to={'/portfolio'} onClick={() => setOpenMenu(!openMenu)}>Portfolio</Link></li>
          <li className=""><Link to={'/contact'} onClick={() => setOpenMenu(!openMenu)}>Contact</Link></li>
        </ul>

        {/* Socials lnks */}
        <ul className="absolute flex justify-center w-full text-center gap-x-3 bottom-10 justify-self-center">
          <li className="">
            <a className='text-[#696c6d] hover:text-primary transition' href="https://www.behance.net/anitalever" target="_blank" rel="noopener noreferrer">
              <AiFillBehanceCircle className='text-[24px] rounded-full' />
            </a>
          </li>

          <li className="">
            <a className='text-[#696c6d] hover:text-primary hover:scale-105 transition' href="https://dribbble.com/Lever101" target="_blank" rel="noopener noreferrer">
              <AiFillDribbbleCircle className='text-[24px] rounded-full' />
            </a>
          </li>

          <li className="">
            <a className='text-[#696c6d] hover:text-primary transition' href="https://www.linkedin.com/in/anita-lever-bb35a1209/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin className='text-[24px] rounded-full' />
            </a>
          </li>

          <li className="">
            <a className='text-[#696c6d] hover:text-primary transition' href="https://www.instagram.com/anita_lever/" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram className='text-[24px] rounded-full' />
            </a>
          </li>

          <li className="">
            <a className='text-[#696c6d] hover:text-primary transition' href="https://twitter.com/anita_lever" target="_blank" rel="noopener noreferrer">
              <AiFillTwitterCircle className='text-[24px] rounded-full' />
            </a>
          </li>

          {/* <li className="">
          <a className='text-[#696c6d] hover:text-primary transition' href="https://www.facebook.com/lever.anita" target="_blank" rel="noopener noreferrer">
            <AiFillFacebook className='text-[24px] rounded-full' />
          </a>
        </li> */}
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
