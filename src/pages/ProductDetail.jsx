import { useParams, Link } from 'react-router-dom';
import products from '../data/products';
import Seo from '../components/Seo';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="py-16 lg:py-24 text-center">
        <h1 className="text-2xl font-bold text-navy-800">Product Not Found</h1>
        <Link to="/export" className="mt-4 inline-block text-navy-600 hover:underline">
          &larr; Back to Export
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 lg:py-16">
      <Seo path={`/export/${slug}`} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
          <Link to="/export" className="hover:text-navy-700 transition-colors">
            Export
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{product.name}</span>
        </nav>

        {/* ── Hero ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="rounded-xl overflow-hidden">
            <img
              src={product.image}
              alt={product.imageAlt}
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-navy-800 tracking-tight">
              {product.heroTitle}
            </h1>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              {product.subhead}
            </p>
          </div>
        </div>

        {/* ── Product Profile ─────────────────────────────── */}
        <section className="mt-14 lg:mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-800 tracking-tight">
            Product Profile
          </h2>
          <dl className="mt-8 space-y-4">
            {product.profileFacts.map((fact) => (
              <div
                key={fact.label}
                className="bg-white border border-gray-200 rounded-lg p-5 lg:p-6 flex flex-col sm:flex-row gap-4"
              >
                <dt className="sm:w-52 shrink-0 font-semibold text-navy-700">
                  {fact.label}
                </dt>
                <dd className="flex-1 text-gray-600 leading-relaxed">
                  {fact.text}
                  {fact.image && (
                    <img
                      src={fact.image}
                      alt={fact.imageAlt}
                      className="mt-4 rounded-lg max-w-xs w-full"
                      loading="lazy"
                    />
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ── CTA ─────────────────────────────────────────── */}
        <section className="mt-14 lg:mt-20 bg-navy-800 rounded-xl px-6 py-10 lg:py-14 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-sand-500 text-navy-900 font-semibold rounded-md hover:bg-sand-400 transition-colors"
          >
            {product.ctaLabel}
          </Link>
        </section>
      </div>
    </div>
  );
}
