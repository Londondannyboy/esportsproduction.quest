import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getContentBySlug, getAllContentSlugs } from '@/lib/content';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllContentSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = await getContentBySlug(slug);

  if (!page) {
    return { title: 'Not Found' };
  }

  return {
    title: page.meta.title,
    description: page.meta.description,
    keywords: page.meta.keywords,
    openGraph: {
      title: page.meta.title,
      description: page.meta.description,
      type: 'article',
      url: `https://esportsproduction.quest/${slug}`,
    },
    alternates: {
      canonical: `https://esportsproduction.quest/${slug}`,
    },
  };
}

export default async function ContentPage({ params }: PageProps) {
  const { slug } = await params;
  const page = await getContentBySlug(slug);

  if (!page) {
    notFound();
  }

  // Generate JSON-LD schema for the article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.meta.title,
    description: page.meta.description,
    author: {
      "@type": "Organization",
      name: "Esports Production Agency",
      url: "https://esportsproduction.quest"
    },
    publisher: {
      "@type": "Organization",
      name: "Esports Production Agency",
      url: "https://esportsproduction.quest",
    },
    datePublished: page.meta.date,
    dateModified: page.meta.last_updated || page.meta.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://esportsproduction.quest/${slug}`
    },
    keywords: page.meta.keywords?.join(", "),
  };

  // Generate breadcrumb schema
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://esportsproduction.quest"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.meta.title.split(':')[0].trim(),
        item: `https://esportsproduction.quest/${slug}`
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-cyan-500/20 backdrop-blur-md bg-black/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center font-bold text-xl">
                EP
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                ESPORTS PRODUCTION
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/#services" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Services
              </Link>
              <Link href="/esports-production-guide" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Guide
              </Link>
              <Link href="/tournament-production-cost" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Pricing
              </Link>
              <Link href="/#faq" className="text-gray-300 hover:text-cyan-400 transition-colors">
                FAQ
              </Link>
              <Link
                href="/contact"
                className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2 px-6 rounded transition-all"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-gray-400">
            <li>
              <Link href="/" className="hover:text-cyan-400 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-cyan-400">{page.meta.title.split(':')[0]}</li>
          </ol>
        </nav>

        {/* Article Content */}
        <div
          className="prose prose-invert prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-white
            prose-h1:text-4xl prose-h1:md:text-5xl prose-h1:mb-8 prose-h1:bg-gradient-to-r prose-h1:from-cyan-400 prose-h1:to-purple-400 prose-h1:bg-clip-text prose-h1:text-transparent
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-cyan-400 prose-h2:border-b prose-h2:border-cyan-500/20 prose-h2:pb-4
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-purple-400
            prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3 prose-h4:text-gray-200
            prose-p:text-gray-300 prose-p:leading-relaxed
            prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:text-cyan-300 hover:prose-a:underline
            prose-strong:text-white prose-strong:font-semibold
            prose-ul:text-gray-300 prose-ol:text-gray-300
            prose-li:marker:text-cyan-500
            prose-blockquote:border-l-cyan-500 prose-blockquote:bg-cyan-500/5 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
            prose-code:text-pink-400 prose-code:bg-gray-800/50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-gray-900/80 prose-pre:border prose-pre:border-gray-700
            prose-table:text-gray-300
            prose-th:text-cyan-400 prose-th:font-semibold prose-th:border-cyan-500/30
            prose-td:border-gray-700
            prose-img:rounded-xl prose-img:shadow-2xl prose-img:border prose-img:border-gray-700
            [&_details]:bg-gray-900/50 [&_details]:border [&_details]:border-gray-700 [&_details]:rounded-xl [&_details]:overflow-hidden [&_details]:mb-4
            [&_summary]:p-4 [&_summary]:cursor-pointer [&_summary]:font-semibold [&_summary]:text-white [&_summary]:hover:bg-gray-800/50 [&_summary]:transition-colors
            [&_details>*:not(summary)]:px-4 [&_details>*:not(summary)]:pb-4
          "
          dangerouslySetInnerHTML={{ __html: page.content }}
        />

        {/* CTA Section */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-cyan-900/50 to-purple-900/50 border border-cyan-500/20">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Discuss Your Production Needs?
          </h2>
          <p className="text-gray-300 mb-6">
            Get a free quote for your esports event. Our team is ready to bring
            professional production quality to your tournament or broadcast.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Last Updated */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-sm text-gray-500">
          <p>Last updated: {page.meta.last_updated || page.meta.date}</p>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-[#050508] border-t border-gray-800 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/#services" className="hover:text-cyan-400">Live Event Production</Link></li>
                <li><Link href="/#services" className="hover:text-cyan-400">Tournament Broadcasting</Link></li>
                <li><Link href="/#services" className="hover:text-cyan-400">Observer Systems</Link></li>
                <li><Link href="/#services" className="hover:text-cyan-400">Broadcast Graphics</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/esports-production-guide" className="hover:text-cyan-400">Production Guide</Link></li>
                <li><Link href="/tournament-production-cost" className="hover:text-cyan-400">Pricing Guide</Link></li>
                <li><Link href="/esports-broadcast-services" className="hover:text-cyan-400">Broadcast Services</Link></li>
                <li><Link href="/esports-streaming-setup" className="hover:text-cyan-400">Streaming Setup</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>hello@esportsproduction.quest</li>
                <li>London, United Kingdom</li>
              </ul>
              <div className="mt-4">
                <Link href="/contact" className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2 px-4 rounded text-sm transition-all">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-gray-500 text-sm">
              &copy; 2025 Esports Production Agency. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
