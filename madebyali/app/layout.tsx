import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MadeByAli — Portfolio Digital",
  description:
    "Portfolio personal de Ali Medina. Diseño y desarrollo de experiencias digitales modernas.",
  keywords: ["portfolio", "diseño", "desarrollo web", "Next.js", "MadeByAli"],
  authors: [{ name: "Ali Medina" }],
  openGraph: {
    title: "MadeByAli — Portfolio Digital",
    description: "Diseño y desarrollo de experiencias digitales modernas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
