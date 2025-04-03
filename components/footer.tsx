import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-6 inline-block">
              <Image
                src="/images/watts-up-solar-logo.png"
                alt="Watts Up Solar Cleaning"
                width={240}
                height={80}
                className="h-16 w-auto"
              />
            </Link>
            <p className="mb-4 text-gray-400">
              Sydney's trusted solar panel cleaning experts, helping you maximize your solar investment with
              professional cleaning services.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61574887886355"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/wattsupsolarcleaning/"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/residential" className="text-gray-400 hover:text-white">
                  Residential Solar Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/commercial" className="text-gray-400 hover:text-white">
                  Commercial & Strata Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance" className="text-gray-400 hover:text-white">
                  Maintenance & Inspection
                </Link>
              </li>
              <li>
                <Link href="/services/bird-proofing" className="text-gray-400 hover:text-white">
                  Bird Proofing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-blue-400" />
                <span className="text-gray-400">Sydney, NSW</span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-3 h-5 w-5 text-blue-400" />
                <span className="text-gray-400">0450 872 806</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-blue-400" />
                <span className="text-gray-400">service@wattsupsolarcleaning.com.au</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Watts Up Solar Cleaning. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-sm text-gray-400 hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

