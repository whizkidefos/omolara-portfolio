import React from 'react';
import { ImLinkedin, ImBehance, ImTwitter, ImInstagram, ImDribbble, ImFacebook } from 'react-icons/im';

const Socials = () => {
  return (
    <aside className='hidden ml-24 xl:flex'>
      <ul className="flex gap-x-3">
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
    </aside>
  );
};

export default Socials;
