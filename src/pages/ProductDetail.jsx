import { useParams, Link } from 'react-router-dom';
import products from '../data/products';
import SectionHeader from '../components/SectionHeader';

export default function ProductDetail() {
  const { productSlug } = useParams();
  const product = products.find((p) => p.slug === productSlug);

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
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
          <Link to="/export" className="hover:text-navy-700 transition-colors">
            Export
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image placeholder */}
          <div className="aspect-[4/3] bg-sand-100 rounded-lg flex items-center justify-center">
            <span className="text-6xl" aria-hidden="true">🌾</span>
          </div>

          {/* Details */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-navy-800">
              {product.name}
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              {product.description}
            </p>

            {/* Varieties */}
            {product.varieties && product.varieties.length > 0 && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-navy-800 mb-4">
                  Available Varieties
                </h2>
                <div className="space-y-4">
                  {product.varieties.map((v) => (
                    <div
                      key={v.name}
                      className="border border-gray-200 rounded-lg p-4"
                    >
                      <h3 className="font-semibold text-navy-700">{v.name}</h3>
                      <dl className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm text-gray-600">
                        <div>
                          <dt className="font-medium text-gray-500">Grain Length</dt>
                          <dd>{v.grainLength}</dd>
                        </div>
                        <div>
                          <dt className="font-medium text-gray-500">Aroma</dt>
                          <dd>{v.aroma}</dd>
                        </div>
                        <div>
                          <dt className="font-medium text-gray-500">Typical Use</dt>
                          <dd>{v.typicalUse}</dd>
                        </div>
                      </dl>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-navy-700 text-white font-semibold rounded-md hover:bg-navy-800 transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
