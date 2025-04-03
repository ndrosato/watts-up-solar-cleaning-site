import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermsOfService() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 py-12 text-white md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Terms of Service</h1>
            <p className="text-lg text-blue-100">
              The terms and conditions governing your use of Watts Up Solar Cleaning services
            </p>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                <strong>Effective Date:</strong> 29/03/2024
                <br />
                <strong>Business Name:</strong> Watts Up Solar Cleaning
                <br />
                <strong>Website:</strong> https://wattsupsolarcleaning.com.au
              </p>

              <p className="text-lg text-gray-700">
                Please read these Terms of Service ("Terms") carefully before using our services. These Terms govern
                your access to and use of the services provided by Watts Up Solar Cleaning ("we", "us", "our").
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">1. Acceptance of Terms</h2>
              <p className="text-lg text-gray-700">
                By engaging our services, you agree to be bound by these Terms. If you do not agree to these Terms,
                please do not use our services.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">2. Services</h2>
              <p className="text-lg text-gray-700">
                Watts Up Solar Cleaning provides solar panel cleaning and maintenance services for residential and
                commercial properties. Our services include:
              </p>
              <ul className="list-disc pl-6 text-lg text-gray-700 space-y-1">
                <li>Solar panel cleaning</li>
                <li>System inspection and maintenance</li>
                <li>Bird proofing</li>
                <li>Performance reporting</li>
              </ul>
              <p className="text-lg text-gray-700">
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">3. Scheduling and Appointments</h2>
              <p className="text-lg text-gray-700">
                When scheduling our services, you agree to provide accurate and complete information about your property
                and solar system. We will make reasonable efforts to accommodate your preferred appointment times, but
                all appointments are subject to availability.
              </p>
              <p className="text-lg text-gray-700">
                If you need to reschedule or cancel an appointment, please provide at least 24 hours' notice. Late
                cancellations or no-shows may incur a fee of up to 50% of the scheduled service cost.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">4. Access to Property</h2>
              <p className="text-lg text-gray-700">
                By scheduling our services, you grant us permission to access your property for the purpose of
                performing the agreed-upon services. You agree to provide safe and reasonable access to your solar
                panels and related equipment.
              </p>
              <p className="text-lg text-gray-700">
                If we determine that your property presents unsafe working conditions, we reserve the right to refuse or
                discontinue service without penalty.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">5. Payment Terms</h2>
              <p className="text-lg text-gray-700">
                Payment is due upon completion of services unless otherwise agreed in writing. For commercial clients or
                maintenance plans, payment terms will be specified in your service agreement.
              </p>
              <p className="text-lg text-gray-700">
                We accept credit cards, direct bank transfers, and cash. Late payments may incur additional fees or
                interest charges.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">6. Warranties and Limitations</h2>
              <p className="text-lg text-gray-700">
                We warrant that our services will be performed in a professional manner consistent with industry
                standards. If you are not satisfied with our services, please notify us within 7 days, and we will make
                reasonable efforts to address your concerns.
              </p>
              <p className="text-lg text-gray-700">
                We do not guarantee specific increases in energy production or savings, as these can be affected by
                factors beyond our control, including weather conditions, system age, and manufacturer specifications.
              </p>
              <p className="text-lg text-gray-700">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR LIABILITY FOR ANY CLAIMS ARISING OUT OF OR RELATED TO OUR
                SERVICES SHALL BE LIMITED TO THE AMOUNT PAID FOR THE SPECIFIC SERVICE GIVING RISE TO THE CLAIM.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">7. Property Damage</h2>
              <p className="text-lg text-gray-700">
                We take great care to protect your property while performing our services. However, if you believe our
                services have caused damage to your property, you must notify us within 48 hours of service completion.
                We will investigate all claims promptly and fairly.
              </p>
              <p className="text-lg text-gray-700">
                We maintain comprehensive insurance coverage for property damage and worker injuries that may occur
                during service provision.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">8. Privacy</h2>
              <p className="text-lg text-gray-700">
                We respect your privacy and will handle your personal information in accordance with our Privacy Policy.
                By using our services, you consent to the collection and use of information as described in our Privacy
                Policy.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">9. Governing Law</h2>
              <p className="text-lg text-gray-700">
                These Terms shall be governed by and construed in accordance with the laws of New South Wales,
                Australia. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the
                courts of New South Wales.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">10. Changes to Terms</h2>
              <p className="text-lg text-gray-700">
                We reserve the right to modify these Terms at any time. Changes will be effective upon posting to our
                website. Your continued use of our services after any changes indicates your acceptance of the modified
                Terms.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">11. Contact Information</h2>
              <p className="text-lg text-gray-700">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="text-lg text-gray-700">
                Watts Up Solar Cleaning
                <br />📧 service@wattsupsolarcleaning.com.au
                <br />📍 Sydney, NSW, Australia
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-lg text-gray-700 italic">Thank you for choosing Watts Up Solar Cleaning.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

