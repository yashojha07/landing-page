


import { motion } from 'framer-motion';
import './bebest.css'; 


const Section2 = () => {
  return (
    <section className='be-best'>
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className='be-best-card'>
      
       <span className='spec'> EQ beats IQ</span>
     
    </motion.div>
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className='be-best-card'>
      <div >     
People with high emotional intelligence(EQ) live more fulfilled lives. They tend to be happierand have healthier relationships.
      </div>
    </motion.div>
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className='be-best-card'>
      <div>
      They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $ 29k a year
      </div>
    </motion.div>
  </section>
  );
};

export default Section2;
