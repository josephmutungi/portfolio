"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

import Image from "next/image";

const links = [
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
];

const handleWhatsAppClick = () => {
  const phone = "+254758133905";
  const message = "Hello, I need help from JMMLABS.co.ke!";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-0 w-full z-[100]">
      {/* Main Navbar Header (Always visible) */}
      <div
        className={`relative z-[120] w-full transition-colors duration-300  bg-white backdrop-blur-md md:border-b border-gray-100"`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center bg-white">
          {/* Logo */}
          <Link
            href="/"
            className="relative hover:opacity-90 transition-opacity"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative w-[130px] h-[80px] md:w-[160px] md:h-[120px]">
              <Image
                src="/jmmlabslogo.png"
                alt="JMM Labs Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="md:hidden"
          >
            <button
              onClick={() => {
                handleWhatsAppClick();
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-center gap-3 py-1.5 px-3 bg-blue-600 text-white rounded-2xl font-bold text-xs shadow-xl shadow-green-100"
            >
              <FaWhatsapp size={24} />
              WhatsApp Us
            </button>
          </motion.div>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-1 bg-gray-50/80 p-1.5 rounded-full border border-gray-100">
            {links.map((l) => {
              const isActive = pathName === l.path;
              return (
                <Link
                  key={l.name}
                  href={l.path}
                  className={`relative px-5 py-2 text-sm font-semibold transition-colors duration-300 rounded-full ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white shadow-sm rounded-full"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{l.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Action Button (Desktop Only) */}
          <div className="hidden md:block">
            <button
              onClick={handleWhatsAppClick}
              className="bg-blue-600 px-6 py-2.5 rounded-full text-white font-bold text-sm transition-all hover:bg-blue-700 active:scale-95 shadow-lg shadow-green-100"
            >
              GET STARTED
            </button>
          </div>
        </div>

        <div className="md:hidden px-2 z-50 bg-white">
          {/* Safe Area Padding for content inside menu (Starts below the 80px top bar) */}
          <div className="flex flex-col overflow-x-auto">
            <div className="flex p-4 gap-3">
              {links.map((l, i) => (
                <div key={l.name}>
                  <Link
                    href={l.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 bg-gray-200 space-y-3 rounded-md text-xs font-bold tracking-tight ${
                      pathName === l.path ? "text-blue-600" : "text-gray-900"
                    }`}
                  >
                    {l.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
