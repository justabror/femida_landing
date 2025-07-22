import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

import { PropsWithChildren } from "react";

import { hasLocale, NextIntlClientProvider } from "next-intl";
import "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";
import { seoConf, theme } from "@/shared/config";

import "../globals.css";

export function generateStaticParams() {
  return [{ locale: "uz" }, { locale: "en" }, { locale: "ru" }];
}

export const generateMetadata = async () => await seoConf.metadataBase();

export const viewport = seoConf.viewportBase;

type LayoutProps = PropsWithChildren & { params: Promise<{ locale: string }> };

export default async function Layout({ children, params }: LayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={seoConf.SystemFont.className}>
        <NextIntlClientProvider>
          <MantineProvider theme={theme}>{children}</MantineProvider>
        </NextIntlClientProvider>

      </body>
    </html>
  );
}
