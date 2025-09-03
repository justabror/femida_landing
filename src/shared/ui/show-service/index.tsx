"use client";

import { useGSAP } from "@gsap/react";
import {
  Box,
  Card,
  Center,
  Container,
  Flex,
  Paper,
  Space,
  Text,
} from "@mantine/core";
import { IconArmchair2, IconBrain, IconChartBar } from "@tabler/icons-react";

import { useRef } from "react";

import { useTranslations } from "next-intl";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ShowServices = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("showServices");

  useGSAP(
    () => {
      const panels = gsap.utils.toArray<HTMLElement>(".scroll-panel");

      panels.forEach((panel, index) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          end: () => `+=${panel.offsetHeight}`,
          pin: true,
          pinSpacing: false,
          scrub: true,
          id: `panel-${index}`,
        });
      });

      ScrollTrigger.create({
        trigger: panels[0],
        start: "top top",
        endTrigger: panels[panels.length - 1],
        end: "bottom bottom",
        snap: 1 / (panels.length - 1),
        id: "panel-snap",
      });

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: containerRef },
  );

  // Каждому section присвоен уникальный набор сервисов
  const sections = [
    {
      type: t("financeType"),
      title: t("financeTitle"),
      image: "/public/assets/service/6.png",
      bg: "#E7E8DB",
      services: [
        {
          icon: <IconChartBar />,
          title: t("service1.title"),
          description: t("service1.description"),
        },
        {
          icon: <IconArmchair2 />,
          title: t("service2.title"),
          description: t("service2.description"),
        },
        {
          icon: <IconBrain />,
          title: t("service3.title"),
          description: t("service3.description"),
        },
      ],
    },
    // {
    //   type: t("insuranceType"),
    //   title: t("insuranceTitle"),
    //   image:
    //     "https://beratung.vamtam.com/wp-content/uploads/2023/07/GettyImages-1138996754-1024x686.jpg",
    //   bg: "#DDDECB",
    //   services: [
    //     {
    //       icon: <IconArmchair2 />,
    //       title: t("insuranceService1.title"),
    //       description: t("insuranceService1.description"),
    //     },
    //     {
    //       icon: <IconBrain />,
    //       title: t("insuranceService2.title"),
    //       description: t("insuranceService2.description"),
    //     },
    //     {
    //       icon: <IconChartBar />,
    //       title: t("insuranceService3.title"),
    //       description: t("insuranceService3.description"),
    //     },
    //   ],
    // },
  ];

  return (
    <Box
      ref={containerRef}
      mb={{ base: "130vh", sm: "120vh", md: "130vh" }}
    >
      <Container
        size="xl"
        mt="7.5rem"
        mb="2.813rem"
      >
        <Text
          component="h5"
          fw={400}
          lh="1.5rem"
          fz="1.25rem"
        >
          {t("services")}
        </Text>
        <Text
          component="h2"
          fw={600}
          lh={{ base: "2.875rem", md: "3.875rem" }}
          fz={{ base: "2.25rem", md: "3rem" }}
          lts={"-1px"}
        >
          {t("subtitle")}
        </Text>
      </Container>

      <MainServiceContainer>
        {sections.map((section, i) => (
          <ContentWrapper
            className="scroll-panel"
            key={i}
            bg={`${section.bg}`}
          >
            <Box
              maw="1280px"
              m={{ base: "0 0", md: "0 auto" }}
              pos="relative"
            >
              <Center visibleFrom="md">
                <ServiceText>
                  0{i + 1} {section.type}
                </ServiceText>
              </Center>
              <Flex justify={{ base: "center", md: "flex-start" }}>
                <ServiceTitle
                  mt={{ base: "0", md: "250px" }}
                  pos={"relative"}
                  fz={{ base: "2.0rem", md: "4.375rem" }}
                  style={{ zIndex: 1000, whiteSpace: "pre-line" }}
                >
                  {section.title}
                </ServiceTitle>
              </Flex>
              <CardWrapper>
                <Flex
                  justify={{ base: "center", md: "flex-start" }}
                  direction={{ base: "column", md: "row" }}
                  gap={2}
                  w={"100%"}
                >
                  {section.services.map((service, index) => (
                    <ServiceCard
                      key={index}
                      p={{ base: "15px", md: "4.375rem 1.875rem 3.125rem" }}
                      maw={{ base: "100%", md: "25%" }}
                    >
                      <Flex direction="column">
                        <CardIcon>{service.icon}</CardIcon>
                        <CardTitle>{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </Flex>
                    </ServiceCard>
                  ))}
                </Flex>
              </CardWrapper>
              <Space h="xl" />
              <Box
                pos="absolute"
                w="500px"
                h="470px"
                bottom="0"
                right="0"
                className="clipped-image"
              >
                <Image
                  width={500}
                  height={470}
                  src={"/public/assets/split-banner/8.png"}
                  alt={section.type}
                />
              </Box>
            </Box>
          </ContentWrapper>
        ))}
      </MainServiceContainer>
    </Box>
  );
};

const MainServiceContainer = Container.withProps({
  fluid: true,
  m: 0,
});

const ContentWrapper = Paper.withProps({
  bdrs: 0,
  shadow: "none",
  bg: "#E7E8DB",
  p: "1rem 1.25rem 3.125rem",
});

const ServiceText = Text.withProps({
  component: "p",
  fw: 600,
  fz: "0.875rem",
  lh: "1.25rem",
  c: "rgba(0, 0, 0, 0.5)",
});

const ServiceTitle = Text.withProps({
  component: "h3",
  fw: 700,
  fz: "4.375rem",
  lh: "4.375rem",
  c: "rgba(0, 0, 0, 0.5)",
  mb: "1.25rem",
});

const CardWrapper = Flex.withProps({
  gap: "1px",
  pos: "relative",
  style: { zIndex: 1 },
});

const ServiceCard = Card.withProps({
  bg: "#fff",
  bdrs: "0",
});

const CardIcon = Text.withProps({
  component: "span",
  w: "100%",
  mb: "1rem",
});

const CardTitle = Text.withProps({
  component: "h5",
  fz: "1.25rem",
  fw: 400,
  lh: "1.5rem",
  c: "rgb(22, 22, 22)",
  m: "0.875rem 0 1.25rem",
});

const CardDescription = Text.withProps({
  component: "p",
  fw: 400,
  fz: "0.875rem",
  lh: "1.25rem",
  c: "rgb(95, 101, 103)",
});
