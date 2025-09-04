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

  const titles = {
    uz: "Femida - Professional Yuridik Xizmatlar | Huquqiy Maslahat va Advokatlik",
    ru: "Femida - Профессиональные Юридические Услуги | Правовые Консультации",
    en: "Femida - Professional Legal Services | Legal Consultation & Advocacy"
  };

  const descriptions = {
    uz: "Femida yuridik kompaniyasi - professional huquqiy xizmatlar, advokatlik, yuridik maslahat, fuqarolik, jinoyat va oilaviy huquq bo'yicha mutaxassis yordam. Toshkent shahrida ishonchli yuridik himoya.",
    ru: "Femida - профессиональная юридическая компания в Ташкенте. Предоставляем услуги адвоката, правовые консультации, помощь по гражданскому, уголовному и семейному праву. Надежная правовая защита.",
    en: "Femida - professional law firm in Tashkent providing legal services, advocacy, legal consultation, civil, criminal and family law assistance. Reliable legal protection and expert legal advice."
  };

  const currentLocale = locale === 'en' ? 'en' : locale === 'ru' ? 'ru' : 'uz';

  return {
    title: titles[currentLocale],
    description: descriptions[currentLocale],
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
    metadataBase: new URL("https://femidafinance.uz/"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "uz-UZ": "/uz",
        "en-US": "/en",
        "ru-RU": "/ru",
      },
    },
    openGraph: {
      title: titles[currentLocale],
      description: descriptions[currentLocale],
      url: "https://femidafinance.uz/",
      type: "website",
      images: [{
        url: "/android-chrome-192x192.png",
        width: 192,
        height: 192,
        alt: "Femida Legal Services Logo"
      }],
      siteName: "Femida Legal Services",
      locale: locale === "en" ? "en_US" : locale === "ru" ? "ru_RU" : "uz_UZ",
    },
    twitter: {
      card: "summary_large_image",
      title: titles[currentLocale],
      description: descriptions[currentLocale],
      images: ["/android-chrome-192x192.png"],
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
