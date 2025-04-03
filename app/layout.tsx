import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ScrollToTop from "@/components/scroll-to-top"

export const metadata: Metadata = {
  title: "Watts Up Solar Cleaning | Sydney Solar Panel Cleaning",
  description:
    "Boost your solar efficiency with Sydney's most trusted solar panel cleaning service. Certified, insured & results-driven.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
      </head>
      <body>
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}



import './globals.css'