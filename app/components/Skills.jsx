"use client";
import React from 'react'
import { skillsData } from '../lib/data'
import { motion } from "framer-motion";

const fadeInAnimationVariants ={
    initial: {
        opacity: 0,
        y: 100
    },
    animate: {
        opacity: 1,
        y: 0,
    }
}

const Skills = () => {
  return (
    <section className='mb-28 text-center sm:mb-40'>
        <h2 className='text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>Skills</h2>
        <ul className='flex flex-wrap justify-center gap-2 text-lg text-black'>
            {
                skillsData.map((item, index) => (
                    <motion.li className='bg-white border border-black/[0.1] rounded-xl px-5 py-3' key={index} variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{ once:true}}>
                        {item}
                    </motion.li>
                ))
            }
        </ul>
    </section>
  )
}

export default Skills
