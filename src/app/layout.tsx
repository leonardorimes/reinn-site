import type { Metadata } from "next";
import "./globals.css";
import CursorTrail from "@/components/CursorTrail/CursorTrail";

export const metadata: Metadata = {
  title: "Reinn — AI-Powered Growth Solutions",
  description:
    "REINN helps small and medium businesses capture every opportunity and convert them into scheduled appointments — using AI-driven processes and structured CRM management.",
  icons: {
    icon: [
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon_io/apple-touch-icon.png",
  },
  manifest: "/favicon_io/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <CursorTrail />
        {children}
      </body>
    </html>
  );
}
