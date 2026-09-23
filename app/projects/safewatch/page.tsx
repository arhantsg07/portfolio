import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/app/components/navbar";
import ThemeProviderWrapper from "@/app/components/themeProviderWrapper";

const technologies = ["Next.js", "Python", "Supabase", "FastAPI"];

export const metadata = {
  title: "SafeWatch | Arhant Gourkhede",
  description: "A case study of SafeWatch, a real-time crime reporting and review platform.",
};

export default function SafeWatchPage() {
  return (
    <ThemeProviderWrapper>
      <Navbar />
      <main className="zen-shell pb-16 pt-32 md:pt-40">
        <div className="mb-8">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm theme-text-secondary transition-colors hover:text-[var(--foreground)]">
            <ArrowLeft className="h-4 w-4" />
            Back to selected works
          </Link>
        </div>

        <header className="max-w-4xl">
          <Badge>Case study</Badge>
          <h1 className="mt-5 text-5xl leading-none md:text-7xl">SafeWatch</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed theme-text-secondary md:text-xl">
            A real-time crime reporting platform that brings emergency reports, image evidence, and administrative review into one workflow.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="https://github.com/arhantsg07/Safewatch" target="_blank" rel="noopener noreferrer">
              View source <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </header>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          <div>
            <div className="surface-card overflow-hidden rounded-2xl border">
              <Image
                src="/images/safewatch2.jpg"
                alt="SafeWatch project interface"
                width={1200}
                height={760}
                className="h-auto w-full"
                priority
              />
            </div>
            <p className="mt-3 text-xs theme-text-muted">
              SafeWatch brings public reporting and internal case review into a shared product workflow.
            </p>
          </div>

          <aside className="surface-card rounded-2xl border p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] theme-text-muted">Project snapshot</p>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="theme-text-muted">Role</dt>
                <dd className="mt-1 theme-text-primary">Full-stack development</dd>
              </div>
              <div>
                <dt className="theme-text-muted">Focus</dt>
                <dd className="mt-1 theme-text-primary">Reporting, evidence, dashboards</dd>
              </div>
              <div>
                <dt className="theme-text-muted">Outcome</dt>
                <dd className="mt-1 theme-text-primary">A clearer path from report to review</dd>
              </div>
            </dl>
            <div className="mt-6 flex flex-wrap gap-2">
              {technologies.map((technology) => <Badge key={technology}>{technology}</Badge>)}
            </div>
          </aside>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <section>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] theme-text-muted">The problem</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Urgent reports need more than a submission form.</h2>
            <p className="mt-4 leading-relaxed theme-text-secondary">
              SafeWatch is designed around the gap between receiving a report and acting on it. The platform combines emergency reporting, image evidence analysis, and separate user and administrator experiences so incoming information can be reviewed in context.
            </p>
          </section>
          <section>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] theme-text-muted">The approach</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Connect evidence to decisions.</h2>
            <p className="mt-4 leading-relaxed theme-text-secondary">
              The Next.js interface handles the reporting and dashboard experience, while Python and FastAPI support the backend and analysis workflow. Supabase provides the application data layer for keeping reports and supporting information organized.
            </p>
          </section>
        </div>

        <section className="mt-16 border-y border-stone-300/70 py-10 dark:border-stone-700/70">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] theme-text-muted">What I focused on</p>
          <div className="mt-7 grid gap-8 md:grid-cols-3">
            <div><h2 className="text-2xl">Real-time reporting</h2><p className="mt-2 text-sm leading-relaxed theme-text-secondary">A direct path for submitting urgent information and keeping the workflow centered on current reports.</p></div>
            <div><h2 className="text-2xl">Evidence analysis</h2><p className="mt-2 text-sm leading-relaxed theme-text-secondary">Image evidence is treated as part of the report context rather than an isolated upload.</p></div>
            <div><h2 className="text-2xl">Role-based views</h2><p className="mt-2 text-sm leading-relaxed theme-text-secondary">User and administrator dashboards support different responsibilities without collapsing them into one interface.</p></div>
          </div>
        </section>
      </main>
    </ThemeProviderWrapper>
  );
}
