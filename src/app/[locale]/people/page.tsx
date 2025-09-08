"use client";

import { Box, Container, Flex, Image, Text } from "@mantine/core";

import { useTranslations } from "next-intl";

import { CompanyStatistics } from "@/entities/company-statistics";
import List from "@/entities/people";
import { Link } from "@/i18n/navigation";
import s from "@/pages/people/style.module.scss";
import {
  BtnBasic,
  Footer,
  Navbar,
  OtherHeader,
  OtherSplitter,
} from "@/shared/ui";
import { AwesomeVector } from "@/shared/ui/awesome-vector";

const PeoplePage = () => {
  const t = useTranslations("peoplePage");

  return (
    <Flex
      direction="column"
      className={s.page}
    >
      <Navbar darkMode />

      <Box>
        <OtherHeader
          aboutTitle={t("header.aboutTitle")}
          title={t("header.title")}
          description={t("header.description")}
        />
      </Box>

      <Box pos="relative">
        <OtherSplitter backgroundUrl="https://beratung.vamtam.com/wp-content/uploads/2023/07/pexels-kindel-media-7688339.jpg" />
      </Box>

      <Container size="xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          mb={115}
          gap={160}
        >
          <Flex
            direction="column"
            justify={"center"}
            gap={80}
          >
            <Text
              ff="Geologica"
              fz={{ base: "32px", md: "48px" }}
              fw={600}
              lh="1.3em"
              lts="-1px"
            >
              {t("values.title")}
            </Text>
            <Link
              href={"/about"}
              style={{ width: "fit-content" }}
            >
              <BtnBasic
                size="xl"
                maw={250}
                visibleFrom="md"
              >
                {t("values.btn")}
              </BtnBasic>
            </Link>
            <Link
              href={"/about"}
              style={{ width: "fit-content" }}
            >
              <BtnBasic
                size="md"
                maw={250}
                hiddenFrom="md"
              >
                {t("values.btn")}
              </BtnBasic>
            </Link>
          </Flex>

          <Flex direction="column">
            <Text
              maw={625}
              c="#5F6567"
              fz={{ base: 16, md: 20 }}
              lh="1.5em"
            >
              {t("values.description")}
            </Text>
          </Flex>
        </Flex>
      </Container>

      <Container
        size="xl"
        mb={95}
        maw="1280px"
        w="100%"
        pt={35}
        pb={35}
        style={{
          borderBottom: "1px solid #00000026",
          borderTop: "1px solid #00000026",
        }}
      >
        <Flex
          direction="column"
          gap={40}
        >
          <Flex
            w="100%"
            direction="row"
            justify="flex-start"
          >
            <Flex
              gap="4px"
              align="center"
            >
              <AwesomeVector
                pos={"relative"}
                h={18}
                w={25}
              />
              <Text>{t("opportunities.label")}</Text>
            </Flex>
          </Flex>

          <CompanyStatistics />
        </Flex>
      </Container>

      <Container
        size="xl"
        w="100%"
        maw={1280}
      >
        <Flex
          direction="row"
          justify="space-around"
        >
          <Flex
            direction="column"
            gap={10}
          >
            <Text
              ff="Geologica"
              fz={{ base: 32, md: 48 }}
              fw={600}
              lh="1.3em"
              lts="-1px"
            >
              {t("management.title")}
            </Text>
            <Text
              fz={14}
              lh="1.4em"
              style={{ color: "#5F6567" }}
              maw={536}
            >
              {t("management.description")}
            </Text>
          </Flex>
          <Image
            src="https://beratung.vamtam.com/wp-content/uploads/2023/06/illustration-2.svg"
            alt="service illustration"
            w={160}
            visibleFrom="md"
          />
        </Flex>
      </Container>

      <List />

      <Footer />
    </Flex>
  );
};

export default PeoplePage;
