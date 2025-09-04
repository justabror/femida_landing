import { Box, Container, Flex, Text, Title } from "@mantine/core";

import { AwesomeVector } from "../awesome-vector";
import s from "./style.module.scss";

type OtherHeaderProps = {
  aboutTitle: string;
  title: string;
  description: string;
};

export const OtherHeader = ({
  aboutTitle,
  title,
  description,
}: OtherHeaderProps) => (
  <Flex
    mt={"81px"}
    direction={"column"}
    style={{ overflow: "hidden" }}
  >
    <Box
      className={s.bgOverlay}
      pos={"relative"}
      pt={"150px"}
    >
      <Container
        size={"xl"}
        p={{ base: "0", md: "0 16px" }}
      >
        <Flex
          direction={"column"}
          w={{ base: "100%", md: "75%" }}
          className={s.headerUpper}
          pt={"36px"}
          align={"flex-start"}
        >
          <Flex
            className={s.aboutTitle}
            mb={0}
            gap={"4px"}
            p={"12px 35px 12px 30px"}
          >
            <AwesomeVector
              pos="relative"
              h="18px"
              w="25px"
              bg="#cecece"
            />
            <Text className={s.title}>{aboutTitle}</Text>
          </Flex>

          <Box
            p={"16px 30px 25px 30px"}
            w={"100%"}
            className={s.mtWrap}
          >
            <Title
              order={2}
              className={s.mainTitle}
              ff={"Geologica"}
              fz={{ base: "32px", md: "48px" }}
              tt={"none"}
              fs={"normal"}
              lh={"1.3em"}
              lts={"-1px"}
            >
              {title}
            </Title>
          </Box>
        </Flex>
      </Container>

      <AwesomeVector
        bg="rgba(206, 206, 206, 0.53)"
        bottom={"-100px"}
        right={"-190px"}
        w="340px"
        h="250px"
        visibleFrom="md"
      />
      <AwesomeVector
        bg="rgba(206, 206, 206, 0.53)"
        bottom={"-200px"}
        right={"-200px"}
        w="340px"
        h="250px"
        visibleFrom="md"
      />
      <AwesomeVector
        bg="rgba(206, 206, 206, 0.53)"
        bottom={"-300px"}
        right={"-210px"}
        w="340px"
        h="250px"
        visibleFrom="md"
      />
    </Box>

    <Box p={"110px 0px 108px 0px"}>
      <Container size={"md"}>
        <Box className={s.textBox}>
          <Text
            className={s.text}
            fz={{ base: "20px", md: "24px" }}
            fw={500}
            lts={"-.5px"}
            lh={"1.4em"}
          >
            {description}
          </Text>
        </Box>
      </Container>
    </Box>
  </Flex>
);
