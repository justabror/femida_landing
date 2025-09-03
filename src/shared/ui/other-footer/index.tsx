"use client";

import { useGSAP } from "@gsap/react";
import { Container, Flex, Image, Text } from "@mantine/core";
import { IconCaretRightFilled, IconPhoneFilled } from "@tabler/icons-react";

import { useRef } from "react";

import { useTranslations } from "next-intl";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { BtnBasic } from "../btn-basic/ui";
import { BaseLink } from "../link";
import s from "./style.module.scss";

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const t = useTranslations("footer"); // подключаем переводы
  const textBoxRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        textBoxRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textBoxRef.current,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        },
      );
    },
    { scope: textBoxRef },
  );

  return (
    <Flex
      mt={"65px"}
      direction={"column"}
    >
      {/* Верхние две кнопки */}
      <Flex
        w={"100%"}
        align={"center"}
        justify={"center"}
        direction={{ base: "column", md: "row" }}
      >
        <Flex
          w={{ base: "100%", md: "50%" }}
          justify={"flex-end"}
          bg={"#374b47"}
          pos={"relative"}
        >
          <Image
            src="https://beratung.vamtam.com/wp-content/uploads/2023/06/fav-icon-150x150.png"
            alt="footer_icon"
            pos={"absolute"}
            w={"130px"}
            bottom={0}
            left={110}
            visibleFrom="md"
          />

          <BtnBasic
            variant="filled"
            color="#374b47"
            leftSection={<IconPhoneFilled />}
            className={s.topLeft}
            size="xl"
            w={{ base: "100%", md: "55%" }}
          >
            +998 (90) 480 04 20
          </BtnBasic>
        </Flex>

        <Flex
          w={{ base: "100%", md: "50%" }}
          justify={"flex-start"}
          bg={"#8fd299"}
        >
          <BtnBasic
            component={BaseLink}
            href="/contact"
            variant="filled"
            color="#8fd299"
            rightSection={<IconCaretRightFilled />}
            className={s.topRight}
            size="xl"
            w={{ base: "100%", md: "80%" }}
          >
            {t("cta")}
          </BtnBasic>
        </Flex>
      </Flex>

      {/* Нижняя часть */}
      <Flex
        direction={"column"}
        bg={"#445055"}
      >
        <Container
          size={"xl"}
          ref={textBoxRef}
        >
          <Flex
            direction={"row"}
            style={{ borderBottom: "1px solid #e4edf3" }}
            className={s.secTop}
          >
            <Flex
              direction={"column"}
              pt={45}
              pb={45}
              gap={10}
            >
              <Text
                className={s.titleText}
                ff={"Geologica"}
                fz={30}
                fw={500}
                fs={"normal"}
                lh={"1.3em"}
                lts={"-1px"}
              >
                {t("title")}
              </Text>
              <Text
                fz={14}
                lh={"1.4em"}
                className={s.about}
              >
                {t("description")}
              </Text>
            </Flex>
          </Flex>

          <Flex
            direction={"row"}
            align={"center"}
            gap={50}
            pt={45}
            pb={45}
            className={s.secBot}
            visibleFrom="md"
          >
            <BaseLink href="/">{t("nav.home")}</BaseLink>
            <BaseLink href="/service">{t("nav.services")}</BaseLink>
            <BaseLink href="/people">{t("nav.team")}</BaseLink>
            <BaseLink href="/about">{t("nav.about")}</BaseLink>
            <BaseLink href="/contact">{t("nav.contact")}</BaseLink>
          </Flex>
        </Container>
      </Flex>
    </Flex>
  );
};
