import React from 'react';
import { Link } from 'react-router-dom';
import Anita from '../img/about/anita-about.png';

const About = () => {
  return (
      <section className='section'>
        <div className="container relative h-full mx-auto">
          {/* About Banner wrapper */}
          <div className="flex flex-col items-center justify-center h-full text-center lg:flex-row gap-x-24 lg:text-left lg:pt-16">
            <figure className="flex-1 order-2 overflow-hidden max-h-[650px] lg:max-h-max lg:order-none">
              <img src={Anita} alt="Anita Lever" />
            </figure>
            <article className="z-10 flex flex-col items-center justify-center flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto lg:items-start">
              <h1 className="h1">About me</h1>
              <p className="mb-6">
                My name is Anita Lever, a User Experience Designer. I am a graduate of computer science at the National Open University Of Nigeria. I am also a certified UX Designer (Google UX Design Professional certification).
              </p>
              <br />
              <p className="">
                With over 2+ years of expertise, my portfolio includes my research methods, User Interface Design for Websites and Mobile Applications, Micro-interaction, and prototypes.

                I love solving problems by designing simple and engaging solutions for users and businesses.
                Over the last few years, I’ve worked on several web and Mobile product solutions for companies and startups in a variety of industries.
                My micro-interaction skills in Figma allow me to create an intuitive user-centred experience that keeps users engaged. My experience and versatility in working with design systems, user research, and website and app design give me an edge over my fellow peers in the design market.
                On top of that, I enjoy learning new skills and working on exciting things.

                Apart from design, in my spare time, I like to go Jogging, Cooking, watch movies, play candycrush, research, and spend time with loved ones.
              </p>
              
              <Link to={'/portfolio'} className='mt-6 btn'>View my work</Link>
            </article>
          </div>
        </div>
      </section>
  );
};

export default About;
