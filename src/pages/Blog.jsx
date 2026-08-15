import SectionHeader from '../components/SectionHeader';
import Seo from '../components/Seo';

export default function Blog() {
  return (
    <div className="py-16 lg:py-24">
      <Seo path="/blog" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Blog & News"
          subtitle="[Approved copy to be inserted — placeholder: updates and insights from MartQi LLP.]"
        />

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <div className="bg-sand-50 border border-sand-200 rounded-lg p-12">
            <span className="text-4xl" aria-hidden="true">📝</span>
            <h3 className="mt-4 text-xl font-semibold text-navy-800">
              No Posts Yet
            </h3>
            <p className="mt-2 text-gray-600">
              Articles and updates will appear here. Check back soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
