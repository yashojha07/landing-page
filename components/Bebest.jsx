

import { motion } from 'framer-motion';
import './bebest.css'; 

const Bebest = () => {
  return (
    <section className='be-best'>
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className='be-best-card'>
        
         <span className='spec'> Be the best you
          <br />
          with EQ</span>
       
      </motion.div>
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className='be-best-card'>
        <div >
          Not having your own emotions under control might be holding you back.
        </div>
      </motion.div>
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className='be-best-card'>
        <div>
          Additionally, not understanding those of others stops you from being the parent or friend you can be.
        </div>
      </motion.div>
    </section>
  )
}

export default Bebest;
