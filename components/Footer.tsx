"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const date = new Date();
  const year = date.getFullYear();

  const getFooterClass = () => {
    switch (pathname) {
      case "/":
        return "home-footer";
      case "/about":
        return "about-footer";
      case "/contact":
        return "contact-footer";
      case "/about-love-first/pastors":
        return "pastors-footer";
      case "/prayer":
        return "prayer-footer";
      case "/bible-study":
        return "study-footer";
      case "/biggive":
        return "big-give-footer";
      // Add more cases as needed
      default:
        return "default-footer";
    }
  };

  return (
    <>
      <div className={`footerSvg path-${getFooterClass()}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#333"
            fillOpacity="1"
            d="M0,96L60,101.3C120,107,240,117,360,138.7C480,160,600,192,720,186.7C840,181,960,139,1080,122.7C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <footer>
        <div className="footerContent">
          <div className="footerLinks">
            <p>About</p>
            <Link href="/about-love-first">Beliefs</Link>
            <Link href="/about-love-first/pastors">Leadership</Link>
            <Link href="/about-love-first/location">Location</Link>
          </div>
          <div className="footerLinks">
            <p>Connect</p>
            <Link href="/connect">All Groups</Link>
            <Link href="/connect/creative-arts">Creative Arts</Link>
            <Link href="/connect/love-groups">Love Groups</Link>
            <Link href="/connect/media-team">Media Team</Link>
            <Link href="/connect/ministries">Ministries</Link>
            <Link href="/connect/service-volunteers">Service Volunteers</Link>
            <Link href="/connect/youth">Youth Ministry</Link>
            <Link href="/connect/volunteer-army">Volunteer Army</Link>
          </div>
          <div className="footerLinks">
            <p>Media</p>
            <Link href="/watch-online">Watch Online</Link>
            <Link href="/watch-online/previous-sermons">Previous Sermons</Link>
          </div>
          <div className="footerLinks">
            <p>Events</p>
            <Link href="/events">Upcoming Events</Link>
            <Link href="/events/calendar">Calendar</Link>
          </div>
          <div className="footerLinks">
            <p>Support</p>
            <Link href="/giving">Give</Link>
            <Link href="/prayer">Need Prayer</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footerLinks">
            <p>Resources</p>
            <Link href="/BABY-DEDICATION-REQUEST.pdf">
              Baby Dedication form
            </Link>
            <Link href="/Minor-Baptism-Consent.pdf">Baptism Consent form</Link>
            <Link href="/bible-study">Bible Study Notes</Link>
            <Link
              href="https://churchcenter.com/setup"
              rel="noreferrer noopener"
              target="_blank"
              aria-label="Download the LFCC app"
            >
              Download the LFCC app
            </Link>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSd6ZCSKtE1leLhUPuvyAoUNXwxRWq2HpY4F9oBiRJ8eWhkaTA/viewform"
              rel="noreferrer noopener"
              target="_blank"
              aria-label="Share an Update"
            >
              Share an Update
            </Link>
          </div>
        </div>
        <div className="footerHeader">
          <div className="footerLogoContainer">
            <Link href="/" className="homeLink">
              <Image
                src="/lfcc.webp"
                alt="Love First Christian Center, Riverview, FL"
                width="100"
                height="100"
              />
            </Link>
            <p>12847 Balm Riverview Rd,</p>
            <p>Riverview, FL 33579</p>
            <Link href="tel:8136712009">(813) 671-2009</Link>
          </div>
          <div className="socialLinks">
            <p>Follow us on Social Media</p>
            <div className="socialIconsContainer">
              <Link
                href="https://www.facebook.com/wearelovefirst"
                target="_blank"
                aria-label="Visit Love First on Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="icon"
                    d="M20.9,2H3.1A1.1,1.1,0,0,0,2,3.1V20.9A1.1,1.1,0,0,0,3.1,22h9.58V14.25h-2.6v-3h2.6V9a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7H17.3c-1.26,0-1.5.6-1.5,1.47v1.93h3l-.39,3H15.8V22h5.1A1.1,1.1,0,0,0,22,20.9V3.1A1.1,1.1,0,0,0,20.9,2Z"
                  ></path>
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/wearelovefirst/"
                target="_blank"
                aria-label="Visit Love First on Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="icon "
                    d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,4.95,3.27,3.27,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86C9,.05,9.28,2,12,2s3,.05,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19,4.2,3.19,3.19,0,0,1,20.14,5a5.54,5.54,0,0,1,.34,1.86c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,7.44A4.56,4.56,0,1,0,16.56,12,4.57,4.57,0,0,0,12,7.44ZM12,15.5A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
                  ></path>
                </svg>
              </Link>
              <Link
                href="https://www.youtube.com/@LoveFirstChristianCenter"
                target="_blank"
                aria-label="Visit Love First on YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="icon "
                    d="M20.95,6.93a2.66,2.66,0,0,0-1.87-1.88C17.62,4.5,12,4.5,12,4.5s-5.62,0-7.08.55A2.66,2.66,0,0,0,3.05,6.93,27.93,27.93,0,0,0,2.5,12a27.93,27.93,0,0,0,.55,5.07,2.66,2.66,0,0,0,1.87,1.87c1.46.55,7.08.55,7.08.55s5.62,0,7.08-.55a2.66,2.66,0,0,0,1.87-1.87A27.93,27.93,0,0,0,21.5,12,27.93,27.93,0,0,0,20.95,6.93ZM10,15.5V8.5l6,3.5Z"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="copyRight">
          <p>
            Copyright {year} &copy; All Rights Reserved. Love First Christian
            Center
          </p>
          <p>
            Website Expertly Crafted and Designed by{" "}
            <Link
              href="https://www.khalstead.com"
              rel="noopener noreferrer"
              target="_blank"
              className="designerLink"
            >
              Kevin Halstead, Owner of EliteWebWrxs
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}
