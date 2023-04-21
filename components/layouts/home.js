import Head from "next/head";
import NavBar from "../navbar";
import { Box, Flex } from "@chakra-ui/react";
import Footer from "../footer";
import dynamic from "next/dynamic";
import ModelLoader from "../model-loader";

const LazyModelLoader = dynamic(() => import("../model"), {
  ssr: false,
  loading: () => <ModelLoader />,
});

const Home = ({ children, router }) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="All about Manpreet Bhatti; I'm a front end (aspiring full stack) developer based in Canada! Get to know me as I showcase my projects, skills, and more!"
        />
        <meta name="author" content="Manpreet Bhatti" />
        <link rel="apple-touch-icon" href="MB-mono.svg" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Manpreet Bhatti" />
        <meta name="og:title" content="Manpreet Bhatti" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="MB-mono.svg" />
        <title>Manpreet Bhatti | Home</title>
      </Head>
      <NavBar path={router.asPath} />
      <Flex flexDirection="column" minHeight="100vh" alignItems="center">
        <LazyModelLoader />
        {children}
        <Footer />
      </Flex>
    </Box>
  );
};

export default Home;
