import React, { useContext } from 'react';

import BabyAffairs from '../img/portfolio/baby-affairs.png';
import CarAuction from '../img/portfolio/car-auction-mobile-app.png';
import MayaRestaurant from '../img/portfolio/maya-restaurant.png';
import Tookuai from '../img/portfolio/tookuai.png';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext';

const Portfolio = () => {
  const { handleMouseEnter, handleMouseLeave } = useContext(CursorContext);

  return (
  <motion.section
    initial={{ opacity: 0, y: '100%' }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: '100%' }}
    transition={transition1}
    className='section'>
    <div className="container relative h-full pb-10 mx-auto">
      <div className="flex flex-col items-center justify-start h-full pt-24 pb-8 text-center lg:flex-row gap-x-24 lg:text-left lg:pt-36">
        
        <article 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="flex flex-col lg:items-center">
          <h1 className="h1">Portfolio</h1>
          <p className="max-w-sm mb-12">
            My passion for Designing Impactful And Intuitive
            Experiences For Business Growth across the globe.
          </p>
          <Link to={'/contact'} className="btn mb-[30px] mx-auto lg:mx-0">Hire Me</Link>
        </article>

        <figure 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="grid gap-2 pb-10 mb-5 md:grid-cols-2 sm:grid-cols-1">
          {/* Portfolio item 1 */}
          <div className="sm:max-w-full md:max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
            <a href="https://www.behance.net/gallery/187170731/RiderPassenger-Mobile-App-(Taxify-Uber)" target="_blank" rel="noopener noreferrer">
              <img src={Tookuai} alt="portfolio preview" className='object-cover h-full w-full lg-[220px] hover:scale-105 transition-all duration-500' />
            </a>
          </div>

          {/* Portfolio item 2 */}
          <div className="sm:max-w-full md:max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
            <a href="https://www.behance.net/gallery/187172921/Baby-Affairs-(First-time-parenting-mobile-app)" target="_blank" rel="noopener noreferrer">
              <img src={BabyAffairs} alt="portfolio preview" className='object-cover h-full w-full lg-[220px] hover:scale-105 transition-all duration-500' />
            </a>
          </div>

          {/* Portfolio item 3 */}
          <div className="sm:max-w-full md:max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
            <a href="https://www.behance.net/gallery/145560937/Restaurant-website-waitlist" target="_blank" rel="noopener noreferrer">
              <img src={MayaRestaurant} alt="portfolio preview" className='object-cover h-full w-full lg-[220px] hover:scale-105 transition-all duration-500' />
            </a>
          </div>

          {/* Portfolio item 4 */}
          <div className="sm:max-w-full md:max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
            <a href="https://www.behance.net/gallery/184164957/Car-Auction-Mobile-App-(Redesign)" target="_blank" rel="noopener noreferrer">
              <img src={CarAuction} alt="portfolio preview" className='object-cover h-full w-full lg-[220px] hover:scale-105 transition-all duration-500' />
            </a>
          </div>

        </figure>
      </div>
    </div>
  </motion.section>
  );
};

export default Portfolio;
