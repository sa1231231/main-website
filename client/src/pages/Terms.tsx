import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 font-body" data-testid="link-back-home">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">Terms and Conditions</h1>
        <p className="text-sm text-muted-foreground font-body mb-10">Last Updated: March 2026</p>

        <div className="prose prose-sm max-w-none font-body text-foreground/80 space-y-8">
          <p>
            These Terms and Conditions ("Terms") govern the use of services provided by Service Call Saver LLC ("Service Call Saver", "we", "our", or "us"). By using Service Call Saver, you agree to these Terms.
          </p>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-4">1. Program Description</h2>
            <p className="mb-4">
              Service Call Saver provides automated SMS notifications to registered users of the Service Call Saver platform. These messages are designed to help business owners monitor and manage customer calls handled by the Service Call Saver AI system.
            </p>
            <p className="mb-3">Messages may include notifications such as:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Missed call alerts</li>
              <li>Reservation or appointment requests captured during calls</li>
              <li>Consultation bookings</li>
              <li>Customer inquiry notifications</li>
              <li>Call summaries and system alerts</li>
              <li>Platform or account-related notifications</li>
            </ul>
            <p>These messages are transactional and operational in nature and are intended to support the use of the Service Call Saver platform.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-4">2. Message Frequency</h2>
            <p>Message frequency varies depending on call activity and platform usage. Users may receive multiple messages per day when customer calls are handled by the system.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-4">3. Message and Data Rates</h2>
            <p>Message and data rates may apply depending on your mobile carrier plan. Service Call Saver is not responsible for any messaging or data charges incurred from your wireless provider.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-4">4. Opt-In Consent</h2>
            <p className="mb-4">Users may opt in to receive SMS notifications during account registration, onboarding, or other consent flows where they voluntarily provide their phone number and agree to receive SMS communications from Service Call Saver.</p>
            <p>SMS consent is optional and is not required to purchase or use the Service Call Saver service.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-4">5. Opt-Out Instructions</h2>
            <p className="mb-4">You can opt out of receiving SMS messages at any time.</p>
            <p>To stop receiving messages, reply STOP to any Service Call Saver SMS message. After sending STOP, you will receive a confirmation message and will no longer receive SMS notifications unless you re-subscribe.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-4">6. Help and Support</h2>
            <p className="mb-3">If you need assistance with the SMS program, reply HELP to any message or contact support through our website.</p>
            <p>
              Website:{" "}
              <a href="https://servicecallsaver.com" className="text-primary hover:underline" data-testid="link-terms-website">
                https://servicecallsaver.com
              </a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:support@servicecallsaver.com" className="text-primary hover:underline" data-testid="link-terms-email">
                support@servicecallsaver.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-4">7. Supported Carriers</h2>
            <p className="mb-4">SMS messages may be delivered through major mobile carriers. Delivery is subject to effective transmission by your mobile carrier and is not guaranteed by Service Call Saver.</p>
            <p>Carriers are not liable for delayed or undelivered messages.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-4">8. Privacy</h2>
            <p className="mb-4">Your privacy is important to us. Information collected through the Service Call Saver platform is handled according to our Privacy Policy.</p>
            <p className="mb-4">SMS opt-in data and consent will not be shared with third parties or affiliates for marketing or promotional purposes.</p>
            <p>
              For more information, please review our{" "}
              <Link href="/privacy" className="text-primary hover:underline" data-testid="link-terms-privacy">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-4">9. Changes to These Terms</h2>
            <p className="mb-4">Service Call Saver reserves the right to update or modify these SMS Terms at any time. Updates will be posted on this page with a revised effective date.</p>
            <p>Continued use of the SMS service after updates constitutes acceptance of the revised terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-4">10. Contact Information</h2>
            <p className="font-semibold mb-2">Service Call Saver LLC</p>
            <p>
              <a href="https://servicecallsaver.com" className="text-primary hover:underline">
                https://servicecallsaver.com
              </a>
            </p>
            <p>
              <a href="mailto:support@servicecallsaver.com" className="text-primary hover:underline">
                support@servicecallsaver.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
