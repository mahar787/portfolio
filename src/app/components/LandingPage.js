"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import illustration from "../../../public/illus2.svg"; // <- illustration ka SVG add karna hai yahan
import { ShieldCheck, Award, Rocket } from "lucide-react";
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 15px #ff6699",
    transition: { duration: 0.3 },
  },
  tap: { scale: 0.95 },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

// Simple typewriter effect without library
const useTypewriter = (words, speed = 150) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText(words[wordIndex].slice(0, charIndex + 1));
      if (charIndex + 1 === words[wordIndex].length) {
        setTimeout(() => {
          setCharIndex(0);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 1500);
      } else {
        setCharIndex((prev) => prev + 1);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, wordIndex, words, speed]);

  return text;
};

const LandingPage = () => {
  const typewriterText = useTypewriter([
    "HighTech Web Solutions",
    "DevOps Excellence",
    "Secure Cloud Services",
  ]);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <main className="flex flex-col-reverse md:flex-row justify-center items-center w-full min-h-screen px-6 md:px-14 bg-gradient-to-r from-[#333366] via-[#4a4a88] to-[#333366] text-white overflow-hidden">
        {/* Text Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="text-center md:text-left flex flex-col items-center md:items-start space-y-6"
        >
          <motion.h1
            variants={textVariants}
            whileHover={{ scale: 1.05, color: "#ffccff" }}
            className="text-5xl sm:text-7xl md:text-9xl font-bold leading-tight cursor-pointer"
          >
            <span className="text-[#ff6699]">Net</span> Intranet
          </motion.h1>

          <motion.h2
            variants={textVariants}
            className="text-2xl sm:text-3xl md:text-4xl leading-snug min-h-[50px]" // typewriter ke liye height fix
          >
            {typewriterText}
          </motion.h2>

          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="px-8 py-4 bg-[#ff6699] text-white font-bold rounded-xl shadow-lg transition-all duration-300 mt-4"
          >
            <Link href={"/contact"}>Contact Us</Link>
          </motion.button>
        </motion.section>

        {/* Illustration Section */}
        <motion.figure
          variants={imageVariants}
          initial="hidden"
          animate="show"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="w-64 sm:w-80 md:w-96 lg:w-[500px] flex justify-center mb-10 md:mb-0"
        >
          <motion.div
            animate={isHovered ? { rotate: [0, 5, -5, 0] } : {}}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <Image
              src={illustration}
              height={500}
              width={500}
              alt="Illustration"
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </motion.figure>
      </main>

      {/* Trust Elements Section */}
      <section className="w-full bg-gradient-to-b from-gray-200 to-gray-700 text-[#333366] py-16 px-6 md:px-20 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
        <motion.div
          whileHover={{ scale: 1.08, rotate: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl flex flex-col items-center gap-4"
        >
          <ShieldCheck size={50} className="text-[#ff6699]" />
          <h3 className="text-3xl font-extrabold text-[#ff6699]">5+ Years</h3>
          <p className="text-lg text-gray-600">Industry Experience</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.08, rotate: -1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl flex flex-col items-center gap-4"
        >
          <Award size={50} className="text-[#ff6699]" />
          <h3 className="text-3xl font-extrabold text-[#ff6699]">
            Certified Experts
          </h3>
          <p className="text-lg text-gray-600">Web & DevOps Solutions</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.08, rotate: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl flex flex-col items-center gap-4"
        >
          <Rocket size={50} className="text-[#ff6699]" />
          <h3 className="text-3xl font-extrabold text-[#ff6699]">
            Fast Delivery
          </h3>
          <p className="text-lg text-gray-600">On-Time Project Completion</p>
        </motion.div>
      </section>
    </>
  );
};

export default LandingPage;
