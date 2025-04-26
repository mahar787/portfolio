"use client";

import { motion } from "framer-motion";
import {
  Target,
  Lightbulb,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const values = [
  {
    title: "Our Mission",
    description:
      "Deliver high-quality web and DevOps solutions that empower businesses to grow and succeed online.",
    icon: Target,
  },
  {
    title: "Our Vision",
    description:
      "To be a trusted partner for businesses worldwide, driving innovation and success through technology.",
    icon: Lightbulb,
  },
  {
    title: "Our Promise",
    description:
      "We prioritize quality, trust, and innovation in every project we undertake.",
    icon: ShieldCheck,
  },
];

const AboutPage = () => {
  return (
    <div className="flex pt-44 flex-col min-h-screen justify-between bg-[#333366] text-white">
      <main className="flex-grow w-full px-6 md:px-14 py-10 flex flex-col items-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-bold mb-6 text-center"
        >
          About <span className="text-[#ff6699]">Us</span>
        </motion.h1>

        {/* Short Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl text-center text-lg sm:text-xl text-gray-300 mb-12"
        >
          We are a passionate and innovative startup dedicated to crafting
          top-notch websites, applications, and DevOps solutions. Our goal is
          simple — empower businesses to thrive in the digital world through
          technology, creativity, and trust.
        </motion.p>

        {/* Values Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#444477] p-8 rounded-2xl shadow-lg flex flex-col items-center text-center hover:bg-[#555599] transition-colors duration-300"
            >
              <value.icon size={50} className="text-[#ff6699] mb-4" />
              <h2 className="text-2xl font-bold mb-2">{value.title}</h2>
              <p className="text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </section>

        {/* Final Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 max-w-3xl text-center text-md sm:text-lg text-gray-400"
        >
          We believe that when passion meets technology, amazing things happen.
          Let&apos;s build something incredible together!
        </motion.p>
      </main>
    </div>
  );
};

export default AboutPage;
