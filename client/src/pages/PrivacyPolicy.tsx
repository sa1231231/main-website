import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 font-body" data-testid="link-back-home">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground font-body mb-10">Last updated: March 5, 2026</p>

        <div className="prose prose-sm max-w-none font-body text-foreground/80 space-y-8">
          <p>
            Service Call Saver LLC ("Service Call Saver," "we," "our," or "us") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website, interact with our services, submit information through advertisements or lead forms, or use the Service Call Saver platform.
          </p>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-4">1. Information We Collect</h2>
            <p className="mb-4">We may collect the following types of information when you interact with Service Call Saver.</p>

            <h3 className="text-lg font-heading font-semibold text-foreground mb-3">Information You Provide</h3>
            <p className="mb-3">When you contact us, request a demo, create an account, or submit a form, we may collect information such as:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business name</li>
              <li>Business contact details</li>
              <li>Information about your business operations, including how customer calls are handled</li>
            </ul>
            <p className="mb-4">This information may be provided directly through our website, onboarding forms, payment pages, advertising forms (such as Meta/Facebook lead forms), email communication, or phone conversations.</p>

            <h3 className="text-lg font-heading font-semibold text-foreground mb-3">Automatically Collected Information</h3>
            <p className="mb-3">When you visit our website, certain technical information may be collected automatically, including:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>IP address</li>
              <li>Browser type and device information</li>
              <li>Pages visited and interactions on our website</li>
              <li>Referral sources</li>
            </ul>
            <p>This information may be collected through cookies, analytics tools, or similar technologies to help us understand how visitors use our website and improve our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-4">2. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect for purposes including:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Responding to inquiries and demo requests</li>
              <li>Providing access to the Service Call Saver platform</li>
              <li>Sending operational notifications related to AI-handled calls, bookings, consultations, or customer inquiries</li>
              <li>Sending system alerts and service updates related to your account</li>
              <li>Improving our website, services, and product features</li>
              <li>Analyzing usage patterns and marketing effectiveness</li>
              <li>Communicating with you about updates, service changes, or relevant product information</li>
            </ul>
            <p>By submitting your information through our website, payment pages, or lead forms, you consent to being contacted by Service Call Saver regarding your inquiry or use of our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-4">3. How We Share Information</h2>
            <p className="mb-4">Service Call Saver does not sell, rent, or trade your personal information to third parties.</p>
            <p className="mb-3">We may share information with trusted service providers who help us operate our business and deliver our services. These providers may include:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Website hosting providers</li>
              <li>Payment processors</li>
              <li>Customer communication platforms</li>
              <li>Cloud infrastructure providers</li>
              <li>Analytics services</li>
              <li>Advertising platforms used to manage marketing campaigns</li>
            </ul>
            <p className="mb-4">These providers receive only the information necessary to perform their services and are required to protect your information.</p>

            <h3 className="text-lg font-heading font-semibold text-foreground mb-3">SMS Consent and Mobile Information</h3>
            <p className="mb-4">Mobile phone numbers collected for SMS notifications are used solely for Service Call Saver communications related to the platform and its services. SMS opt-in data and consent will not be shared, sold, rented, or disclosed to third parties or affiliates for marketing or promotional purposes. Messaging consent information is used only to deliver the services requested by the user.</p>

            <p>We may also disclose information when required by law or when necessary to protect the rights, safety, or security of Service Call Saver, our users, or others.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-4">4. Data Security</h2>
            <p>We take reasonable administrative, technical, and organizational measures to protect personal information from unauthorized access, misuse, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-4">5. Cookies and Tracking Technologies</h2>
            <p className="mb-3">Our website may use cookies or similar technologies to:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Improve user experience</li>
              <li>Understand website traffic and visitor behavior</li>
              <li>Support analytics and performance measurement</li>
              <li>Assist with advertising and marketing efforts</li>
            </ul>
            <p>You may adjust your browser settings to refuse cookies or notify you when cookies are being used.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-4">6. Third-Party Platforms</h2>
            <p>Some interactions with Service Call Saver may occur through third-party platforms such as Meta (Facebook), Instagram, payment processors, or other marketing platforms. Information submitted through those platforms may also be subject to their respective privacy policies.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-4">7. Your Choices</h2>
            <p className="mb-3">You may request to:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Access the personal information we hold about you</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your personal information</li>
            </ul>
            <p className="mb-4">You may also opt out of SMS communications at any time by replying STOP to any Service Call Saver text message.</p>
            <p>To make a request regarding your personal information, please contact us using the information below.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-4">8. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. When updates are made, the revised version will be posted on this page with a new effective date.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-4">9. Contact Information</h2>
            <p className="mb-3">If you have questions about this Privacy Policy or how your information is handled, you may contact us at:</p>
            <p className="font-semibold">Service Call Saver LLC</p>
            <p>
              Email:{" "}
              <a href="mailto:support@servicecallsaver.com" className="text-primary hover:underline" data-testid="link-privacy-email">
                support@servicecallsaver.com
              </a>
            </p>
            <p>
              Website:{" "}
              <a href="https://servicecallsaver.com" className="text-primary hover:underline" data-testid="link-privacy-website">
                https://servicecallsaver.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
