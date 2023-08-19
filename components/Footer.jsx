

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AppleStore from './AppleStore';
import './footer.css'; 

const Footer = () => {
  return (
    <motion.section
      initial={{ y: 40, opacity: 0 }}
      transition={{
        delay: 0.5,
        duration: 0.6,
        type: 'spring',
        stiffness: 50
      }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="footer-section"
    >
      <div className="footer-content">
        <div className="footer-logo">
          <Image src="/assets/logo.png" width={55} height={55} alt="Logo" />
        </div>
        <h1 className="footer-title">ahead</h1>
        <div className="footer-contact">
          <div className="footer-contact-item">
            <Image
              src="/assets/location.svg"
              width={30}
              height={30}
              alt="location"
            />
            Augustraβe 26, 10117 Berlin
          </div>
          <div className="footer-contact-item">
            <Image src="/assets/mail.svg" width={30} height={30} alt="mail" />
            hi@ahead-app.com
          </div>
        </div>
        <AppleStore />
        <p className="footer-info">
          &copy; 2023 Ahead app. All rights reserved
        </p>
      </div>
    </motion.section>
    
  );
};

export default Footer;
