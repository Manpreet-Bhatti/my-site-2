import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Container, List, ListItem } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import Layout from "../../components/layouts/single-column";
import P from "../../components/paragraph";
import { Meta, Title, WorkImage } from "../../components/work";

const AutoReadmeDocs = () => (
  <Layout title="Auto README Docs">
    <Container>
      <Title type="projects">
        Co-Contributor <Badge>Jul - Sep 2020</Badge>
      </Title>
      <P>
        A web application that helps automate the README creation of GitHub
        repository file structures.
      </P>
      <P>
        In a paired, test-driven development environment, I worked closely with
        the GitHub REST API to pull and recursively generate markdown tree
        structures from provided repositories.
      </P>
      <P>
        As a result, I worked to continuously deliver scalable features while
        creating a minimalistic UI design with a robust architecture, all of
        which were thoroughly and frequently reviewed.
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
          <Meta>GitHub</Meta>
          <Link
            variant="red-link"
            href="https://github.com/cheapreats/auto-readme-docs"
          >
            https://github.com/cheapreats/auto-readme-docs{" "}
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
        src="/images/work/autoreadmedocs_01.jpg"
        alt="Auto README Docs front page"
      />
      <WorkImage
        src="/images/work/autoreadmedocs_02.jpg"
        alt="Auto README Docs badges"
      />
      <WorkImage
        src="/images/work/autoreadmedocs_03.jpg"
        alt="Auto README Docs markdown tree"
      />
      <WorkImage
        src="/images/work/autoreadmedocs_04.jpg"
        alt="Auto README Docs markdown tree continued"
      />
    </Container>
  </Layout>
);

export default AutoReadmeDocs;
export { getServerSideProps } from "../../components/chakra";
