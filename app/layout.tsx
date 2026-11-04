import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hermanos Bartos | Reformas e interiorismo",
  description:
    "Reformas integrales, cocinas, piscinas, interiores y suelos con una ejecución cuidada de principio a fin.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
