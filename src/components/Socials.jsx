import React, { useContext } from 'react';
import { ImLinkedin, ImBehance, ImTwitter, ImInstagram, ImDribbble, ImFacebook } from 'react-icons/im';
import { AiFillBehanceCircle, AiFillDribbbleCircle, AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { CursorContext } from '../context/CursorContext';

const Socials = () => {
  const { handleMouseEnter, handleMouseLeave } = useContext(CursorContext);
  
  return (
    <aside className='hidden ml-24 xl:flex'>
      <ul 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex gap-x-3">
        <li className="">
          <a className='text-[#696c6d] hover:text-primary transition' href="https://www.behance.net/anitalever" target="_blank" rel="noopener noreferrer">
            <AiFillBehanceCircle className='text-[24px] rounded-full' />
          </a>
        </li>

        <li className="">
          <a className='text-[#696c6d] hover:text-primary transition' href="https://dribbble.com/Lever101" target="_blank" rel="noopener noreferrer">
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

        <li className="">
          <a className='text-[#696c6d] hover:text-primary transition' href="https://www.facebook.com/lever.anita" target="_blank" rel="noopener noreferrer">
            <AiFillFacebook className='text-[24px] rounded-full' />
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Socials;
