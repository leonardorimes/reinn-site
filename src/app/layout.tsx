import type { Metadata } from "next";
import "./globals.css";
import CursorTrail from "@/components/CursorTrail/CursorTrail";

export const metadata: Metadata = {
  title: "Reinn — AI-Powered Growth Solutions",
  description:
    "REINN helps small and medium businesses capture every opportunity and convert them into scheduled appointments — using AI-driven processes and structured CRM management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <CursorTrail />
        {children}
      </body>
    </html>
  );
}
