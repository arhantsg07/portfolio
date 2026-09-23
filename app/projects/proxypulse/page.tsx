import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/app/components/navbar";
import ThemeProviderWrapper from "@/app/components/themeProviderWrapper";

const technologies = ["TypeScript", "Next.js", "Go", "Fastify", "PostgreSQL", "Redis", "Docker"];
const contributorGithub = "Unibik21";

export const metadata = {
  title: "ProxyPulse | Arhant Gourkhede",
  description: "A case study of ProxyPulse, an API gateway control plane for services, routes, keys, and live analytics.",
};

export default function ProxyPulsePage() {
  return (
    <ThemeProviderWrapper>
      <Navbar />
      <main className="zen-shell pb-16 pt-32 md:pt-40">
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm theme-text-secondary transition-colors hover:text-[var(--foreground)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to selected works
          </Link>
        </div>

        <header className="max-w-4xl">
          <div className="flex flex-wrap gap-2">
            <Badge>Case study</Badge>
            <Badge className="border-emerald-700/40 text-emerald-800 dark:border-emerald-400/40 dark:text-emerald-200">
              Live demo
            </Badge>
          </div>
          <h1 className="mt-5 text-5xl leading-none md:text-7xl">ProxyPulse</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed theme-text-secondary md:text-xl">
            An API gateway control plane for configuring services, routes, API keys, rate limits, caching, and live traffic analytics from one dashboard.
          </p>
          <p className="mt-4 text-sm theme-text-secondary">
            Built together with{" "}
            <a
              href={`https://github.com/${contributorGithub}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--foreground)] underline decoration-emerald-600/60 underline-offset-4 transition-colors hover:text-emerald-700 dark:hover:text-emerald-300"
            >
              @{contributorGithub}
            </a>
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="https://proxy-pulse-dashboard-sigma.vercel.app/" target="_blank" rel="noopener noreferrer">
              Open live demo <ExternalLink className="h-4 w-4" />
            </Button>
            <Button href="https://github.com/arhantsg07/ProxyPulse" target="_blank" rel="noopener noreferrer" variant="outline">
              View source
            </Button>
          </div>
        </header>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          <div>
            <div className="surface-card overflow-hidden rounded-2xl border">
              <Image
                src="/images/fin.png"
                alt="ProxyPulse architecture showing the control plane, gateway, Redis, analytics engine, and infrastructure"
                width={824}
                height={768}
                className="h-auto w-full"
                priority
              />
            </div>
            <p className="mt-3 text-xs theme-text-muted">
              ProxyPulse system architecture: a dashboard controls gateway behavior while analytics flow back through a WebSocket.
            </p>
          </div>

          <aside className="surface-card rounded-2xl border p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] theme-text-muted">Project snapshot</p>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="theme-text-muted">Role</dt>
                <dd className="mt-1 theme-text-primary">Collaborative full-stack development</dd>
              </div>
              <div>
                <dt className="theme-text-muted">Status</dt>
                <dd className="mt-1 theme-text-primary">Live demo available</dd>
              </div>
              <div>
                <dt className="theme-text-muted">Focus</dt>
                <dd className="mt-1 theme-text-primary">Control plane, gateway, analytics</dd>
              </div>
            </dl>
            <div className="mt-6 flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <Badge key={technology}>{technology}</Badge>
              ))}
            </div>
          </aside>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <section>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] theme-text-muted">The problem</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Gateway configuration should not require a redeploy.</h2>
            <p className="mt-4 leading-relaxed theme-text-secondary">
              API gateways sit in front of important traffic, but their behavior is often buried in deployment configuration. ProxyPulse makes those controls visible: teams can register services, define routes, issue project-scoped API keys, and adjust rate limits or caching through a dashboard.
            </p>
          </section>

          <section>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] theme-text-muted">The approach</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Separate control from traffic.</h2>
            <p className="mt-4 leading-relaxed theme-text-secondary">
              The control plane stores organization, project, route, and access data. The gateway handles request-time concerns such as authentication, rate limiting, caching, and proxying. Redis supports fast operational state, while the analytics engine turns gateway events into live dashboard data.
            </p>
          </section>
        </div>

        <section className="mt-16 border-y border-stone-300/70 py-10 dark:border-stone-700/70">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] theme-text-muted">What I focused on</p>
          <div className="mt-7 grid gap-8 md:grid-cols-3">
            <div>
              <h2 className="text-2xl">Project-scoped access</h2>
              <p className="mt-2 text-sm leading-relaxed theme-text-secondary">
                Organizations and projects keep services, routes, keys, and members separated instead of treating the gateway as one global configuration.
              </p>
            </div>
            <div>
              <h2 className="text-2xl">Operational controls</h2>
              <p className="mt-2 text-sm leading-relaxed theme-text-secondary">
                Rate limits, response caching, health state, and service registration are exposed as changeable controls rather than hidden deployment details.
              </p>
            </div>
            <div>
              <h2 className="text-2xl">Live observability</h2>
              <p className="mt-2 text-sm leading-relaxed theme-text-secondary">
                Gateway events feed latency, endpoint, cache, and IP reputation analytics back to the dashboard over a WebSocket.
              </p>
            </div>
          </div>
        </section>
      </main>
    </ThemeProviderWrapper>
  );
}
