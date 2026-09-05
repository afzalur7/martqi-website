import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Seo from '../components/Seo';
import categories from '../data/categories';
import products from '../data/products';

export default function Export() {
  return (
    <>
      <Seo path="/export" />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative bg-navy-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            Quality Indian Goods, Delivered Global
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            MartQi LLP sources and exports agricultural commodities from
            India, combining verified sourcing with careful quality control
            at every step.
          </p>
        </div>
      </section>

      {/* ── Product catalog (data-driven) ────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((cat) => {
            const catProducts = products.filter((p) => p.categoryId === cat.id);
            return (
              <section key={cat.id} className="mt-16 first:mt-0">
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-2xl" aria-hidden="true">{cat.icon}</span>
                  <h2 className="text-2xl font-bold text-navy-800">{cat.name}</h2>
                </div>
                <p className="text-gray-600 mb-8 max-w-2xl">
                  {cat.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {catProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-sand-500 text-navy-900 font-semibold rounded-md hover:bg-sand-400 transition-colors"
          >
            Request an Export Quote
          </Link>
        </div>
      </section>
    </>
  );
}
