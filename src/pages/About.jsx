import SectionHeader from '../components/SectionHeader';
import company from '../data/company';

export default function About() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="About MartQi"
          subtitle="[Approved copy to be inserted here — placeholder for now]"
        />
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="prose prose-lg prose-gray max-w-none">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <h3>Company Facts</h3>
            <ul>
              <li><strong>Legal Name:</strong> {company.legalName}</li>
              <li><strong>Registered Address:</strong> {company.registeredAddress}</li>
              <li><strong>IEC:</strong> {company.iec.code}</li>
              <li><strong>GST:</strong> Delhi &amp; Telangana</li>
              <li><strong>Established:</strong> {company.yearEstablished}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
