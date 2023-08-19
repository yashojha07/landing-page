import Card from './Card'
import Image from 'next/image'
import { motion } from 'framer-motion';
import "./slider.css"
const Slider = () => {

  const cardData = {
    "cardData": [
      { "heading": "You argue with a colleague", "info": "You get angry and defensive, instead of staying open and working towards common ground", "bg": "bg-[#EFEBFF]", "emoji": require("../../public/assets/emoji/proud.png") },
      { "heading": "You get a promotion at work", "info": "You question yourself and wonder when they will realize you are an unqualified imposter", "bg": "bg-[#D9F2FF]", "emoji": require("../../public/assets/emoji/angel.png") },
      { "heading": "You attend a class reunion", "info": "You reconnect with old friends and reminisce about the good times you shared during your school days.", "bg": "bg-[#FFEFD5]", "emoji": require("../../public/assets/emoji/pain.png") },
      { "heading": "You receive critical feedback", "info": "Instead of taking it constructively, you become defensive and dismissive, hindering personal growth.", "bg": "bg-[#EFEBFF]", "emoji": require("../../public/assets/emoji/irritated.png") }
    ]

  }

  return (
    <section className='slider'>
      <div className='flex items-center'>
        <motion.h1
          initial={{ x: -200, scale: 0 }}
          transition={{
            delay: 0.4,
            duration: 1.5,
            type: "spring",
            stiffness: 50
          }}
          whileInView={{ x: 0, scale: 1 }}
          viewport={{ once: true }}
          className='title'
        >
          Does this sound familiar...
        </motion.h1>
        <motion.div
          initial={{ rotate: -90, x: 400, y: 20 }}
          whileInView={{
            rotate: 0,
            x: 0,
            y: 0,
          }}
          transition={{ duration: 2, delay: 0.2 }}
          viewport={{ once: true }}
          className='image-containerrr'
        >
          <Image
            src='/assets/boo.svg'
            width={100}
            height={100}
            alt="boo"
            className='images'
          />
        </motion.div>
      </div>
      <div className='card-containerrr'>
        {cardData.cardData.map((item, index) => (
          <Card emote={item.emoji} bg={item.bg} heading={item.heading} info={item.info} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Slider;