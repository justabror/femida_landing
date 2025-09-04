import { Box, Container, Flex, Image, SimpleGrid, Text } from "@mantine/core";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

import s from "@/pages/about/style.module.scss";
import { Navbar, Footer, OtherHeader, SplitSection } from "@/shared/ui";
import { AwesomeVector } from "@/shared/ui/awesome-vector";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations('about');
  
  const titles = {
    uz: `${t('title')} - Femida | Bizning Haqimizda`,
    ru: `${t('title')} - Femida | О нас`,
    en: `${t('title')} - Femida | About Us`
  };

  const descriptions = {
    uz: "Femida yuridik kompaniyasi haqida ma'lumot. Bizning missiyamiz, jamoamiz va professional yuridik xizmatlarimiz haqida batafsil ma'lumot oling.",
    ru: "Информация о юридической компании Femida. Узнайте о нашей миссии, команде и профессиональных юридических услугах.",
    en: "Information about Femida law firm. Learn about our mission, team and professional legal services."
  };

  const currentLocale = locale === 'en' ? 'en' : locale === 'ru' ? 'ru' : 'uz';

  return {
    title: titles[currentLocale],
    description: descriptions[currentLocale],
    openGraph: {
      title: titles[currentLocale],
      description: descriptions[currentLocale],
      url: `https://femida.uz/${locale}/about`,
      type: "website",
    },
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        "uz-UZ": "/uz/about",
        "en-US": "/en/about",
        "ru-RU": "/ru/about",
      },
    },
  };
}

const AboutPage = () => {
  const t = useTranslations("about");

  const sections = t.raw("sections");
  const mission = t.raw("mission");
  const howWeWork = t.raw("howWeWork");
  const advantages = t.raw("advantages");

  return (
    <Flex
      direction="column"
      className={s.page}
    >
      <Navbar darkMode />

      <Box
        mb="40px"
        style={{ borderBottom: "1px solid #00000026" }}
      >
        <OtherHeader
          aboutTitle={t("aboutTitle")}
          title={t("title")}
          description={t("description")}
        />
      </Box>

      <Container
        size="xl"
        mb={130}
      >
        <Flex
          direction="column"
          gap="130px"
        >
          {sections.map(
            (
              sec: { title: string; description: string; subtitle?: string },
              idx: number,
            ) => (
              <SplitSection
                key={idx}
                title={sec.title}
                description={sec.description}
                linkTitle={
                  idx === 0
                    ? t("linkMeetUs", { default: "Познакомьтесь с нами" })
                    : t("linkMeetTeam", {
                        default: "Познакомьтесь с нашей командой",
                      })
                }
                subtitle={sec.subtitle || ""}
                imageSrc={
                  idx === 0
                    ? "https://beratung.vamtam.com/wp-content/uploads/2023/07/pexels-yan-krukau-7794093.jpg"
                    : "https://beratung.vamtam.com/wp-content/uploads/2023/06/pexels-karolina-grabowska-7876781.jpg"
                }
                imagePosition={idx === 0 ? "right" : "left"}
              />
            ),
          )}
        </Flex>
      </Container>

      <Container
        size="xl"
        mb={115}
      >
        <Flex
          direction="column"
          gap={30}
        >
          <Flex>
            <AwesomeVector
              pos={"relative"}
              h={18}
              w={25}
            />
            <Text>Наша миссия</Text>
          </Flex>

          <SimpleGrid
            cols={{ base: 2, sm: 3, md: 5 }}
            spacing={20}
          >
            {mission.map(
              (item: { title: string; description: string }, index: number) => (
                <Flex
                  key={index}
                  direction="column"
                  pt="30px"
                  style={{ borderTop: "1px solid #00000026" }}
                  gap={10}
                >
                  <Text
                    fz={16}
                    ff="Geologica"
                    tt="none"
                    fw={500}
                    lh="1.5em"
                    lts="-.3px"
                  >
                    {item.title}
                  </Text>
                  <Text
                    fz={14}
                    lh="1.4em"
                    style={{ color: "#5F6567" }}
                  >
                    {item.description}
                  </Text>
                </Flex>
              ),
            )}
          </SimpleGrid>
        </Flex>
      </Container>

      <Box
        className={s.sec_tr}
        mb="120px"
      >
        <AwesomeVector
          h={90}
          w={100}
          bottom={-30}
          left={"50%"}
        />
      </Box>

      <Flex
        w="100%"
        direction="column"
        align="center"
        justify="center"
        mb={60}
      >
        <Text
          ff="Geologica"
          fz={{ base: 32, md: 48 }}
          fw={600}
          tt="none"
          fs="normal"
          lh="1.3em"
          lts="-1px"
        >
          {howWeWork.title}
        </Text>
        <Text
          style={{ color: "#5F6567" }}
          fz={{ base: 16, md: 20 }}
          lh="1.5em"
          maw={800}
          ta="center"
        >
          {howWeWork.description}
        </Text>
      </Flex>

      <Flex
        style={{ backgroundColor: "#e8e8e8" }}
        pb={80}
        pt={80}
        // mb={130}
      >
        <Container
          size="xl"
          maw={1280}
          w="100%"
        >
          <Flex
            w="100%"
            direction={{ base: "column", md: "row" }}
            justify={{ base: "center", md: "space-between" }}
            align="center"
          >
            <Flex
              direction="column"
              pt={80}
              pb={90}
              pr={20}
              justify="space-between"
              gap={50}
            >
              {advantages
                .slice(0, 2)
                .map(
                  (adv: { title: string; description: string }, i: number) => (
                    <Flex
                      key={i}
                      direction="column"
                      gap={15}
                      pb={50}
                      style={{ borderBottom: "1px solid #00000026" }}
                      maw={405}
                    >
                      <Text
                        ff="Geologica"
                        fz={24}
                        fw={500}
                        tt="none"
                        fs="normal"
                        lh="1.4em"
                        lts="-.5px"
                      >
                        {adv.title}
                      </Text>
                      <Text
                        ff="Helvetica"
                        fz={16}
                        fw={400}
                        lh="1.4em"
                        lts={0}
                        style={{ color: "#5F6567" }}
                      >
                        {adv.description}
                      </Text>
                    </Flex>
                  ),
                )}
            </Flex>

            <Flex>
              <Image
                src="https://beratung.vamtam.com/wp-content/uploads/2023/06/illustration-1.svg"
                alt="Professional legal consultation illustration - Femida legal services advantages"
              />
            </Flex>

            <Flex
              direction="column"
              pt={80}
              pb={90}
              pl={20}
              justify="space-between"
              gap={50}
            >
              {advantages
                .slice(2)
                .map(
                  (adv: { title: string; description: string }, i: number) => (
                    <Flex
                      key={i}
                      direction="column"
                      gap={15}
                      pb={50}
                      style={{ borderBottom: "1px solid #00000026" }}
                      maw={405}
                    >
                      <Text
                        ff="Geologica"
                        fz={24}
                        fw={500}
                        tt="none"
                        fs="normal"
                        lh="1.4em"
                        lts="-.5px"
                      >
                        {adv.title}
                      </Text>
                      <Text
                        ff="Helvetica"
                        fz={16}
                        fw={400}
                        lh="1.4em"
                        lts={0}
                        style={{ color: "#5F6567" }}
                      >
                        {adv.description}
                      </Text>
                    </Flex>
                  ),
                )}
            </Flex>
          </Flex>
        </Container>
      </Flex>

      <Footer />
    </Flex>
  );
};

export default AboutPage;
