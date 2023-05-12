import React from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import Img1 from '../assets/Netflix1.PNG';
import Img2 from '../assets/Game4.PNG';
import Img3 from '../assets/store.PNG';


const Work = () => {
  return( 
    <section id='work' className='section'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div 
          variants={fadeIn('right',0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount:0.3}}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>My Latest <br/>
              Work.
              </h2>
              <p className='max-w-sm mb-16'>
                Using Technologies like Next.js, MongoDb, Prisma, Sanity, C#/.NET, HTML, CSS, & Javascript!!! 
              </p>
              <button className='btn btn-sm'>View Projects</button>
            </div>
            {/* img */}
            {/* 1st project  */}

            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
              </div>
                
                  <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="" />
                
              {/* pre title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <a href="https://my-flix-1.vercel.app/auth" className='text-gradient'>Web Design</a>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>MyFlix</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
          variants={fadeIn('left',0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount:0.3}}
          className='flex-1 flex flex-col gap-y-10'>
            {/* img */}
            {/* 2nd project */}

            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt="" />
              {/* pre title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <a href='https://miguelg456.itch.io/the-most-basic-game-ever' className='text-gradient'>Game Development</a>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>The Best Game Ever</span>
              </div>
            </div>
            {/* img */}
            {/* 3rd porject */}

            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt="" />
              {/* pre title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <a href='https://ecom-eta-lac.vercel.app/' className='text-gradient'>Web Design</a>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>MAG Electronics</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
