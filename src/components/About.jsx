import React from 'react';
import { Link } from 'react-scroll';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import Cool from '../assets/cool.svg';

const About = () => {
  const [ref, inView]= useInView({
    threshold: 0.5,
  });
  return (
  <section id='about' className='section' ref={ref}>
    <div className="container mx-auto ">
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* img */}
        <motion.div
        variants={fadeIn('right',0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount:0.3}}
        className='flex-1  bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
          <img classname=' flex-1 bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top' src={Cool} alt="" />
        </motion.div>
        {/* text */}
        <motion.div
        variants={fadeIn('left',0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount:0.3}} 
        className='flex-1'>
          <h2 className='h2 text-accent'>About me.</h2>
          <h3 className='h3 mb-4'>I'm a full-stack developer that graduated from the Coding Dojo Bootcamp eager to keep on learning !</h3>
          <p className='mb-6'>
            I enjoy the process of building something from scratch or fixing an issue at hand,
            Some of my strongpoints as a Developer are great communication skills and troubleshooting problems.
            If you want your website to look good i'm your guy! 
          </p>
          {/* stats */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                  <CountUp start={0} end={7} duration={4}/> :null}+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Months of <br />
                Experience
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                  <CountUp start={0} end={5} duration={4}/> :null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Projects <br />
                Completed
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                  <CountUp start={0} end={22} duration={4}/> :null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Satisfied <br />
                Cohorts
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center '>
            <Link activeClass='active' smooth={true} spy={true} to='contact'>
            <button className='btn btn-lg'>
              Contact me 
            </button>
            </Link>
            <a href="#" className='text-gradient btn-link'>
              My Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default About;
