"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="lg:py-16 scroll-mt-[100rem]" id="home">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-slate-200 mb-4 text-4xl sm:text-5xl md:text-4xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-900 to-secondary-800">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Joe",
                2000,
                "An Engineer",
                2000,
                "A Web Dev",
                2000,
                "A Go-Getter",
                2000,
                "An Innovator",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ color: "#F3FCF0" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-slate-200 text-base sm:text-lg mb-6 lg:text-xl">
            &quot;There&apos;s a way to do it better - find it.&quot; - Thomas Edison
          </p>
          <div>
            <ScrollLink
              to="contact"  // Target the section's ID
              spy={true}
              smooth={true}
              offset={-200}  // Adjust the offset as needed
              duration={500} // Adjust the duration as needed
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-secondary-900 to-secondary-800 hover:bg-slate-200 text-slate-200"
            >
              Hire Me
            </ScrollLink>
            <a
              href="/files/resume.pdf"  // Replace with the actual path to your resume file
              download="josephmeus-resume-2024.pdf"  // Specify the desired filename for the downloaded file
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-secondary-900 to-secondary-800 hover:bg-slate-800 text-slate-200 mt-3"
            >
              <span className="block bg-[#1F271B] hover:bg-slate-800 rounded-full px-5 py-2">
                Download Resume
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero_photo.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
