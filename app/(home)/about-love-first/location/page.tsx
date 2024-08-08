import Image from "next/image";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Visit Us - Love First Christian Center, Riverview, FL",
    description:
      "Discover Love First Christian Center in Riverview, FL. Find our address, contact information, service times, and accessibility details. Plan your visit today!",
    openGraph: {
      url: `https://www.lfcc.tv/about-love-first/location`,
    },
  };
}

export default function LocationPage() {
  return (
    <div className="locationPage">
      <section className="locationHero">
        <div className="locationHeaderContainer">
          <h1 className="title">Visit Love First Christian Center</h1>
          <p className="welcomeMessage">
            We look forward to having you join us.
          </p>
        </div>
        <Image
          src="/locationHeader.webp"
          alt="Be Happy Here at Love First"
          layout="fill"
          objectFit="cover"
          className="heroImage"
        />
      </section>

      <div className="locationContent">
        <section className="infoSection">
          <div className="section">
            <h2 className="sectionTitle">Find Our Address</h2>
            <p>12847 Balm Riverview Road, Riverview, FL 33579</p>
            <p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=12847+Balm+Riverview+Road,Riverview,FL,33579"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
                aria-label="Map Location of Love First Christian Center"
              >
                Get Directions
              </a>
            </p>
          </div>

          <div className="section">
            <h2 className="sectionTitle">Contact Information</h2>
            <p>
              <strong>Phone:</strong> <br />
              <a href="tel:8136712009" className="link">
                (813) 671-2009
              </a>
            </p>
            <p>
              <strong>Email:</strong> <br />
              <a
                href="mailto:info@lovefirstchristiancenter.com"
                className="link"
              >
                info@lovefirstchristiancenter.com
              </a>
            </p>
            <p>
              <strong>Office Hours:</strong> <br /> Mon-Fri, 9 AM - 3 PM
            </p>
          </div>

          <div className="section">
            <h2 className="sectionTitle">Service Times and Schedules</h2>
            <p>
              <strong>Sunday Services:</strong> <br /> 7:45 AM, 9:45 AM, 11:45
              AM
            </p>
            <p>
              <strong>Wednesday Bible Study:</strong> <br /> 7 PM
            </p>
          </div>

          <div className="section">
            <h2 className="sectionTitle">Accessibility Features</h2>
            <p>
              Our church is fully accessible with ramps and designated seating
              areas. We also offer sign language services at our 9:45 AM Sunday
              service.
            </p>
          </div>

          <div className="section">
            <h2 className="sectionTitle">Health and Safety Information</h2>
            <p>
              We prioritize the health and safety of our visitors. Our
              facilities are regularly cleaned and maintained to provide a safe
              and welcoming environment. We have well-lit parking areas,
              accessible entrances, and trained staff to assist with any needs.
            </p>
            <p>
              We also have first aid kits available throughout the premises and
              a designated safety team ready to respond to any emergencies. Your
              well-being is our top priority, and we are committed to ensuring a
              safe visit for everyone.
            </p>
          </div>
        </section>

        <section className="mapSection">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14116.305732589997!2d-82.2920837!3d27.8074181!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2d3f9c6de71d5%3A0x52502d053ab70452!2sLove%20First%20Christian%20Center!5e0!3m2!1sen!2sus!4v1721245674795!5m2!1sen!2sus"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen={false}
            aria-hidden="false"
            tabIndex={0}
            className="map"
            title="Love First Christian Center Map"
          ></iframe>
        </section>
      </div>
    </div>
  );
}
