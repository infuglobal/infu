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
  title: "Infinity Funds - Invest, Grow, and Learn",
  description: "Infinity Funds is a revolutionary platform connecting investors and businesses for mutual growth. Explore investment opportunities and grow your financial future.",
  keywords: [
    "investment platform",
    "business funding",
    "financial growth",
    "investors",
    "businesses",
    "Infinity Funds",
    "crowdfunding"
  ],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Infinity Funds - Invest, Grow, and Learn",
    description: "Infinity Funds is a revolutionary platform connecting investors and businesses for mutual growth. Explore investment opportunities and grow your financial future.",
    url: "https://www.infinityfunds.com",
    siteName: "Infinity Funds",
    images: [
      {
        url: "/logo-image.jpg",
        width: 1200,
        height: 630,
        alt: "Infinity Funds - Invest, Grow, and Learn",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#6B46C1" />
        <link rel="icon" href="/logo.jpg" type="image/avif" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <title>Infinity Funds - Invest, Grow, and Learn</title>
        <meta name="description" content="Infinity Funds is a revolutionary platform connecting investors and businesses for mutual growth. Explore investment opportunities and grow your financial future." />
        <meta name="keywords" content="investment platform, business funding, financial growth, investors, businesses, Infinity Funds, crowdfunding" />
        <meta name="author" content="Infinity Funds Team" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
