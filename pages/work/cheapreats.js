import { Badge, Container, Link, List, ListItem, Text } from "@chakra-ui/react";
import Layout from "../../components/layouts/single-column";
import { Meta, Title, WorkImage } from "../../components/work";
import P from "../../components/paragraph";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import theme from "../../lib/theme";

const CheaprEats = () => (
  <Layout title="CheaprEats">
    <Container>
      <Title>
        CheaprEats (Front End Engineering Intern) <Badge>May - Sep 2020</Badge>
      </Title>
      <P>
        A food pickup service that facilitates interactions between customers
        and vendors while targeting post-secondary students.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link variant="red-link" href="https://www.cheapreats.com/">
            https://www.cheapreats.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <Text color={theme.colors.redLight}>Location-Based Search</Text>
      <P>
        While working on CheaprEats&apos;s UI kit, I collaborated with designers
        to implement a location-based search function, allowing students to
        strategically find the closest restaurants for food pickup.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link variant="red-link" href="https://www.cheapreats.com/">
            https://www.cheapreats.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS, Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, TypeScript</span>
        </ListItem>
      </List>
      <Text color={theme.colors.redLight}>Auto README Docs</Text>
      <P>
        As an initiative for interns, I participated in paired, test-driven
        development to produce a web application that helps automate the README
        creation of GitHub repository file structures.
      </P>
      <P>
        Consequently, I worked closely with the GitHub REST API to pull and
        recursively build markdown tree structures whilst building a scalable
        and minimalistic UI design with a robust architecture.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            variant="red-link"
            href="https://project-structure-readme.netlify.app/"
          >
            https://project-structure-readme.netlify.app/{" "}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, TypeScript</span>
        </ListItem>
      </List>
      <WorkImage
        src="/images/work/autoreadmedocs_01.png"
        alt="Auto README Docs front page"
      />
      <WorkImage
        src="/images/work/autoreadmedocs_02.png"
        alt="Auto README Docs badges"
      />
      <WorkImage
        src="/images/work/autoreadmedocs_03.png"
        alt="Auto README Docs markdown tree"
      />
      <WorkImage
        src="/images/work/autoreadmedocs_04.png"
        alt="Auto README Docs markdown tree continued"
      />
    </Container>
  </Layout>
);

export default CheaprEats;
export { getServerSideProps } from "../../components/chakra";
