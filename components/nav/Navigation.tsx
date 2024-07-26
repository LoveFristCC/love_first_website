import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({
  toggleOpen,
  isOpen,
}: {
  toggleOpen: any;
  isOpen: boolean;
}) => (
  <motion.ul
    className={`mobileList ${!isOpen && "hidden"}`}
    variants={variants}
  >
    {itemIds.map((i: any, key) => (
      <MenuItem link={i} key={key} toggleOpen={toggleOpen} />
    ))}
  </motion.ul>
);

const itemIds = [
  { linkTitle: "History", location: "/about-love-first" },
  { linkTitle: "Location", location: "/about-love-first/location" },
  { linkTitle: "Our Pastors", location: "/about-love-first/pastors" },
  { linkTitle: "All Groups", location: "/connect" },
  { linkTitle: "Creative Arts", location: "/connect/creative-arts" },
  { linkTitle: "Love Groups", location: "/connect/love-groups" },
  { linkTitle: "Media Team", location: "/connect/media-team" },
  { linkTitle: "Ministries", location: "/connect/ministries" },
  { linkTitle: "Service Volunteers", location: "/connect/service-volunteers" },
  { linkTitle: "Volunteer Army", location: "/connect/volunteer-army" },
  { linkTitle: "Youth Group", location: "/connect/youth" },
  { linkTitle: "Prayer", location: "/prayer" },
  { linkTitle: "Give", location: "/give" },
  { linkTitle: "Contact", location: "/contact" },
  { linkTitle: "Online", location: "/watch-online" },
];

export default Navigation;
