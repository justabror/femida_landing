import {
  Box,
  Container,
  Divider,
  Flex,
  Image,
  Paper,
  Space,
  Text,
} from "@mantine/core";

import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

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

const MainPage = async () => {
  return (
    <Flex
      direction="column"
      className={s.page}
    >
      <Navbar />
      <HeroHeader />
      <ShowServices />
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
          component="h5"
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

      <Flex visibleFrom="md">
        <Flex
          direction="column"
          gap="0.75rem"
          flex={1}
        >
          <Image
            src="https://beratung.vamtam.com/wp-content/uploads/2023/07/GettyImages-1138996754-1024x686.jpg"
            alt={t("imageAlt")}
          />
          <Text
            fz="0.875rem"
            fw={500}
            lh="1.313rem"
            c="rgb(95, 101, 103)"
          >
            {t("contactLabel")}
          </Text>
          <Divider my="md" />
          <Infos />
        </Flex>
        <Paper
          flex={1}
          bdrs={0}
          px="1rem"
        >
          <ContactForm />
        </Paper>
      </Flex>

      <Flex
        direction="column"
        hiddenFrom="md"
      >
        <Flex
          direction="column"
          gap="0.75rem"
          flex={1}
        >
          <Image
            src="https://beratung.vamtam.com/wp-content/uploads/2023/07/GettyImages-1138996754-1024x686.jpg"
            alt={t("imageAlt")}
          />
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
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A2f7196b6d609dc4d9044c3cfb01f8992dcb0329764da4509fc9a5fc7b2e4a3b6&amp;source=constructor"
          width="100%"
          height="399"
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
        href="https://yandex.uz/maps/10335/tashkent/?ll=69.265264%2C41.318524&mode=poi&poi%5Bpoint%5D=69.248374%2C41.316459&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D132543039073&z=15.4"
      >
        {/* {t("Address will be here")} */}
        Address: Tashkent City
      </Text>
    </>
  );
};

export default MainPage;
