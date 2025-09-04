import { Box, Container, SimpleGrid } from "@mantine/core";

import { useTranslations, useLocale } from "next-intl";

import { redirect } from "@/i18n/navigation";
import { PeopleCard } from "@/shared/ui";

import { people } from "./data";

export default function List({ showItemsLimit }: { showItemsLimit?: number }) {
  const t = useTranslations("people");
  const locale = useLocale();

  return (
    <Container
      size="xl"
      mt="40px"
      mb={{ base: 80 }}
    >
      <SimpleGrid
        cols={{ base: 2, sm: 3, md: 4 }}
        spacing="30px"
        verticalSpacing="35px"
        mb="40px"
      >
        {people.slice(0, showItemsLimit).map((person, index) => (
          <Box
            key={index}
            onClick={() => redirect({ href: `/people/${person.slug}`, locale })}
            style={{ cursor: "pointer" }}
          >
            <PeopleCard
              img={person.img}
              title={t(person.titleKey)}
              subtitle={t(person.subtitleKey)}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}
