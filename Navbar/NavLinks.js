import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import "./navbar.scss";
import { motion } from "framer-motion";

function NavLinks({ isMobile, closeMobileMenu }) {
  const animationFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <div className="nav-links">
      <motion.p
        initial={animationFrom}
        animate={animateTo}
        onClick={() => {
          isMobile && closeMobileMenu();
        }}
      >
        Change time
      </motion.p>
      <motion.p
        initial={animationFrom}
        animate={animateTo}
        onClick={() => {
          isMobile && closeMobileMenu();
        }}
      >
        Change unit
      </motion.p>
    </div>
  );
}

export default NavLinks;
