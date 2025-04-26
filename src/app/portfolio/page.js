"use client";

import { motion } from "framer-motion";
import { ExternalLink, LayoutDashboard, ShoppingBag } from "lucide-react";

const projects = [
  {
    title: "BloggingMixx",
    description:
      "A fully live and SEO-optimized blogging website built with WordPress and Elementor.",
    status: "Live",
    link: "https://bloggingmixx.com",
    icon: ExternalLink,
    color: "text-[#ff6699]",
  },
  {
    title: "Trendify Ecommerce",
    description:
      "A full-stack ecommerce web application built with Next.js, Express.js, and MongoDB.",
    status: "Demo Project",
    link: "#",
    icon: ShoppingBag,
    color: "text-[#66ccff]",
  },
  {
    title: "POSify Web Software",
    description:
      "A modern POS web software for businesses with real-time inventory and sales tracking.",
    status: "Demo Project",
    link: "#",
    icon: LayoutDashboard,
    color: "text-[#33cc99]",
  },
];

const PortfolioPage = () => {
  return (
    <main className="min-h-screen pt-44 w-full bg-[#333366] px-6 md:px-14 py-10 text-white flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-6xl font-bold mb-10 text-center"
      >
        My <span className="text-[#ff6699]">Portfolio</span>
      </motion.h1>

      <section className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#444477] p-6 rounded-2xl shadow-lg flex flex-col items-start justify-between space-y-6 hover:bg-[#555599] transition-colors duration-300"
          >
            <div className="flex items-center gap-4">
              <project.icon size={40} className={`${project.color}`} />
              <div>
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <p className="text-sm text-gray-300">{project.status}</p>
              </div>
            </div>
            <p className="text-gray-200">{project.description}</p>
            {project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-[#ff6699] text-white font-semibold rounded-lg hover:bg-pink-500 transition-all duration-300"
              >
                Visit Site
              </a>
            )}
          </motion.div>
        ))}
      </section>
    </main>
  );
};

export default PortfolioPage;
