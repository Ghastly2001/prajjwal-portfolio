"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import { Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const router = useRouter();
  const [active, setActive] = useState<string | null>(null);
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Me",
      href: "/about",
    },
    {
      name: "Projects",
      href: "/projects?category=ui_ux",
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/prajjwaldesigns/",
    },
    {
      name: "Behance",
      href: "https://www.behance.net/PrajjwalDesigns",
    },
  ];
  const pathname = usePathname();

  return (
    <div className="fixed w-full top-0 bg-[#F9F6EF] shadow-sm shadow-black/[0.05] z-[10] backdrop-blur-sm">
      <div className="w-full h-[80px] flex items-center px-4 justify-between max-w-7xl mx-auto">
        <div
          className="relative w-[50px] h-[50px] cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src={"/logo.svg"}
            layout="fill"
            alt="logo"
            className="object-contain"
          />
        </div>
        <div className="hidden sm:flex items-center font-gilroy">
          {links.map((link) =>
            link.name === "Projects" ? (
              <div
                key={link.href}
                className="relative "
                onMouseEnter={() => setActive("Projects")}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive("Projects")}
              >
                <div
                  // href={link.href}
                  className={`px-6 text-sm flex font-gilroy items-center${
                    pathname === link.href || pathname === link.href.slice(0, 9)
                      ? "font-bold font-gilroy"
                      : "font-gilroy"
                  } cursor-pointer font-gilroy`}
                >
                  <span>{link.name}</span>{" "}
                  <ChevronDown
                    className={`font-medium ml-1 transition-all ${
                      active === "Projects" ? "rotate-180" : "rotate-0"
                    }`}
                    size={16}
                  />
                </div>

                <AnimatePresence>
                  {active === "Projects" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="absolute top-4 left-0 bg-white backdrop-blur-sm p-4 rounded-lg shadow-xl space-y-3 font-gilroy"
                    >
                      <motion.div
                        initial={{ x: -10 }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="w-20"
                      >
                        <Link
                          href="/projects?category=ui_ux"
                          className="text-black font-medium flex gap-2 font-gilroy"
                        >
                          UI-UX
                        </Link>
                      </motion.div>
                      <motion.div
                        initial={{ x: -10 }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Link
                          className="text-black font-medium font-gilroy"
                          href="/projects?category=product"
                        >
                          Product
                        </Link>
                      </motion.div>
                      <motion.div
                        initial={{ x: -10 }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Link
                          href="/projects?category=research_project "
                          className="text-black font-medium font-gilroy"
                        >
                          Documents
                        </Link>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                href={link.href}
                key={link.href}
                className={`px-6 text-sm ${
                  pathname === link.href || pathname === link.href.slice(0, 9)
                    ? "font-bold"
                    : ""
                }`}
                {...(link.name === "Linkedin" || link.name === "Behance"
                  ? { target: "_blank" }
                  : {})}
              >
                {link.name}
              </Link>
            )
          )}
        </div>
        <MobileMenu links={links} />
      </div>
    </div>
  );
};

export default Navbar;
