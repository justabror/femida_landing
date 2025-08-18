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
    <Flex direction="column" className={s.page}>
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
    <Container size="xl" component="section" id="contact" mb={80}>
      <Space h="8.125rem" />
      <Box>
        <Text component="h5" fw={400} lh="1.5rem" fz="1.25rem">
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
        <Flex direction="column" gap="0.75rem" flex={1}>
          <Image
            src="https://beratung.vamtam.com/wp-content/uploads/2023/07/GettyImages-1138996754-1024x686.jpg"
            alt={t("imageAlt")}
          />
          <Text fz="0.875rem" fw={500} lh="1.313rem" c="rgb(95, 101, 103)">
            {t("contactLabel")}
          </Text>
          <Divider my="md" />
          <Text fz="1rem" fw={400} lh="1.375rem" c="rgb(95, 101, 103)">
            {t("phone")}
          </Text>
          <Text fz="1rem" fw={400} lh="1.375rem" c="rgb(95, 101, 103)">
            {t("email")}
          </Text>
        </Flex>
        <Paper flex={1} bdrs={0} px="1rem">
          <ContactForm />
        </Paper>
      </Flex>

      <Flex direction="column" hiddenFrom="md">
        <Flex direction="column" gap="0.75rem" flex={1}>
          <Image
            src="https://beratung.vamtam.com/wp-content/uploads/2023/07/GettyImages-1138996754-1024x686.jpg"
            alt={t("imageAlt")}
          />
          <Divider my="md" />
          <ContactForm />
        </Flex>
        <Flex flex={1} bdrs={0} px="1rem" direction="column" gap="0.75rem">
          <Divider my="md" />
          <Text fz="0.875rem" fw={500} lh="1.313rem" c="rgb(95, 101, 103)">
            {t("contactLabel")}
          </Text>
          <Text fz="1rem" fw={400} lh="1.375rem" c="rgb(95, 101, 103)">
            {t("phone")}
          </Text>
          <Text fz="1rem" fw={400} lh="1.375rem" c="rgb(95, 101, 103)">
            {t("email")}
          </Text>
        </Flex>
      </Flex>

      <Box mt="2rem">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A3a20f7a9ad3e2d07e0d01042d9d85bdb8d22a4b5a27d6287f6f5e7f8f04a37b8&amp;source=constructor"
          width="100%"
          height="400"
        ></iframe>
      </Box>

    </Container>
  );
};

export default MainPage;
