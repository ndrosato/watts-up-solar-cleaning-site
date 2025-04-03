"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 10)
    })
  }

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/watts-up-solar-logo.png"
            alt="Watts Up Solar Cleaning"
            width={240}
            height={80}
            className="h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 lg:flex">
          <Link href="/" className="text-base font-medium text-gray-900 hover:text-blue-600">
            Home
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-base font-medium text-gray-900 hover:text-blue-600">
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              <DropdownMenuItem asChild>
                <Link href="/services/residential">Residential Cleaning</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/commercial">Commercial & Strata</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/maintenance">Maintenance & Inspection</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/bird-proofing">Bird Proofing</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/about" className="text-base font-medium text-gray-900 hover:text-blue-600">
            About Us
          </Link>

          <Link href="/faq" className="text-base font-medium text-gray-900 hover:text-blue-600">
            FAQ
          </Link>

          <Link href="/blog" className="text-base font-medium text-gray-900 hover:text-blue-600">
            Blog
          </Link>

          <Link href="/contact" className="text-base font-medium text-gray-900 hover:text-blue-600">
            Contact
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Button className="bg-blue-600 text-white hover:bg-blue-700" asChild>
            <Link href="/quote">Get a Free Quote</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-6 pt-6">
              <Link href="/" className="text-lg font-medium">
                Home
              </Link>
              <div className="space-y-3">
                <p className="text-lg font-medium">Services</p>
                <div className="ml-4 flex flex-col space-y-2">
                  <Link href="/services/residential" className="text-gray-600 hover:text-blue-600">
                    Residential Cleaning
                  </Link>
                  <Link href="/services/commercial" className="text-gray-600 hover:text-blue-600">
                    Commercial & Strata
                  </Link>
                  <Link href="/services/maintenance" className="text-gray-600 hover:text-blue-600">
                    Maintenance & Inspection
                  </Link>
                  <Link href="/services/bird-proofing" className="text-gray-600 hover:text-blue-600">
                    Bird Proofing
                  </Link>
                </div>
              </div>
              <Link href="/about" className="text-lg font-medium">
                About Us
              </Link>
              <Link href="/faq" className="text-lg font-medium">
                FAQ
              </Link>
              <Link href="/blog" className="text-lg font-medium">
                Blog
              </Link>
              <Link href="/contact" className="text-lg font-medium">
                Contact
              </Link>
              <Button className="mt-4 w-full bg-blue-600 text-white hover:bg-blue-700" asChild>
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

