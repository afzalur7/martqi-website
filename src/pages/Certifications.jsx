import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import company from '../data/company';

// Registrations rendered from the company data file (single source of truth).
const registrations = [
  { label: 'Legal Entity', value: `MARTQI LLP (LLPIN: ${company.contact.llpin})` },
  { label: 'Importer-Exporter Code (IEC)', value: company.iec.code },
  {
    label: 'GST Registration',
    value: `Delhi (${company.gst.delhi}) & Telangana (${company.gst.telangana})`,
  },
  { label: 'APEDA RCMC Registration', value: company.apeda.rcmcNumber },
  { label: 'FSSAI License', value: `${company.fssai.license} (${company.fssai.type})` },
  { label: 'Udyam Registration', value: `${company.udyam.number} (${company.udyam.type})` },
  { label: 'ICEGATE Registration', value: `ID ${company.icegate.id}` },
];

// GI-recognized products MartQi sources (approved copy).
const giRecognitions = [
  { product: 'Palakkadan Matta Rice', detail: 'registered Geographical Indication (GI)' },
  { product: 'Mithila Makhana', detail: 'registered Geographical Indication (GI)' },
];

// Certificate documents in public/certificates/ — one card per file.
const certificates = [
  { name: 'IEC Certificate', file: 'iec-certificate.pdf' },
  { name: 'GST Registration — Delhi', file: 'gst-delhi.pdf' },
  { name: 'GST Registration — Telangana', file: 'gst-telangana.pdf' },
  { name: 'APEDA RCMC Certificate', file: 'apeda-rcmc-certificate.pdf' },
  { name: 'FSSAI License', file: 'fssai-license.pdf' },
  { name: 'Udyam Registration', file: 'udyam-registration.pdf' },
  { name: 'ICEGATE Registration', file: 'icegate-registration.pdf' },
];

export default function Certifications() {
  return (
    <>
      <Seo path="/certifications" />

      {/* ── 1. Hero ──────────────────────────────────────── */}
      <section className="relative bg-navy-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            Certifications &amp; Quality.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            MartQi LLP operates under verified export credentials and sources
            Geographical Indication (GI) recognized Indian specialties.
          </p>
        </div>
      </section>

      {/* ── 2. Registrations ─────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 tracking-tight text-center">
            Registrations
          </h2>
          <dl className="mt-10 bg-sand-50 border border-sand-200 rounded-xl overflow-hidden">
            {registrations.map((reg, i) => (
              <div
                key={reg.label}
                className={`grid grid-cols-1 sm:grid-cols-[18rem_1fr] gap-1 sm:gap-4 px-6 py-4 ${
                  i !== registrations.length - 1 ? 'border-b border-sand-200' : ''
                }`}
              >
                <dt className="font-semibold text-navy-800">{reg.label}</dt>
                <dd className="text-gray-600 break-words">{reg.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── 3. Product Recognition ───────────────────────── */}
      <section className="py-16 lg:py-24 bg-sand-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 tracking-tight text-center">
            Product Recognition
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {giRecognitions.map((gi) => (
              <div
                key={gi.product}
                className="bg-white border border-gray-200 rounded-xl p-6 lg:p-8 text-center"
              >
                <h3 className="text-xl font-semibold text-navy-800">
                  {gi.product}
                </h3>
                <p className="mt-2 text-gray-600">{gi.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Documents ─────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 tracking-tight text-center">
            Documents
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            View or download MartQi LLP&apos;s registration certificates.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.file}
                className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow"
              >
                {/* PDF file icon */}
                <svg
                  className="w-10 h-10 text-navy-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 12h3.75m-3.75 3h3.75M9 3.75H6.75A1.125 1.125 0 005.625 4.875v14.25c0 .621.504 1.125 1.125 1.125h10.5c.621 0 1.125-.504 1.125-1.125V11.25a7.5 7.5 0 00-7.5-7.5z"
                  />
                </svg>
                <h3 className="mt-4 font-semibold text-navy-800">{cert.name}</h3>
                <a
                  href={`/certificates/${cert.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 bg-navy-700 text-white text-sm font-medium rounded-md hover:bg-navy-800 transition-colors"
                >
                  View Certificate
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Our Approach to Quality ───────────────────── */}
      <section className="py-16 lg:py-24 bg-sand-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 tracking-tight">
            Our Approach to Quality
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Quality at MartQi starts before a shipment is assembled. Every
            product is sourced from verified suppliers, checked against agreed
            specifications, and moved through documentation and dispatch in
            full compliance with India&apos;s export regulations — the same
            standard applied to every order, in every market.
          </p>
        </div>
      </section>

      {/* ── 6. CTA ───────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-sand-500 text-navy-900 font-semibold rounded-md hover:bg-sand-400 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
