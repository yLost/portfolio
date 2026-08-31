"use client";

import { useEffect } from "react";

import Portfolio from "./Portfolio";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function getPreferredLocale(languages: readonly string[]) {
  const primaryLanguage = languages[0]?.toLowerCase();

  return primaryLanguage?.startsWith("pt") ? "br" : "en";
}

export default function LanguageRedirect() {
  useEffect(() => {
    const preferredLanguages = navigator.languages.length
      ? navigator.languages
      : [navigator.language];
    const locale = getPreferredLocale(preferredLanguages);

    window.location.replace(`${basePath}/${locale}/`);
  }, []);

  return <Portfolio initialLanguage="en" />;
}
