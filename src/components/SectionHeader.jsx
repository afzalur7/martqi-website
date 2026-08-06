/**
 * Reusable section heading block.
 * Use `subtitle` as a regular string or pass `subtitleHtml` for rich content.
 */
export default function SectionHeader({
  title,
  subtitle,
  subtitleHtml,
  centered = true,
  className = '',
}) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {subtitleHtml && (
        <div
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
          dangerouslySetInnerHTML={{ __html: subtitleHtml }}
        />
      )}
    </div>
  );
}
