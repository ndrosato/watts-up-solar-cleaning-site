"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="rounded-lg border border-green-100 bg-green-50 p-6 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-green-800">Message Sent!</h3>
        <p className="text-green-700">Thank you for contacting us. We'll get back to you within 2 business hours.</p>
        <Button className="mt-6 bg-green-600 hover:bg-green-700" onClick={() => setIsSubmitted(false)}>
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-lg border p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="first-name" className="text-sm font-medium">
            First Name
          </label>
          <Input id="first-name" placeholder="John" required />
        </div>
        <div className="space-y-2">
          <label htmlFor="last-name" className="text-sm font-medium">
            Last Name
          </label>
          <Input id="last-name" placeholder="Doe" required />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <Input id="email" type="email" placeholder="john@example.com" required />
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium">
          Phone
        </label>
        <Input id="phone" type="tel" placeholder="(02) 1234 5678" />
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className="text-sm font-medium">
          Service Interested In
        </label>
        <Select>
          <SelectTrigger id="service">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="residential">Residential Solar Cleaning</SelectItem>
            <SelectItem value="commercial">Commercial & Strata Cleaning</SelectItem>
            <SelectItem value="maintenance">Maintenance & Inspection</SelectItem>
            <SelectItem value="bird-proofing">Bird Proofing</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <Textarea id="message" placeholder="Tell us about your solar panels and what you need..." rows={4} required />
      </div>

      <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}

