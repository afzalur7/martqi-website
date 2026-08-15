import { useParams, Link } from 'react-router-dom';
import categories from '../data/categories';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

export default function CategoryPage() {
  const { slug } = useParams();
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return (
      <div className="py-16 lg:py-24 text-center">
        <h1 className="text-2xl font-bold text-navy-800">Category Not Found</h1>
        <Link to="/export" className="mt-4 inline-block text-navy-600 hover:underline">
          &larr; Back to Export
        </Link>
      </div>
    );
  }

  const catProducts = products.filter((p) => p.categoryId === category.id);

  return (
    <div className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
          <Link to="/export" className="hover:text-navy-700 transition-colors">
            Export
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{category.name}</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl" aria-hidden="true">{category.icon}</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy-800 tracking-tight">
            {category.name}
          </h1>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl">
          {category.description}
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {catProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
