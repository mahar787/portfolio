"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Smartphone,
  Settings2,
  ShieldCheck,
  Rocket,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Code2 size={40} className="text-[#ff6699]" />,
    title: "Custom Web Development",
    description:
      "We build stunning, fast, and scalable websites tailored exactly to your business needs.",
  },
  {
    icon: <Server size={40} className="text-[#ff6699]" />,
    title: "Backend & API Solutions",
    description:
      "Robust, secure, and high-performing backend architectures and APIs, designed for growth.",
  },
  {
    icon: <Smartphone size={40} className="text-[#ff6699]" />,
    title: "Responsive Mobile Design",
    description:
      "Mobile-first designs that ensure your brand looks beautiful on every screen size.",
  },
  {
    icon: <Settings2 size={40} className="text-[#ff6699]" />,
    title: "DevOps & Deployment",
    description:
      "Modern DevOps services for smooth deployments, CI/CD pipelines, server setup, and maintenance.",
  },
  {
    icon: <ShieldCheck size={40} className="text-[#ff6699]" />,
    title: "Security Optimization",
    description:
      "Protect your digital assets with the latest security practices, SSL, and server hardening.",
  },
  {
    icon: <Rocket size={40} className="text-[#ff6699]" />,
    title: "Performance Boosting",
    description:
      "We optimize every project for speed, SEO, and top-notch performance across all devices.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.5 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ServicesPage = () => {
  return (
    <main className="min-h-screen pt-44 w-full bg-[#333366] text-white px-6 md:px-14 py-16 overflow-hidden flex flex-col items-center">
      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl sm:text-7xl font-bold mb-4">
          <span className="text-[#ff6699]">Our</span> Services
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-300">
          Powering your digital journey with expertise, innovation, and passion.
        </p>
      </motion.header>

      {/* Services Cards */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-[#444477] rounded-xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <div className="mb-6">{service.icon}</div>
            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
            <p className="text-gray-300 text-base">{service.description}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-20 bg-[#ff6699] text-[#333366] py-8 px-12 rounded-2xl text-center shadow-lg max-w-3xl"
      >
        <h2 className="text-3xl font-bold mb-4">
          Let&apos;s Build Your Vision Together!
        </h2>
        <p className="text-lg mb-6">
          Get in touch today and let&apos;s craft a digital presence that turns
          heads.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-[#333366] text-white font-bold rounded-xl shadow-md transition-all duration-300"
        >
          <Link href={"/contact"}>Contact Us</Link>
        </motion.button>
      </motion.div>
    </main>
  );
};

export default ServicesPage;
