"use client";

import Image from 'next/image'
import React from 'react';
import {motion} from "framer-motion";
import { type } from 'os';

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{
                        type: "tween",
                        duration: 0.2,
                    }}
                >
                    <Image src="/self.png" alt='Adisa Portrait' width="192" height="192" quality="95" priority={true} className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl' />
                </motion.div>
                
                <motion.span 
                    className='text-4xl absolute bottom-0 right-0' 
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{
                        type: "spring",
                        stiffness: 125,
                        delay: 0.1,
                        duration: 0.7
                    }}
                >
                    👋🏾
                </motion.span> 
            </div>
        </div>
        <motion.p 
            className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl'
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
        >
            <span className="font-bold">Hello, I'm Adisa.</span> A result driven{" "}
            <span className="font-bold">full-stack developer</span> with{" "}
            <span className="font-bold">6 years</span> hands-on experience. I enjoy building{" "}<span className="italic">websites & apps</span>.  I also love {" "}
             <span className="italic">teaching coding</span>. My focus is{" "}
            <span className="underline">Node.js, Python & React (Next.js)</span>. I work with {" "} <span className='font-bold'>cloud-native</span>  tools like <span className='underline'>docker & kubernetes</span>.
        </motion.p>
    </section>
  )
}

