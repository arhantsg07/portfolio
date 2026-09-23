import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Arhant Gourkhede | Digital Garden",
  description: "A Zen-inspired portfolio focused on clarity, craft, and calm engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              const stored = localStorage.getItem('portfolio-theme');
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const isDark = stored ? stored === 'dark' : prefersDark;
              document.documentElement.classList.toggle('dark', isDark);
              document.documentElement.classList.toggle('light', !isDark);
              document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
            })();`,
          }}
        />
      </head>
      <body className={`${cormorant.variable} ${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
