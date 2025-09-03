"use client";

import { Box, Container, Flex, Text } from "@mantine/core";

import { useTranslations } from "next-intl";

import s from "./style.module.scss";

export const SplitterBanner = () => {
  const t = useTranslations("splitterBanner");

  return (
    <Box className={s.sec_tr}>
      <Container
        size="xl"
        h="100%"
        className={s.vector}
      >
        <Flex
          direction="column"
          className={s.flexs}
          h="100%"
        >
          <Text
            fz={{ base: "36px", sm: "48px", md: "64px" }}
            fw={600}
            c="white"
          >
            {t("wealthCreation")}
          </Text>
          <Text
            fz={{ base: "36px", sm: "48px", md: "64px" }}
            fw={600}
            c="white"
          >
            {t("futureCreation")}
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};
