'use client';

import Link from 'next/link';

interface NavItem {
  label: string;
  href: string;
}

interface UnifiedHeaderProps {
  activeSite: 'events' | 'production' | 'jobs';
  siteNavItems?: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

const SITE_CONFIG = {
  events: {
    name: 'ESPORTS INSURANCE',
    logoText: 'E',
  },
  production: {
    name: 'ESPORTS PRODUCTION',
    logoText: 'EP',
  },
  jobs: {
    name: 'ESPORTS JOBS',
    logoText: 'EJ',
  },
};

const SITE_TABS = [
  { id: 'events' as const, label: 'Events', href: 'https://esportsevent.quest' },
  { id: 'production' as const, label: 'Production', href: 'https://esportsproduction.quest' },
  { id: 'jobs' as const, label: 'Jobs', href: 'https://esportsjobs.quest' },
];

export function UnifiedHeader({
  activeSite,
  siteNavItems = [],
  ctaLabel = 'Get Started',
  ctaHref = '/contact',
}: UnifiedHeaderProps) {
  const currentSite = SITE_CONFIG[activeSite];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 border-b border-cyan-500/20 backdrop-blur-md bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row: Brand + CTA */}
        <div className="flex items-center justify-between py-3">
          {/* Brand */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center font-bold text-lg">
              {currentSite.logoText}
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-cyan-400 font-medium tracking-wider uppercase">
                ESPORTS QUEST
              </span>
              <span className="text-lg font-bold neon-text leading-tight">
                {currentSite.name}
              </span>
            </div>
          </a>

          {/* Desktop CTA + Mobile menu toggle */}
          <div className="flex items-center gap-4">
            <Link
              href={ctaHref}
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2 px-6 rounded btn-shine transition-all"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>

        {/* Tab row: Cross-site navigation */}
        <div className="flex items-center gap-1 border-t border-gray-800/50 overflow-x-auto scrollbar-hide">
          {SITE_TABS.map((tab) => (
            <a
              key={tab.id}
              href={tab.href}
              className={`
                px-4 py-3 text-sm font-medium transition-all border-b-2 whitespace-nowrap
                ${activeSite === tab.id
                  ? 'border-cyan-400 text-cyan-400 quest-tab-active'
                  : 'border-transparent text-gray-400 hover:text-cyan-300 hover:border-cyan-400/50'
                }
              `}
            >
              {tab.label}
            </a>
          ))}
        </div>

        {/* Site-specific nav row */}
        {siteNavItems.length > 0 && (
          <div className="hidden md:flex items-center gap-6 py-3 border-t border-gray-800/30">
            {siteNavItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
