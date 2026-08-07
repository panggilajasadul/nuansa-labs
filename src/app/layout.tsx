import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});
export const metadata: Metadata = {
  title: "Nuansa Labs | Smart Digital Solutions & App Developer",
  description: "Official website of Nuansa Labs - Innovating custom software, web platforms, and mobile apps including NuansaPOS.",
  icons: {
    icon: "/logo.png",
  },
  verification: {
    google: "r2BAVQ6EQgq7i0LgkserTeWO5njsss1PQpxbmUKxq0g",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${outfit.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground flex flex-col antialiased">
        <Providers>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
