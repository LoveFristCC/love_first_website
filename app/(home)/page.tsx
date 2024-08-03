import dynamic from "next/dynamic";
import Hero from "@/components/HeroComponent/Hero";
import SermonSection from "@/components/sermons/SermonSection";
import WelcomeSection from "@/components/welcome/WelcomeSection";
import EventsPage from "@/components/events/EventsPage";
import { Suspense } from "react";

const CommunitySection = dynamic(
  () => import("@/components/community/CommunitySection"),
  {
    loading: () => <p>Loading...</p>,
  }
);

export default async function Page() {
  const date = new Date();
  const day = date.getDay();

  const serviceTime = day === 0 || day > 3 ? "sunday" : "wednesday";

  return (
    <div className="mainPage">
      <Hero serviceTime={serviceTime} />

      <Suspense>
        <WelcomeSection serviceTime={serviceTime} />
        <CommunitySection />
      </Suspense>

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

      <Suspense>
        <SermonSection path="home" />
        <EventsPage />
      </Suspense>
    </div>
  );
}
