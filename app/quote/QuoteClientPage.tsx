"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function QuoteClientPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    postcode: "", // Add this line
    panelCount: "",
    roofType: "",
    accessibility: "",
    firstClean: "",
    notes: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  const firstName = formData.fullName.split(" ")[0]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 py-16 text-white md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Request a Quote</h1>
            <p className="text-lg text-blue-100 md:text-xl">
              Fill out the form below to receive a personalized quote for your solar panel cleaning needs.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            {isSubmitted ? (
              <div className="rounded-lg border border-green-100 bg-green-50 p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-green-800">Thanks, {firstName}!</h3>
                <p className="text-green-700">
                  We've received your request and will get back to you within 24 hours with a quote.
                </p>
                <Button
                  className="mt-6 bg-green-600 hover:bg-green-700"
                  onClick={() => {
                    setIsSubmitted(false)
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      address: "",
                      postcode: "", // Add this line
                      panelCount: "",
                      roofType: "",
                      accessibility: "",
                      firstClean: "",
                      notes: "",
                    })
                  }}
                >
                  Request Another Quote
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <div className="rounded-lg border p-6 shadow-sm">
                  <h2 className="mb-4 text-xl font-bold text-gray-900">Contact Information</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        Phone Number <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        type="tel"
                        placeholder="(02) 1234 5678"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">
                        Property Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="123 Solar Street, Sydney NSW 2000"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postcode">
                        Postcode <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="postcode"
                        name="postcode"
                        value={formData.postcode}
                        onChange={handleChange}
                        placeholder="2000"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Job Details */}
                <div className="rounded-lg border p-6 shadow-sm">
                  <h2 className="mb-4 text-xl font-bold text-gray-900">Job Details</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="panelCount">
                        Number of Panels <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="panelCount"
                        name="panelCount"
                        value={formData.panelCount}
                        onChange={handleChange}
                        type="number"
                        placeholder="12"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="roofType">
                        Roof Type <span className="text-red-500">*</span>
                      </Label>
                      <Select onValueChange={(value) => handleSelectChange("roofType", value)} required>
                        <SelectTrigger id="roofType">
                          <SelectValue placeholder="Select roof type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="flat">Flat</SelectItem>
                          <SelectItem value="tiled">Tiled</SelectItem>
                          <SelectItem value="steep">Steep</SelectItem>
                          <SelectItem value="multi-storey">Multi-storey</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="accessibility">
                        Accessibility <span className="text-red-500">*</span>
                      </Label>
                      <Select onValueChange={(value) => handleSelectChange("accessibility", value)} required>
                        <SelectTrigger id="accessibility">
                          <SelectValue placeholder="Select accessibility" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="easy">Easy</SelectItem>
                          <SelectItem value="moderate">Moderate</SelectItem>
                          <SelectItem value="difficult">Difficult</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="firstClean">
                        Is this your first clean? <span className="text-red-500">*</span>
                      </Label>
                      <Select onValueChange={(value) => handleSelectChange("firstClean", value)} required>
                        <SelectTrigger id="firstClean">
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="rounded-lg border p-6 shadow-sm">
                  <h2 className="mb-4 text-xl font-bold text-gray-900">Additional Information</h2>
                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Please provide any additional details that might help us with your quote..."
                      rows={4}
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 text-white hover:bg-blue-700"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Request My Quote"}
                </Button>

                <p className="text-center text-sm text-gray-500">
                  By submitting this form, you agree to our{" "}
                  <a href="/privacy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="/terms" className="text-blue-600 hover:underline">
                    Terms of Service
                  </a>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

