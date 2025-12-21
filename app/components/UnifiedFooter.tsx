import Link from 'next/link';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface UnifiedFooterProps {
  activeSite: 'events' | 'production' | 'jobs' | 'news';
  siteSpecificSections?: FooterSection[];
  showDisclaimer?: boolean;
  disclaimerText?: string;
}

const CROSS_SITE_SECTIONS = [
  {
    title: 'Events & Insurance',
    site: 'events' as const,
    links: [
      { label: 'Esports Insurance', href: 'https://esportsevent.quest' },
      { label: 'Esports Event Insurance', href: 'https://esportsevent.quest/esports-insurance-guide' },
      { label: 'UK Esports Insurance', href: 'https://esportsevent.quest/esports-insurance-uk' },
      { label: 'Get a Quote', href: 'https://esportsevent.quest/contact' },
    ],
  },
  {
    title: 'Production Services',
    site: 'production' as const,
    links: [
      { label: 'Esports Production', href: 'https://esportsproduction.quest' },
      { label: 'Esports Production Agency', href: 'https://esportsproduction.quest/#services' },
      { label: 'Esports Production Company', href: 'https://esportsproduction.quest/esports-production-guide' },
      { label: 'Get a Quote', href: 'https://esportsproduction.quest/contact' },
    ],
  },
  {
    title: 'Jobs & Careers',
    site: 'jobs' as const,
    links: [
      { label: 'Esports Jobs', href: 'https://esportsjobs.quest' },
      { label: 'Gaming Industry Jobs', href: 'https://esportsjobs.quest/#categories' },
      { label: 'Esports Career Paths', href: 'https://esportsjobs.quest/#careers' },
      { label: 'Post a Job', href: 'https://esportsjobs.quest/contact' },
    ],
  },
  {
    title: 'News & Insights',
    site: 'news' as const,
    links: [
      { label: 'Esports News', href: 'https://esportsnews.quest' },
      { label: 'Esports Industry Updates', href: 'https://esportsnews.quest/category/industry' },
      { label: 'Esports Event Coverage', href: 'https://esportsnews.quest/category/events' },
      { label: 'Esports Career Advice', href: 'https://esportsnews.quest/category/careers' },
    ],
  },
];

const SITE_CONFIG = {
  events: {
    email: 'hello@esportsevent.quest',
    copyright: 'Esports Event Insurance UK',
  },
  production: {
    email: 'hello@esportsproduction.quest',
    copyright: 'Esports Production UK',
  },
  jobs: {
    email: 'hello@esportsjobs.quest',
    copyright: 'Esports Jobs UK',
  },
  news: {
    email: 'hello@esportsnews.quest',
    copyright: 'Esports News UK',
  },
};

export function UnifiedFooter({
  activeSite,
  siteSpecificSections = [],
  showDisclaimer = false,
  disclaimerText,
}: UnifiedFooterProps) {
  const siteConfig = SITE_CONFIG[activeSite];

  return (
    <footer className="bg-[#050508] border-t border-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand column */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center font-bold text-2xl">
                EQ
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">ESPORTS QUEST</span>
                <span className="text-xs text-cyan-400 uppercase tracking-wider">
                  Events | Production | Jobs | News
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Your complete esports services network. Insurance, production, careers, and news for the gaming industry.
            </p>
            <p className="text-gray-500 text-sm">
              Independent research and guidance for tournament organisers, venues, teams, and players.
            </p>
          </div>

          {/* Cross-site navigation columns */}
          {CROSS_SITE_SECTIONS.map((section) => (
            <div key={section.site}>
              <h4 className={`font-bold mb-4 ${activeSite === section.site ? 'text-cyan-400' : 'text-white'}`}>
                {section.title}
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="hover:text-cyan-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Site-specific sections if provided */}
        {siteSpecificSections.length > 0 && (
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12 pt-8 border-t border-gray-800">
            {siteSpecificSections.map((section, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-white mb-4">{section.title}</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link href={link.href} className="hover:text-cyan-400 transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {/* Contact info */}
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>{siteConfig.email}</li>
                <li>London, United Kingdom</li>
              </ul>
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2 px-4 rounded text-sm transition-all"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Legal Disclaimer */}
        {showDisclaimer && disclaimerText && (
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
              <h5 className="font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-yellow-500">Important Disclaimer</span>
              </h5>
              <p className="text-gray-400 text-sm leading-relaxed">
                {disclaimerText}
              </p>
            </div>
          </div>
        )}

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm border-t border-gray-800 pt-8">
          <p>&copy; 2025 {siteConfig.copyright}. Part of the Esports Quest network. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            {' · '}
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            {' · '}
            <a href="#" className="hover:text-gray-400">Cookie Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
