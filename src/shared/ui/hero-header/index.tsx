"use client";

import { Box, Container, Flex, Text } from "@mantine/core";
import { Transition } from "@mantine/core";
import { useInterval } from "@mantine/hooks";

import { useEffect, useState } from "react";

import { useTranslations } from "next-intl";

import { BtnBasic } from "@/shared/ui";

import s from "./style.module.scss";

const imagesDesktop = [
  "/assets/hero/1.webp",
  "/assets/hero/2.webp",
  "/assets/hero/3.webp",
  "/assets/hero/4.webp",
  "/assets/hero/5.webp",
];

const imagesMobile = [
  "/assets/hero/mobile/1.webp",
  "/assets/hero/mobile/2.webp",
  "/assets/hero/mobile/3.webp",
  "/assets/hero/mobile/4.webp",
  "/assets/hero/mobile/5.webp",
];

function useIsMobile(breakpoint = 500) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);

    setIsMobile(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [breakpoint]);

  return isMobile;
}

interface Props {
  imagesDesktop: string[];
  imagesMobile: string[];
  isMobile: boolean;
}

export function BackgroundSlideshow({
  imagesDesktop,
  imagesMobile,
  isMobile,
}: Props) {
  const images = isMobile ? imagesMobile : imagesDesktop;
  const [bgIndex, setBgIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);

  const duration = 1000;
  const delay = 7000;

  const interval = useInterval(() => {
    setPrevIndex(bgIndex);
    setBgIndex((prev) => (prev + 1) % images.length);
  }, delay);

  useEffect(() => {
    interval.start();
    return interval.stop;
  }, [isMobile, images.length]);

  return (
    <div>
      {images.map((src, i) => {
        const isCurrent = i === bgIndex;
        const isPrev = i === prevIndex;

        return (
          <Transition
            key={i}
            mounted={isCurrent || isPrev}
            transition="fade"
            duration={duration}
            timingFunction="ease-in-out"
          >
            {(styles) => (
              <Box
                className={s.heroBg}
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.5)), url(${src})`,
                  position: "absolute",
                  inset: 0,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  ...styles,
                  zIndex: isCurrent ? 2 : 1,
                }}
              />
            )}
          </Transition>
        );
      })}
    </div>
  );
}
export const HeroHeader = () => {
  const t = useTranslations();
  const isMobile = useIsMobile();

  return (
    <Box
      className={s.heroWrapper}
      mih={{ base: "70vh", md: "100vh" }}
    >
      <BackgroundSlideshow
        imagesDesktop={imagesDesktop}
        imagesMobile={imagesMobile}
        isMobile={isMobile}
      />
      <Container
        size="xl"
        className={s.heroTextContainer}
        mt={{ base: "41px", md: "81px" }}
        mb={{ base: "0", md: 50 }}
      >
        <Flex
          direction={"column"}
          align={"flex-start"}
        >
          <Flex
            className={s.heroText}
            direction={"column"}
          >
            <Text
              fz={{ base: "26px", sm: "32px", md: "48px" }}
              fw={800}
              lh={"1.2em"}
              mb={10}
              opacity={"0.9"}
            >
              {t("main_title")}
            </Text>
            <Text
              fz={{ base: "20px", sm: "24px", md: "36px" }}
              fw={700}
              lh={"1.2em"}
              style={{ whiteSpace: "break-spaces" }}
              mb={15}
            >
              {t("main_subtitle")}
            </Text>
            <Text
              fz={{ base: "12px", sm: "16px", md: "20px" }}
              fw={400}
              mb={"30px"}
              lts={"1px"}
            >
              {t("header_subtitle")}
            </Text>
          </Flex>
          <BtnBasic
            variant="filled"
            size="xl"
            style={{ color: "black" }}
            color="rgba(255, 255, 255, 1)"
            visibleFrom="md"
          >
            {t("header_btn1")}
          </BtnBasic>
          <BtnBasic
            variant="filled"
            size="md"
            style={{ color: "black" }}
            color="rgba(255, 255, 255, 1)"
            hiddenFrom="md"
          >
            {t("header_btn2")}
          </BtnBasic>
        </Flex>
      </Container>
    </Box>
  );
};
