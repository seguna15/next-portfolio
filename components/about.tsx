"use client"

import React from 'react';
import SectionHeading from './section-heading';
import {motion} from "framer-motion";

import { useSectionInView } from '@/lib/hooks';

export const About = () => {
   const {ref} = useSectionInView('About', 0.5);
  
  return (
    <motion.section 
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28' id='about'
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.175}}
      
    >
        <SectionHeading>about me</SectionHeading>
        <p className='mb-3'>
            A results-driven Full Stack Developer with over half a decade of hands-on experience in web development, adept at crafting efficient and robust systems without sacrificing simplicity. Proven expertise in a wide range of technologies, encompassing both frontend (HTML, CSS, JavaScript, React) and backend (Node.js, Python) development, as well as design architecture (Monolithic, Microservices, Event Driven). Proficient in working with databases (MongoDB, MySQL, PostgreSQL), utilizing CI/CD tools (Linux Commands, Git, GitHub, Docker, Kubernetes), and harnessing the power of cloud platforms (AWS, GCP, IBM Cloud).
        </p>
        <p>
            Alongside these technical competencies, I possess strong soft skills, including attention to detail, critical thinking, and effective communication, which enable me to excel both within teams and as an independent contributor. Committed to delivering optimal results, I have a track record of building and maintaining websites, training individuals in programming languages, and leveraging APIs and cloud-native applications for enhanced user experiences. Seeking opportunities to apply my skills and drive innovation in a dynamic and challenging work environment.
        </p>
    </motion.section>
  )
}


 