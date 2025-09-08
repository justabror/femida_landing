import React from 'react';

interface StructuredDataProps {
  locale: string;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ locale }) => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "Organization", "LocalBusiness"],
    "name": "Femida",
    "alternateName": "Femida Legal Services",
    "description": locale === 'en' 
      ? "Professional law firm in Tashkent providing legal services, advocacy, legal consultation, civil, criminal and family law assistance."
      : locale === 'ru'
      ? "Профессиональная юридическая компания в Ташкенте. Предоставляем услуги адвоката, правовые консультации, помощь по гражданскому, уголовному и семейному праву."
      : "Femida yuridik kompaniyasi - professional huquqiy xizmatlar, advokatlik, yuridik maslahat, fuqarolik, jinoyat va oilaviy huquq bo'yicha mutaxassis yordam.",
    "url": "https://femidafinance.uz/",
    "logo": "https://femidafinance.uz/android-chrome-192x192.png",
    "image": "https://femidafinance.uz/android-chrome-192x192.png",
    "telephone": "+998904800420",
    "email": "femida.fin.group@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "г. Ташкент, Мирзо – Улугбекский район, Асака МСГ, улица Мустакиллик шох, дом 88 – а, 3 этаж, 312-кабинет. Бизнес центр \"ДАРХАН\"",
      "addressLocality": "Tashkent",
      "addressCountry": "UZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.320171,
      "longitude": 69.301032
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$",
    "areaServed": {
      "@type": "Country",
      "name": "Uzbekistan"
    },
    "serviceArea": {
      "@type": "City",
      "name": "Tashkent"
    },
    "knowsAbout": [
      "Civil Law",
      "Criminal Law", 
      "Family Law",
      "Labor Law",
      "Commercial Law",
      "Legal Consultation",
      "Legal Advocacy"
    ],
    "offers": [
      {
        "@type": "Service",
        "name": locale === 'en' ? "Civil Law" : locale === 'ru' ? "Гражданское право" : "Fuqarolik huquqi",
        "description": locale === 'en' ? "Civil law legal services" : locale === 'ru' ? "Услуги по гражданскому праву" : "Fuqarolik huquqi bo'yicha xizmatlar"
      },
      {
        "@type": "Service", 
        "name": locale === 'en' ? "Criminal Law" : locale === 'ru' ? "Уголовное право" : "Jinoyat huquqi",
        "description": locale === 'en' ? "Criminal law defense services" : locale === 'ru' ? "Услуги защиты по уголовному праву" : "Jinoyat huquqi bo'yicha himoya xizmatlari"
      },
      {
        "@type": "Service",
        "name": locale === 'en' ? "Family Law" : locale === 'ru' ? "Семейное право" : "Oilaviy huquq", 
        "description": locale === 'en' ? "Family law legal services" : locale === 'ru' ? "Услуги по семейному праву" : "Oilaviy huquq bo'yicha xizmatlar"
      },
      {
        "@type": "Service",
        "name": locale === 'en' ? "Labor Law" : locale === 'ru' ? "Трудовое право" : "Mehnat huquqi",
        "description": locale === 'en' ? "Labor law legal services" : locale === 'ru' ? "Услуги по трудовому праву" : "Mehnat huquqi bo'yicha xizmatlar"
      },
      {
        "@type": "Service",
        "name": locale === 'en' ? "Legal Consultation" : locale === 'ru' ? "Юридическая консультация" : "Yuridik maslahat",
        "description": locale === 'en' ? "Professional legal consultation" : locale === 'ru' ? "Профессиональная юридическая консультация" : "Professional yuridik maslahat"
      }
    ],
    "sameAs": [
      "https://femidafinance.uz/"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  );
};
