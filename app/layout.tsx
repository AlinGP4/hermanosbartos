import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  applicationName: "Hermanos Bartos",
  title: "Construcción y reforma de piscinas | Hermanos Bartos",
  description:
    "Especialistas en construcción, diseño y reforma de piscinas en Valencia, Alicante y Castellón. También realizamos reformas de interior.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Hermanos Bartos",
    title: "Piscinas en la Comunidad Valenciana | Hermanos Bartos",
    description:
      "Construcción y rehabilitación de piscinas en Valencia, Alicante y Castellón.",
  },
  twitter: {
    card: "summary",
    title: "Piscinas en la Comunidad Valenciana | Hermanos Bartos",
    description:
      "Construcción y rehabilitación de piscinas en Valencia, Alicante y Castellón.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
