import { Anchor, Flex, Text } from "@mantine/core";

import s from "./style.module.scss";

type ServiceContactProps = {
  linkLabel: string;
  text: string;
};

export const ServiceContact = ({ linkLabel, text }: ServiceContactProps) => (
  <Flex
    direction={"row"}
    gap={"15px"}
    pb={"50px"}
    className={s.linkWrap}
    ta={"left"}
  >
    <Flex
      align-items={"center"}
      direction={"column"}
      flex={1}
      ta={"left"}
    >
      <Anchor
        unstyled
        fz={{ base: "20px", md: "24px" }}
        fw={500}
        lh={"1.4em"}
        lts={"-.5px"}
        className={`${s.link} ${s.serviceLink}`}
      >
        {linkLabel}
      </Anchor>
      <Text
        className={s.text}
        fz={"16px"}
        fw={400}
        fs={"normal"}
        lh={"1.4em"}
        lts={0}
      >
        {text}
      </Text>
    </Flex>
  </Flex>
);
