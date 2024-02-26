"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { links } from "../lib/data";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";


const NavBar = () => {
  const [activeSection, setActiveSection] = useState("Home");
  const [disableScroll, setDisableScroll] = useState(false);

  const handleScroll = () => {
    if (!disableScroll) {
      const scrollPosition = window.scrollY;
      const offset = -200;
      const sectionPositions = links.map((link) => {
        const target = document.getElementById(link.hash.substring(1));
        if (target) {
          return {
            name: link.name,
            top: target.offsetTop + offset,
            bottom: target.offsetTop + target.offsetHeight + offset,
          };
        }
        return null;
      });

      const newActiveSection = sectionPositions.find(
        (section) => section && scrollPosition >= section.top && scrollPosition < section.bottom
      );

      if (newActiveSection) {
        setActiveSection(newActiveSection.name);
      }
    }
  };

  const handleClick = (linkName) => {
    setDisableScroll(true);
    setTimeout(() => {
      setDisableScroll(false);
    }, 3000);

    setActiveSection(linkName);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [disableScroll]);


  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none bg-slate-200 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-00 sm:w-[initial] sm:flex-nowrap sm:gap-5">
        {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center text-primary-900 px-3 py-3 hover:text-primary-900 transition relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <ScrollLink
                to={link.hash.substring(1)}  // Target the section's ID
                spy={true}
                smooth={true}
                offset={-200}  // Adjust the offset as needed
                duration={500} // Adjust the duration as needed
                onClick={() => handleClick(link.name)}
                href={link.hash}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-400 rounded-full absolute inset-0 -z-10"
                    layoutId="activeSelection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  ></motion.span>
                )}
              </ScrollLink>
  </motion.li>
))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
