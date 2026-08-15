import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import ProductCard from '../components/ProductCard';
import Seo from '../components/Seo';
import products from '../data/products';
import company from '../data/company';

export default function Home() {
  return (
    <>
      <Seo path="/" />
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative bg-navy-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              From Indian Farms to Global Markets
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
              MartQi LLP exports premium Basmati and Non-Basmati Rice, Fox Nut,
              and Flax Seed from India to markets around the world.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/export"
                className="inline-flex items-center px-6 py-3 bg-sand-500 text-navy-900 font-semibold rounded-md hover:bg-sand-400 transition-colors"
              >
                Explore Export Products
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 border border-sand-300 text-sand-200 font-semibold rounded-md hover:bg-white/10 transition-colors"
              >
                About MartQi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Export Product Showcase ──────────────────────── */}
      <section className="py-16 lg:py-24 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Export Products"
            subtitle="Premium agricultural commodities sourced from India's finest regions."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/export"
              className="inline-flex items-center px-6 py-3 bg-navy-700 text-white font-semibold rounded-md hover:bg-navy-800 transition-colors"
            >
              View the Full Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* ── Credibility Strip ────────────────────────────── */}
      <section className="py-12 lg:py-16 bg-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why MartQi"
            subtitle="Registered, compliant, and committed to quality."
            className="text-white [&_h2]:text-white [&_p]:text-gray-300"
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-lg bg-navy-700/50">
              <p className="text-sm font-medium text-sand-400 uppercase tracking-wider">
                Importer-Exporter Code
              </p>
              <p className="mt-2 text-xl font-bold text-white">
                {company.iec.code}
              </p>
            </div>
            <div className="p-6 rounded-lg bg-navy-700/50">
              <p className="text-sm font-medium text-sand-400 uppercase tracking-wider">
                GST Registered
              </p>
              <p className="mt-2 text-xl font-bold text-white">
                Delhi &amp; Telangana
              </p>
            </div>
            <div className="p-6 rounded-lg bg-navy-700/50">
              <p className="text-sm font-medium text-sand-400 uppercase tracking-wider">
                APEDA Registration
              </p>
              <p className="mt-2 text-xl font-bold text-white">
                In Progress
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Strip ────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-sand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy-800">
            Ready to Work Together?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            Whether you&apos;re an importer looking for quality Indian goods or
            have a question about our export catalog, we&apos;re here to help.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center px-6 py-3 bg-navy-700 text-white font-semibold rounded-md hover:bg-navy-800 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
