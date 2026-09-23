"use client";

import { useEffect, useState } from "react";

interface ContributionCell {
  date: string;
  count: number;
  level: number;
}

export default function ContributionGraph() {
  const [contrib, setContrib] = useState<{ total: number; cells: ContributionCell[] }>({
    total: 0,
    cells: [],
  });
  const [loading, setLoading] = useState(true);
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  useEffect(() => {
    fetch("/api/github-contributions")
      .then((response) => response.json())
      .then((data) => {
        setContrib(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch contributions:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="mt-8 rounded-2xl border border-subtle bg-surface-muted p-4">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-[0.18em] theme-text-muted">
        <span>Building in public</span>
        <span>{loading ? "loading..." : `${contrib.total} last year`}</span>
      </div>

      <div className="flex flex-col gap-2">
        <div className="max-w-full overflow-x-auto pb-1">
          <div className="flex w-max min-w-full gap-2">
          <div className="flex flex-col gap-[3px] pt-[1px]">
            {days.map((day, index) => (
              <div key={day} className={`h-3 text-[9px] leading-3 theme-text-muted ${index % 2 === 0 ? "opacity-0" : ""}`}>
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-rows-7 grid-flow-col gap-[3px]">
            {contrib.cells.length > 0 ? (
              contrib.cells.map((cell) => (
                <div
                  key={cell.date}
                  title={`${cell.date}: ${cell.count} contribution${cell.count !== 1 ? "s" : ""}`}
                  className={`contribution-level-${cell.level} h-3 w-3 rounded-[2px] cursor-help transition-opacity hover:opacity-80`}
                />
              ))
            ) : (
              <span className="text-xs theme-text-secondary">No data yet</span>
            )}
          </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] theme-text-secondary">
          <span>Recent cadence</span>
          <div className="flex items-center gap-1">
            <span>Less</span>
            {[0, 1, 2, 3, 4].map((level) => (
              <div key={level} className={`contribution-level-${level} h-3 w-3 rounded-[2px]`} />
            ))}
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
}
