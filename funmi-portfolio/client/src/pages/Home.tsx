/*
 * Design philosophy for this page: Editorial Executive Modernism.
 * This file should reinforce asymmetric composition, refined typography,
 * soft depth, and a human-centered business aesthetic with measured motion.
 */
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Download,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

const profile = {
  name: "Funmilayo Babatunde",
  title: "Customer Operations & Client Success Specialist",
  summary:
    "Funmi helps organizations turn high-volume customer interactions into stronger relationships, cleaner workflows, and more confident operations. With more than seven years of experience across SaaS and service environments, she brings together customer empathy, CRM fluency, workflow improvement, and a recent master's foundation in applied artificial intelligence and data analytics.",
  location: "Calgary, Alberta, Canada",
  email: "funmibabs08@gmail.com",
  phone: "+1 (416) 254-6187",
  linkedin: "https://www.linkedin.com/in/funmilayo-babatunde/",
  resume:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663192833958/HFWS2mgHque77uhCR5MEVL/funmi-resume_3f4721db.pdf",
  heroImage:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663192833958/HFWS2mgHque77uhCR5MEVL/funmi-headshot-standing_785d174e.jpeg",
  deskImage:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663192833958/HFWS2mgHque77uhCR5MEVL/funmi-desk-portrait_b683366b.jpeg",
  candidImage:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663192833958/HFWS2mgHque77uhCR5MEVL/funmi-candid_42fc22dc.jpeg",
  replacementPortrait:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663192833958/HFWS2mgHque77uhCR5MEVL/funmi-profile-replacement-chair_27217b54.jpg",
  accentPortrait:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663192833958/HFWS2mgHque77uhCR5MEVL/funmi-yellow-portrait_cec88d52.jpeg",
  heroBackground:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663192833958/HFWS2mgHque77uhCR5MEVL/funmi-hero-editorial-background_df10133f.png",
  sectionBackground:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663192833958/HFWS2mgHque77uhCR5MEVL/funmi-section-curve-mesh_24db9ad4.png",
  contactBackground:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663192833958/HFWS2mgHque77uhCR5MEVL/funmi-contact-ambient-background_baba325a.png",
};

const stats = [
  {
    value: "7+",
    label: "Years of customer-facing experience",
    detail: "Across SaaS and service-based environments.",
  },
  {
    value: "12,000+",
    label: "Annual client interactions managed",
    detail: "Supporting relationship depth and service consistency.",
  },
  {
    value: "40%",
    label: "Productivity lift from CRM workflow automation",
    detail: "Delivered through process improvement and smarter operations.",
  },
  {
    value: "3",
    label: "Academic credentials across geography and applied AI",
    detail: "Including a recent MSc in Applied Artificial Intelligence and Data Analytics.",
  },
];

const capabilities: Array<{ icon: LucideIcon; title: string; description: string }> = [
  {
    icon: Users,
    title: "Customer Success & Retention",
    description:
      "She builds trust with clients, supports onboarding, and keeps service experiences consistent in high-volume environments.",
  },
  {
    icon: Workflow,
    title: "Workflow Improvement",
    description:
      "She streamlines CRM processes, improves team productivity, and introduces systems that reduce friction across the customer journey.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Operations Support",
    description:
      "Her work spans escalations, engagement support, feedback analysis, and service delivery coordination across client accounts.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Data-Aware Thinking",
    description:
      "Recent graduate study in applied AI and data analytics adds analytical depth to her customer operations perspective.",
  },
];

const experience = [
  {
    role: "Customer Relations & Operations Specialist",
    company: "Razorhorse Capital",
    period: "October 2021 — Present",
    summary:
      "Managing large-scale client engagement, improving CRM processes, and supporting stronger customer retention outcomes.",
    highlights: [
      "Managed more than 12,000 annual client interactions across accounts.",
      "Automated CRM workflows, improving productivity by 40 percent.",
      "Analyzed client feedback to improve experience, retention, and engagement.",
      "Coached team members on practical customer engagement strategies.",
    ],
  },
  {
    role: "Customer Service Specialist",
    company: "Starbond",
    period: "December 2021 — April 2022",
    summary:
      "Supported customer requests, managed escalations, and surfaced improvement opportunities within the service process.",
    highlights: [
      "Delivered responsive customer support and resolved inquiries effectively.",
      "Managed escalated issues with a service-oriented mindset.",
      "Recommended process improvements to strengthen team performance.",
    ],
  },
  {
    role: "Sales Advisor & Customer Resolution Specialist",
    company: "Careerist Inc., Miami, FL",
    period: "September 2021 — January 2022",
    summary:
      "Served as a first point of contact for customers while resolving complex issues and protecting customer satisfaction.",
    highlights: [
      "Acted as the front-line contact for customer communication.",
      "Resolved complex concerns and improved customer value perception.",
      "Managed escalations while maintaining strong satisfaction outcomes.",
    ],
  },
];

const education = [
  {
    degree: "Applied Artificial Intelligence and Data Analytics (MSc)",
    school: "University of Bradford, Bradford, UK",
    period: "2023 — 2024",
  },
  {
    degree: "Geography (MSc)",
    school: "University of Ibadan, Ibadan",
    period: "2015 — 2016",
  },
  {
    degree: "Geography (BSc)",
    school: "University of Ilorin, Ilorin",
    period: "2009 — 2013",
  },
];

const certifications = [
  "Customer Service: Serving Customers Through Chat and Text — LinkedIn Learning",
  "Introduction to CRM with HubSpot — Coursera",
  "Cloud Computing and Cloud Security",
  "Certificate of Proficiency in Management Training",
  "Customer Relationship Management — Udemy",
];

const skills = [
  "CRM Management: Salesforce, HubSpot, Intercom",
  "Customer Retention & Engagement",
  "Process Improvement & Workflow Automation",
  "Technical Support & Troubleshooting",
  "Stakeholder Communication",
  "Customer Onboarding Support",
  "Digital Literacy & Multitasking",
  "Quality Improvement Initiatives",
];

function SectionKicker({ children }: { children: ReactNode }) {
  return <span className="section-kicker">{children}</span>;
}

function CapabilityCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <article className="editorial-card group">
      <div className="mb-6 flex items-center justify-between">
        <span className="icon-shell">
          <Icon className="h-5 w-5" />
        </span>
        <Sparkles className="h-4 w-4 text-[var(--soft-gold)] transition-transform duration-500 group-hover:rotate-12" />
      </div>
      <h3 className="font-display text-2xl leading-tight text-foreground">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-muted-foreground">{description}</p>
    </article>
  );
}

export default function Home() {
  return (
    <div className="page-shell min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(7,16,31,0.72)] backdrop-blur-xl">
        <div className="container flex items-center justify-between gap-6 py-4">
          <div>
            <p className="font-display text-2xl tracking-[0.18em] text-white">FB</p>
            <p className="text-[0.72rem] uppercase tracking-[0.3em] text-white/60">
              Funmi Portfolio
            </p>
          </div>

          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.24em] text-white/72 md:flex">
            <a href="#about" className="transition-colors hover:text-white">
              About
            </a>
            <a href="#experience" className="transition-colors hover:text-white">
              Experience
            </a>
            <a href="#education" className="transition-colors hover:text-white">
              Credentials
            </a>
            <a href="#contact" className="transition-colors hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section
          className="relative isolate overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(6, 17, 34, 0.96) 0%, rgba(6, 17, 34, 0.88) 42%, rgba(6, 17, 34, 0.38) 72%, rgba(6, 17, 34, 0.12) 100%), url(${profile.heroBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(228,199,143,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(143,169,156,0.18),transparent_28%)]" />
          <div className="container relative grid min-h-[calc(100vh-4.5rem)] items-end gap-14 py-16 md:py-24 lg:grid-cols-[minmax(0,1.15fr)_minmax(420px,0.85fr)] lg:gap-8 lg:py-20">
            <div className="max-w-3xl pb-4 text-white lg:pb-12">
              <SectionKicker>Customer operations • client success • workflow clarity</SectionKicker>
              <h1 className="mt-6 max-w-2xl font-display text-5xl leading-[0.92] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
                Funmi Babatunde builds calm, capable customer experiences at scale.
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
                {profile.summary}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button asChild className="rounded-full bg-[var(--soft-gold)] px-7 py-6 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ink)] hover:bg-[#efd29a]">
                  <a href="#contact">Start a conversation</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-white/22 px-7 py-6 text-xs font-semibold uppercase tracking-[0.22em] text-white hover:bg-white/10"
                >
                  <a href={profile.resume} target="_blank" rel="noreferrer">
                    Download resume <Download className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="mt-14 grid gap-4 sm:grid-cols-3">
                <div className="hero-mini-panel">
                  <MapPin className="h-4 w-4 text-[var(--soft-gold)]" />
                  <span>{profile.location}</span>
                </div>
                <div className="hero-mini-panel">
                  <Mail className="h-4 w-4 text-[var(--soft-gold)]" />
                  <a href={`mailto:${profile.email}`} className="truncate hover:text-white">
                    {profile.email}
                  </a>
                </div>
                <div className="hero-mini-panel">
                  <Linkedin className="h-4 w-4 text-[var(--soft-gold)]" />
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
                    View profile
                  </a>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[34rem] lg:mr-0">
              <div className="image-frame overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 shadow-[0_32px_80px_rgba(0,0,0,0.32)] backdrop-blur-sm">
                <img
                  src={profile.heroImage}
                  alt="Professional portrait of Funmilayo Babatunde standing in a modern office corridor"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute -left-4 bottom-8 max-w-[14rem] rounded-[1.6rem] border border-white/14 bg-[rgba(11,23,41,0.84)] p-5 text-white shadow-[0_24px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:-left-10 sm:max-w-[15rem]">
                <p className="text-[0.65rem] uppercase tracking-[0.28em] text-white/58">Signature impact</p>
                <p className="mt-3 font-display text-4xl text-[var(--soft-gold)]">40%</p>
                <p className="mt-2 text-sm leading-6 text-white/74">
                  Productivity improvement through workflow automation and smarter CRM process design.
                </p>
              </div>

              <div className="absolute -right-2 top-6 rounded-full border border-white/14 bg-white/10 px-5 py-3 text-[0.68rem] uppercase tracking-[0.26em] text-white/78 shadow-[0_12px_30px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:-right-6">
                12,000+ annual client interactions
              </div>
            </div>
          </div>

          <a
            href="#about"
            className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-3 rounded-full border border-white/14 bg-white/8 px-5 py-3 text-[0.68rem] uppercase tracking-[0.26em] text-white/74 backdrop-blur-xl transition hover:bg-white/12 md:flex"
          >
            Explore profile <ArrowDown className="h-4 w-4" />
          </a>
        </section>

        <section className="border-y border-[var(--line)] bg-white/60">
          <div className="container grid gap-6 py-6 md:grid-cols-4 md:gap-4">
            {stats.map((stat) => (
              <article key={stat.label} className="metric-card">
                <p className="font-display text-4xl text-[var(--ink)]">{stat.value}</p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ink)]/80">
                  {stat.label}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{stat.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="relative overflow-hidden py-24 sm:py-28">
          <div
            className="absolute inset-x-0 top-10 bottom-10 opacity-80"
            style={{
              backgroundImage: `url(${profile.sectionBackground})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="container relative grid gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
            <div className="space-y-8">
              <div className="max-w-xl">
                <SectionKicker>Professional profile</SectionKicker>
                <h2 className="mt-5 max-w-lg font-display text-4xl leading-tight tracking-[-0.03em] text-[var(--ink)] sm:text-5xl">
                  She brings customer empathy, operational rigor, and analytical range into the same room.
                </h2>
              </div>

              <div className="quote-panel max-w-xl">
                <p className="font-display text-2xl leading-relaxed text-[var(--ink)] sm:text-[2rem]">
                  “The strongest customer relationships are built when service quality, process clarity, and follow-through work together.”
                </p>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
              <div className="space-y-6 lg:order-2">
                <div className="editorial-card bg-white/84">
                  <p className="text-base leading-8 text-muted-foreground">
                    Funmi’s experience spans customer relations, operations support, escalations, onboarding assistance, and service optimization. Her toolkit includes Salesforce, HubSpot, and Intercom, alongside a practical understanding of how workflow design improves both internal efficiency and external experience.
                  </p>
                  <p className="mt-5 text-base leading-8 text-muted-foreground">
                    Her recent graduate studies in Applied Artificial Intelligence and Data Analytics strengthen her ability to think beyond day-to-day support and contribute to smarter systems, stronger service models, and data-informed decision making.
                  </p>
                </div>

                <div className="editorial-card bg-[rgba(10,25,44,0.96)] text-white">
                  <p className="text-[0.74rem] uppercase tracking-[0.28em] text-[var(--soft-gold)]/88">
                    Focus areas
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {[
                      "Customer success",
                      "CRM operations",
                      "Workflow automation",
                      "Retention support",
                      "Client engagement",
                      "Service quality",
                      "AI-aware problem solving",
                    ].map((item) => (
                      <span key={item} className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/78">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative lg:order-1">
                <div className="image-frame h-[24rem] overflow-hidden rounded-[2rem] bg-[var(--paper)] shadow-[0_24px_70px_rgba(17,25,40,0.12)] sm:h-[31rem]">
                  <img
                    src={profile.replacementPortrait}
                    alt="Professional portrait of Funmilayo Babatunde seated in a chair"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -right-3 bottom-5 z-10 w-48 overflow-hidden rounded-[1.6rem] border border-white/75 bg-white shadow-[0_28px_70px_rgba(17,25,40,0.22)] sm:-right-8 sm:bottom-8 sm:w-56">
                  <img
                    src={profile.deskImage}
                    alt="Professional portrait of Funmilayo Babatunde in a modern office setting"
                    className="aspect-[4/5] h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-12">
          <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-16">
            <div>
              <SectionKicker>What she does well</SectionKicker>
              <h2 className="mt-5 max-w-md font-display text-4xl leading-tight tracking-[-0.03em] text-[var(--ink)] sm:text-5xl">
                A portfolio shaped around service quality, relationship depth, and systems thinking.
              </h2>
              <p className="mt-6 max-w-md text-base leading-8 text-muted-foreground">
                Her experience is strongest where people, process, and platform intersect. That makes her especially valuable in environments that need both customer warmth and operational structure.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {capabilities.map((capability) => (
                <CapabilityCard key={capability.title} {...capability} />
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="py-24 sm:py-28">
          <div className="container grid gap-14 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-16">
            <div>
              <SectionKicker>Experience timeline</SectionKicker>
              <h2 className="mt-5 max-w-md font-display text-4xl leading-tight tracking-[-0.03em] text-[var(--ink)] sm:text-5xl">
                Experience grounded in service execution and customer-facing operations.
              </h2>
              <p className="mt-6 max-w-md text-base leading-8 text-muted-foreground">
                Each role reflects a consistent pattern: clearer communication, better issue resolution, stronger engagement, and sharper workflows.
              </p>
            </div>

            <div className="space-y-8">
              {experience.map((item, index) => (
                <article key={`${item.company}-${item.role}`} className="timeline-entry">
                  <div className="timeline-marker">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="editorial-card timeline-card">
                    <div className="flex flex-col gap-4 border-b border-[var(--line)] pb-6 md:flex-row md:items-end md:justify-between">
                      <div>
                        <p className="text-[0.75rem] uppercase tracking-[0.28em] text-[var(--soft-gold-deep)]">
                          {item.company}
                        </p>
                        <h3 className="mt-3 font-display text-3xl leading-tight text-[var(--ink)]">
                          {item.role}
                        </h3>
                      </div>
                      <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                        {item.period}
                      </p>
                    </div>

                    <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground">
                      {item.summary}
                    </p>

                    <div className="mt-7 grid gap-3">
                      {item.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-3 text-sm leading-7 text-[var(--ink)]/84">
                          <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-[var(--soft-gold-deep)]" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="border-y border-[var(--line)] bg-white/65 py-24 backdrop-blur-sm sm:py-28">
          <div className="container grid gap-14 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-16">
            <div>
              <SectionKicker>Credentials & growth</SectionKicker>
              <h2 className="mt-5 max-w-md font-display text-4xl leading-tight tracking-[-0.03em] text-[var(--ink)] sm:text-5xl">
                Education and continuous learning that extend her operating range.
              </h2>
              <p className="mt-6 max-w-md text-base leading-8 text-muted-foreground">
                Funmi’s academic path combines people, place, systems, and data. It adds a broader strategic lens to her practical background in customer operations.
              </p>
            </div>

            <div className="grid gap-6 xl:grid-cols-2">
              <article className="editorial-card bg-white/88">
                <div className="flex items-center gap-3">
                  <span className="icon-shell">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-3xl text-[var(--ink)]">Education</h3>
                </div>
                <div className="mt-7 space-y-6">
                  {education.map((item) => (
                    <div key={item.degree} className="border-b border-[var(--line)] pb-5 last:border-none last:pb-0">
                      <p className="text-[0.74rem] uppercase tracking-[0.24em] text-[var(--soft-gold-deep)]">
                        {item.period}
                      </p>
                      <h4 className="mt-2 text-lg font-semibold leading-7 text-[var(--ink)]">
                        {item.degree}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.school}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="grid gap-6">
                <div className="editorial-card bg-[rgba(10,25,44,0.96)] text-white">
                  <div className="flex items-center gap-3">
                    <span className="icon-shell bg-white/10 text-[var(--soft-gold)] ring-1 ring-inset ring-white/12">
                      <BadgeCheck className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-3xl text-white">Certifications</h3>
                  </div>
                  <div className="mt-7 space-y-4">
                    {certifications.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm leading-7 text-white/80">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--soft-gold)]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="editorial-card bg-[var(--paper)]">
                  <div className="flex items-center gap-3">
                    <span className="icon-shell">
                      <Workflow className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-3xl text-[var(--ink)]">Core skills</h3>
                  </div>
                  <div className="mt-7 flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <span key={skill} className="rounded-full border border-[var(--line-strong)] bg-white px-4 py-2 text-xs uppercase tracking-[0.16em] text-[var(--ink)]/76 shadow-[0_8px_20px_rgba(17,25,40,0.05)]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="relative isolate overflow-hidden py-24 text-white sm:py-28"
          style={{
            backgroundImage: `linear-gradient(125deg, rgba(13, 16, 20, 0.92), rgba(23, 28, 36, 0.82)), url(${profile.contactBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(225,196,140,0.22),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(134,155,142,0.16),transparent_22%)]" />
          <div className="container relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center">
            <div className="max-w-3xl">
              <SectionKicker>Contact</SectionKicker>
              <h2 className="mt-5 font-display text-4xl leading-tight tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
                Looking for a customer-focused professional who brings both empathy and operational structure?
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/74">
                Funmi is open to conversations around customer success, customer operations, client support, and workflow improvement roles where service quality and process excellence matter.
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-2">
                <a href={`mailto:${profile.email}`} className="contact-panel group">
                  <Mail className="h-5 w-5 text-[var(--soft-gold)]" />
                  <div>
                    <p className="text-[0.72rem] uppercase tracking-[0.26em] text-white/52">Email</p>
                    <p className="mt-2 text-base text-white/86 transition-colors group-hover:text-white">
                      {profile.email}
                    </p>
                  </div>
                </a>
                <a href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`} className="contact-panel group">
                  <Phone className="h-5 w-5 text-[var(--soft-gold)]" />
                  <div>
                    <p className="text-[0.72rem] uppercase tracking-[0.26em] text-white/52">Phone</p>
                    <p className="mt-2 text-base text-white/86 transition-colors group-hover:text-white">
                      {profile.phone}
                    </p>
                  </div>
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild className="rounded-full bg-[var(--soft-gold)] px-7 py-6 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ink)] hover:bg-[#efd29a]">
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn profile <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-white/18 px-7 py-6 text-xs font-semibold uppercase tracking-[0.22em] text-white hover:bg-white/10"
                >
                  <a href={profile.resume} target="_blank" rel="noreferrer">
                    Download resume <Download className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[18rem]">
              <div className="overflow-hidden rounded-[2rem] border border-white/12 bg-white/8 shadow-[0_30px_70px_rgba(0,0,0,0.35)] backdrop-blur-sm">
                <img
                  src={profile.heroImage}
                  alt="Professional portrait of Funmilayo Babatunde standing in a modern office corridor"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)] bg-[var(--paper)] py-8">
        <div className="container flex flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            Portfolio website for <span className="font-semibold text-[var(--ink)]">Funmilayo Babatunde</span>.
          </p>
          <p className="uppercase tracking-[0.18em]">Customer operations • client success • workflow improvement</p>
        </div>
      </footer>
    </div>
  );
}
