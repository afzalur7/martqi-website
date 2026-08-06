import { Link } from 'react-router-dom';

/**
 * Reusable card for a product in the Export catalog.
 * Renders from a product object in the data/products.js collection.
 */
export default function ProductCard({ product }) {
  return (
    <Link
      to={`/export/${product.slug}`}
      className="group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
    >
      {/* Image placeholder */}
      <div className="aspect-[4/3] bg-sand-100 flex items-center justify-center">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-4xl" aria-hidden="true">🌾</span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-navy-800 group-hover:text-navy-600 transition-colors">
          {product.name}
        </h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {product.summary}
        </p>
        {product.marketTags && product.marketTags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {product.marketTags.map((tag) => (
              <span
                key={tag}
                className="inline-block text-xs font-medium text-navy-600 bg-light-blue-100 rounded-full px-2.5 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
