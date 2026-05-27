import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HelioGrid Power | Smart Solar, Battery & Energy Infrastructure",
  description:
    "Premium solar panel installation, battery backup, and energy infrastructure solutions for homes, businesses, resorts, farms, and commercial properties."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
