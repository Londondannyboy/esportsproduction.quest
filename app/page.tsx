import Link from "next/link";
import { UnifiedHeader } from "./components/UnifiedHeader";
import { UnifiedFooter } from "./components/UnifiedFooter";
import { CrossLinkBanner } from "./components/CrossLinkBanner";

const services = [
  {
    icon: "🎬",
    title: "Live Event Production",
    description:
      "End-to-end production for esports tournaments and gaming events. From small community competitions to major arena events, we deliver professional broadcasts that captivate audiences and elevate your brand.",
    features: ["Full Crew", "Equipment Rental", "Show Direction"],
  },
  {
    icon: "📡",
    title: "Tournament Broadcasting",
    description:
      "Professional live streaming and broadcast services for esports tournaments. Multi-platform streaming, custom graphics packages, and seamless viewer experiences across Twitch, YouTube, and custom platforms.",
    features: ["Multi-Platform", "Custom Graphics", "Replay Systems"],
  },
  {
    icon: "🎮",
    title: "Observer Systems",
    description:
      "Expert in-game observers who capture every critical moment. Our observers have deep game knowledge and work seamlessly with directors to deliver compelling viewing experiences for any esports title.",
    features: ["Game Expertise", "POV Management", "Spectator Tools"],
  },
  {
    icon: "🎨",
    title: "Broadcast Graphics",
    description:
      "Custom graphics packages designed for your brand and tournament. Overlays, lower thirds, transitions, stingers, and animated elements that make your broadcast look professional and polished.",
    features: ["Custom Design", "Animation", "Brand Integration"],
  },
  {
    icon: "🎙️",
    title: "Talent & Commentary",
    description:
      "Access to experienced casters, analysts, and hosts who bring energy and expertise to your broadcast. We match the right talent to your game and audience for maximum engagement.",
    features: ["Casters", "Analysts", "Hosts"],
  },
  {
    icon: "☁️",
    title: "Remote Production",
    description:
      "Cost-effective remote production solutions for online tournaments. Distributed teams, cloud-based workflows, and low-latency streaming that maintains broadcast quality without on-site requirements.",
    features: ["Cloud Workflows", "Distributed Teams", "Cost-Effective"],
  },
];

const stats = [
  { value: "500+", label: "Events Produced", suffix: "" },
  { value: "50M", label: "Viewers Reached", suffix: "+" },
  { value: "100+", label: "Game Titles Covered", suffix: "" },
  { value: "24/7", label: "Production Support", suffix: "" },
];

const capabilities = [
  {
    title: "Multi-Camera Production",
    description: "Professional camera systems including PTZ, cinema cameras, and player cams. Full switching and mixing capabilities for dynamic, engaging broadcasts.",
    icon: "📹",
  },
  {
    title: "Audio Excellence",
    description: "Crystal-clear audio mixing for commentary, game audio, crowd atmosphere, and music. Professional audio engineers ensure perfect balance for every broadcast.",
    icon: "🎧",
  },
  {
    title: "Real-Time Graphics",
    description: "Live stats, player information, bracket updates, and sponsor integrations. Dynamic graphics that enhance the viewing experience and keep audiences informed.",
    icon: "📊",
  },
  {
    title: "Instant Replays",
    description: "Capture and replay critical moments in real-time. Multi-angle replays, slow-motion analysis, and highlight packages that add production value.",
    icon: "⏪",
  },
  {
    title: "Venue Integration",
    description: "LED walls, stage screens, lighting control, and crowd engagement systems. We integrate broadcast production with venue AV for immersive experiences.",
    icon: "🏟️",
  },
  {
    title: "Content Delivery",
    description: "Multi-platform streaming, VOD processing, and highlight creation. We ensure your content reaches audiences wherever they watch.",
    icon: "🌐",
  },
];

const clients = [
  "Tournament Organisers",
  "Esports Teams",
  "Game Publishers",
  "Brands & Sponsors",
  "Streaming Platforms",
  "Gaming Venues",
];

const games = [
  "League of Legends",
  "Valorant",
  "CS2",
  "Dota 2",
  "Fortnite",
  "Rocket League",
  "Overwatch 2",
  "EA Sports FC",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      {/* Video Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Video Background - Priority loading for hero */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero-1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 video-overlay" />
          <div className="absolute inset-0 scanlines opacity-20" />
        </div>

        {/* Navigation */}
        <UnifiedHeader
          activeSite="production"
          siteNavItems={[
            { label: 'Services', href: '#services' },
            { label: 'Capabilities', href: '#capabilities' },
            { label: 'Guide', href: '/esports-production-guide' },
            { label: 'FAQ', href: '#faq' },
          ]}
          ctaLabel="Get a Quote"
          ctaHref="/contact"
        />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-cyan-500/50 bg-cyan-500/10 text-cyan-400 text-sm font-medium">
            Professional Esports Production Agency
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="block">WORLD-CLASS</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              ESPORTS PRODUCTION
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional production services for esports tournaments, live events, and broadcasts.
            We bring your competitive gaming vision to life with expert crews and cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="group bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-black font-bold py-4 px-10 rounded-lg text-lg transition-all transform hover:scale-105 pulse-glow inline-flex items-center justify-center">
              Get a Quote
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
            <a href="#services" className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500/20 font-bold py-4 px-10 rounded-lg text-lg transition-all inline-flex items-center justify-center">
              Our Services
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-cyan-500/50 flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-cyan-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative py-12 bg-gradient-to-r from-purple-900/50 via-cyan-900/30 to-purple-900/50 border-y border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-black stat-value mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Esports Production */}
      <section className="py-24 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-center">
              What is <span className="text-cyan-400">Esports Production</span>?
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-gray-300 mb-6">
                Esports production is the art and science of transforming competitive gaming into professional
                broadcast entertainment. It encompasses everything from camera work and live streaming to
                graphics packages, commentary, and show direction.
              </p>
              <p className="text-lg text-gray-400 mb-6">
                As the esports industry has grown into a multi-billion dollar phenomenon, production quality
                has become crucial to success. Today&apos;s audiences expect broadcast experiences that rival
                traditional sports, with crisp visuals, expert commentary, instant replays, and
                engaging graphics that bring the action to life.
              </p>
              <p className="text-lg text-gray-400">
                Whether you&apos;re organising a local community tournament, a major arena event, or an online
                league, professional production elevates your event, engages your audience, and helps
                attract sponsors. Our team brings years of experience across every major esports title
                to deliver productions that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#0d0d15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Our <span className="text-cyan-400">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive esports production services tailored to your event, audience, and budget.
              From planning to execution, we handle every aspect of your broadcast.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="card-hover bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 group"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Industry */}
      <section className="py-24 animated-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                The Esports Industry is{" "}
                <span className="text-cyan-400 neon-text">Booming</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                With over 540 million viewers worldwide and prize pools exceeding $40 million
                for major tournaments, esports has become one of the fastest-growing entertainment
                sectors in the world.
              </p>
              <p className="text-lg text-gray-400 mb-6">
                This explosive growth means higher expectations from audiences, sponsors, and
                stakeholders. Tournament organisers need production partners who understand
                the unique requirements of competitive gaming and can deliver broadcasts
                that engage viewers and build brands.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                From arena events with thousands of spectators to online tournaments reaching
                millions of viewers, professional production is the difference between a
                forgettable event and an unforgettable experience.
              </p>
              <div className="flex flex-wrap gap-3">
                {games.map((game) => (
                  <span
                    key={game}
                    className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/50 text-purple-300 text-sm"
                  >
                    {game}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden neon-border">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                >
                  <source src="/hero-1.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-24 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Production <span className="text-purple-400">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need for a world-class esports broadcast, delivered by experienced professionals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((item, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-xl p-8">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-16 bg-[#0d0d15] border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-gray-400 uppercase tracking-wider text-sm">
              Trusted by industry leaders
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {clients.map((client) => (
              <div
                key={client}
                className="text-xl font-bold text-gray-600 hover:text-gray-400 transition-colors"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover opacity-30"
          >
            <source src="/hero-3.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/90 to-purple-900/90" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Elevate Your Esports Event?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Whether you&apos;re planning a community tournament or a major championship,
            our team is ready to bring professional production quality to your event.
            Get in touch for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-black font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-100 transition-all transform hover:scale-105 btn-shine inline-flex items-center justify-center">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden neon-border-purple">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                >
                  <source src="/hero-5.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Built by <span className="text-purple-400">Industry Veterans</span>
              </h2>
              <p className="text-xl text-gray-300 mb-4">
                We&apos;re a team of esports production professionals with experience
                across the biggest tournaments and events in competitive gaming.
              </p>
              <p className="text-lg text-gray-400 mb-6">
                Our crew has worked on major esports productions worldwide, giving us
                the expertise to handle any event, any game, and any scale. We bring
                that knowledge to every project, large or small.
              </p>
              <ul className="space-y-4 text-gray-400 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">&#10003;</span>
                  <span>Experienced broadcast directors and technical directors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">&#10003;</span>
                  <span>Expert observers with deep game knowledge</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">&#10003;</span>
                  <span>Graphics designers who understand esports aesthetics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">&#10003;</span>
                  <span>Full technical crews for on-site and remote productions</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-8 rounded-lg transition-all">
                Work With Us
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Site Promotion with SEO Keywords */}
      <section className="py-16 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-300">
            Part of the ESPORTS QUEST Network
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="https://esportsevent.quest"
              className="p-6 rounded-xl bg-gradient-to-br from-cyan-900/30 to-purple-900/30 border border-cyan-500/20 hover:border-cyan-500/50 transition-all group"
            >
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400">
                Esports Insurance
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                Protect your esports event with comprehensive coverage. Compare <a href="https://esportsevent.quest" className="text-cyan-400 hover:underline">esports event insurance</a> quotes from leading UK insurers.
              </p>
              <span className="text-cyan-400 text-sm font-medium">
                Get Esports Insurance Quote →
              </span>
            </a>
            <a
              href="https://esportsjobs.quest"
              className="p-6 rounded-xl bg-gradient-to-br from-green-900/30 to-cyan-900/30 border border-green-500/20 hover:border-green-500/50 transition-all group"
            >
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400">
                Esports Jobs
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                Looking for production crew or broadcast talent? Find the best <a href="https://esportsjobs.quest" className="text-green-400 hover:underline">esports jobs</a> and gaming industry careers.
              </p>
              <span className="text-green-400 text-sm font-medium">
                Browse Esports Jobs →
              </span>
            </a>
            <a
              href="https://esportsnews.quest"
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 hover:border-purple-500/50 transition-all group"
            >
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400">
                Esports News
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                Stay updated with the latest <a href="https://esportsnews.quest" className="text-purple-400 hover:underline">esports news</a>, industry insights, and tournament coverage from the UK scene.
              </p>
              <span className="text-purple-400 text-sm font-medium">
                Read Esports News →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-[#0d0d15]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Esports Production <span className="text-purple-400">FAQ</span>
            </h2>
            <p className="text-xl text-gray-400">
              Common questions about esports production services
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "What is esports production?",
                a: "Esports production encompasses all the technical and creative elements needed to broadcast competitive gaming events professionally. This includes camera work, live streaming, graphics packages, observer systems, audio mixing, commentary, replay systems, and overall show direction. It transforms raw gameplay into engaging entertainment that captivates audiences.",
              },
              {
                q: "How much does esports production cost?",
                a: "Costs vary significantly based on event scale and requirements. Small community tournaments may start from £1,000-£5,000, while mid-tier events range from £10,000-£50,000. Major professional tournaments with full broadcast production can cost £100,000 or more. We provide custom quotes based on your specific needs, venue, crew requirements, and production complexity.",
              },
              {
                q: "What games do you cover?",
                a: "We have production experience across all major esports titles including League of Legends, Valorant, Counter-Strike 2, Dota 2, Fortnite, Rocket League, Overwatch 2, EA Sports FC, Call of Duty, fighting games, and more. Each game has unique spectator tools and production requirements that our team understands.",
              },
              {
                q: "Can you handle remote/online tournaments?",
                a: "Yes, we specialise in remote production for online tournaments. Using cloud-based workflows, low-latency streaming, and distributed teams, we deliver professional broadcasts without requiring all crew to be in one location. This can significantly reduce costs while maintaining high production quality.",
              },
              {
                q: "What equipment do you provide?",
                a: "We provide all production equipment including streaming PCs, capture hardware, video switchers, broadcast cameras, audio mixing consoles, graphics systems, replay servers, communication systems, and more. Equipment packages are tailored to your event requirements and venue specifications.",
              },
              {
                q: "How far in advance should we book?",
                a: "For major events, we recommend booking 2-3 months in advance to ensure crew availability and proper planning. Smaller productions can often be organised within 2-4 weeks. Contact us as early as possible to discuss your event and secure your dates.",
              },
              {
                q: "Do you provide commentary and talent?",
                a: "Yes, we have access to experienced casters, analysts, and hosts across various esports titles. We can provide complete talent packages or work with talent you've already secured. Our team helps match the right voices to your event and audience.",
              },
              {
                q: "What streaming platforms do you support?",
                a: "We support all major streaming platforms including Twitch, YouTube, Facebook Gaming, and custom/proprietary platforms. We can handle multi-platform simulcasting, embedded players for your website, and VOD processing for highlights and content distribution.",
              },
              {
                q: "Can you create custom graphics and branding?",
                a: "Absolutely. Our graphics team creates custom packages including overlays, lower thirds, transitions, stingers, animated elements, and full broadcast designs that match your brand identity. We work with you to develop visuals that enhance your production and impress sponsors.",
              },
              {
                q: "What makes esports production different from regular video production?",
                a: "Esports production requires deep game knowledge, specialised spectator tools, real-time graphics integration, and understanding of competitive gaming narratives. Our observers and directors know how to capture key moments, manage multiple player perspectives, and tell stories that engage gaming audiences.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-gray-900/50 border border-gray-700 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-800/50 transition-colors">
                  <span className="font-bold text-lg text-white pr-4">{faq.q}</span>
                  <span className="text-cyan-400 text-2xl group-open:rotate-45 transition-transform flex-shrink-0">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-400">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <UnifiedFooter
        activeSite="production"
        siteSpecificSections={[
          {
            title: 'Services',
            links: [
              { label: 'Live Event Production', href: '#services' },
              { label: 'Tournament Broadcasting', href: '#services' },
              { label: 'Observer Systems', href: '#services' },
              { label: 'Broadcast Graphics', href: '#services' },
              { label: 'Remote Production', href: '#services' },
            ],
          },
          {
            title: 'Resources',
            links: [
              { label: 'Production Guide', href: '/esports-production-guide' },
              { label: 'Broadcast Services', href: '/esports-broadcast-services' },
              { label: 'Pricing Guide', href: '/tournament-production-cost' },
              { label: 'Streaming Setup', href: '/esports-streaming-setup' },
            ],
          },
        ]}
      />
    </main>
  );
}
