import { Link } from 'react-router-dom';

/**
 * Reusable card for a service in the Services division.
 * Renders from a service object in the data/services.js collection.
 */
export default function ServiceCard({ service }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
    >
      <span className="text-3xl" aria-hidden="true">
        {service.icon || '📋'}
      </span>
      <h3 className="mt-4 text-lg font-semibold text-navy-800 group-hover:text-navy-600 transition-colors">
        {service.name}
      </h3>
      <p className="mt-2 text-sm text-gray-600 line-clamp-3">
        {service.summary}
      </p>
      <span className="mt-4 inline-flex items-center text-sm font-medium text-navy-600 group-hover:text-navy-800 transition-colors">
        Learn more
        <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}
