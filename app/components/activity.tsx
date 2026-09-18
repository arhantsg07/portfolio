import ContributionGraph from "./ContributionGraph";

export default function Activity() {
  return (
    <section className="zen-shell py-8 md:py-10">
      <div className="border-y border-stone-300/70 py-8 dark:border-stone-700/70 md:py-10">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] theme-text-muted">
              Ongoing practice
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl">Building in public</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed theme-text-secondary md:text-right">
            A small record of the consistency behind the work, pulled from GitHub.
          </p>
        </div>
        <ContributionGraph />
      </div>
    </section>
  );
}
