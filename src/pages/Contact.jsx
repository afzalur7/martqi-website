import { useState, useRef } from 'react';
import company from '../data/company';
import products from '../data/products';
import Seo from '../components/Seo';

// WhatsApp link is derived from the mobile number in the company data file,
// so changing the number there is a one-place edit.
const whatsappLink = `https://wa.me/${company.contact.mobile.replace(/\D/g, '')}`;

// Google Forms submission — hidden iframe POST avoids CORS, no backend needed.
// (Same mechanism as the horizons-export InquiryModal — technical pattern only.)
const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeGslDn0hLoMKo9va3qd9iKiDbTS7KVVvHQgDks7qf9e6Pifg/formResponse';

const ENTRY_IDS = {
  name: 'entry.987422694',
  email: 'entry.1830271246',
  country: 'entry.1105993045',
  product: 'entry.1300895558',
  message: 'entry.1818048367',
};

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    country: '',
    product: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const iframeRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build a hidden native form and submit it to Google Forms inside the
    // hidden iframe. Fire-and-forget: there is no response to wait on.
    const iframeDoc = iframeRef.current?.contentDocument;
    if (iframeDoc) {
      const formEl = iframeDoc.createElement('form');
      formEl.method = 'POST';
      formEl.action = GOOGLE_FORM_URL;

      Object.keys(ENTRY_IDS).forEach((key) => {
        const input = iframeDoc.createElement('input');
        input.type = 'hidden';
        input.name = ENTRY_IDS[key];
        input.value = form[key];
        formEl.appendChild(input);
      });

      iframeDoc.body.appendChild(formEl);
      formEl.submit();
    }

    setSubmitted(true);
    setForm({
      name: '',
      email: '',
      country: '',
      product: '',
      message: '',
    });
    window.setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <>
      <Seo path="/contact" />
      {/* Hidden iframe — submission target; lives outside any dialog so it
          always survives for the form POST */}
      <iframe
        ref={iframeRef}
        name="hidden-google-form"
        title="Hidden form submission target"
        style={{ display: 'none', width: 0, height: 0, border: 0 }}
      />
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative bg-navy-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            Get in Touch.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            For export inquiries, quotes, or general questions, reach MartQi
            LLP directly.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

            {/* ── Contact Details ─────────────────────────── */}
            <div className="space-y-6">
              <div className="bg-sand-50 border border-sand-200 rounded-lg p-6 lg:p-8">
                <h2 className="text-xl font-semibold text-navy-800 mb-5">
                  Contact Details
                </h2>
                <ul className="space-y-5 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-lg mt-0.5" aria-hidden="true">📍</span>
                    <span>
                      <strong className="text-navy-800">Principal Place of Business:</strong>
                      <br />
                      {company.contact.principalPlaceOfBusiness}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lg mt-0.5" aria-hidden="true">📧</span>
                    <span>
                      <strong className="text-navy-800">Email:</strong>{' '}
                      <a
                        href={`mailto:${company.contact.email}`}
                        className="text-navy-600 hover:underline"
                      >
                        {company.contact.email}
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lg mt-0.5" aria-hidden="true">📱</span>
                    <span>
                      <strong className="text-navy-800">Mobile / WhatsApp:</strong>{' '}
                      <a
                        href={`tel:${company.contact.mobile.replace(/\s/g, '')}`}
                        className="text-navy-600 hover:underline"
                      >
                        {company.contact.mobile}
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lg mt-0.5" aria-hidden="true">🪪</span>
                    <span>
                      <strong className="text-navy-800">LLPIN:</strong>{' '}
                      {company.contact.llpin}
                    </span>
                  </li>
                </ul>

                {/* WhatsApp click-to-chat */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* ── Contact Form ────────────────────────────── */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 lg:p-8">
              <h2 className="text-xl font-semibold text-navy-800 mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                {submitted && (
                  <div
                    role="status"
                    className="bg-green-50 border border-green-200 text-green-800 rounded-md px-4 py-3 text-sm font-medium"
                  >
                    Inquiry submitted successfully — we&apos;ll be in touch soon.
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
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
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-transparent outline-none"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                    Country *
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    required
                    value={form.country}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-transparent outline-none"
                    placeholder="Your country"
                  />
                </div>
                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">
                    Product of Interest
                  </label>
                  <select
                    id="product"
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-transparent outline-none bg-white"
                  >
                    <option value="">Select a product</option>
                    {products.map((product) => (
                      <option key={product.id} value={product.name}>
                        {product.name}
                      </option>
                    ))}
                    <option value="Other">Other</option>
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
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-transparent outline-none resize-y"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-navy-700 text-white font-semibold rounded-md hover:bg-navy-800 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
