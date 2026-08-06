import SectionHeader from '../components/SectionHeader';
import company from '../data/company';

export default function Certifications() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Certifications & Compliance"
          subtitle="[Approved copy to be inserted — placeholder for now]"
        />

        <div className="mt-12 max-w-3xl mx-auto space-y-6">
          {/* IEC */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-navy-800 text-lg">
              Importer-Exporter Code (IEC)
            </h3>
            <p className="mt-2 text-gray-600">
              MartQi LLP is a registered importer-exporter under the Directorate
              General of Foreign Trade (DGFT), Government of India.
            </p>
            <p className="mt-1 text-sm font-mono text-gray-500">
              IEC: {company.iec.code}
            </p>
          </div>

          {/* GST */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-navy-800 text-lg">
              GST Registration
            </h3>
            <p className="mt-2 text-gray-600">
              MartQi LLP is registered under the Goods and Services Tax regime
              in the states of Delhi and Telangana.
            </p>
          </div>

          {/* APEDA */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-navy-800 text-lg">
              APEDA RCMC Registration
            </h3>
            <p className="mt-2 text-gray-600">
              MartQi LLP has applied for registration with the Agricultural and
              Processed Food Products Export Development Authority (APEDA).
              Registration is currently in progress.
            </p>
            <span className="mt-3 inline-block text-sm font-medium text-sand-600 bg-sand-100 rounded-full px-3 py-1">
              In Progress
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
