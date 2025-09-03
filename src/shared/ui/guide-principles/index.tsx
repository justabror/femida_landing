"use client";

import { Box, Container, Flex, SimpleGrid, Text } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

import { useTranslations } from "next-intl";

import s from "./styles.module.scss";

export const GuidePrinciples = () => {
  const t = useTranslations("guidePrinciples");

  const principleItems = [
    {
      title: t("items.honesty.title"),
      description: t("items.honesty.description"),
    },
    {
      title: t("items.expertise.title"),
      description: t("items.expertise.description"),
    },
    {
      title: t("items.trust.title"),
      description: t("items.trust.description"),
    },
    {
      title: t("items.objectivity.title"),
      description: t("items.objectivity.description"),
    },
  ];

  return (
    <Container
      size="xl"
      fluid
    >
      <Flex
        bg="#e8e8e8"
        direction={{ base: "column", sm: "row" }}
      >
        <Box
          flex={1}
          className={s.cardImage}
          visibleFrom="sm"
        />
        <Box
          className={s.cardImage}
          hiddenFrom="sm"
          h={300}
        />
        <Box
          flex={1}
          p={{ base: "20px 20px", sm: "3.62rem 4.5rem" }}
        >
          <Text
            fw={600}
            fz="3rem"
            lh="3.875rem"
            visibleFrom="md"
          >
            {t("headline")}
          </Text>
          <SimpleGrid
            cols={2}
            spacing="1.68rem"
            verticalSpacing="2.5rem"
            mt="3.25rem"
          >
            {principleItems.map((item, index) => (
              <PrincipleItem
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </Container>
  );
};

const PrincipleItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <Flex
    direction="column"
    gap="0.5rem"
  >
    <Text component="span">
      <IconCheck />
    </Text>
    <Text
      fw={500}
      fz="1rem"
      lh="1.5rem"
      component="h6"
    >
      {title}
    </Text>
    <Text
      c="rgb(95, 101, 103)"
      fz="0.875rem"
      lh="1.25rem"
      fw={400}
    >
      {description}
    </Text>
  </Flex>
);
