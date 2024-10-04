// import "../globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { VisualEditing, toPlainText } from "next-sanity";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import AlertBanner from "./alert-banner";
import type { SettingsQueryResult } from "@/sanity.types";
import * as demo from "@/sanity/lib/demo";
import { sanityFetch } from "@/sanity/lib/fetch";
import { settingsQuery, alertMessage } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await sanityFetch<SettingsQueryResult>({
    query: settingsQuery,
    // Metadata should never contain stega
    stega: false,
  });
  const title = settings?.title || "Love First Christian Center";
  const description = settings?.description || demo.description;

  const ogImage = resolveOpenGraphImage(settings?.ogImage);

  let metadataBase: URL | undefined = undefined;
  try {
    metadataBase = settings?.ogImage?.metadataBase
      ? new URL(settings.ogImage.metadataBase)
      : undefined;
  } catch {
    // ignore
  }

  const siteName = "Love First Christian Center";

  return {
    metadataBase,
    title: {
      template: `%s`,
      default: title,
    },
    description: toPlainText(description),
    openGraph: {
      url: metadataBase?.origin || "https://www.lfcc.tv",
      images: ogImage ? [ogImage] : [],
      siteName: siteName,
    },
  };
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const alert: any = await sanityFetch<SettingsQueryResult>({
    query: alertMessage,
    // Metadata should never contain stega
    stega: false,
  });

  const { isActive } = alert[0];
  console.log("🚀 ~ isActive:", isActive);

  return (
    <>
      <section className="min-h-screen">
        {isActive && <AlertBanner message={alert[0]} />}

        <Header />
        <main>{children}</main>
        <Footer />
      </section>
      {draftMode().isEnabled && <VisualEditing />}
      <GoogleAnalytics gaId="G-DC6EY20BM0" />
    </>
  );
}
