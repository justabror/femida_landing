"use client";

import { Box, Flex, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { useTranslations } from "next-intl";

import { mediaQueries } from "@/shared/lib/constants";

import { BtnBasic } from "../btn-basic/ui";
import { BaseLink } from "../link";
import s from "./styles.module.scss";

export const TeamBanner = () => {
  const t = useTranslations("teamBanner");
  const isTablet = useMediaQuery(mediaQueries.tablet);

  return (
    <Box
      component="section"
      mt="7.5rem"
      pos="relative"
    >
      <Box className={s.overly} />
      <Box
        h={720}
        className={s.banner}
      >
        <Flex
          w={isTablet ? "45%" : "80%"}
          mx="2rem"
          direction="column"
          gap="1rem"
          pos="absolute"
          bottom={0}
          style={{ zIndex: 2 }}
          mb="3.438rem"
        >
          <Text
            fz="1.25rem"
            lh="1.625rem"
            fw={400}
            c="white"
          >
            {t("subtitle")}
          </Text>
          <Text
            fz={{ base: "32px", md: "4.375rem" }}
            lh={{ base: "3.5rem", md: "4.375rem" }}
            fw={400}
            c="white"
          >
            {t("title")}
          </Text>
          <Box>
            <BtnBasic
              component={BaseLink}
              href="/people"
              variant="filled"
              size="xl"
              style={{ color: "black" }}
              color="rgba(255, 255, 255, 1)"
              visibleFrom="md"
            >
              {t("button")}
            </BtnBasic>
            <BtnBasic
              component={BaseLink}
              href="/people"
              variant="filled"
              size="md"
              style={{ color: "black" }}
              color="rgba(255, 255, 255, 1)"
              hiddenFrom="md"
            >
              {t("button")}
            </BtnBasic>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
