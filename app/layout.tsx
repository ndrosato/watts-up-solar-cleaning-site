import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ScrollToTop from "@/components/scroll-to-top"

export const metadata: Metadata = {
  title: "Watts Up Solar Cleaning | Sydney Solar Panel Cleaners",
  description:
    "Professional solar panel cleaning in Sydney. Improve energy output by up to 30% with fully insured, certified technicians. Book your free quote today!",
  generator: "v0.dev",
  metadataBase: new URL("https://www.wattsupsolarcleaning.com.au"),
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "YOUR_VERIFICATION_CODE", // Replace this
  },
  openGraph: {
    title: "Watts Up Solar Cleaning | Sydney Solar Panel Cleaners",
    description:
      "Get your solar panels cleaned by Sydney’s trusted team. Boost performance up to 30%. Book your free quote today.",
    url: "https://www.wattsupsolarcleaning.com.au",
    siteName: "Watts Up Solar Cleaning",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Watts Up Solar Cleaning | Sydney Solar Panel Cleaners",
    description:
      "Trusted solar panel cleaners in Sydney. Fully insured, results-driven, and ready to help. Get a free quote today.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
