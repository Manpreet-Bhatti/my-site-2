import { Badge, Container, Link, List, ListItem, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Layout from "../../components/layouts/single-column";
import { Meta, Title } from "../../components/work";
import P from "../../components/paragraph";
import theme from "../../lib/theme";

const Ivedha = () => (
  <Layout title="iVedha">
    <Container>
      <Title>
        iVedha (Junior Development Intern) <Badge>May - Sep 2021</Badge>
      </Title>
      <P>
        A leading global cloud managed services provider for enterprises in
        Canada, USA, Mexico and across the world.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link variant="red-link" href="https://ivedha.com/">
            https://ivedha.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <Text color={theme.colors.redLight}>NLP Search Engine</Text>
      <P>
        To make ticket filtering more accurate and reduce duplicate Zendesk
        tickets, I led a team of 2 other junior developers and managed the
        delivery of a natural language processing search engine for looking up
        relevant support tickets based on Stanford&apos;s unsupervised learning
        algorithm, Global Vectors for Word Representation.
      </P>
      <P>
        Through the process, I developed and managed automated scripts,
        continuous builds and deployments. In addition, I participated in design
        and development of SaaS APIs and performed detailed analysis, design,
        software integration, and testing to ensure the quality of the product.
      </P>
      <P>
        At the end of my tenure, I prepared operational procedural documentation
        for the technical support staff.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Cloud</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Docker, MongoDB</span>
        </ListItem>
      </List>
      <Text color={theme.colors.redLight}>API Hub</Text>
      <P>
        Accordingly, I built a custom API documentation space, built upon
        Swagger Hub, to ease access and generate clarity for future and current
        developers.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Swagger Hub</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
);
export default Ivedha;
export { getServerSideProps } from "../../components/chakra";
