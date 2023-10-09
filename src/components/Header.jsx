import React from 'react';
import Socials from './Socials';
import Logo from '../img/header/logo.svg';
import AnitaLogo from './AnitaLogo';
import MobileNav from './MobileNav';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className="flex flex-col justify-between w-full lg:flex-row lg:items-center">
        <Link to='/' className='max-w-[205px]'>
          <AnitaLogo />
        </Link>

        <nav className="hidden xl:flex gap-x-12">
          <Link
            to={'/'}
            className='text-[#696c6d] hover:text-primary transition'
          >
            Home
          </Link>

          <Link
            to={'/about'}
            className='text-[#696c6d] hover:text-primary transition'
          >
            About
          </Link>

          <Link
            to={'/portfolio'}
            className='text-[#696c6d] hover:text-primary transition'
          >
            Portfolio
          </Link>

          <Link
            to={'/contact'}
            className='text-[#696c6d] hover:text-primary transition'
          >
            Contact
          </Link>
        </nav>

      </div>

      {/* Socials */}
        <Socials />

        {/* Mobile Navigation */}
        <MobileNav />
        
    </header>
  );
};

export default Header;
