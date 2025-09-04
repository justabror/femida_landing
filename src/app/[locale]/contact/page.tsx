import { Box, Container, Divider, Flex, Text } from "@mantine/core";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { ContactForm } from "@/features/contact-form";
import s from "@/pages/contact/style.module.scss";
import { Navbar, Footer, OtherHeader } from "@/shared/ui";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations('contact');
  
  const titles = {
    uz: `${t('title')} - Femida | Biz bilan Bog'lanish`,
    ru: `${t('title')} - Femida | Контакты`,
    en: `${t('title')} - Femida | Contact Us`
  };

  const descriptions = {
    uz: "Femida bilan bog'laning - professional yuridik maslahat olish uchun. Bizning manzilimiz, telefon raqamimiz va elektron pochtamiz. Toshkent shahrida yuridik xizmatlar.",
    ru: "Свяжитесь с Femida - для получения профессиональной юридической консультации. Наш адрес, телефон и электронная почта. Юридические услуги в Ташкенте.",
    en: "Contact Femida for professional legal consultation. Our address, phone number and email. Legal services in Tashkent."
  };

  const currentLocale = locale === 'en' ? 'en' : locale === 'ru' ? 'ru' : 'uz';

  return {
    title: titles[currentLocale],
    description: descriptions[currentLocale],
    openGraph: {
      title: titles[currentLocale],
      description: descriptions[currentLocale],
      url: `https://femidafinance.uz/${locale}/contact`,
      type: "website",
    },
    alternates: {
      canonical: `/${locale}/contact`,
      languages: {
        "uz-UZ": "/uz/contact",
        "en-US": "/en/contact",
        "ru-RU": "/ru/contact",
      },
    },
  };
}

const ContactPage = () => {
  const t = useTranslations("contact");

  return (
    <Flex direction="column" className={s.page}>
      <Navbar darkMode />

      <Box>
        <OtherHeader
          aboutTitle={t("aboutTitle")}
          title={t("title")}
          description={t("description")}
        />
      </Box>

      <Container size="xl" mb="40px" maw={1280} w="100%">
        <Divider size="1px" color="#00000026" />
        <Text
          size="xl"
          fw={600}
          fz={{ base: 32, md: 48 }}
          h="100%"
          my="60px"
          w="100%"
        >
          {t("formTitle")}
        </Text>
        <ContactForm />
      </Container>

      <Footer />
    </Flex>
  );
};

export default ContactPage;
