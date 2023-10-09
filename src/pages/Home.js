import React from 'react';
import { Link } from 'react-router-dom';
import Anita from '../img/home/anita-home.png';

import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

const Home = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section'>
      <div className="container relative h-full pb-10 mx-auto">
        {/* HP Banner wrapper */}
        <div className="flex flex-col justify-center">
          <motion.article 
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}
            className="z-10 flex flex-col items-center justify-center w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto lg:absolute lg:items-start">
      
            <h1 className="text-center h1 lg:text-left">A Flexible <br />UI & UX Designer.</h1>
            <p className="text-[26px] lg:text-[36] mb-4 lg:mb-12">Lagos, Nigeria.</p>
            <Link to={'/contact'} className="btn mb-[30px]">Hire Me</Link>
          </motion.article>
          <figure className="flex justify-end max-h-[650px] mb-5 lg:mb-0 lg:max-h-max">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className="relative lg:-right-40">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={Anita} alt="Anita Lever" className='object-cover w-full h-full' />
            </motion.div>
          </figure>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
