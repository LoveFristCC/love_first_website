"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsTrigger,
} from "./ui-components";
import { scriptureDays } from "./scriptures";
import "./daniel-fast.css";

export default function DanielFastContent() {
  const [activeTab, setActiveTab] = useState("daily-scriptures");
  const [loadVideo, setLoadVideo] = useState(false);

  return (
    <div className="daniel-fast-container">
      <section className="danielFastHero">
        <div className="danielHeaderFastContent">
          <h1>Daniel Fast 2025</h1>
          <p>21 Days of Prayer, Fasting, and Transformation</p>
        </div>
        <Image
          src="/danielFastHeader.webp"
          alt="Vegetables"
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
          }}
          priority
        />
      </section>

      <section className="fastingSection">
        <div
          className="fastingYouTubePlayer"
          onClick={() => setLoadVideo(true)}
          role="button"
        >
          {loadVideo ? (
            <iframe
              className="fastingVideoFrame"
              width="600"
              height="300"
              src="https://www.youtube.com/embed/oov7WY2LJ10?t=5s&autoplay=1&rel=0&modestbranding=1"
              title="Big Give Sunday with Pastor Jomo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="fastingYouTubeThumbImage">
              <Image
                src="https://img.youtube.com/vi/oov7WY2LJ10/maxresdefault.jpg"
                alt="Big Give Sunday"
                className="fastingThumbnail"
                height={300}
                width={600}
              />
              <div className="playButton"></div>
            </div>
          )}
          <div className="fastingDescription">
            <p>
              A 21-Day Corporate Fast January 8th - 29th, 2025. I believe that
              the fast will truly change the lives of those who choose to go
              down this journey with us.
            </p>
            <p>
              This is not for the faint of heart, but for those who are truly
              seeking all that God has in store for them. Fasting is a sacrifice
              and a discipline, both of which are keys to success in any area of
              life.
            </p>
            <p>
              I am asking you to make some sacrifices for the next 21 days, as
              we thirst and hunger for righteousness. I leave you with this if
              you want something that you have never had, be willing to do
              something that you have never done. You’ve done it your way long
              enough, Try Jesus.
            </p>
            <p>Love,</p>
            <p>
              <strong>Pastor Jomo</strong>
            </p>
          </div>
        </div>
        <div className="danielFastCTA">
          <a
            href="https://cdn.sanity.io/files/51iewwwv/production/b78ce9f59707423a612980b26e74e627cbd8fc6d.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="downloadButton"
          >
            Download Prayer & Fasting Guide
          </a>
          <a
            href="https://lovefirst.churchcenter.com/giving"
            target="_blank"
            rel="noreferrer noopener"
            className="downloadButton"
          >
            Sow Your Sacrificial Seed
          </a>
        </div>
      </section>

      <div className="danielFastContent">
        <Card>
          <CardContent>
            <p className="daniel-fast-scripture">
              {`"And when He had gone indoors, His disciples asked Him privately, Why could not we drive it out? And He replied to them, This kind cannot be driven out by anything but prayer and fasting."`}
            </p>
            <p className="daniel-fast-scripture-reference">- Mark 9:28-29</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>21 Day Fast Commitments</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="daniel-fast-list">
              <li>I Commit To A 21 Day Fast In The Eyes Of God And Man</li>
              <li>
                I Commit To Pray Every Day During Fast and I Commit To Try The
                Prayer Line
              </li>
              <li>
                <a href="tel:6677701523">667-770-1523</a>, Access code 101804#
                Monday – Friday 6:30 EST
              </li>
              <li>
                You can also join us for prayer on{" "}
                <a
                  href="https://www.youtube.com/@PASTORJOMO/streams"
                  target="_blank"
                  aria-label="Prayer with Pastor Jomo on YouTube"
                  rel="noreferrer noopener"
                >
                  YouTube
                </a>
              </li>
              <li>
                I Commit To Read The Scriptures Given To Me During The Fast
              </li>
              <li>
                I Commit To Attend All Church Services During The Fast, if at
                all possible
              </li>
              <li>
                I Commit To Place God First In Every Area Of Life During The
                Fast
              </li>
              <li>I Commit To Sow A Sacrificial Seed At The End Of The Fast</li>
              <li>
                I Commit To Limit TV, Negative Influences from TV, Music, and
                People
              </li>
            </ul>
            <p>By the strength and grace of God, I commit to the above fast.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Reflection & Preparation</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Let&apos;s begin by reflecting on the purpose of the fast: to
              worship God, to seek His face, preparations to fight through,
              write down problems which need solving, situations need healing,
              expectations of new beginnings.
            </p>
          </CardContent>
        </Card>

        <Tabs>
          <TabsTrigger
            onClick={() => setActiveTab("daily-scriptures")}
            active={activeTab === "daily-scriptures"}
          >
            Daily Scriptures
          </TabsTrigger>
          <TabsTrigger
            onClick={() => setActiveTab("food-guidelines")}
            active={activeTab === "food-guidelines"}
          >
            Food Guidelines
          </TabsTrigger>
        </Tabs>
        <TabsContent active={activeTab === "daily-scriptures"}>
          <Card>
            <CardHeader>
              <CardTitle>Daily Scriptures</CardTitle>
            </CardHeader>
            <CardContent>
              {scriptureDays.map(({ day, scripture, content, reflection }) => (
                <div className="fastingScriptures" key={day}>
                  <h3>Day {day}</h3>
                  <p>
                    <strong>Scripture:</strong> {scripture}
                  </p>
                  <p className="fastingBibleScripture">{content}</p>
                  <p>
                    <strong>Reflection:</strong> {reflection}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent active={activeTab === "food-guidelines"}>
          <Card>
            <CardHeader>
              <CardTitle>Food Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="fastingScriptures">
                <h3 className="daniel-fast-heading">Foods To Eat</h3>
                <ul className="daniel-fast-list">
                  <li>
                    <strong>Whole Grains:</strong> brown rice, oats, rolled
                    oats, oatmeal, barley, corn, popcorn, wheat, whole grain
                    pasta, Ezekiel bread
                  </li>
                  <li>
                    <strong>Legumes:</strong> dried beans, pinto beans, split
                    peas, lentils, black-eyed peas, green beans, green peas,
                    peanuts, etc.
                  </li>
                  <li>
                    <strong>Fruits:</strong> apples, apricots, avocados,
                    bananas, berries, cherries, coconuts, dates, figs,
                    grapefruit, grapes, kiwi, lemons, limes, mangoes, melons,
                    oranges, peaches, pears, pineapples, plums, prunes, raisins,
                    strawberries, watermelon, etc.
                  </li>
                  <li>
                    <strong>Vegetables:</strong> artichokes, asparagus, beets,
                    broccoli, cabbage, carrots, cauliflower, celery, corn,
                    cucumbers, eggplant, garlic, kale, lettuce, mushrooms, okra,
                    onions, potatoes, spinach, squashes, sweet potatoes,
                    tomatoes, turnips, yams, zucchini, etc.
                  </li>
                  <li>
                    <strong>Seeds:</strong> all nuts, natural peanut butter,
                    natural almond butter, sprouts, ground flax, etc.
                  </li>
                  <li>
                    <strong>Liquids:</strong> spring water, distilled water,
                    filtered water, 100% all-natural fruit or vegetable juices
                  </li>
                </ul>
                <h3 className="daniel-fast-heading">Foods to Avoid</h3>
                <ul className="daniel-fast-list">
                  <li>Meat</li>
                  <li>White flour and all products using it</li>
                  <li>White rice, white bread, hominy and pasta</li>
                  <li>Fried foods</li>
                  <li>Caffeine</li>
                  <li>Carbonated beverages, including diet sodas</li>
                  <li>Alcoholic beverages</li>
                  <li>Foods containing preservatives or additives</li>
                  <li>Refined sugar</li>
                  <li>Chemical sugar substitutes</li>
                  <li>Margarine, shortening, animal fat, high fat products</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </div>

      {/* <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Button>Start Your Daniel Fast Journey</Button>
      </div> */}
    </div>
  );
}
