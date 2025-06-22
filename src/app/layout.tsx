import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WW Vacations - Luxury Travel Packages & Destinations",
  description: "Discover amazing travel packages to Bali, Dubai, Thailand, Sri Lanka, and more destinations. Book luxury tours, adventure trips, and cultural experiences with WW Vacations. Expert travel planning and 24/7 support.",
  keywords: [
    "travel packages",
    "vacation deals",
    "luxury tours",
    "Bali travel",
    "Dubai packages",
    "Thailand tours",
    "Sri Lanka vacation",
    "international travel",
    "adventure trips",
    "cultural tours",
    "honeymoon packages",
    "family vacation",
    "travel agency",
    "tour operator",
    "holiday packages",
    "destination travel",
    "luxury vacation",
    "travel planning",
    "vacation booking",
    "tourist packages"
  ].join(", "),
  authors: [{ name: "WW Vacations" }],
  creator: "WW Vacations",
  publisher: "WW Vacations",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://wwvacations.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "WW Vacations - Luxury Travel Packages & Destinations",
    description: "Discover amazing travel packages to Bali, Dubai, Thailand, Sri Lanka, and more destinations. Book luxury tours, adventure trips, and cultural experiences.",
    url: "https://wwvacations.com",
    siteName: "WW Vacations",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "WW Vacations - Luxury Travel Packages",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WW Vacations - Luxury Travel Packages & Destinations",
    description: "Discover amazing travel packages to Bali, Dubai, Thailand, Sri Lanka, and more destinations.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        {/* Google Font: Poppins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        /> */}
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,600,700&display=swap" rel="stylesheet" />
      </head>
      <body
        className="font-satoshi antialiased"
      >
        {children}
      </body>
    </html>
  );
}
