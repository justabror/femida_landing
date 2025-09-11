"use client";

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

import { useEffect, useRef } from "react";

import { useTranslations } from "next-intl";

import cn from "classnames";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { usePathname } from "@/i18n/navigation";

gsap.registerPlugin(ScrollTrigger);

export const ShowServices = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("showServices");
  const pathname = usePathname();

  useEffect(() => {
    if (!containerRef.current) return;

    const unique = `show-services-${pathname}-${Date.now()}`;

    const ctx = gsap.context(() => {
      const root = containerRef.current!;
      const nodeList = root.querySelectorAll<HTMLElement>(".scroll-panel");
      const panels = Array.from(nodeList);

      if (!panels.length) return;

      panels.forEach((panel, index) => {
        ScrollTrigger.create({
          id: `panel-${index}-${unique}`,
          trigger: panel,
          start: "top top",
          end: () => `+=${panel.offsetHeight}`,
          pin: true,
          pinSpacing: false,
          scrub: true,
          invalidateOnRefresh: true,
        });
      });

      if (panels.length > 1) {
        ScrollTrigger.create({
          id: `panel-snap-${unique}`,
          trigger: panels[0],
          start: "top top",
          endTrigger: panels[panels.length - 1],
          end: "bottom bottom",
          snap: 1 / (panels.length - 1),
          invalidateOnRefresh: true,
        });
      }

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll()
        .filter((t) => t.vars.id && t.vars.id.toString().includes(unique))
        .forEach((t) => t.kill());
    };
  }, [pathname]);

  // Каждому section присвоен уникальный набор сервисов
  const sections = [
    {
      type: t("financeType"),
      title: t("financeTitle"),
      bg: "#bedff2",
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
    {
      type: t("insuranceType"),
      title: t("insuranceTitle"),
      bg: "#a6d2ea",
      services: [
        {
          icon: <IconArmchair2 />,
          title: t("insuranceService1.title"),
          description: t("insuranceService1.description"),
        },
        {
          icon: <IconBrain />,
          title: t("insuranceService2.title"),
          description: t("insuranceService2.description"),
        },
        {
          icon: <IconChartBar />,
          title: t("insuranceService3.title"),
          description: t("insuranceService3.description"),
        },
      ],
    },
  ];

  return (
    <Box
      ref={containerRef}
      mb={{ base: "140vh", xs: "100vh", md: "130vh" }}
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

      <Container
        fluid
        m={0}
      >
        {sections.map((section, i) => (
          <Paper
            className="scroll-panel"
            key={i}
            bg={`${section.bg}`}
            bdrs={0}
            shadow="none"
            p="1rem 1.25rem 3.125rem"
          >
            <Box
              maw="1280px"
              m={{ base: "0 0", md: "0 auto" }}
              pos="relative"
            >
              <Center visibleFrom="md">
                <Text
                  component="p"
                  fw={600}
                  fz="0.875rem"
                  lh="1.25rem"
                  c="#445055"
                >
                  0{i + 1} {section.type}
                </Text>
              </Center>
              <Flex justify={{ base: "center", md: "flex-start" }}>
                <Text
                  component="h3"
                  fw={700}
                  lh={"4.375rem"}
                  c={"#445055"}
                  mb={"1.25rem"}
                  mt={{ base: "0", md: "250px" }}
                  pos={"relative"}
                  fz={{ base: "2.0rem", md: "4.375rem" }}
                  style={{ zIndex: 1000 }}
                >
                  {section.title}
                </Text>
              </Flex>
              <Flex
                gap={1}
                pos={"relative"}
                style={{ zIndex: 1 }}
              >
                <Flex
                  justify={{ base: "center", md: "flex-start" }}
                  direction={{ base: "column", md: "row" }}
                  gap={2}
                  w={"100%"}
                >
                  {section.services.map((service, index) => (
                    <Card
                      key={index}
                      p={{ base: "15px", md: "4.375rem 1.875rem 3.125rem" }}
                      maw={{ base: "100%", md: "25%" }}
                      bg={"#fff"}
                      bdrs={0}
                    >
                      <Flex direction="column">
                        <Text
                          component="span"
                          w={"100%"}
                          mb={"1rem"}
                        >
                          {service.icon}
                        </Text>
                        <Text
                          component="h5"
                          fz={"1.25rem"}
                          fw={400}
                          lh={"1.5rem"}
                          c={"rgb(22, 22, 22)"}
                          m={"0.875rem 0 1.25rem"}
                        >
                          {service.title}
                        </Text>
                        <Text
                          component="p"
                          fw={400}
                          fz={"0.875rem"}
                          lh={"1.25rem"}
                          c={"rgb(95, 101, 103)"}
                        >
                          {service.description}
                        </Text>
                      </Flex>
                    </Card>
                  ))}
                </Flex>
              </Flex>
              <Space h="xl" />
              <Box
                pos="absolute"
                w="500px"
                h="470px"
                bottom="0"
                right="0"
                className={cn("clipped-image", ["clipped-image-" + (i + 1)])}
              ></Box>
            </Box>
          </Paper>
        ))}
      </Container>
    </Box>
  );
};
