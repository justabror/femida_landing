import { Flex, Text } from "@mantine/core";

import { useTranslations } from "next-intl";

type Highlight = {
  number: string;
};

const highlightsStatic: Highlight[] = [
  { number: "100+" },
  { number: "2+" },
  { number: "100%" },
];
export const CompanyStatistics = () => {
  const t = useTranslations("peoplePage");
  return (
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
            style={{ color: "#445055" }}
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
  );
};
