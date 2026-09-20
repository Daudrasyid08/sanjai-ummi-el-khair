import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sanjai Ummi El Khair",
    template: "%s | Sanjai Ummi El Khair",
  },
  applicationName: "Sanjai Ummi El Khair",
  description: "Sanjai Ummi El Khair — oleh-oleh khas Padang Panjang, Sumatera Barat.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full">
      <body>{children}</body>
    </html>
  );
}
