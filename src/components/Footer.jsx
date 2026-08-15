import { Link } from 'react-router-dom';
import company from '../data/company';
import navigation from '../data/navigation';
import imageCredits from '../data/imageCredits';
import logo1x from '../assets/logo/martqi-logo-1x.png';
import logo2x from '../assets/logo/martqi-logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            {/* White chip keeps the black-on-blue wordmark legible on the
                navy footer without recoloring the logo file */}
            <Link
              to="/"
              className="inline-block bg-white rounded-lg px-3 py-2 mb-4"
              aria-label="MartQi — Home"
            >
              <img
                src={logo1x}
                srcSet={`${logo2x} 2x`}
                width={118}
                height={36}
                alt="MartQi"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {company.legalName} — an Indian export company.
            </p>
          </div>

          {/* Export links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Export
            </h3>
            <ul className="space-y-2">
              {navigation
                .find((n) => n.label === 'Export')
                ?.children?.map((child) => (
                  <li key={child.path}>
                    <Link
                      to={child.path}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} {company.legalName}. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            IEC: {company.iec.code} | GST: Delhi &amp; Telangana
          </p>
        </div>

        {/* Image credits */}
        <div className="mt-6 pt-6 border-t border-navy-800">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Image Credits
          </h3>
          <ul className="mt-2 space-y-1">
            {imageCredits.map((credit) => (
              <li key={credit.title} className="text-xs text-gray-500">
                &ldquo;{credit.title}&rdquo; by{' '}
                <a
                  href={credit.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors underline"
                >
                  {credit.author}
                </a>
                {' — '}
                <a
                  href={credit.licenseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors underline"
                >
                  {credit.license}
                </a>
                , via Wikimedia Commons
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
