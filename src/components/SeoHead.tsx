"use client";
import Head from "next/head";
import { useEffect, useState } from "react";

export interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;           // absolute URL
  locale?: string;          // e.g. “en_IN”
  type?: "website" | "article";
}

const defaultImage = "/images/hero.jpg";

export default function SeoHead({
  title,
  description,
  canonical,
  image,
  locale = "en_US",
  type = "website",
}: SeoProps) {
  const [url, setUrl] = useState(canonical);

  useEffect(() => {
    if (!canonical && typeof window !== "undefined") {
      setUrl(window.location.href);
    }
  }, [canonical]);

  const finalUrl = canonical ?? url ?? "";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "WebSite",
    name: title,
    description,
    url: finalUrl,
  };

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {finalUrl && <link rel="canonical" href={finalUrl} />}
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={locale} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {finalUrl && <meta property="og:url" content={finalUrl} />}
      <meta property="og:image" content={image ?? defaultImage} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image ?? defaultImage} />
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Preconnect & preload */}
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="preload"
        as="style"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
      />
      {/* Robots fallback */}
      <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
    </Head>
  );
} 