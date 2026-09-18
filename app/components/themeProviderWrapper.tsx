"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "../context/themeContext";

export default function ThemeProviderWrapper({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
