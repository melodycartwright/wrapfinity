import React from 'react';

const Hero = () => {
    return (
      <section className="bg-black text-white h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className='text-5xl md:text-7xl font-bold mb-6'>Premium Car Wraps by Wrapfinity</h1>
        <p className='text-lg md:text-2xl mb-8 max-w-xl'>
          Transform your ride with Professional vinyl wraps and stand out on
          every street.
        </p>
        <button className='bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300'>Get a Free Quote</button>
      </section>
    );
}
export default Hero;