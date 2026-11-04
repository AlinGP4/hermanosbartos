import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  applicationName: "Hermanos Bartos",
  title: "Reformas integrales en Castellón | Hermanos Bartos",
  description:
    "Reformas integrales en Castellón y provincia: cocinas, baños, piscinas, parquet y exteriores. Estudiamos tu vivienda y preparamos un presupuesto claro.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Hermanos Bartos",
    title: "Reformas integrales en Castellón | Hermanos Bartos",
    description:
      "Reformas de viviendas, cocinas, baños, piscinas y exteriores en Castellón y provincia.",
  },
  twitter: {
    card: "summary",
    title: "Reformas integrales en Castellón | Hermanos Bartos",
    description:
      "Reformas de viviendas, cocinas, baños, piscinas y exteriores en Castellón y provincia.",
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
