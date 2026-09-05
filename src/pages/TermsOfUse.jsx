import Seo from '../components/Seo';
import company from '../data/company';

export default function TermsOfUse() {
  return (
    <div className="py-12 lg:py-16">
      <Seo path="/terms-of-use" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-navy-800 tracking-tight">
          Terms of Use
        </h1>
        <p className="mt-3 text-sm text-gray-500">Last updated: September 2026</p>

        <div className="mt-10 space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-navy-800 mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using https://martqi.com (the
              &ldquo;Website&rdquo;), you agree to be bound by these Terms of
              Use. If you do not agree, please do not use this Website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy-800 mb-3">
              2. About MartQi
            </h2>
            <p>
              This Website is operated by MARTQI LLP, a Limited Liability
              Partnership registered in India (LLPIN: {company.contact.llpin}),
              engaged in the export of agricultural commodities from India.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy-800 mb-3">
              3. Use of This Website
            </h2>
            <p>
              This Website is provided for general information about MartQi
              and its export products, and to facilitate business inquiries.
              You agree to use it only for lawful purposes and not to misuse,
              disrupt, or attempt unauthorized access to the Website or its
              underlying systems.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy-800 mb-3">
              4. Product Information — Not a Binding Offer
            </h2>
            <p>
              Product descriptions, specifications, certifications, and any
              pricing indications shown on this Website are provided for
              general information and verification purposes only. They do not
              constitute a binding offer for sale. Any actual export
              transaction is governed by a separate proforma invoice,
              purchase agreement, or contract negotiated directly between
              MartQi and the buyer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy-800 mb-3">
              5. Certifications &amp; Documents
            </h2>
            <p>
              Certificates and registration documents published on this
              Website (such as IEC, GST, APEDA RCMC, FSSAI, Udyam, and
              ICEGATE registrations) are provided for buyer verification
              purposes. Buyers should independently verify document validity
              through the relevant issuing authority if required for their
              own compliance purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy-800 mb-3">
              6. Intellectual Property
            </h2>
            <p>
              All content on this Website — including text, product
              descriptions, photographs, and the MartQi logo — is the
              property of MARTQI LLP or its licensors, unless otherwise
              credited (see Image Credits in the site footer). You may not
              reproduce, distribute, or use this content commercially
              without our written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy-800 mb-3">
              7. Third-Party Links
            </h2>
            <p>
              This Website may link to or embed third-party services (such
              as Google Forms). We are not responsible for the content or
              privacy practices of third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy-800 mb-3">
              8. Disclaimer &amp; Limitation of Liability
            </h2>
            <p>
              This Website is provided &ldquo;as is.&rdquo; While we make
              reasonable efforts to keep information accurate and current,
              MartQi makes no warranties about the completeness or accuracy
              of the content and is not liable for any loss or damage
              arising from your use of this Website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy-800 mb-3">
              9. Governing Law
            </h2>
            <p>
              These Terms of Use are governed by the laws of India, and any
              disputes shall be subject to the jurisdiction of the courts of
              Telangana, India.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy-800 mb-3">
              10. Changes to These Terms
            </h2>
            <p>
              We may update these Terms of Use from time to time. Continued
              use of the Website after changes are posted constitutes
              acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy-800 mb-3">
              11. Contact Us
            </h2>
            <p className="font-medium text-navy-800">{company.legalName}</p>
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
