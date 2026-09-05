import Seo from '../components/Seo';
import company from '../data/company';

export default function PrivacyPolicy() {
  return (
    <div className="py-12 lg:py-16">
      <Seo path="/privacy-policy" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-navy-800 tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-gray-500">Last updated: September 2026</p>

        <div className="mt-10 space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-navy-800 mb-3">
              1. Introduction
            </h2>
            <p>
              MARTQI LLP (&ldquo;MartQi,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) operates the website https://martqi.com. This
              Privacy Policy explains what personal information we collect when
              you use this site, how we use it, and the choices you have. By
              using this website, you agree to the practices described here.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy-800 mb-3">
              2. Information We Collect
            </h2>
            <p>
              We collect personal information you provide directly through our
              Contact page inquiry form, including: your name, email address,
              country, product of interest, and any message you send us. We do
              not require you to create an account, and we do not collect
              payment information through this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy-800 mb-3">
              3. How We Use Your Information
            </h2>
            <p>
              We use the information you submit solely to respond to your
              export inquiry, provide product information and quotations, and
              communicate with you about a potential business relationship. We
              do not sell, rent, or trade your personal information to third
              parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy-800 mb-3">
              4. Third-Party Services
            </h2>
            <p>
              Our Contact form is processed through Google Forms and stored in
              Google Sheets. When you submit an inquiry, your information is
              transmitted to and stored by Google, subject to Google&apos;s own
              Privacy Policy (https://policies.google.com/privacy).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy-800 mb-3">
              5. Cookies
            </h2>
            <p>
              This Website does not use its own tracking or advertising
              cookies. The Contact page embeds a Google Form to collect
              inquiries, which may set cookies from Google needed for that
              form to function (for example, security cookies such as
              reCAPTCHA). These are controlled by Google, not MartQi — see
              Google&apos;s Privacy Policy for details. If we add analytics or
              other cookie-based tools in the future, we will update this
              section accordingly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy-800 mb-3">
              6. Data Retention
            </h2>
            <p>
              We retain inquiry information for as long as necessary to
              respond to your request and maintain a record of our business
              communications, and delete it when no longer needed for these
              purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy-800 mb-3">
              7. Your Rights
            </h2>
            <p>
              Depending on where you are located, you may have rights to
              access, correct, or request deletion of your personal
              information. To exercise these rights, contact us at{' '}
              <a
                href={`mailto:${company.contact.email}`}
                className="text-navy-600 hover:underline"
              >
                {company.contact.email}
              </a>
              .
            </p>
            <ul className="mt-4 space-y-3">
              <li className="pl-4 border-l-2 border-sand-300">
                For visitors in India: MartQi is committed to handling
                personal data responsibly in line with India&apos;s Digital
                Personal Data Protection Act, 2023.
              </li>
              <li className="pl-4 border-l-2 border-sand-300">
                For visitors in the European Union or other regions with
                data protection laws (such as GDPR): while MartQi is based in
                India and these laws may not directly apply to us, we aim to
                honor reasonable requests regarding your personal data.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy-800 mb-3">
              8. Data Security
            </h2>
            <p>
              We take reasonable measures to protect the information you
              share with us, including relying on Google&apos;s security
              infrastructure for form submissions. However, no method of
              transmission over the internet is completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy-800 mb-3">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes
              will be posted on this page with a revised &ldquo;Last
              updated&rdquo; date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy-800 mb-3">
              10. Contact Us
            </h2>
            <p>Questions about this Privacy Policy can be directed to:</p>
            <p className="mt-3 font-medium text-navy-800">{company.legalName}</p>
            <p>
              Email:{' '}
              <a
                href={`mailto:${company.contact.email}`}
                className="text-navy-600 hover:underline"
              >
                {company.contact.email}
              </a>
            </p>
            <p className="mt-1">{company.contact.principalPlaceOfBusiness}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
