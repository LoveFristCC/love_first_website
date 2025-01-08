"use-client";
import { useRef, useEffect } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0)`, // Circle at the top-right
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0 at 100% 0)", // Circle at the top-right
    transition: {
      delay: 0,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const MobileNav = ({
  showBigGiveLink,
  showDanielFastLink,
}: {
  showDanielFastLink: any;
  showBigGiveLink: any;
}) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("noScroll");
    } else {
      document.body.classList.remove("noScroll");
    }
  }, [isOpen]);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={`mobileNav`}
    >
      <motion.div className="background" variants={sidebar}>
        <Navigation
          toggleOpen={toggleOpen}
          isOpen={isOpen}
          showDanielFastLink={showDanielFastLink}
          showBigGiveLink={showBigGiveLink}
        />
      </motion.div>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default MobileNav;
