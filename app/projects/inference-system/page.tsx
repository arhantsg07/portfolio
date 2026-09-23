import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/app/components/navbar";
import ThemeProviderWrapper from "@/app/components/themeProviderWrapper";

const technologies = ["Go", "gRPC", "Python", "FastAPI", "ONNX Runtime", "YOLOv8", "Prometheus"];

export const metadata = {
  title: "Inference System | Arhant Gourkhede",
  description: "A Go and gRPC inference pipeline that connects a client, Python FastAPI service, ONNX Runtime, YOLOv8, and Prometheus metrics.",
};

export default function InferenceSystemPage() {
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
          <h1 className="mt-5 text-5xl leading-none md:text-7xl">Inference System</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed theme-text-secondary md:text-xl">
            A Go and gRPC inference pipeline that connects a client to a Python FastAPI service, ONNX Runtime, and a YOLOv8 model, with Prometheus metrics alongside the request path.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="https://github.com/arhantsg07/inference-system-go" target="_blank" rel="noopener noreferrer">
              View source <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </header>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          <div>
            <div className="surface-card overflow-hidden rounded-2xl border">
              <Image
                src="/images/inf_arch.png"
                alt="Inference System architecture showing a Go client, Go gRPC server, Python FastAPI server, Prometheus, ONNX Runtime, and YOLOv8"
                width={2880}
                height={2048}
                className="h-auto w-full"
                priority
              />
            </div>
            <p className="mt-3 text-xs theme-text-muted">
              REST requests enter through a Go client, cross the gRPC boundary, and reach the Python FastAPI service that runs YOLOv8 through ONNX Runtime while exposing Prometheus metrics.
            </p>
          </div>

          <aside className="surface-card rounded-2xl border p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] theme-text-muted">Project snapshot</p>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="theme-text-muted">Role</dt>
                <dd className="mt-1 theme-text-primary">Backend and ML systems development</dd>
              </div>
              <div>
                <dt className="theme-text-muted">Focus</dt>
                <dd className="mt-1 theme-text-primary">gRPC, model serving, observability</dd>
              </div>
              <div>
                <dt className="theme-text-muted">Outcome</dt>
                <dd className="mt-1 theme-text-primary">A traceable path from client request to model output</dd>
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
            <h2 className="mt-3 text-3xl md:text-4xl">A model pipeline needs a clear serving boundary.</h2>
            <p className="mt-4 leading-relaxed theme-text-secondary">
              The system separates request handling from model execution. A client sends a REST request to the Go layer, which communicates with the Python FastAPI service over gRPC before the request reaches the ONNX Runtime and YOLOv8 model.
            </p>
          </section>
          <section>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] theme-text-muted">The approach</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Keep transport, inference, and telemetry distinct.</h2>
            <p className="mt-4 leading-relaxed theme-text-secondary">
              Go provides the client and gRPC server boundary, while Python and FastAPI own the inference service. ONNX Runtime executes the exported model, and Prometheus observes the service without being mixed into the prediction path.
            </p>
          </section>
        </div>

        <section className="mt-16 border-y border-stone-300/70 py-10 dark:border-stone-700/70">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] theme-text-muted">What I focused on</p>
          <div className="mt-7 grid gap-8 md:grid-cols-3">
            <div><h2 className="text-2xl">Clear protocol boundaries</h2><p className="mt-2 text-sm leading-relaxed theme-text-secondary">REST and gRPC have distinct roles, making the request path easier to reason about.</p></div>
            <div><h2 className="text-2xl">Dedicated model runtime</h2><p className="mt-2 text-sm leading-relaxed theme-text-secondary">ONNX Runtime and YOLOv8 stay behind the Python inference service instead of leaking into the client layer.</p></div>
            <div><h2 className="text-2xl">Service observability</h2><p className="mt-2 text-sm leading-relaxed theme-text-secondary">Prometheus sits alongside the inference flow to expose useful service metrics.</p></div>
          </div>
        </section>
      </main>
    </ThemeProviderWrapper>
  );
}
