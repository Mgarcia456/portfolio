import React from 'react';
import { Link } from 'react-scroll';


const Header = () => {
  return <header className=' py-8 '>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        <a href="#">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">Miguel <mark class="px-2 text-white bg-pink-500 rounded dark:bg-pink-100">Garcia</mark></h1>
        </a>
        <Link activeClass='active' smooth={true} spy={true} to='contact'>
        <button to="contact" className='btn btn-sm'>Work with me</button>
        </Link>
        
      </div>
    </div>
  </header>;
};

export default Header;
