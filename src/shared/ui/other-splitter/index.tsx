"use client";

import { Box, Container, Flex, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import s from "./style.module.scss";

type OtherSplitterProps = {
  title1?: string;
  title2?: string;
  backgroundUrl?: string;
  backgroundUrlMobile?: string;
};

export const OtherSplitter = ({
  title1,
  title2,
  backgroundUrl,
  backgroundUrlMobile,
}: OtherSplitterProps) => {
  const isMobile = useMediaQuery("(max-width: 500px)");

  const bg =
    isMobile && backgroundUrlMobile ? backgroundUrlMobile : backgroundUrl;

  return (
    <Box
      className={s.sec_tr}
      style={bg ? { backgroundImage: `url(${bg})` } : {}}
      mb="120px"
    >
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
            size="64px"
            fw={600}
            c="white"
          >
            {title1}
          </Text>
          <Text
            size="64px"
            fw={600}
            c="white"
          >
            {title2}
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};
