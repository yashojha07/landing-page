



import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from './Nav.module.css'; 

const Nav = () => {
  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.3,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className={styles.navContainer} 
      >
        <Image
          src='/assets/logo.png'
          width={55}
          height={55}
          alt='Logo'
          style={{ cursor: 'pointer' }}
        />

        <div className={`${styles.navLinks} ${styles.hiddenMd}`}>
          <a href='./' className={styles.navLink}>Emotions</a>
          <a href='./' className={styles.navLink}>Manifesto</a>
          <a href='./' className={styles.navLink}>Self-Awareness Test</a>
          <a href='./' className={styles.navLink}>Work With Us</a>
        </div>

        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          transition={{
            delay: 0.15,
            duration: 0.4,
          }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className={styles.downloadButton}
        >
          <spam>Download app</spam>
        </motion.button>
      </motion.nav>
    </>
  );
};

export default Nav;
