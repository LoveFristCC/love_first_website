import { useEffect } from "react";
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
  showBigGiveLink,
  showDanielFastLink,
}: {
  toggleOpen: any;
  isOpen: boolean;
  showDanielFastLink: any;
  showBigGiveLink: any;
}) => {
  const itemIds = [
    { linkTitle: "Watch Online", location: "", header: true },
    { linkTitle: "Online", location: "/watch-online" },
    {
      linkTitle: "Previous Sermons",
      location: "/watch-online/previous-sermons",
    },
    { linkTitle: "About Us", location: "", header: true },
    { linkTitle: "History", location: "/about-love-first" },
    { linkTitle: "Visit Us", location: "/visit-us" },
    { linkTitle: "Our Pastors", location: "/about-love-first/pastors" },
    { linkTitle: "Events", location: "", header: true },
    { linkTitle: "Upcoming Events", location: "/events" },
    { linkTitle: "Calendar", location: "/events/calendar" },
    { linkTitle: "Our Groups", location: "", header: true },
    { linkTitle: "All Groups", location: "/connect" },
    { linkTitle: "Creative Arts", location: "/connect/creative-arts" },
    { linkTitle: "Love Groups", location: "/connect/love-groups" },
    { linkTitle: "Media Team", location: "/connect/media-team" },
    { linkTitle: "Ministries", location: "/connect/ministries" },
    {
      linkTitle: "Service Volunteers",
      location: "/connect/service-volunteers",
    },
    { linkTitle: "Volunteer Army", location: "/connect/volunteer-army" },
    { linkTitle: "Youth Group", location: "/connect/ministries/254955" },
    { linkTitle: "Children's Ministry", location: "/connect/youth/158867" },
    ...(showDanielFastLink?.isActive
      ? [{ linkTitle: "Daniel Fast", location: "/fast" }]
      : []),
    // { linkTitle: "Daniel Fast", location: "/fast" },
    { linkTitle: "Prayer", location: "", header: true },
    { linkTitle: "Submit A Prayer Request", location: "/prayer" },
    { linkTitle: "Give", location: "", header: true },
    { linkTitle: "Give To Love First", location: "/giving" },
    ...(showBigGiveLink?.isActive
      ? [{ linkTitle: "Big Give", location: "/biggive" }]
      : []),
    // { linkTitle: "Big Give", location: "/biggive" },
    { linkTitle: "Have Questions", location: "", header: true },
    { linkTitle: "Contact", location: "/contact" },
  ];

  return (
    <motion.ul
      className={`mobileList ${!isOpen && "hidden"}`}
      variants={variants}
    >
      {itemIds.map((i: any, key) => (
        <MenuItem link={i} key={key} toggleOpen={toggleOpen} />
      ))}
    </motion.ul>
  );
};

export default Navigation;
