import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const APP_NAME = "NanoTime";
const APP_DEFAULT_TITLE = "NanoTime";
const APP_TITLE_TEMPLATE = "%s - NanoTime";
const APP_DESCRIPTION =
  "A big display digital clock with a customizable interface.";
const APP_URL = process.env.APP_URL || "https://nanotime.m10.live";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: [
      {
        url: `${APP_URL}/images/nanotime-cover.png`,
        width: 1200,
        height: 630,
        alt: APP_DEFAULT_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: [
      {
        url: `${APP_URL}/images/nanotime-cover.png`,
        width: 1200,
        height: 630,
        alt: APP_DEFAULT_TITLE,
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#1a202c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
