import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Added `metadataBase` to fix Open Graph and Twitter images
export const metadata: Metadata = {
  metadataBase: new URL("https://www.infinityfundglobal.com"), // ✅ Fix: Ensures correct URL resolution
  title: "Infinity Fund - Invest, Grow, and Learn",
  description:
    "Infinity Funds is a revolutionary platform connecting investors and businesses for mutual growth. Explore investment opportunities and grow your financial future.",
  keywords: [
    "investment platform",
    "business funding",
    "financial growth",
    "investors",
    "businesses",
    "Infinity Fund",
    "crowdfunding",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Infinity Fund - Invest, Grow, and Learn",
    description:
      "Infinity Fund is a revolutionary platform connecting investors and businesses for mutual growth. Explore investment opportunities and grow your financial future.",
    url: "https://www.infinityfundglobal.com",
    siteName: "Infinity Fund",
    images: [
      {
        url: "/infu-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Infinity Fund - Invest, Grow, and Learn",
      },
    ],
    type: "website",
  },
};

// ✅ Moved `viewport` settings to a separate export
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
        <meta name="theme-color" content="#6B46C1" />
        <link rel="icon" href="/infu-logo.png" type="image/png" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <title>Infinity Fund - Invest, Grow, and Learn</title>
        <meta
          name="description"
          content="Infinity Fund is a revolutionary platform connecting investors and businesses for mutual growth. Explore investment opportunities and grow your financial future."
        />
        <meta
          name="keywords"
          content="investment platform, business funding, financial growth, investors, businesses, Infinity Fund, crowdfunding"
        />
        <meta name="author" content="Infinity Funds Team" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClerkProvider>
          {children}
          <Toaster position="top-center" />
        </ClerkProvider>
      </body>
    </html>
  );
}
