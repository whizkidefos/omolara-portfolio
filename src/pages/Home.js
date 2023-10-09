import React from 'react';
import { Link } from 'react-router-dom';
import Anita from '../img/home/anita-home.png';

const Home = () => {
  return (
    <section className='section'>
      <div className="container relative h-full mx-auto">
        {/* HP Banner wrapper */}
        <div className="flex flex-col justify-center">
          <article className="z-10 flex flex-col items-center justify-center w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto lg:absolute lg:items-start">
      
            <h1 className="text-center h1 lg:text-left">A Flexible <br />UI & UX Designer.</h1>
            <p className="text-[26px] lg:text-[36] mb-4 lg:mb-12">Lagos, Nigeria.</p>
            <Link to={'/contact'} className="btn mb-[30px]">Hire Me</Link>
          </article>
          <figure className="flex justify-end max-h-[650px] mb-5 lg:mb-0 lg:max-h-max">
            <div className="relative lg:-right-40">
              <img src={Anita} alt="Anita Lever" className='object-cover w-full h-full' />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Home;
