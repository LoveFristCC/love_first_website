import Image from "next/image";
import "./give.css";
import type { Metadata, ResolvingMetadata } from "next";

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
    title: "Ways to Give - Love First Christian Center",
    description:
      "Support Love First Christian Center with online donations, text, Cash App, Zelle, or mail. Your contributions fund community programs and outreach. Learn more and make a difference.",
    openGraph: {
      images: [...previousImages],
      siteName: siteName,
      url: "https://www.lfcc.tv/giving",
    },
    alternates: {
      canonical: "https://www.lfcc.tv/giving",
    },
  };
}

export default async function Give() {
  return (
    <div>
      <section className="giveHero">
        <div className="giveContent">
          <h1>Support Love First Christian Center</h1>
          <p>
            Your generous contributions help us to continue our mission and make
            a difference in our community. By giving, you support our various
            ministries, outreach programs, and the overall growth of our church.
            Whether you choose to give a one-time donation or set up recurring
            giving, every contribution makes an impact. Thank you for your
            support and partnership in our mission to spread love and faith.
          </p>
        </div>

        <Image
          src="/giveHeader.webp"
          alt="Contact Love First Christian Center"
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
          }}
          priority
        />
      </section>
      <section className="giveBackSection">
        <div className="giveBackContent">
          <h2>Giving Back to the Community</h2>
          <p>
            &quot;Give, and it will be given to you: good measure, pressed down,
            shaken together, and running over will be put into your bosom. For
            with the same measure that you use, it will be measured back to
            you.&quot; <br />
            <span>Luke 6:38</span>
          </p>
        </div>
        <div className="giveBackImage">
          <Image
            src="/outreach.webp"
            alt="Love First Outreach"
            width={500}
            height={250}
          />
        </div>
      </section>
      <section className="waysToGiveSection">
        <h2>Ways to Give to Love First Christian Center</h2>
        <div className="givingOptions">
          <div className="givingOption">
            <h3>Give Online</h3>
            <p>
              You can easily donate online by visiting our{" "}
              <a
                href="https://lovefirst.churchcenter.com/giving"
                title="Give Online to Love First Christian Center"
                target="_blank"
                rel="noreferrer noopener"
              >
                online giving page
              </a>
              . Your online donations support our community and various
              programs.
            </p>
          </div>
          <div className="givingOption">
            <h3>Give with Zelle</h3>
            <p>
              To give via Zelle, use our email address:{" "}
              <strong>give@lovefirstchristiancenter.com</strong>. Your
              generosity is greatly appreciated.
            </p>
          </div>
          <div className="givingOption">
            <h3>Support Us via PayPal</h3>
            <p>
              You can make your donation securely through PayPal. Simply click{" "}
              <a
                href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=P9C6XFFDUFD92"
                title="Donate to Love First Christian Center via PayPal"
              >
                here
              </a>{" "}
              to contribute.
            </p>
          </div>
          <div className="givingOption">
            <h3>Text to Give</h3>
            <p>
              Simply text the amount to{" "}
              <a
                href="sms:84321"
                title="Text to Give to Love First Christian Center"
              >
                84321
              </a>{" "}
              to make a donation. It&apos;s fast and convenient.
            </p>
          </div>
          <div className="givingOption">
            <h3>Give with Cash App</h3>
            <p>
              Use Cash App to send your donation to{" "}
              <a
                href="https://cash.app/$LOVE1STCHURCH"
                title="Give with Cash App to Love First Christian Center"
              >
                $LOVE1STCHURCH
              </a>
              . Your support helps us continue our mission.
            </p>
          </div>

          <div className="givingOption">
            <h3>Give by Mail</h3>
            <p>
              You can send your donations by mail to:{" "}
              <strong>
                13194 US Highway 301 South, Suite 309, Riverview, FL 33578
              </strong>
              . Thank you for your support.
            </p>
          </div>
        </div>
      </section>
      <section className="giving-corporate-match">
        <div className="giving-corporate-inner-container">
          <h2 className="corporate-match-title">Corporate Matching</h2>
          <div className="corporate-match-content">
            <p className="corporate-match-text">
              Many corporations allocate funds to match the donations that their
              employees give in support of nonprofits. Typically, companies with
              these programs will match donations dollar for dollar —
              effectively doubling your church contributions.
            </p>
            <p className="corporate-match-text">
              Below is a list of participating corporates. Please check the list
              below and inquire with your Human Resources Department to see if
              your company has a matching program. Your donation amounts and
              necessary documentation can be obtained by calling the church
              office at{" "}
              <a href="tel:8136712009" className="phone-number">
                813-671-2009
              </a>{" "}
              during business hours.
            </p>
            <div className="corporate-list">
              <a
                href="https://cdn.sanity.io/files/51iewwwv/production/133a0fdae22b430b5519647e78348964af579e89.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="list-link"
                aria-label="Check if your employer offers donation matching"
              >
                Find Out If Your Employer Matches Donations
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
