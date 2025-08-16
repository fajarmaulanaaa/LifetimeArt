import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuHeader } from "@/app/lib/constants";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";

function Logo() {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      }}
      className="flex items-center gap-2"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center"
      >
        <Image
          priority={false}
          width={20}
          height={20}
          alt="logo"
          src={"/img/Logo.png"}
        />
      </motion.div>
      <span className="font-semibold text-white text-lg lg:text-xl">
        LifetimeArt
      </span>
    </motion.div>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const closeMenu = () => setIsMenuOpen(false);
  const headerRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerH = headerRef.current?.offsetHeight ?? 0;
    const y = el.getBoundingClientRect().top + window.pageYOffset - headerH - 8;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    closeMenu();

    if (history.replaceState) history.replaceState(null, "", " ");
    scrollToSection(id);
  };

  return (
    <>
      <motion.header
        ref={headerRef}
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
        className="w-full"
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Logo />

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuHeader.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.1 * index,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                  className="relative"
                >
                  <motion.a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className="relative block py-2 text-sm font-medium text-white transition-colors duration-300"
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                  >
                    {item.name}
                    <motion.span
                      variants={{
                        rest: { width: 0, opacity: 0.9 },
                        hover: { width: "100%", opacity: 1 },
                      }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="pointer-events-none absolute left-0 bottom-0 h-0.5 bg-white"
                    />
                  </motion.a>
                </motion.div>
              ))}
            </nav>

            {/* Burger mobile */}
            <button
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center text-white rounded-lg"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* === Drawer mobile: full-screen + blur (tetap seperti punyamu) === */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <>
            {/* Overlay blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
              }}
              onClick={closeMenu}
              className="fixed inset-0 backdrop-blur-md z-40 lg:hidden"
            />

            {/* Panel full-screen dengan blur dan saturate */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{
                x: 0,
                transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
              }}
              exit={{
                x: "100%",
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
              }}
              className="fixed inset-0 bg-black/20 backdrop-blur-2xl z-50 lg:hidden shadow-2xl border-l border-white/10"
              style={{
                backdropFilter: "blur(16px) saturate(180%)",
                WebkitBackdropFilter: "blur(16px) saturate(180%)",
              }}
            >
              <motion.div
                className="flex items-center justify-between p-6 border-b border-white/10"
                initial={{ y: -20, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: 0.2, duration: 0.3 },
                }}
                exit={{ y: -20, opacity: 0 }}
              >
                <Logo />
                <button
                  onClick={closeMenu}
                  className="w-10 h-10 inline-flex items-center justify-center text-white rounded-lg hover:bg-white/10"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </motion.div>

              <motion.nav
                className="py-8 px-6"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1, delayChildren: 0.4 },
                  },
                }}
              >
                <div className="space-y-2">
                  {menuHeader.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        handleNavClick(e, item.id);
                        closeMenu();
                      }}
                      variants={{
                        hidden: { x: 30, opacity: 0 },
                        visible: {
                          x: 0,
                          opacity: 1,
                          transition: {
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        },
                      }}
                      className="block py-4 px-4 text-lg font-medium text-white rounded-lg hover:bg-white/5"
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
              </motion.nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
