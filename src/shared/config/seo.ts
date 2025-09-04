import { Metadata, Viewport } from "next";
import { getLocale } from "next-intl/server";
import { Geologica } from "next/font/google";

export const SystemFont = Geologica({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  fallback: ["system-ui", "sans-serif"],
  subsets: ["latin"],
});

export async function metadataBase(): Promise<Metadata> {
  const locale = await getLocale();

  return {
    title: "Femida",
    description: "Femida - Юридик хизматлар",
    keywords: [
      "Femida",
      "Фемида",
      "Yuridik xizmatlar",
      "Юридические услуги",
      "Legal services",
      "Advokat",
      "Адвокат",
      "Lawyer",
      "Huquqshunos",
      "Правовед",
      "Legal advisor",
      "Yuridik maslahat",
      "Юридическая консультация",
      "Legal consultation",
      "Shaxsiy ma'muriy huquq",
      "Гражданское право",
      "Civil law",
      "Jinoyat huquqi",
      "Уголовное право",
      "Criminal law",
      "Oilaviy huquq",
      "Семейное право",
      "Family law",
      "Mehnat huquqi",
      "Трудовое право",
      "Labor law",
      "Fuqarolik huquqi",
      "Гражданское право",
      "Commercial law",
      "Iqtisodiy huquq",
      " Экономическое право",
    ],
    metadataBase: new URL("https://femida.uz/"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "uz-UZ": "/uz",
        "en-US": "/en",
        "ru-RU": "/ru",
      },
    },
    openGraph: {
      title: "Femida",
      description: "Femida - Юридик хизматлар",
      url: "https://femida.uz/",
      type: "website",
      images: "/android-chrome-192x192.png",
      siteName: "femida",
      locale: locale === "en" ? "en_US" : locale === "ru" ? "ru_RU" : "uz_UZ",
    },
    icons: {
      icon: "/favicon-16x16.png",
      shortcut: "/favicon-32x32.png",
      apple: "/apple-touch-icon.png",
      other: {
        rel: "icon",
        url: "/android-chrome-192x192.png",
      },
    },
    manifest: "/manifest.json",
    verification: {
      google: "3BwJoP3BiGVMrtczgRmLBkXe7q8_uHdwi1VYGhOMx24",
      yandex: "bf75b24851bc7476",
    },
    category: "business",
    pinterest: {
      richPin: true,
    },
  };
}

export const viewportBase: Viewport = {
  themeColor: "#100e2a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
};
