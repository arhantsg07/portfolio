import * as React from "react";
import { cn } from "@/lib/utils";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement>;

function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-stone-300/80 bg-stone-100/75 px-3 py-1 text-xs font-semibold tracking-wide text-stone-700 dark:border-stone-700/70 dark:bg-stone-800/80 dark:text-stone-200",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
