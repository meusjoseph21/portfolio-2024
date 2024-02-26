"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};


const AboutSection = () => {

  return (
    <section className="text-white scroll-mt-28 mt-[10rem]" id="about">
      <motion.div className="items-center" variants={fadeInAnimationVariants}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}>
        <div className="mt-4 md:mt-0 text-left h-full">
          <div >
            <h2 className="text-4xl text-center font-bold text-slate-200 mb-4">About Me</h2>
            <p className="text-slate-200 md:text-lg">
              I am a full stack developer with a passion for creating beautiful
              and functional applications. I have experience in both frontend
              and backend development, and I am always looking to learn new
              technologies. I am currently working as a Backend Engineer with Chek Financial, a fintech startup based in Miami Florida. When I am not coding, I enjoy riding my bike, hiking with my partner and dog, and playing video games.
            </p>
          </div>
          <div className="mt-8 text-slate-200">
            <div className="max-w-screen-xl mx-auto p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-slate-200 p-6 rounded-lg">
                  <h5 className="text-lg font-bold mb-4">Education</h5>
                  <ul className="list-disc pl-2 text-slate-200">
                    <li>Univeristy of Denver - Fullstack Flex Grad Certificate | 2019</li>
                    <li>Carroll Univeristy - Bachelor of Science in Biology | 2015-2019</li>
                  </ul>
                
              </div>
                <div className="border border-slate-200 p-6 rounded-lg">
                  <h5 className="text-lg font-bold mb-4">Certifications</h5>
                  <ul className="list-disc pl-2 text-slate-200">
                    <li>Scrum Alliance - Certified Scrum Master | 2021</li>
                  </ul>
              </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
