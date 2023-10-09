import React from 'react';

import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';

import { Link } from 'react-router-dom';

const Portfolio = () => {
  return <section className='section'>
    <div className="container relative h-full mx-auto">
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
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={Image1} alt="portfolio preview" className='object-cover h-full lg-[220px] hover:scale-105 transition-all duration-500' />
            </a>
          </div>

          {/* Portfolio item */}
          <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={Image2} alt="portfolio preview" className='object-cover h-full lg-[220px] hover:scale-105 transition-all duration-500' />
            </a>
          </div>

          {/* Portfolio item */}
          <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={Image3} alt="portfolio preview" className='object-cover h-full lg-[220px] hover:scale-105 transition-all duration-500' />
            </a>
          </div>

          {/* Portfolio item */}
          <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={Image4} alt="portfolio preview" className='object-cover h-full lg-[220px] hover:scale-105 transition-all duration-500' />
            </a>
          </div>
        </figure>
      </div>
    </div>
  </section>;
};

export default Portfolio;
