import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Images/logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Locations", href: "/locations" },
  { name: "Our Services", href: "/services" },
  { name: "Memberships", href: "/memberships" },
  { name: "Gift Cards", href: "/gift-cards" },
  { name: "Packages", href: "/packages" },
  { name: "FAQ’s", href: "/faqs" },
  { name: "Contact Us", href: "/contact" },
];

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  return (
    <header className="relative w-full overflow-hidden bg-linear-to-b from-[#faf8f6] to-transparent">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#d8b7a3]/20 blur-3xl" />
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#e7d7cb]/30 blur-3xl" />

      <div className="hidden xl:block">
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 flex flex-col items-center pt-10"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-32 w-auto object-contain drop-shadow-sm"
          />

          <div className="mt-5 h-px w-40 bg-linear-to-r from-transparent via-[#8b5e4a] to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="relative z-20"
        >
          <div className="mx-auto mt-6 flex max-w-425 items-center justify-between gap-10 px-20 pb-6">
            <div className="flex w-full items-center justify-between">
              <nav className="flex items-center gap-9">
                {navLinks.map((item, index) => {
                  const isActive = location.pathname === item.href;

                  return (
                    <motion.div
                      key={index}
                      whileHover={{ y: -2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link
                        to={item.href}
                        className={`group relative text-[18px] tracking-wide transition-all duration-300 ${
                          isActive
                            ? "font-bold text-[#5b3528]"
                            : "text-[#6f6b67]"
                        }`}
                        style={{
                          fontFamily: "var(--font-menu)",
                        }}
                      >
                        {item.name}

                        <span
                          className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-[#8b5e4a] transition-all duration-300 ${
                            isActive ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.a
                href="tel:8666868680"
                whileHover={{ y: -2, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group ml-8 flex items-center gap-3 rounded-full border border-[#d8c7bc]/70 bg-white/60 px-4 py-2.5 backdrop-blur-md transition-all duration-300 hover:border-[#8b5e4a]/40 hover:shadow-[0_4px_20px_rgba(91,53,40,0.08)]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5b3528] text-white transition-all duration-300 group-hover:rotate-12">
                  <Phone size={16} strokeWidth={2.2} />
                </div>

                <span
                  className="text-[17px] tracking-wide text-[#5b3528]"
                  style={{
                    fontFamily: "var(--font-menu)",
                  }}
                >
                  (866) 686-8680
                </span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative z-30 flex items-center justify-between px-5 py-5 xl:hidden">
        <motion.img
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          src={logo}
          alt="Logo"
          className="h-16 w-auto object-contain drop-shadow-sm"
        />

        <motion.button
          whileTap={{ scale: 0.9 }}
          animate={mobileMenu ? "open" : "closed"}
          onClick={() => setMobileMenu(true)}
          className="relative flex h-13 w-13 items-center justify-center overflow-hidden rounded-full bg-transparent"
        >
          <div className="absolute inset-0 bg-linear-to-br from-white/40 to-transparent" />

          <motion.div
            animate={{
              rotate: mobileMenu ? 180 : 0,
            }}
            transition={{
              duration: 0.45,
              ease: "easeInOut",
            }}
            className="relative z-10 text-[#5b3528]"
          >
            <Menu size={24} strokeWidth={2.2} />
          </motion.div>
        </motion.button>
      </div>

      <AnimatePresence>
        {mobileMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={() => setMobileMenu(false)}
              className="fixed inset-0 z-40 bg-black/45 backdrop-blur-[6px]"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 26,
                stiffness: 220,
              }}
              className="fixed right-0 top-0 z-50 flex h-screen w-[75%] flex-col overflow-hidden border-l border-white/20 bg-[#fcf9f6]/95 shadow-[-10px_0_60px_rgba(0,0,0,0.15)] backdrop-blur-2xl"
            >
              <div className="relative flex items-center justify-between border-b border-[#efe4dd] px-6 py-5">
                <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-[#d8b7a3]/20 blur-3xl" />

                <img
                  src={logo}
                  alt="Logo"
                  className="relative z-10 h-16 w-auto object-contain"
                />

                <motion.button
                  whileTap={{ scale: 0.9, rotate: 90 }}
                  onClick={() => setMobileMenu(false)}
                  className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-transparent text-[#5b3528]"
                >
                  <X size={22} />
                </motion.button>
              </div>

              <nav className="flex flex-1 flex-col px-6 py-7">
                {navLinks.map((item, index) => {
                  const isActive = location.pathname === item.href;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.08 + index * 0.06,
                        duration: 0.45,
                      }}
                      whileHover={{ x: 6 }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => setMobileMenu(false)}
                        className={`group relative block overflow-hidden border-b border-[#f2e9e4] py-4 text-[18px] tracking-wide transition-all duration-300 ${
                          isActive
                            ? "font-semibold text-[#5b3528]"
                            : "text-[#6f6b67]"
                        }`}
                        style={{
                          fontFamily: "var(--font-menu)",
                        }}
                      >
                        <span className="absolute inset-0 -translate-x-full bg-[#f7f1ec] transition-transform duration-500 group-hover:translate-x-0" />

                        <span className="relative z-10 flex items-center justify-between">
                          {item.name}

                          <span className="text-[#b89b8b] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                            →
                          </span>
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="relative border-t border-[#efe4dd] p-6">
                <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-[#d8b7a3]/20 blur-3xl" />

                <motion.a
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ y: -2 }}
                  href="tel:8666868680"
                  className="relative flex items-center gap-4 overflow-hidden rounded-[26px] bg-[#5b3528] px-5 py-5 text-white shadow-[0_10px_30px_rgba(91,53,40,0.25)]"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent" />

                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 backdrop-blur-md">
                    <Phone size={18} />
                  </div>

                  <div className="relative z-10">
                    <p
                      className="text-sm tracking-wide text-white/70"
                      style={{
                        fontFamily: "var(--font-menu)",
                      }}
                    >
                      Call Us Anytime
                    </p>

                    <p
                      className="mt-0.5 text-[18px]"
                      style={{
                        fontFamily: "var(--font-menu)",
                      }}
                    >
                      (866) 686-8680
                    </p>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
