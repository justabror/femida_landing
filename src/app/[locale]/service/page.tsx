import { Box, Container, Flex, SimpleGrid, Text } from "@mantine/core";

import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";

import List from "@/entities/people";
import s from "@/pages/service/style.module.scss";
import { StatisticIcon } from "@/shared/assets/stat";
import {
  BaseLink,
  BtnBasic,
  Navbar,
  Footer,
  OtherHeader,
  OtherSplitter,
  ServiceContact,
} from "@/shared/ui";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations("service");

  const titles = {
    uz: `${t("header.title")} - Femida | Yuridik Xizmatlar`,
    ru: `${t("header.title")} - Femida | Юридические Услуги`,
    en: `${t("header.title")} - Femida | Legal Services`,
  };

  const descriptions = {
    uz: "Femida yuridik xizmatları: fuqarolik huquqi, jinoyat huquqi, oilaviy huquq, mehnat huquqi, iqtisodiy huquq. Professional advokatlar va huquqshunoslardan maslahat oling.",
    ru: "Юридические услуги Femida: гражданское право, уголовное право, семейное право, трудовое право, экономическое право. Получите консультацию от профессиональных адвокатов.",
    en: "Femida legal services: civil law, criminal law, family law, labor law, economic law. Get consultation from professional lawyers and legal advisors.",
  };

  const currentLocale = locale === "en" ? "en" : locale === "ru" ? "ru" : "uz";

  return {
    title: titles[currentLocale],
    description: descriptions[currentLocale],
    openGraph: {
      title: titles[currentLocale],
      description: descriptions[currentLocale],
      url: `https://femidafinance.uz/${locale}/service`,
      type: "website",
    },
    alternates: {
      canonical: `/${locale}/service`,
      languages: {
        "uz-UZ": "/uz/service",
        "en-US": "/en/service",
        "ru-RU": "/ru/service",
      },
    },
  };
}

const ServicePage = () => {
  const t = useTranslations("service");

  const services: { linkLabel: string; text: string }[] = t.raw("services"); // т.к. это массив в JSON

  return (
    <Flex
      direction="column"
      className={s.page}
    >
      <Navbar darkMode />

      <Box style={{ borderBottom: "1px solid #00000026" }}>
        <OtherHeader
          aboutTitle={t("header.aboutTitle")}
          title={t("header.title")}
          description={t("header.description")}
        />
      </Box>

      <Container
        size="xl"
        my="130px"
      >
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 3 }}
          spacing="20px"
          verticalSpacing="50px"
        >
          {services.map(
            (service: { linkLabel: string; text: string }, index: number) => (
              <ServiceContact
                key={index}
                linkLabel={service.linkLabel}
                text={service.text}
              />
            ),
          )}

          <Flex
            direction="column"
            p="25px"
            style={{ backgroundColor: "#e8e8e8" }}
            align-items="center"
            justify="center"
          >
            <Text
              fz={{ base: "16px", md: "20px" }}
              fw={400}
              fs="normal"
              lh="1.3em"
              lts="-.4px"
              mb="15px"
            >
              {t("contactBlock.text")}
            </Text>
            <BtnBasic
              component={BaseLink}
              href="/contact"
              maw="140px"
              size="xl"
              visibleFrom="md"
            >
              {t("contactBlock.btn")}
            </BtnBasic>
            <BtnBasic
              component={BaseLink}
              href="/contact"
              maw="140px"
              size="md"
              hiddenFrom="md"
            >
              {t("contactBlock.btn")}
            </BtnBasic>
          </Flex>
        </SimpleGrid>
      </Container>

      <OtherSplitter backgroundUrl="https://beratung.vamtam.com/wp-content/uploads/2023/07/pexels-vlada-karpovich-7433853.jpg" />

      <Box style={{ borderBottom: "1px solid #00000026" }}>
        <Container
          size="xl"
          pb="120px"
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            gap="130px"
            align="center"
            justify="center"
          >
            <Flex
              direction="column"
              gap="30px"
            >
              <Text
                fz={{ base: "26px", md: "30px" }}
                fw={500}
                fs="normal"
                lh="1.3em"
                lts="-1px"
                maw={600}
              >
                {t("footerBlock.text")}
              </Text>
            </Flex>
            <StatisticIcon />
          </Flex>
        </Container>
      </Box>

      <Container
        size="xl"
        mt="40px"
      >
        <List showItemsLimit={4} />
        <Flex
          align-content="center"
          justify="center"
        >
          <BtnBasic
            component={BaseLink}
            href="/people"
          >
            {t("peopleBtn")}
          </BtnBasic>
        </Flex>
      </Container>

      <Footer />
    </Flex>
  );
};

export default ServicePage;
