"use client";

import NextLink from "next/link";
import {
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Paragraph from "../components/paragraph";
import Layout from "../components/layouts/single-column";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";
import { IoLogoLinkedin, IoLogoGithub, IoMail } from "react-icons/io5";
import theme from "../lib/theme";
import dynamic from "next/dynamic";

import thumbMenstruationNation from "../public/images/projects/menstruation_nation/mnation_logo.png";
import thumbGrafGas from "../public/images/projects/grafgas.jpg";

const Link = dynamic(
  () => import("@chakra-ui/next-js").then((mod) => mod.Link),
  {
    ssr: false,
  }
);

const Image = dynamic(() => import("next/image"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const Home = () => (
  <Layout>
    <Container>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Manpreet Bhatti
          </Heading>
          <Text color={theme.colors.redLight}>
            Software Developer @ Agentnoon
          </Text>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor={theme.colors.redLight}
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/manpreet-coding.png"
              alt="Profile image"
              width={96}
              height={96}
              priority={true}
            />
          </Box>
        </Box>
      </Box>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue("#f4f4f4", "whiteAlpha.200")}
        css={{ backdropFilter: "blur(10px)" }}
      >
        I&apos;m a front-end (aspiring full-stack) developer based in{" "}
        <span title="Canada" aria-label="Canada">
          🇨🇦
        </span>
        !
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          👨🏽‍💻 Who I am
        </Heading>
        <Paragraph>
          As a software developer at{" "}
          <Link variant="red-link" href="https://agentnoon.com/" isExternal>
            Agentnoon
          </Link>
          , I play on enhancing the website and Agentnoon application. Hailing
          from Ontario, I specialize in front-end technologies, crafting
          intuitive and high-performing user experiences.
        </Paragraph>
        <Paragraph>
          I&apos;m always open to exploring new opportunities, so feel free to
          connect!
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/work"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            variant="red-button"
          >
            My experience
          </Button>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          🤝 Community involvement
        </Heading>
        <Paragraph>
          Giving back to my community is a joy for me; I help develop for my
          former university&apos;s hackathon,{" "}
          <Link variant="red-link" href="https://hackthevalley.io/" isExternal>
            Hack The Valley
          </Link>
          , as well as teach and mentor aspiring developers.
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          🍿 Off-hours
        </Heading>
        <Paragraph>
          When I&apos;m not developing, one of my hobbies is watching movies and
          TV shows. For exploration and critical analysis purposes, I like to
          immerse myself in all types of genres. That being said, action,
          mystery, and sci-fi are the go-to.
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          🕸 On the web
        </Heading>
        <List>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/manpreet1bhatti/"
              isExternal
            >
              <Button
                variant="ghost"
                colorScheme="red"
                color={theme.colors.redLight}
                leftIcon={<IoLogoLinkedin />}
              >
                manpreet1bhatti
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/Manpreet-Bhatti" isExternal>
              <Button
                variant="ghost"
                colorScheme="red"
                color={theme.colors.redLight}
                leftIcon={<IoLogoGithub />}
              >
                Manpreet-Bhatti
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:manpreet@bhatti.net" isExternal>
              <Button
                variant="ghost"
                colorScheme="red"
                color={theme.colors.redLight}
                leftIcon={<IoMail />}
              >
                manpreet [at] bhatti.net
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
      <Section delay={0.4}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://play.google.com/store/apps/details?id=com.tpp.theperiodpurse"
            title="Menstruation Nation"
            thumbnail={thumbMenstruationNation}
          >
            A free period tracker designed by youth for youth
          </GridItem>
          <GridItem
            href="https://www.grafgas.com/"
            title="Graf-Gas"
            thumbnail={thumbGrafGas}
          >
            A data analytical dashboard with a focus on fleet driver fuel
            consumption and transportation efficiency
          </GridItem>
        </SimpleGrid>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/projects"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            variant="red-button"
          >
            My projects
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
);

export default Home;
export { getServerSideProps } from "../components/chakra";
