import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sanjai-ummi-el-khair.vercel.app"),
  title: {
    default: "Sanjai Ummi El Khair",
    template: "%s | Sanjai Ummi El Khair",
  },
  applicationName: "Sanjai Ummi El Khair",
  description:
    "Sanjai Ummi El Khair — oleh-oleh khas Padang Panjang, Sumatera Barat.",
  openGraph: {
    title: "Sanjai Ummi El Khair",
    description:
      "Oleh-oleh khas Padang Panjang, Sumatera Barat. Aneka keripik dan cemilan untuk oleh-oleh.",
    type: "website",
    images: [
      {
        url: "/images/Kadai-Muko.jpg",
        alt: "Kadai Sanjai Ummi El Khair",
      },
    ],
  },
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
