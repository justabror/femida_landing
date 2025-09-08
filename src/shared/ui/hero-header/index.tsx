"use client";

import { Box, Container, Flex, Text } from "@mantine/core";

import { useEffect, useMemo, useRef, useState } from "react";

import { useTranslations } from "next-intl";

import gsap from "gsap";

import { BtnBasic } from "@/shared/ui";

import s from "./style.module.scss";

const images = [
  "./assets/hero/5.png",
  "./assets/hero/2.png",
  "./assets/hero/3.png",
  "./assets/hero/4.png",
  "./assets/hero/1.png",
];

export const HeroHeader = () => {
  const [index, setIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);
  // const [letters, setLetters] = useState<string[]>([]);
  const letterRefs = useRef<HTMLSpanElement[]>([]);
  const bgRefs = useRef<HTMLDivElement[]>([]);

  const t = useTranslations();

  const headlines = useMemo(
    () => [
      { id: 1, key: t("headlines_planning") },
      { id: 2, key: t("headlines_solutions") },
      { id: 3, key: t("headlines_technologies") },
      { id: 4, key: t("headlines_strategy") },
      { id: 5, key: t("headlines_advice") },
    ],
    [t],
  );

  useEffect(() => {
    const current = headlines[index].key.padEnd(35, " ").split("");
    // setLetters(current);

    current.forEach((char, i) => {
      const el = letterRefs.current[i];
      if (el) {
        el.textContent = char === " " ? "\u00A0" : char;
      }
    });
  }, [headlines, index]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % headlines.length;
      const next = headlines[nextIndex].key.padEnd(35, " ").split("");

      next.forEach((nextChar: string, i: number) => {
        const el = letterRefs.current[i];
        if (!el) return;

        gsap.to(el, {
          rotateY: 90,
          duration: 0.25,
          ease: "power1.in",
          delay: i * 0.06,
          onComplete: () => {
            el.textContent = nextChar === " " ? "\u00A0" : nextChar;
            gsap.to(el, {
              rotateY: 0,
              duration: 0.25,
              ease: "power1.out",
            });
          },
        });
      });

      setIndex(nextIndex);
    }, 10000);

    return () => clearInterval(interval);
  }, [index, headlines, letterRefs]);

  useEffect(() => {
    const bgInterval = setInterval(() => {
      const current = bgIndex % images.length;
      const next = (bgIndex + 1) % images.length;

      const currentEl = bgRefs.current[current];
      const nextEl = bgRefs.current[next];

      if (currentEl && nextEl) {
        gsap.to(currentEl, { opacity: 0, duration: 1 });
        gsap.set(nextEl, { zIndex: 1 });
        gsap.fromTo(nextEl, { opacity: 0 }, { opacity: 1, duration: 1 });
        setBgIndex(next);
      }
    }, 10000);

    return () => clearInterval(bgInterval);
  }, [bgIndex, bgRefs]);

  return (
    <Box
      className={s.heroWrapper}
      mih={{ base: "70vh", md: "100vh" }}
    >
      {images.map((img, i) => (
        <Box
          key={i}
          ref={(el) => {
            if (el) bgRefs.current[i] = el;
          }}
          className={s.heroBg}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05),rgba(0, 0, 0, 0.5)), url(${img})`,
            opacity: i === 0 ? 1 : 0,
            zIndex: i === 0 ? 1 : 0,
          }}
        />
      ))}

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
            {/* <Group className={s.line}>
              {Array(letters.length)
                .fill("")
                .map((_, i) => (
                  <Text
                    fz={{ base: "24px", md: "60px" }}
                    fw={500}
                    lh={"1.2em"}
                    mb={"20px"}
                    key={i}
                    ref={(el) => {
                      if (el) letterRefs.current[i] = el;
                    }}
                    classNames={{
                      root: s.mtr,
                    }}
                  >
                    {letters[i] ?? "\u00A0"}
                  </Text>
                ))}
            </Group> */}
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
