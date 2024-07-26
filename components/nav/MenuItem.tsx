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

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({
  link,
  toggleOpen,
}: {
  link: any;
  toggleOpen: any;
}) => {
  // const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      className="mobileListItem"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        className="text-placeholder"
        href={link.location}
        onClick={() => toggleOpen(false)}
      >
        {link.linkTitle}
      </Link>
      {/* <div className="icon-placeholder" style={style} />
      <div className="text-placeholder" style={style} /> */}
    </motion.li>
  );
};

export default MenuItem;
