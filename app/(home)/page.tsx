import Hero from "@/components/HeroComponent/Hero";
import SermonSection from "@/components/sermons/SermonSection";
import WelcomeSection from "@/components/welcome/WelcomeSection";
import EventsPage from "@/components/events/EventsPage";
import CommunitySection from "@/components/community/CommunitySection";
import JoinSection from "@/components/join/join";
import Script from "next/script";

export default async function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "PlaceOfWorship",
    name: "Love First Christian Center",
    url: "https://www.lfcc.tv",
    logo: "https://cdn.sanity.io/images/51iewwwv/production/1334751cc15e41816828dbcfe980784ecb970b92-500x201.webp",
    address: {
      "@type": "PostalAddress",
      streetAddress: "12847 Balm Riverview Rd",
      addressLocality: "Riverview",
      addressRegion: "FL",
      postalCode: "33579",
      addressCountry: "US",
    },
    telephone: "+1-813-671-2009",
    sameAs: [
      "https://www.facebook.com/wearelovefirst",
      "https://www.instagram.com/wearelovefirst",
      "https://www.youtube.com/@LoveFirstChristianCenter",
    ],
  };
  const date = new Date();
  const day = date.getDay();

  const serviceTime = day === 0 || day > 3 ? "sunday" : "wednesday";

  return (
    <div className="mainPage">
      <Script
        id="church-local-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero serviceTime={serviceTime} />

      <WelcomeSection serviceTime={serviceTime} />

      <CommunitySection date={date} />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="waveSvg"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,32L48,37.3C96,43,192,53,288,90.7C384,128,480,192,576,202.7C672,213,768,171,864,165.3C960,160,1056,192,1152,218.7C1248,245,1344,267,1392,277.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <SermonSection path="home" />
      <JoinSection />
      <EventsPage />
    </div>
  );
}
