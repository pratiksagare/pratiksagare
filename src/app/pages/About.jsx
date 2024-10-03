'use client'
import React, { useEffect, useRef } from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const titleRef=useRef(null);
    useEffect(()=>{
        gsap.to(titleRef.current,{
            scale:0.2,
            position:'relative',
            delay:0.5,
            duration:3,
            opacity:1,
            ease:'expo.inOut',
            scrollTrigger: {
                trigger: titleRef.current,
                start: 'top 35%', // When the animation should start
                end: 'bottom 75%',   // When the animation should end
                scrub: true,         // Smooth scrubbing
              },
        });
    },[])
    
  return (
    <div className='h-[95vh] w-full  flex justify-center items-center overflow-hidden'>
      <h5 ref={titleRef} className='lg:text-[50rem] opacity-20 sm:text-[30rem] text-[15rem] xs:text-[20rem] font-gilroyBold'>DEVELOPER</h5>
    </div>
  );
}

export default About;
