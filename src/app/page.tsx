const STRIPE_CHECKOUT_URL = "https://buy.stripe.com/fZu14p1NufklcDm2Pj9EI00";

const AUDIT_COVERAGE = [
  {
    title: "Exposed Endpoints",
    description:
      "Every route, API, and surface that's reachable from the outside — mapped and flagged.",
    glyph: "→",
  },
  {
    title: "Auth Gaps",
    description:
      "Missing checks, broken access control, and routes that forgot to ask who's calling.",
    glyph: "⚿",
  },
  {
    title: "Technical Debt",
    description:
      "The risky shortcuts and rotting dependencies that quietly become tomorrow's breach.",
    glyph: "≈",
  },
  {
    title: "Port Conflicts",
    description:
      "Services fighting over ports, stray listeners, and misconfigured network exposure.",
    glyph: "⇄",
  },
];

function CtaButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={STRIPE_CHECKOUT_URL}
      className={`group inline-flex items-center justify-center gap-3 rounded-md border border-accent bg-accent px-8 py-4 text-base font-bold tracking-tight text-black shadow-[0_0_30px_-8px_rgba(34,197,94,0.7)] transition-all hover:bg-emerald-400 hover:shadow-[0_0_40px_-4px_rgba(34,197,94,0.9)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:text-lg ${className}`}
    >
      Get Your Audit — $99
      <span aria-hidden className="transition-transform group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="terminal-grid relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-24 sm:py-32">
        {/* Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]"
        />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-accent">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_2px_rgba(34,197,94,0.8)]" />
            Argos-AI · Security Audits
          </div>

          <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Your Codebase Has Vulnerabilities.
            <br className="hidden sm:block" />{" "}
            <span className="text-accent">
              Find Them in Minutes.
              <span className="cursor ml-1" aria-hidden />
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-foreground/70 sm:text-lg">
            Argos-AI runs an AI-powered security audit across your entire
            repository — reading your code the way an attacker would. No agents
            to install, no dashboards to configure. Point it at your codebase
            and get a prioritized report of what&apos;s exposed, in minutes.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <CtaButton />
            <p className="text-xs text-foreground/50">
              One flat price. One audit. No subscription.
            </p>
          </div>
        </div>
      </section>

      {/* What the audit covers */}
      <section className="border-t border-accent/10 bg-black/40 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-accent">
              ~/audit --scope=full
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              What every audit covers
            </h2>
          </div>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {AUDIT_COVERAGE.map((item) => (
              <li
                key={item.title}
                className="group rounded-lg border border-accent/15 bg-[#0a0f0c] p-6 transition-colors hover:border-accent/40"
              >
                <div className="flex items-start gap-4">
                  <span
                    aria-hidden
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-lg text-accent"
                  >
                    {item.glyph}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground/65">
                      {item.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-14 flex flex-col items-center gap-4 text-center">
            <CtaButton />
            <p className="text-xs text-foreground/50">
              Delivered as a clear, prioritized report you can act on today.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-accent/10 px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 text-sm font-bold tracking-tight text-white">
            <span className="text-accent">◆</span> Argos-AI
          </div>
          <p className="text-xs text-foreground/45">
            © {new Date().getFullYear()} Argos-AI · AI-powered security audits
            for developers.
          </p>
        </div>
      </footer>
    </main>
  );
}
