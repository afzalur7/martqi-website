import { Link } from 'react-router-dom';
import company from '../data/company';
import Seo from '../components/Seo';

export default function About() {
  return (
    <>
      <Seo path="/about" />
      {/* ── 1. Hero ──────────────────────────────────────── */}
      <section className="relative bg-navy-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            Built on Trust, Trading with Purpose.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            MartQi LLP is an India-based export company, registered as a
            Limited Liability Partnership.
          </p>
        </div>
      </section>

      {/* ── 2. Mission & Vision ──────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-sand-50 border border-sand-200 rounded-xl p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-navy-800">Mission</h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                To deliver consistently high-quality Indian products to
                international markets, backed by careful sourcing and rigorous
                quality control at every step of the export process.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-light-blue-50 border border-light-blue-200 rounded-xl p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-navy-800">Vision</h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                To grow into a trusted, quality-first exporter of Indian
                products across global markets — starting with rice exports to
                New Zealand and expanding steadily into new products and
                destinations as we scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Who We Are ────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-sand-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 tracking-tight">
            Who We Are
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            MartQi LLP operates from India, GST registered in Delhi and
            Telangana, and holds an Importer-Exporter Code (IEC: {company.iec.code})
            for its export operations.
          </p>
        </div>
      </section>

      {/* ── 4. What We Do ────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 tracking-tight">
            What We Do
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            MartQi sources and exports Basmati Rice, Non-Basmati Rice, Fox Nut,
            and Flax Seed from India to international buyers.
          </p>
        </div>
      </section>

      {/* ── 5. Our Approach ──────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-sand-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 tracking-tight">
            Our Approach
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Every shipment MartQi exports is handled with the same standard:
            verified sourcing, careful quality checks, and full compliance with
            India&apos;s export regulations. As we grow into new products and
            markets, that standard doesn&apos;t change.
          </p>
        </div>
      </section>

      {/* ── 6. Registered Details strip ──────────────────── */}
      <section className="py-10 lg:py-12 bg-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm sm:text-base">
            <li className="font-medium">IEC: {company.iec.code}</li>
            <li aria-hidden="true" className="text-sand-400">·</li>
            <li className="font-medium">GST: Delhi &amp; Telangana</li>
            <li aria-hidden="true" className="text-sand-400">·</li>
            <li className="font-medium">Legal structure: LLP</li>
            <li aria-hidden="true" className="text-sand-400">·</li>
            <li className="font-medium">APEDA registration in progress</li>
          </ul>
        </div>
      </section>

      {/* ── 7. CTA ───────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-sand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-navy-700 text-white font-semibold rounded-md hover:bg-navy-800 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
