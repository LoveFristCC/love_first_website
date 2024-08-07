"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const ministries = [
  {
    id: 1,
    src: "/MEN.webp",
    link: "/connect/ministries/157955",
    alt: "Mens Ministry",
  },
  {
    id: 2,
    src: "/womenMinistry.webp",
    link: "/connect/ministries/158579",
    alt: "Womens Ministry",
  },
  {
    id: 3,
    src: "/Singles.webp",
    link: "/connect/ministries/158609",
    alt: "Singles Ministry",
  },
  {
    id: 4,
    src: "/youngAdults.webp",
    link: "/connect/ministries/2220040",
    alt: "Young Adults Ministry",
  },
  {
    id: 5,
    src: "/teens.webp",
    link: "/connect/ministries/254955",
    alt: "Kids and Youth Ministry",
  },
];

const getMainImageData = (date: any) => {
  const newDate = date.getDate();
  const week = Math.ceil(newDate / 7);

  if (week === 1) {
    // First Friday
    return ministries.find(
      (ministry) => ministry.alt === "Young Adults Ministry"
    );
  } else if (week === 2) {
    // Second Saturday
    const month = date.getMonth();
    if (month % 2 === 0) {
      // Even months
      return ministries.find((ministry) => ministry.alt === "Womens Ministry");
    } else {
      // Odd months
      return ministries.find((ministry) => ministry.alt === "Mens Ministry");
    }
  } else if (week === 3) {
    // Third Friday
    return ministries.find(
      (ministry) => ministry.alt === "Kids and Youth Ministry"
    );
  } else {
    return (
      ministries.find(
        (ministry) => ministry.alt === "Kids and Youth Ministry"
      ) || ministries[0]
    ); // Default to the first ministry if no match
  }
};

const CommunitySection = ({ date }: { date: any }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [mainImage, setMainImage] = useState<any>(getMainImageData(date));
  const [remainingMinistries, setRemainingMinistries] = useState<any>([]);

  useEffect(() => {
    setRemainingMinistries(
      ministries.filter((ministry) => ministry.id !== mainImage.id)
    );
  }, []);

  return (
    <section className="communitySection">
      <h2>
        Join us for valuable ministries designed for children, youth, adults,
        and seniors.
      </h2>
      <div className="communityContentContainer">
        <Link href={mainImage?.link} className="mainImageContainer">
          <Image
            src={mainImage?.src as string}
            width={600}
            height={300}
            alt={mainImage?.alt}
          />
        </Link>
        <motion.div
          className="ministryContainer"
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {remainingMinistries.map((ministry: any) => (
            <motion.a
              key={ministry.id}
              href={ministry.link}
              className="ministryImageContainer"
              variants={item}
            >
              <Image
                src={ministry.src}
                width={300}
                height={100}
                alt={ministry.alt}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
      <Link href="/connect/ministries" className="viewWhatWeOffer">
        Explore Our Ministries
      </Link>
    </section>
  );
};

export default CommunitySection;
