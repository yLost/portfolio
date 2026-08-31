import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "../styles/portfolio.css";

const siteUrl = "https://ylost.github.io/portfolio";
const title = "Fernando Povinski | Desenvolvedor Full Stack";
const description =
  "Desenvolvedor full stack com mais de 7 anos de experiência em produtos web, aplicativos, APIs, integrações e infraestrutura em nuvem.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s | Fernando Povinski" },
  description,
  applicationName: "Portfólio Fernando Povinski",
  authors: [{ name: "Fernando Povinski", url: siteUrl }],
  creator: "Fernando Povinski",
  publisher: "Fernando Povinski",
  keywords: [
    "Fernando Povinski",
    "desenvolvedor full stack",
    "desenvolvedor React",
    "desenvolvedor Next.js",
    "desenvolvedor Node.js",
    "NestJS",
    "aplicações web",
    "desenvolvimento de software",
    "Brasil",
  ],
  alternates: {
    canonical: `${siteUrl}/br/`,
    languages: { "pt-BR": `${siteUrl}/br/`, en: `${siteUrl}/en/`, "x-default": `${siteUrl}/br/` },
  },
  category: "technology",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
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
  jobTitle: "Desenvolvedor Full Stack",
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
    <html lang="pt-BR">
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
