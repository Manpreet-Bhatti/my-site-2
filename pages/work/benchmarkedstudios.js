import { Badge, Container, Link, List, ListItem, Text } from "@chakra-ui/react";
import Layout from "../../components/layouts/single-column";
import { Meta, Title } from "../../components/work";
import P from "../../components/paragraph";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import theme from "../../lib/theme";

const BenchMarkedStudios = () => (
  <Layout title="benchMarked Studios">
    <Container>
      <Title type="work">
        benchMarked Studios (Full-stack Developer) <Badge>May - Oct 2019</Badge>
      </Title>
      <P>
        A consulting agency that looks to solve problems with robust, tested,
        specifically engineered software.
      </P>
      <Text color={theme.colors.redLight} mt={4}>
        Sports Clips
      </Text>
      <P>
        As the largest contract given during my stint at benchMarked Studios,
        the team and I were charged with the task of creating an MVP for a
        mobile app that would allow customers to book appointments, redeem
        coupons, and check queue status for haircuts.
      </P>
      <P>
        Although I was involved in the development of other aspects of the
        application, I was primarily in charge of the coupon redemption
        procedure. This entailed developing a coupon redemption page, a keypad,
        and a user profile page where coupon redemptions could be saved.
      </P>
      <P>
        In addition, since the application was originally created as a web app,
        it was required to be converted into an iOS and Android application,
        which was processed with the help of Ionic&apos;s capacitor, led by me.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link variant="red-link" href="https://sportclips.ca/">
            https://sportclips.ca/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS, Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Gatsby, Ionic</span>
        </ListItem>
      </List>
      <Text color={theme.colors.redLight}>PayoutPrime (not in service)</Text>
      <P>
        With the goal of providing accessible financing for Amazon sellers, I
        assisted in the development of a Shopify website for PayoutPrime,
        assisting them in advertising their services and showcasing their
        products in a more streamlined manner; the Shopify website was able to
        become another advantageous source of income with scalability and reach.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link variant="red-link" href="http://www.payoutprime.com/">
            http://www.payoutprime.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Gatsby, Shopify</span>
        </ListItem>
      </List>
      <Text color={theme.colors.redLight}>
        Company Website (not in service)
      </Text>
      <P>
        To showcase the services that benchMarked Studios provides, I helped in
        building various components and pages for the company&apos;s website.
        This included user profiles, testimonials, and even a scheduler that
        allowed potential clients to book time to speak about their needs and
        our use case on their project.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link variant="red-link" href="https://benchmarked.studio/">
            https://benchmarked.studio/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Gatsby</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
);

export default BenchMarkedStudios;
export { getServerSideProps } from "../../components/chakra";
