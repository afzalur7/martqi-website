import { useParams, Link } from 'react-router-dom';
import services from '../data/services';

export default function ServiceDetail() {
  const { serviceSlug } = useParams();
  const service = services.find((s) => s.slug === serviceSlug);

  if (!service) {
    return (
      <div className="py-16 lg:py-24 text-center">
        <h1 className="text-2xl font-bold text-navy-800">Service Not Found</h1>
        <Link to="/services" className="mt-4 inline-block text-navy-600 hover:underline">
          &larr; Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
          <Link to="/services" className="hover:text-navy-700 transition-colors">
            Services
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{service.name}</span>
        </nav>

        <div className="max-w-3xl">
          <span className="text-4xl" aria-hidden="true">{service.icon}</span>
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-navy-800">
            {service.name}
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            {service.description}
          </p>

          {/* CTA */}
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-navy-700 text-white font-semibold rounded-md hover:bg-navy-800 transition-colors"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
