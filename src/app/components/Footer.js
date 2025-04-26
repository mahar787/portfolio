"use client";
import React from "react";
import { motion } from "framer-motion";
import linkedin from "../../../public/linkedin.png";
import {
  Target,
  Lightbulb,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#222244] py-10 px-6 md:px-14 mt-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300"
        >
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#ff6699]">
              NetIntranet
            </h3>
            <p>
              Building the future of web and DevOps solutions with passion and
              innovation.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-[#ff6699]" /> +92 326 5378067
                <sub className="text-[#ff6699] font-bold">(Whatsapp)</sub>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-[#ff6699]" />{" "}
                ahmadwebdev001@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-[#ff6699]" /> Sargodha,
                Pakistan
              </li>
              <li className="flex items-center gap-2">
                <Link
                  href={"https://www.linkedin.com/in/ahmadwebdev"}
                  target="_blank"
                >
                  <Image
                    src={linkedin}
                    height={30}
                    width={30}
                    className="cursor-pointer"
                    alt="Linkedin's Logo"
                  />
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#ff6699] transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-[#ff6699] transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="hover:text-[#ff6699] transition-colors duration-300"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-[#ff6699] transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-[#ff6699] transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center text-gray-500 text-sm mt-10"
        >
          © {new Date().getFullYear()} NetIntranet. All rights reserved.
        </motion.div>
      </footer>
    </>
  );
};

export default Footer;
