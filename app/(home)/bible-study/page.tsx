import Link from "next/link";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/fetch";
import { bibleStudyNotes } from "@/sanity/lib/queries";
import "./bibleStudy.css";

import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Bible Study Notes - Love First Christian Center",
    description:
      "Download current and archived Bible study notes from our Wednesday Night studies. Deepen your spiritual journey with our collection of in-depth lessons.",
  };
}

export default async function Events() {
  const [studyNotes] = await Promise.all([
    sanityFetch<any>({
      query: bibleStudyNotes,
    }),
  ]);
  return (
    <div className="bibleStudyNotes">
      <div className="bibleStudyHeader">
        <Image
          src="/Bible-Study.webp"
          alt="Love First History and Beliefs"
          height={1000}
          width={1000}
          priority
        />
        <div className="bibleStudyHeaderContent">
          <h1>Bible Study Notes</h1>
          <p>
            Access and download the notes from our Wednesday Night Bible
            studies. Dive deeper into the week&apos;s lesson and enrich your
            spiritual journey.
          </p>
        </div>
      </div>

      <section className="notesSection">
        <div>
          <h2>
            Download Current and Archived Bible Study Notes for In-Depth
            Learning
          </h2>
          <div>
            {studyNotes.map(
              (
                el: { title: string; studyNotes: { notes: string } },
                i: number
              ) => {
                return (
                  <div key={i}>
                    <Link
                      href={el.studyNotes.notes}
                      rel="noreferrer noopener"
                      target="_blank"
                      aria-label="Download Wednesday Bible Study Notes"
                    >
                      {el.title}
                    </Link>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
