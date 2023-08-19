

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'
import './sign.css'; 

const Sign = () => {
  return (
    <section className='container'>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.8
        }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className='content'
      >
        <p className='privacy-text'>We take privacy seriously</p>
        <h1 className='title'>Before you get started</h1>
        <p className='quote'>
          "We won't share answers with anyone (and won't ever tell <br /> you which friends said what about you)"
        </p>
        <div className='with-love'>
          <p className='with-love'>with love,</p>
          <Image src='/assets/signs.png' width={150} height={150} className='inline ml-2'  />
        </div>
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.6
          }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className='start-button'
        >
          Start a test
        </motion.button>
        <p className='time-text'>Takes only 5 minutes</p>
      </motion.div>
    </section>
  );
};

export default Sign;
