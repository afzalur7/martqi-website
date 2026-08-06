import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import services from '../data/services';

export default function Services() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Services"
          subtitle="[Approved copy to be inserted — placeholder: in-house services in Education and Software, independent of our export trade.]"
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
