import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "@/components/scroll-to-top";

export const metadata: Metadata = {
  title: "Watts Up Solar Cleaning | Sydney Solar Panel Cleaning",
  description:
    "Boost your solar efficiency with Sydney's most trusted solar panel cleaning service. Certified, insured & results-driven.",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.ico", // Favicon path from /public
  },
  verification: {
    google: "YOUR_VERIFICATION_CODE", // Replace with your real Google site verification token
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
