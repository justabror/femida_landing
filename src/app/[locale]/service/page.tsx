"use client";

import { Box, Container, Flex, Image, SimpleGrid, Text } from "@mantine/core";

import { useTranslations } from "next-intl";

import List from "@/entities/people";
import s from "@/pages/service/style.module.scss";
import {
  BaseLink,
  BtnBasic,
  Navbar,
  Footer,
  OtherHeader,
  OtherSplitter,
  ServiceContact,
} from "@/shared/ui";

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
            <Image
              w="160px"
              h="195px"
              src="https://beratung.vamtam.com/wp-content/uploads/2023/06/illustration-3.svg"
              alt="иллюстрация услуги"
            />
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
