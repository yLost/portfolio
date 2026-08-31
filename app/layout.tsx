import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "../styles/portfolio.css";

const siteUrl = "https://ylost.github.io/portfolio";
const title = "Fernando Povinski | Full Stack Developer";
const description =
  "Full stack developer with over 7 years of experience building web products, mobile apps, APIs, integrations and cloud infrastructure.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s | Fernando Povinski" },
  description,
  applicationName: "Fernando Povinski Portfolio",
  authors: [{ name: "Fernando Povinski", url: siteUrl }],
  creator: "Fernando Povinski",
  publisher: "Fernando Povinski",
  keywords: [
    "Fernando Povinski",
    "full stack developer",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "NestJS",
    "web applications",
    "software development",
    "Brasil",
  ],
  alternates: {
    canonical: `${siteUrl}/en/`,
    languages: { "pt-BR": `${siteUrl}/br/`, en: `${siteUrl}/en/`, "x-default": `${siteUrl}/en/` },
  },
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "pt_BR",
    url: siteUrl,
    siteName: "Fernando Povinski",
    title,
    description,
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "Fernando Povinski — Full Stack Developer",
      },
    ],
  },
  twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}/og.png`] },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f3f0e9",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Fernando Povinski",
  url: siteUrl,
  image: `${siteUrl}/assets/myself.png`,
  jobTitle: "Full Stack Developer",
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "TypeScript",
    "PostgreSQL",
    "AWS",
    "GCP",
    "Docker",
    "React Native",
  ],
  sameAs: ["https://github.com/yLost", "https://www.linkedin.com/in/fernando-povinsky/"],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
