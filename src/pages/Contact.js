import React, { useContext } from 'react';

import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext';

const Contact = () => {
  const { handleMouseEnter, handleMouseLeave } = useContext(CursorContext);

  return (
  <motion.section
    initial={{ opacity: 0, y: '100%' }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: '100%' }}
    transition={transition1}
    className='bg-white section'>
    <div className="container h-full pb-10 mx-auto">
      <div className="flex flex-col items-center justify-start h-full text-center lg:flex-row pt-36 gap-x-8 lg:text-left">

        <figure className="hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-80 -z-10"></figure>

        {/* Text and form */}
        <div 
          className="px-4 lg:flex-1 lg:pt-32">
          <h1 className="h1">Contact me</h1>
          <p className="mb-12">
            I’m always open to new opportunities and collaborations. Whether you need a UX/UI designer for your next project, or just want to chat about design, feel free to get in touch with me.

            You can reach me by email at anita_lever@gmail.com, or by filling the short form below. You can also find me on social media platforms such as <strong>LinkedIn</strong>, <strong>Dribble</strong>, and <strong>Behance</strong> using the icons above.

            I look forward to hearing from you soon! 😊
          </p>

          <form action="" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='flex flex-col gap-y-4'>
            <div className="flex flex-wrap gap-x-10">
              <input type="text" className="border-b outline-none border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]" placeholder='Your name' />

              <input type="email" className="border-b outline-none border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]" placeholder='Your email address' />
            </div>

            <textarea name="" id="" cols="30" rows="5" className="border-b outline-none border-b-primary bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]" placeholder='Your message'></textarea>

            <button className="mx-auto btn mb-[30px] mt-5">Send it</button>
            
          </form>
        </div>

        {/* <figure>image</figure> */}
      </div>
    </div>
  </motion.section>
  );
};

export default Contact;
