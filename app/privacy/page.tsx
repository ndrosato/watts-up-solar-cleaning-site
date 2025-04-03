import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 py-12 text-white md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Privacy Policy</h1>
            <p className="text-lg text-blue-100">How Watts Up Solar Cleaning protects and manages your information</p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
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
                Watts Up Solar Cleaning ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you visit our website or
                engage with our services.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">1. Information We Collect</h2>
              <p className="text-lg text-gray-700">We may collect the following types of personal information:</p>
              <ul className="list-disc pl-6 text-lg text-gray-700 space-y-1">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Property address</li>
                <li>Details about your solar system and cleaning requirements</li>
                <li>Any additional information provided via forms or communication</li>
              </ul>
              <p className="text-lg text-gray-700">
                We may also automatically collect non-personal information such as browser type, IP address, device
                information, and browsing behaviour using cookies or analytics tools.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">2. How We Use Your Information</h2>
              <p className="text-lg text-gray-700">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-lg text-gray-700 space-y-1">
                <li>Provide quotes and perform solar panel cleaning services</li>
                <li>Communicate with you about appointments, promotions, or updates</li>
                <li>Improve our services and website functionality</li>
                <li>Maintain internal records and invoicing</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">3. Sharing Your Information</h2>
              <p className="text-lg text-gray-700">
                We do not sell, rent, or trade your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-lg text-gray-700 space-y-1">
                <li>
                  Trusted third-party service providers who assist us in operating our business (e.g. email services,
                  accounting software)
                </li>
                <li>Regulatory bodies, if required by law or to enforce our rights</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">4. Security of Your Information</h2>
              <p className="text-lg text-gray-700">
                We take reasonable steps to protect your personal information from misuse, loss, unauthorised access,
                modification, or disclosure. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">5. Cookies and Tracking</h2>
              <p className="text-lg text-gray-700">
                Our website may use cookies and analytics services (such as Google Analytics) to understand how visitors
                interact with our site. You may choose to disable cookies through your browser settings.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">6. Your Rights and Choices</h2>
              <p className="text-lg text-gray-700">You have the right to:</p>
              <ul className="list-disc pl-6 text-lg text-gray-700 space-y-1">
                <li>Access the personal information we hold about you</li>
                <li>Request corrections or updates</li>
                <li>Request the deletion of your information (subject to legal obligations)</li>
                <li>Opt-out of receiving marketing communications</li>
              </ul>
              <p className="text-lg text-gray-700">
                To exercise these rights, please contact us at:
                <br />📧 info@wattsupsolarcleaning.com.au
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">7. Third-Party Links</h2>
              <p className="text-lg text-gray-700">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices
                or content of those sites.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">8. Changes to This Policy</h2>
              <p className="text-lg text-gray-700">
                We may update this Privacy Policy from time to time. Updates will be posted on this page with the
                effective date revised.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">9. Contact Us</h2>
              <p className="text-lg text-gray-700">
                If you have any questions or concerns about this Privacy Policy or how we handle your data, contact us
                at:
              </p>
              <p className="text-lg text-gray-700">
                Watts Up Solar Cleaning
                <br />📧 info@wattsupsolarcleaning.com.au
                <br />📍 Sydney, NSW, Australia
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-lg text-gray-700 italic">Thank you for trusting Watts Up Solar Cleaning.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

