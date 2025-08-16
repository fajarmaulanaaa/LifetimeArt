import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../app/styles/globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LifetimeArt",
  description: "Frontend Test Hyge - Pajar Maulana",
  icons: {
    icon: ["/img/favicon.ico?v=4"],
    apple: ["/img/apple-touch-icon.png?v=4"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
