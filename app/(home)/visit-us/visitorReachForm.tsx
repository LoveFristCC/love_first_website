"use client";
import Script from "next/script";
import { useEffect } from "react";

export default function VisitorReachForm() {
  useEffect(() => {
    const scriptId = "typeform-embed-script";

    // Remove existing script if it exists
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    // Dynamically load the script
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <>
      <div data-tf-live="01J8JZ3H927J7XR50JPHQCMG89"></div>
      <div className="disclosureContainer">
        <p>
          By submitting, you agree to receive communications from us via text
          and email. You can text STOP to cancel or HELP for assistance. Message
          and data rates may apply. Message frequency varies. Love First
          Christian Center{" "}
          <a
            href="https://www.visitorreach.com/privacy-policy?id=Love%20First%20Christian%20Center"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>{" "}
          &{" "}
          <a
            href="https://www.visitorreach.com/terms-of-use?id=Love%20First%20Christian%20Center"
            target="_blank"
            rel="noreferrer"
          >
            Terms of Use apply.
          </a>
        </p>
      </div>
    </>
  );
}
