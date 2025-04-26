"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import nobgLogo from "../../../public/nobgLogo.png";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      style={{
        backgroundColor: "rgba(255,255,255,.1)",
        backdropFilter: "blur(8px)",
      }}
      className="bg-[#333366] text-white fixed w-full top-0 z-50 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="text-4xl font-bold"
        >
          <Image src={nobgLogo} height={90} width={90} alt="Logo" />
          NetIntranet
          <sub className="text-base mx-2">Solutions</sub>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex text-lg space-x-6">
          {["Home", "Services", "Portfolio", "About", "Contact"].map(
            (item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={`/${
                    item.toLowerCase() != "home" ? item.toLowerCase() : "/"
                  }`}
                  className="hover:text-[#ff6699]"
                >
                  {item}
                </Link>
              </motion.div>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            backgroundColor: "rgba(255,102,153,0.4)",
            backdropFilter: "blur(10px)",
          }}
          className="md:hidden bg-[#ff6699]  text-white text-xl py-4 flex flex-col items-center space-y-4 shadow-lg"
        >
          {["Home", "Services", "Portfolio", "About", "Contact"].map(
            (item, index) => (
              <Link
                key={index}
                href={`/${
                  item.toLowerCase() != "home" ? item.toLowerCase() : "/"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            )
          )}
        </motion.div>
      )}
    </nav>
  );
}
