"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
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

const CommunitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="communitySection">
      <h4>
        Join us for valuable ministries designed for children, youth, adults,
        and seniors.
      </h4>
      <div className="communityContentContainer">
        <Link href="/connect/ministries/254955" className="mainImageContainer">
          <Image
            src="/teens.webp"
            width={600}
            height={300}
            alt="Kids and Youth Ministry"
          />
        </Link>
        <motion.div
          className="ministryContainer"
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.a
            href="/connect/ministries/157955"
            className="ministryImageContainer"
            variants={item}
          >
            <Image
              src="/MEN.webp"
              width={300}
              height={100}
              alt="Mens Ministry"
            />
          </motion.a>
          <motion.a
            href="/connect/ministries/158579"
            className="ministryImageContainer"
            variants={item}
          >
            <Image
              src="/womenMinistry.webp"
              width={300}
              height={100}
              alt="Womens Ministry"
            />
          </motion.a>
          <motion.a
            href="/connect/ministries/158609"
            className="ministryImageContainer"
            variants={item}
          >
            <Image
              src="/Singles.webp"
              width={300}
              height={100}
              alt="Singles Ministry"
            />
          </motion.a>
          <motion.a
            href="/connect/ministries/2220040"
            className="ministryImageContainer"
            variants={item}
          >
            <Image
              src="/youngAdults.webp"
              width={300}
              height={100}
              alt="Young Adults Ministry"
            />
          </motion.a>
        </motion.div>
      </div>
      <Link href="/connect" className="viewWhatWeOffer">
        Explore Our Ministries
      </Link>

      {/* TODO: add additional ministries here with scroll */}
    </section>
  );
};

export default CommunitySection;
