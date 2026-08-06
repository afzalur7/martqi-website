import SectionHeader from '../components/SectionHeader';
import ProductCard from '../components/ProductCard';
import categories from '../data/categories';
import products from '../data/products';

export default function Export() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero section */}
        <SectionHeader
          title="Export from India"
          subtitle="[Approved copy to be inserted — placeholder: premium agricultural commodities sourced from India for global markets.]"
        />

        {/* Categories */}
        {categories.map((cat) => {
          const catProducts = products.filter((p) => p.categoryId === cat.id);
          return (
            <section key={cat.id} className="mt-16">
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
    </div>
  );
}
