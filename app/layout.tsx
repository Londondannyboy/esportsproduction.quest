import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://esportsproduction.quest/#website",
      name: "Esports Production Services Quest",
      url: "https://esportsproduction.quest",
      description: "Esports production services for competitive video game tournaments, broadcasts, and live events. Esports Production Services Quest is your complete guide to professional tournament production.",
      publisher: {
        "@id": "https://esportsproduction.quest/#organization"
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://esportsproduction.quest/?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://esportsproduction.quest/#organization",
      name: "Esports Production Services Quest",
      url: "https://esportsproduction.quest",
      description: "Esports Production Services Quest delivers professional esports production services for competitive video game tournament production, esports broadcast solutions, and gaming events worldwide.",
      areaServed: {
        "@type": "Country",
        name: "United Kingdom",
      },
      knowsAbout: [
        "Esports Production Services",
        "Video Game Tournament Production",
        "Competitive Video Game Tournament Production",
        "Esports Broadcast Solutions",
        "Esports Productions",
        "Esports Events Production",
        "Live Event Production",
        "Tournament Broadcasting",
        "Broadcast Graphics",
        "Observer Systems"
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://esportsproduction.quest/#webpage",
      url: "https://esportsproduction.quest",
      name: "Esports Production Services | Video Game Tournament & Broadcast Production Company UK",
      description: "Esports production services for competitive video game tournaments and gaming events. Expert esports productions and esports broadcast solutions.",
      isPartOf: {
        "@id": "https://esportsproduction.quest/#website"
      },
      about: {
        "@id": "https://esportsproduction.quest/#organization"
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://esportsproduction.quest/og-image.png"
      }
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is esports production?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Esports production encompasses all the technical and creative elements needed to broadcast competitive gaming events. This includes camera work, live streaming, graphics packages, observer systems, audio mixing, commentary, replay systems, and overall show direction. Professional esports production transforms gameplay into engaging entertainment.",
          },
        },
        {
          "@type": "Question",
          name: "What services does an esports production company provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Esports production companies provide comprehensive services including live event production, tournament broadcasting, streaming setup, broadcast graphics and overlays, observer and spectator systems, audio production, on-site technical crews, remote production capabilities, and post-production editing for highlights and content.",
          },
        },
        {
          "@type": "Question",
          name: "How much does esports production cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Esports production costs vary significantly based on scale. Small community tournaments may start from £1,000-£5,000, while mid-tier events range from £10,000-£50,000. Major professional tournaments with full broadcast production can cost £100,000 or more. Costs depend on crew size, equipment, venue, streaming platforms, and production complexity.",
          },
        },
        {
          "@type": "Question",
          name: "What equipment is needed for esports production?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Professional esports production requires streaming PCs and capture hardware, video switchers and mixers, broadcast cameras and PTZ systems, audio mixing consoles, graphics and overlay systems, networking infrastructure, monitor walls, observer stations, replay systems, and communication equipment for crew coordination.",
          },
        },
        {
          "@type": "Question",
          name: "Can esports events be produced remotely?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, remote production has become increasingly common in esports. Using cloud-based tools, low-latency streaming, and distributed teams, professional broadcasts can be produced with talent and crew in different locations. This reduces costs while maintaining broadcast quality for online tournaments.",
          },
        },
        {
          "@type": "Question",
          name: "What games are most commonly produced for esports?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most commonly produced esports titles include League of Legends, Valorant, Counter-Strike 2, Dota 2, Fortnite, Rocket League, Overwatch 2, FIFA/EA Sports FC, Call of Duty, and fighting games like Street Fighter and Tekken. Each game has unique production requirements and spectator tools.",
          },
        },
        {
          "@type": "Question",
          name: "How do I hire an esports production team?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "To hire an esports production team, reach out to agencies with your event details including game title, format, expected viewership, venue (or online), dates, and budget. Professional teams will provide proposals covering crew, equipment, streaming, graphics, and any additional services needed for your event.",
          },
        },
        {
          "@type": "Question",
          name: "What makes esports production different from traditional sports?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Esports production differs from traditional sports in several ways: the action happens on-screen rather than in physical space, requiring game observers rather than camera operators. Graphics and overlays are heavily integrated, multiple player perspectives must be managed, and production teams need deep game knowledge to capture key moments.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://esportsproduction.quest"
        }
      ]
    }
  ],
};

export const metadata: Metadata = {
  title: "Esports Production Services | Video Game Tournament & Broadcast Production UK | Quest",
  description:
    "Esports production services for video game tournaments and competitive gaming events. Full-service esports broadcast solutions, live event production, and professional esports productions worldwide from Esports Production Services Quest.",
  authors: [{ name: "Esports Production Services Quest" }],
  keywords: [
    "esports production services",
    "esports production company",
    "video game tournament production",
    "competitive video game tournament production",
    "esports broadcast solutions",
    "esports productions",
    "esports events production",
    "tournament production",
    "video gaming tournament event production",
    "esports production companies",
    "live event production",
    "gaming broadcast services",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Esports Production Services | Video Game Tournament & Broadcast Production UK",
    description:
      "Esports production services for competitive video game tournaments. Expert esports productions, esports broadcast solutions, and live event production from Esports Production Services Quest.",
    siteName: "Esports Production Services Quest",
    locale: "en_GB",
    images: [
      {
        url: "https://esportsproduction.quest/og-image.png",
        width: 1200,
        height: 630,
        alt: "Esports Production Services - Professional Video Game Tournament & Broadcast Production UK",
        type: "image/png",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Esports Production Services | Video Game Tournament Production UK",
    description:
      "Esports production services for competitive video game tournaments. Esports broadcast solutions and professional esports productions from Esports Production Services Quest.",
    images: ["https://esportsproduction.quest/og-image.png"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  alternates: {
    canonical: "https://esportsproduction.quest",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon - Q for Quest branding */}
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Esports Production Services Quest" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
