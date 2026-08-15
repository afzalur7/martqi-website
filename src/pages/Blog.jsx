import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import posts from '../data/blog';

function formatDate(iso) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function excerpt(post) {
  const first = post.sections.find((s) => s.type === 'paragraph');
  if (!first) return '';
  const words = first.text.split(' ');
  if (words.length <= 28) return first.text;
  return `${words.slice(0, 28).join(' ')}…`;
}

export default function Blog() {
  const sorted = [...posts].sort((a, b) => b.publishDate.localeCompare(a.publishDate));

  return (
    <div className="py-12 lg:py-16">
      <Seo path="/blog" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-navy-800 tracking-tight">
          Blog &amp; News
        </h1>
        <p className="mt-3 text-gray-600">
          Insights on the products we export and the markets we serve.
        </p>

        <div className="mt-10 space-y-6">
          {sorted.map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-gray-200 rounded-lg p-6 lg:p-8 hover:shadow-md transition-shadow"
            >
              <time dateTime={post.publishDate} className="text-sm text-gray-500">
                {formatDate(post.publishDate)}
              </time>
              <h2 className="mt-2 text-xl sm:text-2xl font-semibold text-navy-800">
                <Link
                  to={`/blog/${post.slug}`}
                  className="hover:text-navy-600 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                {excerpt(post)}
              </p>
              <Link
                to={`/blog/${post.slug}`}
                className="mt-4 inline-flex items-center text-sm font-semibold text-navy-600 hover:text-navy-800 transition-colors"
              >
                Read more
                <svg className="ml-1.5 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
