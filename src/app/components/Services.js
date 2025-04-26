"use client";
import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaCogs,
  FaProjectDiagram,
  FaSearch,
  FaShieldAlt,
} from "react-icons/fa";
import Image from "next/image";
import webDev from "../../../public/webDev.png";
import dbManag from "../../../public/dbManag.jpg";
import cloud from "../../../public/cloud.jpg";
import realTime from "../../../public/realTime.jpg";
import seo from "../../../public/seo.jpg";
import ui from "../../../public/ui.jpg";

const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "Building scalable and high-performance web applications using Next.js, React, Node.js, and Express.js.",
    icon: <FaCode className="text-5xl text-[#ff6699]" />,
    image: webDev,
  },
  {
    title: "Backend & Database Management",
    description:
      "Developing robust APIs and managing databases using MongoDB, MySQL, and PostgreSQL.",
    icon: <FaDatabase className="text-5xl text-[#ff6699]" />,
    image: dbManag,
  },
  {
    title: "DevOps & Cloud Deployment",
    description:
      "CI/CD pipelines, Docker, Nginx, Linux server management, and cloud deployments.",
    icon: <FaServer className="text-5xl text-[#ff6699]" />,
    image: cloud,
  },
  {
    title: "Real-Time Applications",
    description:
      "Implementing WebSockets and real-time communication using Socket.io for chat and live updates.",
    icon: <FaProjectDiagram className="text-5xl text-[#ff6699]" />,
    image: realTime,
  },
  {
    title: "SEO Services",
    description:
      "We help your business climb to the top of search results and stay there.",
    icon: <FaSearch className="text-5xl text-[#ff6699]" />,
    image: seo,
  },
  {
    title: "Animations & UI/UX Design",
    description:
      "Creating visually stunning UI with GSAP, Tailwind CSS, Figma, and Photoshop.",
    icon: <FaCogs className="text-5xl text-[#ff6699]" />,
    image: ui,
  },
];

const Services = () => {
  return (
    <section className="min-h-screen bg-[#333366] text-white px-6 md:px-12 py-16">
      <div className="flex justify-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl border-b-2 font-bold text-center mb-12"
        >
          Our <span className="text-[#ff6699]">Services</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            style={{
              backgroundColor: "rgba(255,102,153,0.6)",
              backdropFilter: "blur(10px)",
            }}
            className="p-6 bg-[#ff6699] text-white rounded-xl shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="relative w-full h-60 mb-4">
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                className="rounded-xl object-contain"
              />
            </div>
            <div className="flex items-center gap-4">
              {service.icon}
              <h3 className="text-2xl font-bold">{service.title}</h3>
            </div>
            <p className="text-lg text-white mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
