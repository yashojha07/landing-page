

import React from 'react';
import AboutCard from './AboutCard'; 
import './Work.css'; 
import { motion } from 'framer-motion';

const Work = () => {

    const aboutcardData =
        [
            {
                "heading": "Power through, even when the going gets tough", "info": "We help you spot and work around whatever stands in the way, be it bad habits, fears etc."
            },
            {
                "heading": "Learn more about who you are and where you want to go", "info": "We ask the right questions to help you better understand why you do things the way you do"
            },

            {
                "heading": "Embrace challenges and overcome obstacles with resilience",
                "info": "Discover effective strategies to tackle difficult situations head-on and come out stronger than ever."
            },
            {
                "heading": "Uncover your true potential and chart your path to success",
                "info": "Gain insights into your strengths and passions, empowering you to set clear goals and achieve them."
            },
            {
                "heading": "Breaking free from limitations and reaching new heights",
                "info": "Equip yourself with the tools and mindset necessary to push beyond your boundaries and achieve greatness."
            },
            {
                "heading": "Understanding your fears and transforming them into opportunities",
                "info": "Explore the root causes of your fears and learn how to harness them as catalysts for personal growth and achievement."
            },
            {
                "heading": "Navigating through self-defeating habits and forging new, empowering ones",
                "info": "Identify detrimental habits that hinder your progress and replace them with positive, productive behaviors that propel you forward."
            },
            {
                "heading": "Unlocking self-awareness to unlock your potential",
                "info": "Delve into the depths of self-discovery to gain a profound understanding of yourself and unlock your limitless potential."
            },
            {
                "heading": "Conquering self-doubt and cultivating unshakable self-belief",
                "info": "Develop the confidence and self-assurance needed to overcome self-doubt and unleash your true capabilities."
            },
            {
                "heading": "Discovering your purpose and designing a fulfilling life",
                "info": "Uncover your life's purpose and create a meaningful existence aligned with your values, passions, and aspirations."
            },
            {
                "heading": "Building resilience in the face of adversity and setbacks",
                "info": "Develop the mental and emotional strength to bounce back from challenges, setbacks, and failures, emerging stronger than ever."
            }
        ]


    return (
        <section className="containers">
            <div className="card-container">
                <div className="heading">
                    <h1>Work with us</h1>
                </div>
                
               <div className='overflow'>
               <div className="card">
                <img src="/assets/boo.svg" alt="boo" />
                    <h2>About</h2>
                    <p>
                        At ahead our goal is to make self-improvement fun and lasting. We know there's a way how to make it work. And
                        that's what aHead is all about!
                    </p>
                </div>
                <div className="card card-2">
                    <h2>Product</h2>
                    <p>
                        Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or
                        manager-like we did...
                    </p>
                </div>
               </div>

            </div>
                <div className='container-lower'>
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    transition={{
                        delay: 0.5,
                        duration: 0.8
                    }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="">
                    <div className="">
                        <motion.h1
                            initial={{ x: '200', scale: 0, opacity: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.5,
                                type: "spring",
                                stiffness: 50

                            }}
                            whileInView={{ x: 0, scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            className="headings">ahead
                        </motion.h1>
                    </div>
                    <div className="lower-container">
                        {
                            aboutcardData.map((item, index) => (
                                <AboutCard className ="over-cards" heading={item.heading} info={item.info} key={index} />
                            ))
                            // console.log("YASh")
                        }
                    </div>
                </motion.div>

        





                </div>




            {/* </motion.div> */}
        </section>
    );
};

export default Work;
