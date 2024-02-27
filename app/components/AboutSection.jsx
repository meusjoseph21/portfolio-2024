"use client";
import React, { useTransition, useState } from "react";
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
    <section className="text-white mt-10 md:mt-28" id="about">
      <motion.div
        className="items-center"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="mt-4 md:mt-0 text-center md:text-left h-full">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-200 mb-4">
              About Me
            </h2>
            <p className="text-slate-200 text-sm md:text-lg">
              I am a full stack developer with a passion for creating beautiful
              and functional applications. I have experience in both frontend
              and backend development, and I am always looking to learn new
              technologies. Since the beginning of my career I have chosen a path that has required to me learn in and adapt in high demand environments. I am currently working as a Backend Engineer with
              Chek Financial, a fintech startup based in Miami Florida. 
            </p>
            <br></br>
            <p className="text-slate-200 text-sm md:text-lg">
            When I
              am not coding, I enjoy riding my bike, hiking with my partner and
              dog, having faith in the chicago bears, and playing videos games.
            </p>
          </div>
          <div className="mt-8 text-slate-200">
            <div className="max-w-screen-xl mx-auto p-4 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <div className="border border-slate-200 p-4 md:p-6 rounded-lg">
                  <h5 className="text-lg md:text-xl font-bold mb-4">Education</h5>
                  <ul className="list-disc pl-5 text-slate-200">
                    <li>University of Denver - Fullstack Flex Grad Certificate | 2019</li>
                    <li>Carroll University - Bachelor of Science in Biology | 2015-2019</li>
                  </ul>
                </div>
                <div className="border border-slate-200 p-4 md:p-6 rounded-lg">
                  <h5 className="text-lg md:text-xl font-bold mb-4">Certifications</h5>
                  <ul className="list-disc pl-5 text-slate-200">
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
