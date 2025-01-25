import type { Metadata } from "next";
import { Geist, Geist_Mono, Forum } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const forum = Forum({
  variable: "--font-forum",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pinciara Martinelli",
  description:
    " A consultoria financeira especializada em atender empresas de pequeno e médio porte. Nossa equipe experiente está aqui para oferecer os melhores serviços financeiros para o seu negócio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${forum.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <SiteHeader />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
