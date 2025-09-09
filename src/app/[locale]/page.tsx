import {
  Box,
  Container,
  Divider,
  Flex,
  Space,
  Text,
} from "@mantine/core";

import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import { CompanyStatistics } from "@/entities/company-statistics";
import { ContactForm } from "@/features/contact-form";
import s from "@/pages/main/style.module.scss";
import {
  ClientReviews,
  Footer,
  GuidePrinciples,
  HeroHeader,
  Navbar,
  ShowServices,
  SplitterBanner,
  TeamBanner,
  TrustSection,
} from "@/shared/ui";

const MainPage = () => {
  return (
    <Flex
      direction="column"
      className={s.page}
    >
      <Navbar />
      <HeroHeader />
      <ShowServices />
      <CompanyStatistics />
      <SplitterBanner />
      <TrustSection />
      <GuidePrinciples />
      <ClientReviews />
      <TeamBanner />
      <ContactSection />
      <Footer />
    </Flex>
  );
};

const ContactSection = async () => {
  const t = await getTranslations("contactSection");

  return (
    <Container
      size="xl"
      component="section"
      id="contact"
      mb={80}
    >
      <Space h="8.125rem" />
      <Box>
        <Text
          component="h3"
          fw={400}
          lh="1.5rem"
          fz="1.25rem"
        >
          {t("subtitle")}
        </Text>
        <Text
          component="h2"
          fw={600}
          lh={{ base: "2.875rem", md: "3.875rem" }}
          fz={{ base: "32px", md: "48px" }}
        >
          {t("title")}
        </Text>
      </Box>
      <Space h="1rem" />

      <Flex direction="column">
        <Flex
          direction="column"
          gap="0.75rem"
          flex={1}
        >
          <Divider my="md" />
          <ContactForm />
        </Flex>
        <Flex
          flex={1}
          bdrs={0}
          px="1rem"
          direction="column"
          gap="0.75rem"
        >
          <Divider my="md" />
          <Text
            fz="0.875rem"
            fw={500}
            lh="1.313rem"
            c="rgb(95, 101, 103)"
          >
            {t("contactLabel")}
          </Text>
          <Infos />
        </Flex>
      </Flex>

      <Box mt="2rem">
        <iframe
          src="https://yandex.com/map-widget/v1/?um=constructor%3A1c7da8fdaae910abde1768b576613960106b5428df883e977ab5067f6716657b&amp;source=constructor"
          width="100%"
          height="399"
          title="Femida Legal Services Location Map - Tashkent Office"
        ></iframe>
      </Box>
    </Container>
  );
};

const Infos = () => {
  const t = useTranslations("contactSection");
  return (
    <>
      <Text
        fz="1rem"
        fw={400}
        lh="1.375rem"
        c="rgb(95, 101, 103)"
        component="a"
        href={`tel:+998904800420`}
      >
        {t("phone")}
      </Text>
      <Text
        fz="1rem"
        fw={400}
        lh="1.375rem"
        c="rgb(95, 101, 103)"
        component="a"
        href="mailto:femida.fin.group@gmail.com"
      >
        {t("email")}
      </Text>
      <Text
        fz="1rem"
        fw={400}
        lh="1.375rem"
        c="rgb(95, 101, 103)"
        component="a"
        href="https://yandex.uz/maps/org/225635753458/?ll=69.301032%2C41.320171&z=18.72"
      >
        {/* {t("Address will be here")} */}
        Address: г. Ташкент, Мирзо – Улугбекский район, Асака МСГ, улица
        Мустакиллик шох, дом 88 – а, 3 этаж, 312-кабинет. Бизнес центр "ДАРХАН"
      </Text>
    </>
  );
};

export default MainPage;
