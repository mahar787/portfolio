"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, User, MessageSquareText } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:ahmadwebdev001@gmail.com?subject=Message from ${encodeURIComponent(
      name
    )}&body=Email: ${encodeURIComponent(
      email
    )}%0A%0AMessage:%0A${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex pt-44 flex-col min-h-screen justify-between bg-[#333366] text-white">
      <main className="flex-grow w-full px-6 md:px-14 py-10 flex flex-col items-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-bold mb-6 text-center"
        >
          Get In <span className="text-[#ff6699]">Touch</span>
        </motion.h1>

        {/* Short Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-3xl text-center text-lg sm:text-xl text-gray-300 mb-12"
        >
          Have a project idea, a question, or just want to say hello?{" "}
          <br className="hidden sm:block" />
          We&apos;re just a few clicks away. Let&apos;s build something{" "}
          <span className="text-[#ff6699] font-semibold">amazing</span>{" "}
          together!
        </motion.p>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full mb-16"
        >
          {/* Email */}
          <div className="flex flex-col items-center bg-[#444477] p-8 rounded-2xl shadow-lg hover:bg-[#555599] transition-colors duration-300">
            <Mail size={40} className="text-[#ff6699] mb-4" />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-300">ahmadwebdev001@gmail.com</p>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center bg-[#444477] p-8 rounded-2xl shadow-lg hover:bg-[#555599] transition-colors duration-300">
            <MapPin size={40} className="text-[#ff6699] mb-4" />
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <p className="text-gray-300">Sargodha, Pakistan</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-3xl bg-[#444477] p-8 rounded-2xl shadow-lg flex flex-col gap-6"
        >
          {/* Name Field */}
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="mb-2 font-semibold flex items-center gap-2"
            >
              <User size={20} className="text-[#ff6699]" /> Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-3 rounded-lg bg-[#333355] text-white focus:outline-none focus:ring-2 focus:ring-[#ff6699] transition-all"
              required
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="mb-2 font-semibold flex items-center gap-2"
            >
              <Mail size={20} className="text-[#ff6699]" /> Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="p-3 rounded-lg bg-[#333355] text-white focus:outline-none focus:ring-2 focus:ring-[#ff6699] transition-all"
              required
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="mb-2 font-semibold flex items-center gap-2"
            >
              <MessageSquareText size={20} className="text-[#ff6699]" /> Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows={5}
              className="p-3 rounded-lg bg-[#333355] text-white focus:outline-none focus:ring-2 focus:ring-[#ff6699] transition-all"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="mt-4 w-full flex items-center justify-center gap-2 bg-[#ff6699] text-white font-bold py-3 rounded-lg hover:bg-[#ff5588] transition-all"
          >
            <Send size={20} /> Send Message
          </motion.button>
        </motion.form>
      </main>

      {/* Small Footer */}
      <footer className="text-center py-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} NetIntranet. Built with ❤️ & creativity.
      </footer>
    </div>
  );
};

export default ContactPage;
