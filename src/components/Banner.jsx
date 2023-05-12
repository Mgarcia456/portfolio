import React from 'react';
import { Link } from 'react-scroll';

import {FaGithub,  FaLinkedin} from 'react-icons/fa';
import {TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import Moon from '../assets/moon.png';

const Banner = () => {
  return( 
    <section id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text  */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
              variants={fadeIn('up',0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount:0.3}}
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>MIGUEL <span>GARCIA</span>
            </motion.h1>
            <motion.div
            variants={fadeIn('up',0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount:0.3}}
            className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className=' text-white mr-4'> I am a</span>
              <TypeAnimation sequence={[
                'Full Stack Developer',
                2000,
                'Web Designer',
                2000,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
              />
            </motion.div>
            <motion.p
            variants={fadeIn('up',0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount:0.3}}
            className='mb-8 max-w-lg mx-auto lg:mx-0'>
                Im a Front-End Developer located in Miami FL. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
            </motion.p>
            <motion.div
            variants={fadeIn('up',0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount:0.3}} 
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <Link activeClass='active' smooth={true} spy={true} to='contact'>
              <motion.button
              className='btn btn-lg'>
                Contact me
              </motion.button>
              </Link>
              <a href="/" className='text-gradient btn-link'>My Portfolio</a>
            </motion.div>
            {/* socials */}
            <motion.div
            variants={fadeIn('up',0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount:0.3}} 
            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <motion.a whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/Mgarcia456">
                <FaGithub />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }} 
                href="https://www.linkedin.com/in/miguel-garcia-1a307726b/">
                <FaLinkedin />
              </motion.a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
          variants={fadeIn('down',0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount:0.3}} 
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] '>
            <motion.img src={Moon} alt="moon" className='cursor-grab' drag
              dragConstraints={{
                top: -50,
                left: -50,
                right: 50,
                bottom: 50,
              }} />
          </motion.div >
        </div>
      </div>
    </section>
    );
};

export default Banner;
