"use client";

import { Box, Container, Flex, Image, Text } from "@mantine/core";

import { useTranslations } from "next-intl";

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

type Highlight = {
  number: string;
};

const highlightsStatic: Highlight[] = [
  { number: "100+" },
  { number: "2+" },
  { number: "100%" },
];

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
        <Flex
          pos="absolute"
          style={{ backgroundColor: "#fff" }}
          p="30px 75px"
          right={200}
          bottom={120}
          visibleFrom="md"
        >
          <Image
            src="https://beratung.vamtam.com/wp-content/uploads/2023/07/BPTW-logo-ENG.svg"
            w={250}
            alt="Best Place to Work"
          />
        </Flex>
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
            <Link href={"/about"} style={{width: "fit-content"}}>
              <BtnBasic
                size="xl"
                maw={250}
                visibleFrom="md"
              >
                {t("values.btn")}
              </BtnBasic>
            </Link>
            <Link href={"/about"}  style={{width: "fit-content"}}>
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
              className={s.aboutTitle}
              gap="4px"
              align="center"
            >
              <Image
                src="https://beratung.vamtam.com/wp-content/uploads/2023/06/fav-icon-150x150.png"
                h={18}
                alt="footer_icon"
              />
              <Text>{t("opportunities.label")}</Text>
            </Flex>
          </Flex>

          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="center"
            gap={60}
            pr={{ base: 0, md: 100 }}
            pl={{ base: 0, md: 100 }}
          >
            {highlightsStatic.map((item, index) => (
              <Flex
                key={index}
                direction="column"
                gap={10}
                maw={295}
              >
                <Text
                  ff="Geologica"
                  fz={{ base: 52, md: 70 }}
                  fw={700}
                  lh="1em"
                  lts="-2.8px"
                  style={{ color: "#8FD299" }}
                >
                  {item.number}
                </Text>
                <Text
                  ff="Geologica"
                  fz={16}
                  fw={500}
                  lh="1.5em"
                  lts="-.3px"
                >
                  {t(`opportunities.items.${index}.title`)}
                </Text>
                <Text
                  fz={14}
                  lh="1.4em"
                  style={{ color: "#5F6567" }}
                >
                  {t(`opportunities.items.${index}.description`)}
                </Text>
              </Flex>
            ))}
          </Flex>
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
