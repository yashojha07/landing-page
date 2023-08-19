import Image from "next/image";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import './Steps.css'
const Steps = () => {
  return (
    <section className='sec'>
      <motion.p 
       initial={{ x: '-200', scale: 0, opacity: 0 }}
       transition={{
         delay: 0.5,
         duration: 0.8,
         type: "spring",
         stiffness: 50

       }}
       whileInView={{ x: 0, scale: 1, opacity: 1 }}
       viewport={{ once: true }}
       style={{ fontSize: 'md', fontWeight: 'medium', color: '#535353' }}
      >
        Wrong with self-improvement & how we're fixing it.
      </motion.p>
      <div style={{ display: 'flex' }}>

        <motion.h1 
         initial={{ x: '-200', scale: 0, opacity: 0 }}
         transition={{
           delay: 0.7,
           duration: 0.8,
           type: "spring",
           stiffness: 50

         }}
         whileInView={{ x: 0, scale: 1, opacity: 1 }}
         viewport={{ once: true }}
         style={{ fontSize: '4xl', fontWeight: 'bold', color: 'black', marginTop: '4px', marginBottom: '1rem' }}
        >
          Self Improvement. Ugh.
        </motion.h1>

         <motion.div
          initial={{ rotate: -90, x: 400, y: 20 }}
          whileInView={{
            rotate: 0,
            x: 0,
            y: 0,
          }}
          transition= {{ duration: 1.5, delay: 0.2 }}
          viewport={{ once: true }}
         >
        <Image
          src='/assets/boo.svg'
          width={80}
          height={80}
          alt="boo"
          className='inline rounded-full rotate-[25deg] opacity-90 hidden md:flex'
        />
         </motion.div>

      </div>

      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <VerticalTimeline
          layout={'1-column-left'}
          lineColor={"#C3B6F9"}
        >


          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#FAF8FF', borderBottom: 'none ', borderRadius:'15px'}}
            iconStyle={{ background: 'rgb(45, 30, 99)', color: '#000' }}
            icon={"🔵"}
            iconClassName='flex justify-center items-center '

          >
            <h3 className="vertical-timeline-element-title text-black font-semibold text-lg ">It’s not as easy as 1-2-3.</h3>
            <h4 className="vertical-timeline-element-subtitle text-[#535353] font-medium text-sm">The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).</h4>
           
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education "
            contentStyle={{ background: '#FAF8FF', borderBottom: 'none ', borderRadius:'15px'}}
            iconStyle={{ background: 'rgb(45, 30, 99)', color: '#000' }}
            icon={"🔵"}
            iconClassName='flex justify-center items-center '
          >
            <h3 className="vertical-timeline-element-title text-black font-semibold text-lg ">Old habits are hard to break.</h3>
            <h4 className="vertical-timeline-element-subtitle text-[#535353] font-medium text-sm">And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use (instead of shouting at your boss).</h4>
            
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education "
            contentStyle={{ background: '#FAF8FF', borderBottom: 'none ', borderRadius:'15px'}}
            iconStyle={{ background: 'rgb(45, 30, 99)', color: '#000' }}
            icon={"🔵"}
            iconClassName='flex justify-center items-center '
          >
            <h3 className="vertical-timeline-element-title text-black font-semibold text-lg ">You and your motivation don’t have a long-term relationship.</h3>
            <h4 className="vertical-timeline-element-subtitle text-[#535353] font-medium text-sm">Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exercises.</h4>
            
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education "
            contentStyle={{ background: '#FAF8FF', borderBottom: 'none ', borderRadius:'15px'}}
            iconStyle={{ background: 'rgb(45, 30, 99)', color: '#000' }}
            icon={"🔵"}
            iconClassName='flex justify-center items-center '
          >
            <h3 className="vertical-timeline-element-title text-black font-semibold text-lg ">Books just don’t offer practical solutions.</h3>
            <h4 className="vertical-timeline-element-subtitle text-[#535353] font-medium text-sm">Remember when you learned to ride a bike just by reading? Yeah, we don’t either. We help you take concrete small steps towards your goals.</h4>
            
          </VerticalTimelineElement>

       </VerticalTimeline>
          


      </div>

    </section>
  )
}

export default Steps;



