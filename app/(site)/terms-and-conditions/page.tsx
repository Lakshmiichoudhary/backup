import type { Metadata } from "next";
import "@/style/blog.css";
import { HiOutlineGlobeAlt, HiOutlineMail } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Terms and Conditions | Empedance Consultancy Services",
  description:
    "Read the Terms and Conditions governing the use of Empedance Consultancy Services Pvt Ltd websites, applications, software products, digital transformation solutions, and messaging services.",
  keywords: [
    "Empedance Terms and Conditions",
    "Empedance Consultancy Services",
    "Terms of Service",
    "WhatsApp messaging services",
    "software development services",
    "digital transformation",
  ],
  alternates: {
    canonical: "https://empedance.com/terms",
  },
  openGraph: {
    title: "Terms and Conditions | Empedance Consultancy Services",
    description:
      "Terms and Conditions for using Empedance Consultancy Services Pvt Ltd websites, applications, platforms, and services.",
    url: "https://empedance.com/terms",
    siteName: "Empedance Consultancy Services",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <main className="blog-page px-[100px] pt-32">
      <article>
        <header className="terms-header">
          <h1 className="blog-page-h1">
            Terms and Conditions
          </h1>

          <p className="last-updated">
            <strong>Last updated:</strong> January 31, 2026
          </p>
        </header>

        <section aria-labelledby="introduction">
          <h2 id="introduction" className="sr-only">
            Introduction
          </h2>

          <p>
            Welcome to Empedance Consultancy Services Pvt Ltd
            (“Empedance”, “we”, “our”, or “us”).
          </p>

          <p>
            These Terms and Conditions govern your access to and use of our
            websites, applications, platforms, and services, including but
            not limited to digital transformation solutions, software
            products, and messaging services.
          </p>

          <p>
            By accessing or using our services, you agree to be bound by
            these Terms.
          </p>
        </section>

        <section aria-labelledby="services">
          <h2 id="services">1. Services</h2>

          <p>
            Empedance provides software development, digital transformation,
            website development, mobile application development, cloud
            solutions, and communication services including WhatsApp-based
            transactional messaging such as OTP (one-time password)
            verification.
          </p>

          <p>
            All services are provided strictly for legitimate business and
            user-initiated purposes.
          </p>
        </section>

        <section aria-labelledby="user-responsibilities">
          <h2 id="user-responsibilities">2. User Responsibilities</h2>

          <ul>
            <li>Use our services only for lawful purposes.</li>
            <li>
              Not misuse messaging services for spam, unsolicited
              communication, or marketing without consent.
            </li>
            <li>
              Ensure all end users have explicitly opted in before receiving
              any WhatsApp or SMS communication.
            </li>
            <li>
              Comply with all applicable local, national, and international
              laws and regulations.
            </li>
          </ul>

          <p>
            Empedance reserves the right to suspend or terminate access if
            misuse is detected.
          </p>
        </section>

        <section aria-labelledby="messaging-services">
          <h2 id="messaging-services">
            3. WhatsApp &amp; Messaging Services
          </h2>

          <ul>
            <li>
              WhatsApp messages are sent only after explicit user action
              (such as login or verification).
            </li>
            <li>
              Only pre-approved WhatsApp message templates are used.
            </li>
            <li>
              Empedance does not send promotional or unsolicited messages
              without consent.
            </li>
            <li>
              Delivery of messages depends on third-party platforms (such as
              Meta / WhatsApp) and cannot be guaranteed at all times.
            </li>
          </ul>
        </section>

        <section aria-labelledby="data-privacy">
          <h2 id="data-privacy">4. Data Privacy</h2>

          <p>
            We respect user privacy and handle personal data responsibly.
          </p>

          <p>
            Personal data is collected and processed only for:
          </p>

          <ul>
            <li>User authentication</li>
            <li>Transactional communication</li>
            <li>Service delivery and support</li>
          </ul>

          <p>
            For more information, please review our{" "}
            <a
              href="https://empedance.com/privacy_policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            .
          </p>
        </section>

        <section aria-labelledby="intellectual-property">
          <h2 id="intellectual-property">5. Intellectual Property</h2>

          <p>
            All content, software, designs, logos, trademarks, and materials
            provided by Empedance are the intellectual property of Empedance
            Consultancy Services Pvt Ltd.
          </p>

          <p>
            You may not copy, reproduce, distribute, or modify any content
            without prior written consent.
          </p>
        </section>

        <section aria-labelledby="limitation-liability">
          <h2 id="limitation-liability">6. Limitation of Liability</h2>

          <ul>
            <li>Any indirect, incidental, or consequential damages.</li>
            <li>
              Message delivery delays or failures caused by third-party
              providers.
            </li>
            <li>
              Losses resulting from unauthorized access beyond our reasonable
              control.
            </li>
          </ul>

          <p>
            Services are provided on an “as-is” and “as-available” basis.
          </p>
        </section>

        <section aria-labelledby="third-party-services">
          <h2 id="third-party-services">7. Third-Party Services</h2>

          <p>
            Our services may rely on third-party platforms such as cloud
            providers or communication APIs. Empedance is not responsible for
            outages or issues caused by these third parties.
          </p>
        </section>

        <section aria-labelledby="termination">
          <h2 id="termination">8. Termination</h2>

          <p>
            Empedance reserves the right to suspend or terminate access to
            services at any time if these Terms are violated or if required
            by law.
          </p>
        </section>

        <section aria-labelledby="changes-to-terms">
          <h2 id="changes-to-terms">9. Changes to Terms</h2>

          <p>
            We may update these Terms from time to time. Any changes will be
            posted on this page with an updated revision date.
          </p>

          <p>
            Continued use of our services after changes constitutes
            acceptance of the revised Terms.
          </p>
        </section>

        <section aria-labelledby="governing-law">
          <h2 id="governing-law">10. Governing Law</h2>

          <p>
            These Terms are governed by and construed in accordance with the
            laws of India, without regard to conflict of law principles.
          </p>
        </section>

        <section aria-labelledby="contact-information">
          <h2 id="contact-information">11. Contact Information</h2>

          <address className="terms-contact">
            <strong>Empedance Consultancy Services Pvt Ltd</strong>

            <p>
              <HiOutlineMail
                aria-hidden="true"
                className="terms-icon"
              />
              <span>
                Email:{" "}
                <a href="mailto:saurabh.kumar@empedance.com">
                  saurabh.kumar@empedance.com
                </a>
              </span>
            </p>

            <p>
              <HiOutlineGlobeAlt
                aria-hidden="true"
                className="terms-icon"
              />
              <span>
                Website:{" "}
                <a
                  href="https://empedance.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  empedance.com
                </a>
              </span>
            </p>
          </address>
        </section>
      </article>
    </main>
  );
}