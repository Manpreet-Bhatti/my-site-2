import { Badge, Container, Link, List, ListItem, Text } from "@chakra-ui/react";
import Layout from "../../components/layouts/single-column";
import { Meta, Title, WorkImage } from "../../components/work";
import P from "../../components/paragraph";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import theme from "../../lib/theme";

const CriticalMass = () => (
  <Layout title="Critical Mass">
    <Container>
      <Title type="work">
        Critical Mass (Front End Development Intern){" "}
        <Badge>May - Aug 2022</Badge>
      </Title>
      <P>
        A full-service digital experience design agency with a relentless focus
        on the customer.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link variant="red-link" href="https://www.criticalmass.com/">
            https://www.criticalmass.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <Text color={theme.colors.redLight}>2023 Nissan Maxima</Text>
      <P>
        I was tasked as the solo developer in the migration of the Nissan Maxima
        from its 2022 counterpart to the 2023 model, hoping to selling to 138k+
        customers in USA.
      </P>
      <P>
        I was in charge of setting up the content, design, and revamp of
        components used across multiple subpages in the product line.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link variant="red-link" href="https://www.nissanusa.com/maxima">
            https://www.nissanusa.com/maxima <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JavaScript, Adobe AEM, Adobe DAM</span>
        </ListItem>
      </List>
      <Text color={theme.colors.redLight}>Daily Driving Check</Text>
      <P>
        Once again, as a solo developer, I developed an iOS automation as a
        means to automate documentation for fleet drivers to ensure their
        vehicles are in mint condition.
      </P>
      <P>
        This allowed fleet company management to have easily accessible
        documentation of their drivers and their respective vehicles for data
        and insurance purposes.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Shortcuts</span>
        </ListItem>
      </List>
      <Text color={theme.colors.redLight}>Nissan ARIYA EV Support Chatbot</Text>
      <P>
        As the electric vehicle world starts to overshadow its gas rival, many
        customers are in dire need of support and direction in the purchase and
        maintenance of an EV.
      </P>
      <P>
        Nissan&apos;s new ARIYA, a 100% electric crossover, needed the same
        foundation. To supply this need, I joined a team of 3 developers to
        create reusable and scalable components to create an ARIYA information
        hub which answered FAQs in addition to a support chatbot which helped
        customers with unanswered, immediate questions.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>TBA</span>
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
      <WorkImage
        src="/images/work/criticalmass_01.jpg"
        alt="2023 Nissan Maxima"
      />
    </Container>
  </Layout>
);

export default CriticalMass;
export { getServerSideProps } from "../../components/chakra";
