"use client";
import { useState } from "react";
import Link from "next/link";

export default function AlertBanner({ message }: { message: any }) {
  console.log("🚀 ~ message:", message);
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div
        className={`fixed bottom-0 left-0 z-50 w-full border-b bg-white/95 bg-purple-100 border border-purple-400 text-black-700 px-4 py-3 text-center backdrop-blur flex justify-between items-center`}
      >
        <p className="text-lg font-semibold">
          {message.title}{" "}
          {message.buttonText && message.redirectUrl && (
            <Link
              href={message.redirectUrl}
              className="underline hover:no-underline text-purple-700"
              rel="noreferrer noopener"
              target="_blank"
              aria-label="Big Give Sunday For New Building"
            >
              {message.buttonText}
            </Link>
          )}
        </p>
        <button
          onClick={handleClose}
          className="absolute top-0 right-0 text-purple-700 hover:text-purple-900 text-xl font-bold p-2 focus:outline-none"
          aria-label="Close Alert"
        >
          &times;
        </button>
      </div>
    )
  );
}
