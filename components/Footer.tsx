import Image from "next/image";
import Link from "next/link";

export default async function Footer() {
  // const data = await sanityFetch<SettingsQueryResult>({
  //   query: settingsQuery,
  // });
  // const footer = data?.footer || [];

  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <svg
        style={{ marginBottom: "-35px", zIndex: -1 }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#333"
          fillOpacity="1"
          d="M0,96L60,101.3C120,107,240,117,360,138.7C480,160,600,192,720,186.7C840,181,960,139,1080,122.7C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <footer>
        <div className="footerContent">
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
          <div className="footerLinks">
            <p>About</p>
            <Link href="/about-love-first">Beliefs</Link>
            <Link href="/about-love-first/pastors">Leadership</Link>
            <Link href="/about-love-first/location">Location</Link>
          </div>
          <div className="footerLinks">
            <p>Connect</p>
            <Link href="/connect/events">Events</Link>
            <Link href="/connect/life-groups">Life Groups</Link>
            <Link href="/connect/life-university">Life University</Link>
            <Link href="/connect/ministries">Ministries</Link>
            <Link href="/connect/outreach">Outreach</Link>
          </div>
          <div className="footerLinks">
            <p>Media</p>
            <Link href="/watch-online">Watch Online</Link>
            <Link href="/watch-online/previous-sermons">Previous Sermons</Link>
          </div>
          <div className="footerLinks">
            <p>Support</p>
            <Link href="/give">Give</Link>
            <Link href="/prayer">Need Prayer</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="socialLinks">
          <p>Follow us on Social Media</p>
          <div className="socialIconsContainer">
            <Link
              href="https://www.facebook.com/wearelovefirst"
              target="_blank"
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
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
              >
                <path
                  className="icon "
                  d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"
                ></path>
              </svg>
            </Link>
            <Link
              href="https://www.youtube.com/@LovefirstChristianCenter/featured"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
              >
                <path
                  className="icon"
                  d="M23,9.71a8.5,8.5,0,0,0-.91-4.13,2.92,2.92,0,0,0-1.72-1A78.36,78.36,0,0,0,12,4.27a78.45,78.45,0,0,0-8.34.3,2.87,2.87,0,0,0-1.46.74c-.9.83-1,2.25-1.1,3.45a48.29,48.29,0,0,0,0,6.48,9.55,9.55,0,0,0,.3,2,3.14,3.14,0,0,0,.71,1.36,2.86,2.86,0,0,0,1.49.78,45.18,45.18,0,0,0,6.5.33c3.5.05,6.57,0,10.2-.28a2.88,2.88,0,0,0,1.53-.78,2.49,2.49,0,0,0,.61-1,10.58,10.58,0,0,0,.52-3.4C23,13.69,23,10.31,23,9.71ZM9.74,14.85V8.66l5.92,3.11C14,12.69,11.81,13.73,9.74,14.85Z"
                ></path>
              </svg>
            </Link>

            <Link href="https://x.com/wearelovefirst" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 50 50"
              >
                <path
                  className="icon"
                  d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className="copyRight">
          <p>Copyright &copy;{year} Love First Christian Center.</p>
        </div>
      </footer>
    </>
  );
}
