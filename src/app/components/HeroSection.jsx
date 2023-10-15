"use client"
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
  

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
          <div className='col-span-12 place-self-center text-center'>
            <h1 className='text-[#222935] my-2 text-2xl sm:text-4xl lg:text-4xl sm:mt-5 lg:leading-normal font-bold'>Hey, I`m Abner</h1>
            <h2 className='text-[#346e94] mb-1 text-sm sm:text-lg lg:text-lg lg:leading-normal'>
              <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'web developer',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'app developer',
                    1000,
                    'ux/ui designer',
                    1000,
                    'content creator',
                    1000,
                    'sports lover',
                    1000
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
              />
            </h2>
          </div>
        </div>
    </section>
  )
}

export default HeroSection;