import React from 'react';

const Contact = () => {
  return <section className='bg-white section'>
    <div className="container h-full mx-auto">
      <div className="flex flex-col items-center justify-start h-full text-center lg:flex-row pt-36 gap-x-8 lg:text-left">

        <figure className="">bg</figure>

        {/* Text and form */}
        <div className="px-4 lg:flex-1 lg:pt-32">
          <h1 className="h1">Contact me</h1>
          <p className="mb-12">I would love to get suggestions from you.</p>
          <form action="" className='bg-pink-200'>
            <div className="">
              <input type="text" className="border-b outline-none border-b-primary" placeholder='Your name' />
            </div>
          </form>
        </div>

        <figure>image</figure>
      </div>
    </div>
  </section>;
};

export default Contact;
