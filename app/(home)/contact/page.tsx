import Link from "next/link";
import Image from "next/image";
import "./contact.css";
import type { Metadata, ResolvingMetadata } from "next";
import ContactForm from "./ContactForm";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const previousImages = (await parent).openGraph?.images || [];
  const siteName = "Love First Christian Center";
  return {
    title: "Contact Us - Love First Christian Center",
    description:
      "Get in touch with Love First Christian Center. Find our address, phone number, and email. Office hours: Mon-Fri 9 AM-3 PM, Sun 7:30 AM-1:30 PM.",
    openGraph: {
      images: [...previousImages],
      siteName: siteName,
      url: "https://www.lfcc.tv/contact",
    },
    alternates: {
      canonical: "https://www.lfcc.tv/contact",
    },
  };
}

export default async function Contact() {
  return (
    <div>
      <section className="contactHero">
        <div className="contactContent">
          <h1>Contact Love First Christian Center</h1>
          <p>
            Have questions, need assistance, or want to get involved with our
            community? Reach out to us using the form below or through our
            contact details. We&apos;re here to help and look forward to
            connecting with you!
          </p>
        </div>
        <Image
          src="/contactHeader.webp"
          alt="Contact Love First Christian Center"
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
          }}
          priority
        />
      </section>

      <section className="contactInfoSection">
        <div className="contactDetails">
          <h2>Contact Information</h2>
          <p>
            <strong>Address:</strong> 12847 Balm Riverview Rd, Riverview, FL
            33579
          </p>
          <p>
            <strong>Phone:</strong> <a href="tel:8136712009">(813) 671-2009</a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@lovefirstchristiancenter.com">
              info@lovefirstchristiancenter.com
            </a>
          </p>
        </div>
        <div className="officeHours">
          <h3>Office Hours</h3>
          <p>Monday – Friday: 9:00 AM – 3:00 PM</p>
          <p>Saturday: Closed</p>
          <p>Sunday: 7:30 AM – 1:30 PM</p>
        </div>
      </section>

      <section className="contactFormSection">
        <div className="contactFormInfo">
          <h2>Send Us a Message</h2>
          <p>
            Have a question or need assistance? Fill out the form below, and
            we’ll get back to you as soon as possible. Your inquiries are
            important to us!
          </p>
        </div>
        <ContactForm />
      </section>

      <section className="contactSocialLinks">
        <h2>Connect with Us</h2>
        <p>
          Follow us on social media to stay updated with our latest news,
          events, and community updates. Join our online community!
        </p>
        <div className="contactSocialIconsContainer">
          <Link
            href="https://www.facebook.com/wearelovefirst"
            target="_blank"
            aria-label="Visit Love First Christian Center on Facebook"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M20.9,2H3.1A1.1,1.1,0,0,0,2,3.1V20.9A1.1,1.1,0,0,0,3.1,22h9.58V14.25h-2.6v-3h2.6V9a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7H17.3c-1.26,0-1.5.6-1.5,1.47v1.93h3l-.39,3H15.8V22h5.1A1.1,1.1,0,0,0,22,20.9V3.1A1.1,1.1,0,0,0,20.9,2Z"></path>
            </svg>
          </Link>
          <Link
            href="https://www.instagram.com/wearelovefirst/"
            target="_blank"
            aria-label="Visit Love First Christian Center on Instagram"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,4.95,3.27,3.27,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86C9,.05,9.28,2,12,2s3,.05,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19,4.2,3.19,3.19,0,0,1,20.14,5a5.54,5.54,0,0,1,.34,1.86c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,7.44A4.56,4.56,0,1,0,16.56,12,4.57,4.57,0,0,0,12,7.44ZM12,15.5A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"></path>
            </svg>
          </Link>
          <Link
            href="https://www.youtube.com/@LoveFirstChristianCenter"
            target="_blank"
            aria-label="Visit Love First Christian Center on YouTube"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M20.95,6.93a2.66,2.66,0,0,0-1.87-1.88C17.62,4.5,12,4.5,12,4.5s-5.62,0-7.08.55A2.66,2.66,0,0,0,3.05,6.93,27.93,27.93,0,0,0,2.5,12a27.93,27.93,0,0,0,.55,5.07,2.66,2.66,0,0,0,1.87,1.87c1.46.55,7.08.55,7.08.55s5.62,0,7.08-.55a2.66,2.66,0,0,0,1.87-1.87A27.93,27.93,0,0,0,21.5,12,27.93,27.93,0,0,0,20.95,6.93ZM10,15.5V8.5l6,3.5Z"></path>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
