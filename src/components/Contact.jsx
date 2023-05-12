import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';



const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(undefined);
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_46sqcwx', 'template_ij1d5i3', form.current, 'NVNRjhB8bt9rl9Tn7')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          setStatus({ type: 'success' });
      }, (error) => {
          console.log(error.text);
          setStatus({ type: 'error', error })
      });
  };
  return (
    <section id='contact' className='py-16 lg:section'>
      <div className="conatiner mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div 
          variants={fadeIn('right',0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount:0.3}}
          className='flex-1 flex justify-start items-center'>
            <div >
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br/> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
          ref={form} onSubmit={sendEmail}
          variants={fadeIn('left',0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount:0.3}}
          className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start w-[500px]'>
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all ' 
            type="text" 
            placeholder='Your Name'
            name="user_name" />
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all ' 
            type="text" 
            placeholder='Your Email' name="user_email"/>
            <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' placeholder='Your Message' name="message"></textarea>
            <button className='btn btn-lg' type="submit" value="Send">Send Message</button>
            <>
              {status?.type === 'success' && <p>"Message sent."</p>}
              {status?.type === 'error' && (
                <p>"Something went wrong."</p>
              )}
            </>
          </motion.form>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
