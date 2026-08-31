import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Portfolio from "../../components/Portfolio";

const siteUrl = "https://ylost.github.io/portfolio";
const locales = ["br", "en"] as const;

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!locales.includes(lang as (typeof locales)[number])) return {};
  const english = lang === "en";
  const title = english
    ? "Fernando Povinski | Full Stack Developer"
    : "Fernando Povinski | Desenvolvedor Full Stack";
  const description = english
    ? "Full stack developer with over 7 years of experience building web products, mobile apps, APIs, integrations and cloud infrastructure."
    : "Desenvolvedor full stack com mais de 7 anos de experiência em produtos web, aplicativos, APIs, integrações e infraestrutura em nuvem.";
  const url = `${siteUrl}/${lang}/`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { "pt-BR": `${siteUrl}/br/`, en: `${siteUrl}/en/`, "x-default": `${siteUrl}/en/` },
    },
    openGraph: {
      title,
      description,
      url,
      locale: english ? "en_US" : "pt_BR",
      alternateLocale: english ? "pt_BR" : "en_US",
    },
    twitter: { title, description },
  };
}

export default async function LocalizedPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!locales.includes(lang as (typeof locales)[number])) notFound();
  return <Portfolio initialLanguage={lang === "en" ? "en" : "pt"} />;
}
