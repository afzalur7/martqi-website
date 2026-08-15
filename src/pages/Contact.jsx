import SectionHeader from '../components/SectionHeader';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder — will wire up when approved
    alert('Form submission placeholder — will be wired up once contact details are confirmed.');
  };

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Contact Us"
          subtitle="[Approved copy to be inserted — placeholder: get in touch with MartQi LLP for export enquiries or general questions.]"
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact form */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 lg:p-8">
            <h3 className="text-xl font-semibold text-navy-800 mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-transparent outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-transparent outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-transparent outline-none"
                >
                  <option value="">Select a topic</option>
                  <option value="export">Export Enquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-transparent outline-none resize-y"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-navy-700 text-white font-semibold rounded-md hover:bg-navy-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <div className="bg-sand-50 border border-sand-200 rounded-lg p-6 lg:p-8">
              <h3 className="text-xl font-semibold text-navy-800 mb-4">
                Quick Connect
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-lg mt-0.5" aria-hidden="true">📍</span>
                  <span>
                    <strong className="text-navy-800">Registered Office:</strong><br />
                    Darbhanga, Bihar, India
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg mt-0.5" aria-hidden="true">📧</span>
                  <span>
                    <strong className="text-navy-800">Email:</strong><br />
                    <a href="mailto:[EMAIL]" className="text-navy-600 hover:underline">
                      [EMAIL]
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg mt-0.5" aria-hidden="true">📱</span>
                  <span>
                    <strong className="text-navy-800">WhatsApp:</strong><br />
                    <a
                      href="https://wa.me/[NUMBER]"
                      className="text-navy-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [WHATSAPP NUMBER]
                    </a>
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-light-blue-50 border border-light-blue-200 rounded-lg p-6 lg:p-8">
              <h3 className="text-xl font-semibold text-navy-800 mb-4">
                Business Hours
              </h3>
              <p className="text-gray-600">
                Monday – Friday: 9:30 AM – 6:00 PM IST<br />
                Saturday: 10:00 AM – 2:00 PM IST<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
