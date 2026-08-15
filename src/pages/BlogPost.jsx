import { useParams, Link } from 'react-router-dom';
import Seo from '../components/Seo';
import posts from '../data/blog';

function formatDate(iso) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="py-16 lg:py-24 text-center">
        <h1 className="text-2xl font-bold text-navy-800">Post Not Found</h1>
        <Link to="/blog" className="mt-4 inline-block text-navy-600 hover:underline">
          &larr; Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 lg:py-16">
      <Seo path={`/blog/${post.slug}`} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
          <Link to="/blog" className="hover:text-navy-700 transition-colors">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{post.title}</span>
        </nav>

        {/* Article header */}
        <header>
          <time dateTime={post.publishDate} className="text-sm text-gray-500">
            {formatDate(post.publishDate)}
          </time>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-navy-800 tracking-tight leading-tight">
            {post.title}
          </h1>
        </header>

        {/* Article body */}
        <div className="mt-10 space-y-8">
          {post.sections.map((section, i) =>
            section.type === 'heading' ? (
              <h2
                key={i}
                className="text-2xl font-bold text-navy-800 tracking-tight pt-4"
              >
                {section.text}
              </h2>
            ) : (
              <p key={i} className="text-lg text-gray-700 leading-relaxed">
                {section.text}
              </p>
            )
          )}
        </div>

        {/* Learn more CTA — link to the Basmati Rice product page */}
        <div className="mt-12 bg-navy-800 rounded-xl px-6 py-8 lg:py-10 text-center">
          <p className="text-lg text-gray-300">
            Interested in sourcing 1121 or 1509 Basmati?
          </p>
          <Link
            to="/export/basmati-rice"
            className="mt-5 inline-flex items-center px-6 py-3 bg-sand-500 text-navy-900 font-semibold rounded-md hover:bg-sand-400 transition-colors"
          >
            Explore Basmati Rice
          </Link>
        </div>

        {/* Sources */}
        <section className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="text-xl font-semibold text-navy-800">Sources</h2>
          <ul className="mt-4 space-y-2">
            {post.sources.map((source) => (
              <li key={source.url} className="text-sm text-gray-600">
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-600 hover:underline break-words"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
