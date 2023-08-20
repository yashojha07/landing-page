


import { motion } from 'framer-motion';


import './Appbanner.css'; 
const Appbanner = () => {
  
    return (
        <section className="app-banner">
            <motion.div 
            initial={{ y: 40, opacity: 0 }}
            transition={{
              delay: 0,
              duration: 0.6
            }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{once:true}}
            className="banner-content">
                <div className="banner-left">
                    <motion.p 
                    initial={{ x: '-200', scale: 0, opacity: 0 }}
                    transition={{
                      delay: 0.2,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 50
                    }}
                    whileInView={{ x: 0, scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="banner-text">Built out of frustration</motion.p>
                    <motion.h1 
                    initial={{ x: '-200', scale: 0, opacity: 0 }}
                    transition={{
                      delay: 0.4,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 50
                    }}
                    whileInView={{ x: 0, scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="banner-heading">Meet the ahead app</motion.h1>

                 
                </div>
                <motion.div 
                initial={{ x: '-200', scale: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 50
                }}
                whileInView={{ x: 0, scale: 1 }}
                viewport={{ once: true }}
                className='banner-right'>
                    
                    <img
                        src='/assets/emote-right.png'
                        alt="hero"
                        className='banner-icon'
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Appbanner;
