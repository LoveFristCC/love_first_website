import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({
  link,
  toggleOpen,
}: {
  link: any;
  toggleOpen: any;
}) => {
  return link.header ? (
    <motion.li
      className="mobileListHeader"
      variants={variants}
      // whileHover={{ scale: 1.1 }}
      // whileTap={{ scale: 0.95 }}
    >
      <span className="header-placeholder">{link.linkTitle}</span>
    </motion.li>
  ) : (
    <motion.li
      className="mobileListItem"
      variants={variants}
      // whileHover={{ scale: 1.1 }}
      // whileTap={{ scale: 0.95 }}
    >
      <Link
        className="text-placeholder"
        href={link.location}
        onClick={() => toggleOpen(false)}
      >
        {link.linkTitle}
      </Link>
    </motion.li>
  );
};

export default MenuItem;
