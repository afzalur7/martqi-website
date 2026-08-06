import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import navigation from '../data/navigation';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl font-bold text-navy-800 tracking-tight">
              MartQi
            </span>
            <span className="w-2 h-2 rounded-full bg-navy-600" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.path} className="relative group">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-navy-700 bg-light-blue-100'
                          : 'text-gray-600 hover:text-navy-700 hover:bg-sand-50'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                  {/* Dropdown */}
                  <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 min-w-[200px]">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-1">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.path}
                          to={child.path}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-sm transition-colors ${
                              isActive
                                ? 'text-navy-700 bg-light-blue-50'
                                : 'text-gray-600 hover:text-navy-700 hover:bg-sand-50'
                            }`
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-navy-700 bg-light-blue-100'
                        : 'text-gray-600 hover:text-navy-700 hover:bg-sand-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center px-4 py-2 bg-navy-700 text-white text-sm font-medium rounded-md hover:bg-navy-800 transition-colors"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-navy-700 hover:bg-sand-50"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-gray-200 bg-white" aria-label="Mobile navigation">
          <div className="px-4 py-3 space-y-1">
            {navigation.map((item) => (
              <div key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive
                        ? 'text-navy-700 bg-light-blue-100'
                        : 'text-gray-600 hover:text-navy-700 hover:bg-sand-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
                {item.children && (
                  <div className="ml-4 space-y-1">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          `block px-3 py-1.5 rounded-md text-sm transition-colors ${
                            isActive
                              ? 'text-navy-700 bg-light-blue-50'
                              : 'text-gray-500 hover:text-navy-700'
                          }`
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full mt-3 text-center px-4 py-2 bg-navy-700 text-white text-sm font-medium rounded-md hover:bg-navy-800 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
