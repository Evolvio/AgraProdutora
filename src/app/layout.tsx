import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agra Productora - Produção Audiovisual Profissional",
  description: "Criamos experiências audiovisuais excepcionais que conectam com o seu público e elevam a sua marca. Produção de eventos, mentoria e serviços criativos.",
  keywords: "produção audiovisual, eventos, mentoria, agra productora, vídeo, fotografia, marketing",
  authors: [{ name: "Agra Productora" }],
  creator: "Agra Productora",
  publisher: "Agra Productora",
  robots: "index, follow",
  icons: {
    icon: "/AGRA - A.png",
    shortcut: "/AGRA - A.png",
    apple: "/AGRA - A.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://agraproductora.com",
    title: "Agra Productora - Produção Audiovisual Profissional",
    description: "Criamos experiências audiovisuais excepcionais que conectam com o seu público e elevam a sua marca.",
    siteName: "Agra Productora",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agra Productora - Produção Audiovisual Profissional",
    description: "Criamos experiências audiovisuais excepcionais que conectam com o seu público e elevam a sua marca.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
