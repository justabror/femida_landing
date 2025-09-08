import { Box, Flex, Image, Text } from "@mantine/core";

import { AwesomeVector } from "../awesome-vector";
import { BaseLink } from "../link";

type SplitSectionProps = {
  title: string;
  subtitle: string;
  description: string;
  linkTitle: string;
  imageSrc: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  showButton?: boolean;
};

export const SplitSection = ({
  title,
  subtitle,
  linkTitle,
  description,
  imageSrc,
  imagePosition = "right",
}: SplitSectionProps) => {
  const isImageLeft = imagePosition === "left";

  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      gap={150}
      justify="space-between"
    >
      {isImageLeft && (
        <Box>
          <Image
            src={imageSrc}
            w={{ base: "100%", lg: 625 }}
            h={{ base: "100%", lg: 600 }}
            alt="left image"
          />
        </Box>
      )}

      <Flex
        direction="column"
        justify={"space-between"}
        gap={20}
      >
        <Flex
          direction={"column"}
          gap={20}
        >
          <Flex
            gap={"4px"}
            align={"center"}
          >
            <AwesomeVector
              pos={"relative"}
              h={18}
              w={25}
            />
            <Text>{description}</Text>
          </Flex>

          <Text
            ff={"Geologica"}
            fz={{ base: 32, md: 48 }}
            fw={600}
            tt={"none"}
            fs={"normal"}
            lh={"1.3em"}
            lts={"-1px"}
          >
            {title}
          </Text>

          <Text
            ff={"Helvetica"}
            fz={16}
            fw={400}
            tt={"none"}
            fs={"normal"}
            lh={"1.4em"}
            lts={0}
            style={{ color: "#5F6567" }}
          >
            {subtitle}
          </Text>
        </Flex>

        <Flex
          align={"center"}
          gap={20}
        >
          {/* {showButton && (
            <BtnBasic
              size="md"
              variant="outline"
              className={s.outLine}
            >
              <IconPlayerPlayFilled />
            </BtnBasic>
          )} */}

          <BaseLink
            href="/contact"
            style={{ color: "#161616" }}
          >
            {linkTitle}
          </BaseLink>
        </Flex>
      </Flex>

      {!isImageLeft && (
        <Box>
          <Image
            src={imageSrc}
            alt=""
            w={{ base: "100%", lg: 625 }}
            h={{ base: "100%", lg: 600 }}
          />
        </Box>
      )}
    </Flex>
  );
};
