"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa';
import {motion} from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

export default function Contact() {
    const {ref} = useSectionInView("Contact", 0.5);

  return (
    <motion.section
        ref={ref}
        id="contact"
        className="mb-20 sm:mb-28 scroll-mt-28 w-[min(100%,38rem)]"
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 1,
        }}
        viewport={{
          once: true
        }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact directly at{" "}
        <a className="underline text-center" href="mailto:seguna15@gmail.com">
          seguna15@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form className="mt-10 flex flex-col">
        <input className="h-14 px-4 rounded-lg borderBlack" type="email" placeholder='Your email' />
        <textarea className="h-52 my-3 p-4 rounded-lg borderBlack" placeholder='Your message' />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </button>
      </form>
    </motion.section>
  );
}
