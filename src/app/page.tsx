import Link from "next/link";
import { Icon } from "@/components/ui";

const workflowSteps = [
  { icon: "description", label: "Brief" },
  { icon: "format_list_bulleted", label: "Outline" },
  { icon: "auto_fix_high", label: "Generation" },
  { icon: "person_check", label: "Humanization" },
  { icon: "verified", label: "Verification", active: true },
];

const toolCards = [
  {
    icon: "verified_user",
    iconClass: "text-primary",
    title: "AI Humanizer",
    description: "Scrub away generic AI signatures for content that resonates with human readers.",
    footer: (
      <div className="flex justify-between items-center">
        <span className="text-[10px] uppercase font-bold text-secondary">Naturalness</span>
        <span className="font-bold text-secondary">98%</span>
      </div>
    ),
  },
  {
    icon: "spellcheck",
    iconClass: "text-secondary",
    title: "Grammar 2.0",
    description: "Beyond spelling—contextual corrections that preserve your unique brand voice.",
    footer: <span className="text-error font-bold text-[10px]">3 CRITICAL ISSUES</span>,
  },
  {
    icon: "radar",
    iconClass: "text-on-secondary-container",
    title: "AI Detector",
    description: "Protect your site from potential algorithm updates with industrial-grade detection.",
    footer: (
      <div className="flex justify-between items-center">
        <span className="text-[10px] uppercase font-bold text-on-surface-variant">Probability</span>
        <span className="font-bold text-on-surface">Safe</span>
      </div>
    ),
  },
  {
    icon: "find_in_page",
    iconClass: "text-primary",
    title: "Plagiarism Shield",
    description: "Real-time web crawling ensures your content is 100% original and authoritative.",
    footer: <span className="text-secondary font-bold text-[10px]">UNIQUE CONTENT</span>,
  },
];

const audiences = [
  {
    title: "Professional Writers",
    description: "Draft, humanize, and polish long-form content in a distraction-free environment.",
  },
  {
    title: "SEO Specialists",
    description: "Automate technical content creation without sacrificing EEAT or semantic depth.",
  },
  {
    title: "Marketing Agencies",
    description: "Scale content production for 50+ clients while maintaining perfect brand consistency.",
  },
];

const pricingTiers = [
  {
    name: "Individual",
    price: "$29",
    features: ["5,000 AI Credits", "Basic Humanizer", "Plagiarism Checks"],
    cta: "Start Trial",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$79",
    features: ["20,000 AI Credits", "Advanced AI Humanizer", "Full EEAT Dashboard", "API Access (Beta)"],
    cta: "Upgrade Now",
    highlighted: true,
  },
  {
    name: "Agency",
    price: "$199",
    features: ["Unlimited Credits", "Team Workspaces", "Bulk Humanizer"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const faqs = [
  {
    q: "How does Rankpilot.io ensure content sounds human?",
    a: "Our proprietary AI Humanizer uses a multi-layer semantic transformer that re-analyzes sentence structure, variability (perplexity), and word choice (burstiness) to match natural human writing patterns while maintaining SEO density.",
  },
  {
    q: "Will search engines penalize this AI-generated content?",
    a: "Search engines penalize low-quality, spammy content. Rankpilot focuses on high-quality, research-backed generation that meets EEAT standards, which is exactly what modern algorithms prioritize.",
  },
  {
    q: '"Credits" — how are they consumed?',
    a: "Credits are used for content generation, humanization, and advanced SEO analysis. On average, one 1,500-word article consumes roughly 150-200 credits including optimization steps.",
  },
  {
    q: "Is my data kept private?",
    a: "Yes. Your projects, briefs, and drafted content are encrypted and never used for public model training. Your intellectual property remains yours alone.",
  },
];

export default function LandingPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm">
        <div className="flex justify-between items-center h-topbar-height px-container-padding max-w-7xl mx-auto">
          <div className="flex items-center gap-12">
            <Link href="/" className="font-headline-sm text-headline-sm font-bold text-primary">
              RankPilot
            </Link>
            <div className="hidden md:flex gap-8">
              <a href="#product" className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">
                Product
              </a>
              <a href="#pricing" className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="#resources" className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">
                Resources
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors px-4 py-2">
              Sign In
            </Link>
            <Link
              href="/signup"
              className="bg-primary text-white font-label-md text-label-md px-6 py-2.5 rounded-lg hover:opacity-90 active:scale-95 transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-40 pb-20 px-container-padding bg-gradient-to-b from-white to-surface-container-low">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary-container/10 text-primary-container font-label-md text-label-md uppercase tracking-wider">
            The Intelligent Writing OS
          </span>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-6 max-w-4xl mx-auto">
            Create content that ranks, reads naturally, and earns trust.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
            Plan, write, improve, verify, and optimize professional content from one intelligent
            writing workspace. Designed for the precision-focused editor.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
            <Link
              href="/signup"
              className="bg-primary text-white font-headline-sm text-label-md px-10 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Create Project
            </Link>
            <Link
              href="/tools/article-generator"
              className="border-2 border-outline-variant text-on-surface font-headline-sm text-label-md px-10 py-4 rounded-xl hover:bg-surface-container transition-all"
            >
              Generate Content
            </Link>
          </div>

          {/* Workspace UI Preview */}
          <div className="relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/40 bg-white aspect-[16/10] hidden md:flex">
            <div className="w-sidebar-width-collapsed lg:w-sidebar-width-expanded h-full bg-navy-sidebar text-white flex flex-col p-4">
              <div className="flex items-center gap-3 mb-8 px-2">
                <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center">
                  <Icon name="rocket_launch" filled className="text-white" />
                </div>
                <span className="font-headline-sm text-sm font-bold hidden lg:block">Project Alpha</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/10 border-l-4 border-primary">
                  <Icon name="edit_note" className="text-white" />
                  <span className="font-label-md hidden lg:block">Editor</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors">
                  <Icon name="analytics" className="text-white/60" />
                  <span className="font-label-md hidden lg:block">SEO Strategy</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors">
                  <Icon name="auto_awesome" className="text-white/60" />
                  <span className="font-label-md hidden lg:block">AI Tools</span>
                </div>
              </div>
              <div className="mt-auto px-2 pb-4">
                <div className="bg-white/5 rounded-xl p-4 hidden lg:block">
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-white/60">Credits</span>
                    <span className="text-white">840/1000</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary-container w-[84%]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col bg-white">
              <div className="h-14 border-b border-outline-variant/30 flex items-center justify-between px-6">
                <span className="font-label-md text-on-surface-variant">My Documents / 2024 Strategy Guide</span>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg hover:bg-surface-container">
                    <Icon name="history" className="text-on-surface-variant" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-surface-container">
                    <Icon name="share" className="text-on-surface-variant" />
                  </button>
                </div>
              </div>
              <div className="flex-1 p-12 overflow-y-auto max-w-editor-max-width mx-auto w-full">
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">
                  Modern Content Marketing in 2024
                </h2>
                <div className="space-y-6 text-on-surface-variant font-body-md text-body-md leading-relaxed">
                  <p>
                    Search engines have evolved beyond simple keyword matching. Today, semantic
                    relevance and user intent are the primary drivers of visibility.
                  </p>
                  <div className="bg-surface-container-low border-l-4 border-primary p-6 rounded-r-lg">
                    <p className="italic text-primary font-medium">
                      Rankpilot Tip: This section could benefit from an H3 header and more specific
                      examples of EEAT signals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[300px] border-l border-outline-variant/30 bg-surface-container-low p-6 hidden xl:block">
              <div className="mb-8">
                <h4 className="font-label-md text-on-surface mb-4 uppercase tracking-wider text-[10px]">
                  Real-time Analysis
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded-xl border border-outline-variant/30 text-center">
                    <div className="text-secondary font-bold text-headline-sm">92</div>
                    <div className="text-[10px] text-on-surface-variant uppercase">SEO Score</div>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-outline-variant/30 text-center">
                    <div className="text-error font-bold text-headline-sm">12%</div>
                    <div className="text-[10px] text-on-surface-variant uppercase">AI Likelihood</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-label-md text-on-surface mb-2 text-xs">AI Suggestions</h4>
                <div className="bg-white p-4 rounded-xl border-l-4 border-secondary shadow-sm">
                  <p className="text-xs text-on-surface-variant mb-3">Sentence is too complex for readability.</p>
                  <button className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-lg text-[11px] font-bold">
                    Simplify AI Rewrite
                  </button>
                </div>
                <div className="bg-white p-4 rounded-xl border-l-4 border-primary shadow-sm">
                  <p className="text-xs text-on-surface-variant mb-3">Add &apos;case study&apos; to improve EEAT signals.</p>
                  <button className="bg-primary-container text-white px-3 py-1 rounded-lg text-[11px] font-bold">
                    Insert Template
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Unified Writing Workflow */}
      <section className="py-24 bg-white overflow-hidden" id="product">
        <div className="max-w-7xl mx-auto px-container-padding">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">The Unified Writing Workflow</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Experience a seamless transition from raw idea to published masterpiece with our
              integrated five-step process.
            </p>
          </div>
          <div className="relative flex justify-between items-center max-w-5xl mx-auto flex-wrap gap-y-8">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant/30 -translate-y-1/2 z-0 hidden md:block" />
            {workflowSteps.map((step) => (
              <div key={step.label} className="relative z-10 flex flex-col items-center group">
                <div
                  className={
                    step.active
                      ? "w-16 h-16 rounded-full bg-primary border-2 border-primary flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform"
                      : "w-16 h-16 rounded-full bg-white border-2 border-primary flex items-center justify-center text-primary mb-4 shadow-sm group-hover:scale-110 transition-transform"
                  }
                >
                  <Icon name={step.icon} />
                </div>
                <span
                  className={
                    step.active
                      ? "font-label-md text-label-md text-primary font-bold"
                      : "font-label-md text-label-md text-on-surface font-bold"
                  }
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Creator Showcase */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-container-padding flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <span className="text-secondary font-label-md text-label-md font-bold uppercase mb-4 block">
              Power Features
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">
              Advanced Creator Control with SEO &amp; EEAT Guardrails
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              Don&apos;t just &quot;generate&quot; text. Architect it. Rankpilot allows you to set specific
              Expertise, Experience, Authoritativeness, and Trustworthiness parameters before a single
              word is written.
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <Icon name="tune" />
                </div>
                <div>
                  <h4 className="font-headline-sm text-base mb-1">Granular Tone Controls</h4>
                  <p className="text-sm text-on-surface-variant">
                    Switch between clinical, conversational, or authoritative expert tones instantly.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <Icon name="search_check" />
                </div>
                <div>
                  <h4 className="font-headline-sm text-base mb-1">Keyword Clustering</h4>
                  <p className="text-sm text-on-surface-variant">
                    Automatically group and distribute target keywords throughout the narrative flow.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-8 rounded-2xl shadow-premium border border-outline-variant/20">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-2 bg-primary rounded-full" />
                <div className="flex-1 h-2 bg-primary rounded-full" />
                <div className="flex-1 h-2 bg-outline-variant/30 rounded-full" />
              </div>
              <div className="space-y-6">
                <h3 className="font-headline-md text-lg">Step 2: Define EEAT signals</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl border-2 border-primary bg-primary-container/5">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-label-md text-primary">Experience Level</span>
                      <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full">Expert</span>
                    </div>
                    <p className="text-xs text-on-surface-variant">
                      AI will reference specific technical frameworks and use industry-standard terminology.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-outline-variant/30">
                    <div className="flex justify-between items-center">
                      <span className="font-label-md">External Citations</span>
                      <div className="w-10 h-5 bg-outline-variant/30 rounded-full relative">
                        <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full" />
                      </div>
                    </div>
                  </div>
                  <button className="w-full py-3 bg-primary text-white rounded-xl font-bold">
                    Continue to Generation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-container-padding">
          <h2 className="font-headline-lg text-headline-lg text-on-surface text-center mb-16">
            Intelligence in Every Pane
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {toolCards.map((tool) => (
              <div
                key={tool.title}
                className="p-6 rounded-2xl border border-outline-variant/40 bg-surface-bright flex flex-col h-full hover:border-primary transition-colors"
              >
                <Icon name={tool.icon} className={`${tool.iconClass} mb-4`} size={32} />
                <h3 className="font-headline-sm text-base mb-2">{tool.title}</h3>
                <p className="text-sm text-on-surface-variant mb-6 flex-1">{tool.description}</p>
                <div className="pt-4 border-t border-outline-variant/20">{tool.footer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-container-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {audiences.map((a) => (
              <div key={a.title} className="relative overflow-hidden group rounded-2xl aspect-square bg-primary/20">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/30 flex flex-col justify-end p-8">
                  <h4 className="text-white font-headline-md text-xl mb-2">{a.title}</h4>
                  <p className="text-white/80 text-sm">{a.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white" id="pricing">
        <div className="max-w-7xl mx-auto px-container-padding">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Precision-Based Pricing</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Simple credit tiers that scale with your content demands.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={
                  tier.highlighted
                    ? "p-8 rounded-2xl bg-navy-sidebar text-white flex flex-col transform md:-translate-y-4 shadow-xl"
                    : "p-8 rounded-2xl border border-outline-variant/30 flex flex-col"
                }
              >
                {tier.highlighted && (
                  <div className="mb-4">
                    <span className="bg-primary-container/20 text-primary-fixed text-[10px] uppercase font-bold px-2 py-1 rounded">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="font-headline-sm text-lg mb-4">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className={tier.highlighted ? "text-white/60" : "text-on-surface-variant"}>/mo</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-center gap-3 text-sm ${
                        tier.highlighted ? "text-white/80" : "text-on-surface-variant"
                      }`}
                    >
                      <Icon
                        name="check_circle"
                        size={18}
                        className={tier.highlighted ? "text-secondary-fixed" : "text-secondary"}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/signup"
                  className={
                    tier.highlighted
                      ? "w-full py-3 bg-primary text-white rounded-xl font-bold shadow-lg text-center"
                      : "w-full py-3 border border-primary text-primary rounded-xl font-bold hover:bg-primary/5 text-center"
                  }
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-surface-container-low" id="resources">
        <div className="max-w-3xl mx-auto px-container-padding">
          <h2 className="font-headline-lg text-headline-lg text-on-surface text-center mb-12">Common Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={faq.q}
                className="group bg-white p-6 rounded-2xl border border-outline-variant/20 shadow-sm cursor-pointer"
                open={i === 0}
              >
                <summary className="flex justify-between items-center font-bold text-on-surface list-none">
                  {faq.q}
                  <Icon name="expand_more" className="group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-sm text-on-surface-variant leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-container-padding">
          <h2 className="font-display-lg text-display-lg mb-8">Ready to rank? Start your project today.</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/signup"
              className="bg-white text-primary font-bold px-12 py-5 rounded-xl hover:scale-105 transition-transform"
            >
              Create My First Project
            </Link>
            <button className="border-2 border-white/30 text-white font-bold px-12 py-5 rounded-xl hover:bg-white/10 transition-colors">
              Book a Workspace Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full pt-stack-lg pb-stack-md bg-surface-dim border-t border-outline-variant">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-stack-lg px-container-padding max-w-7xl mx-auto">
          <div className="col-span-2 md:col-span-1">
            <span className="font-headline-sm text-headline-sm font-bold text-primary block mb-6">RankPilot</span>
            <p className="text-body-sm text-on-surface-variant max-w-[200px]">
              The professional writing operating system for high-performance teams.
            </p>
          </div>
          <div>
            <h4 className="font-label-md text-on-surface font-bold mb-4">Product</h4>
            <div className="space-y-3">
              <a className="block text-body-sm text-on-surface-variant hover:underline" href="#product">Features</a>
              <a className="block text-body-sm text-on-surface-variant hover:underline" href="#pricing">Pricing</a>
              <a className="block text-body-sm text-on-surface-variant hover:underline" href="#">API</a>
            </div>
          </div>
          <div>
            <h4 className="font-label-md text-on-surface font-bold mb-4">Company</h4>
            <div className="space-y-3">
              <a className="block text-body-sm text-on-surface-variant hover:underline" href="#">Documentation</a>
              <a className="block text-body-sm text-on-surface-variant hover:underline" href="#">Blog</a>
              <a className="block text-body-sm text-on-surface-variant hover:underline" href="#">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="font-label-md text-on-surface font-bold mb-4">Legal</h4>
            <div className="space-y-3">
              <a className="block text-body-sm text-on-surface-variant hover:underline" href="#">Privacy Policy</a>
              <a className="block text-body-sm text-on-surface-variant hover:underline" href="#">Terms of Service</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-container-padding mt-16 pt-8 border-t border-outline-variant/30 flex justify-between items-center text-on-surface-variant text-xs">
          <p>© 2026 Rankpilot. All rights reserved.</p>
          <div className="flex gap-4 items-center">
            <Icon name="language" size={18} />
            <span>English (US)</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
