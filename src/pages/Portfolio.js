import React from 'react';

import Wise from '../img/portfolio/wise.png';
import ITFirm from '../img/portfolio/itfirm.png';
import MedCareFoods from '../img/portfolio/medcarefoods.png';
import Fintech from '../img/portfolio/fintech.png';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

const Portfolio = () => {
  return (
  <motion.section
    initial={{ opacity: 0, y: '100%' }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: '100%' }}
    transition={transition1}
    className='section'>
    <div className="container relative h-full pb-10 mx-auto">
      <div className="flex flex-col items-center justify-start h-full pt-24 pb-8 text-center lg:flex-row gap-x-24 lg:text-left lg:pt-36">
        
        <article className="flex flex-col lg:items-center">
          <h1 className="h1">Portfolio</h1>
          <p className="max-w-sm mb-12">
            My passion for Designing Impactful And Intuitive
            Experiences For Business Growth across the globe.
          </p>
          <Link to={'/contact'} className="btn mb-[30px] mx-auto lg:mx-0">Hire Me</Link>
        </article>

        <figure className="grid grid-cols-2 lg:gap-2">
          {/* Portfolio item */}
          <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
            <a href="https://www.behance.net/gallery/162270163/Wardrobewise-case-study-(fashion-store)" target="_blank" rel="noopener noreferrer">
              <img src={Wise} alt="portfolio preview" className='object-cover h-full w-full lg-[220px] hover:scale-105 transition-all duration-500' />
            </a>
          </div>

          {/* Portfolio item */}
          <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
            <a href="https://www.behance.net/gallery/131739525/IT-firm-website-(-LUWANG-INDUSTRIES)" target="_blank" rel="noopener noreferrer">
              <img src={ITFirm} alt="portfolio preview" className='object-cover h-full w-full lg-[220px] hover:scale-105 transition-all duration-500' />
            </a>
          </div>

          {/* Portfolio item */}
          <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
            <a href="https://www.behance.net/gallery/157556087/Medcare-case-study" target="_blank" rel="noopener noreferrer">
              <img src={MedCareFoods} alt="portfolio preview" className='object-cover h-full w-full lg-[220px] hover:scale-105 transition-all duration-500' />
            </a>
          </div>

          {/* Portfolio item */}
          <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
            <a href="https://www.behance.net/gallery/125186599/Fintech-app-(Bank-app)" target="_blank" rel="noopener noreferrer">
              <img src={Fintech} alt="portfolio preview" className='object-cover h-full w-full lg-[220px] hover:scale-105 transition-all duration-500' />
            </a>
          </div>

        </figure>
      </div>
    </div>
  </motion.section>
  );
};

export default Portfolio;
