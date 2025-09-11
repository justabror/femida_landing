"use client";

import {
  Burger,
  Container,
  Divider,
  Flex,
  Paper,
  Transition,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

import { useEffect, useRef } from "react";

import { useTranslations } from "next-intl";
import Image from "next/image";

import cn from "classnames";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Link } from "@/i18n/navigation";
import Logo from "@/shared/assets/logo.webp";
import { mediaQueries } from "@/shared/lib/constants";

import { BtnBasic } from "../btn-basic/ui";
import { LanguageSwitcher } from "../language-switcher";
import { BaseLink } from "../link";
import s from "./styles.module.scss";

gsap.registerPlugin(ScrollTrigger);

type NavbarRoute = {
  label: string;
  href: string;
};

export const Navbar = ({ darkMode }: { darkMode?: boolean }) => {
  const [opened, { toggle }] = useDisclosure();
  const isNotMobile = useMediaQuery(mediaQueries.mobile);
  const navRef = useRef<HTMLDivElement>(null);
  const t = useTranslations();

  // 🔹 now using translations
  const navbarRoutes: NavbarRoute[] = [
    { label: t("navbar_services"), href: "/service" },
    { label: t("navbar_team"), href: "/people" },
    { label: t("navbar_about"), href: "/about" },
  ];

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    let lastScroll = 0;

    gsap.to(nav, {
      yPercent: -100,
      ease: "power2.out",
      scrollTrigger: {
        start: 0,
        end: "max",
        onUpdate: (self) => {
          const currentScroll = self.scroll();
          const scrollDown = currentScroll > lastScroll;
          gsap.to(nav, {
            yPercent: scrollDown ? -100 : 0,
            duration: 0.4,
            ease: "power2.out",
          });
          lastScroll = currentScroll;
        },
      },
    });

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        if (!nav || opened) return;
        if (self.scroll() > 10) {
          nav.classList.add(s.scrolled);
        } else if (!darkMode) {
          nav.classList.remove(s.scrolled);
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [darkMode, opened]);

  return (
    <nav
      ref={navRef}
      className={cn(s.nav, [(darkMode || opened) && s.scrolled])}
    >
      <NavContainer>
        <NavElement>
          <Flex
            component={Link}
            href={"/"}
            justify={"flex-start"}
          >
            <Image
              src={Logo}
              alt="Logo"
              height={60}
            />
          </Flex>
          {isNotMobile ? (
            <DesktopNavList
              navbarRoutes={navbarRoutes}
              contactLabel={t("navbar_btn")}
            />
          ) : (
            <MobileNavList
              opened={opened}
              toggle={toggle}
              navbarRoutes={navbarRoutes}
              contactLabel={t("navbar_btn")}
            />
          )}
        </NavElement>

        <div className={s.dividerWrapper}>
          <Divider className={s.divider} />
        </div>
      </NavContainer>
    </nav>
  );
};

const DesktopNavList = ({
  navbarRoutes,
  contactLabel,
}: {
  navbarRoutes: NavbarRoute[];
  contactLabel: string;
}) => (
  <NavList>
    <NavItems navbarRoutes={navbarRoutes} />
    <LanguageSwitcher />
    <ContactBtn label={contactLabel} />
  </NavList>
);

const scaleY = {
  in: { opacity: 1, transform: "scaleY(1)" },
  out: { opacity: 0, transform: "scaleY(0)" },
  common: { transformOrigin: "top" },
  transitionProperty: "transform, opacity",
};

const MobileNavList = ({
  navbarRoutes,
  contactLabel,
  opened,
  toggle,
}: {
  navbarRoutes: NavbarRoute[];
  contactLabel: string;
  opened: boolean;
  toggle: () => void;
}) => {
  return (
    <NavList gap={"sm"}>
      <ContactBtn label={contactLabel} />
      <Burger
        opened={opened}
        onClick={toggle}
        color="white"
      />
      <Transition
        mounted={opened}
        transition={scaleY}
        duration={200}
        timingFunction="ease"
        keepMounted
      >
        {(transitionStyle) => (
          <NavbarDropdown
            style={{ ...transitionStyle, zIndex: 1 }}
            className={s.dropdown}
          >
            <NavList direction={"column"}>
              <NavItems navbarRoutes={navbarRoutes} />
              <LanguageSwitcher />
            </NavList>
          </NavbarDropdown>
        )}
      </Transition>
    </NavList>
  );
};

const NavItems = ({ navbarRoutes }: { navbarRoutes: NavbarRoute[] }) =>
  navbarRoutes.map((item) => (
    <BaseLink
      key={item.label}
      href={item.href}
    >
      {item.label}
    </BaseLink>
  ));

const ContactBtn = ({ label }: { label: string }) => (
  <BtnBasic
    component={BaseLink}
    href="/contact"
    size="sm"
    color="#fff"
    visibleFrom="md"
  >
    {label}
  </BtnBasic>
);

const NavContainer = Container.withProps({
  h: "5rem",
  size: "xl",
});

const NavElement = Flex.withProps({
  h: "100%",
  align: "center",
  justify: "space-between",
});

const NavList = Flex.withProps({
  h: "100%",
  align: "center",
  justify: "space-between",
  gap: "2rem",
});

const NavbarDropdown = Paper.withProps({
  pos: "absolute",
  p: "xl",
  top: 80,
  left: 0,
  right: 0,
  bdrs: "0",
  // bg: "transparent",
});
