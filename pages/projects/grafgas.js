import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Container, List, ListItem } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import Layout from "../../components/layouts/single-column";
import P from "../../components/paragraph";
import { Meta, Title, WorkImage } from "../../components/work";

const GrafGas = () => (
  <Layout title="Graf-Gas">
    <Container>
      <Title type="projects">
        Front End Lead <Badge>Oct 2021 - Present</Badge>
      </Title>
      <P>
        A data analytical dashboard with a focus on fleet driver fuel
        consumption and transportation efficiency.
      </P>
      <P>
        I built a majority of the front end used on a daily basis by closely
        working clients to adhere to requested features, creating transparency
        for users so that metrics are shown accurately.
      </P>
      <P>
        In doing so, I entirely automated Peru gas stations&apos; data entry
        operations, migrating from an Excel-based to a SaaS application. Data is
        now collected, processed, and stored on the cloud, and displayed in a
        table and KPIs. In addition, customers can get an excel report of their
        data for further research.
      </P>
      <P>
        To achieve such feats, I worked with fellow developers to implement a
        rigorous in-house DevOps environment and created a CI/CD pipeline to
        deploy code to micro-services hosted on AWS.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link variant="red-link" href="https://www.grafgas.com/login">
            https://www.grafgas.com/login <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Redux, Django, AWS, PostgreSQL</span>
        </ListItem>
      </List>
      <WorkImage src="/images/projects/grafgas_01.jpg" alt="Graf-Gas login" />
      <WorkImage
        src="/images/projects/grafgas_02.jpg"
        alt="Graf-Gas company info"
      />
      <WorkImage
        src="/images/projects/grafgas_03.jpg"
        alt="Graf-Gas front page"
      />
      <WorkImage
        src="/images/projects/grafgas_04.jpg"
        alt="Graf-Gas profile page"
      />
      <WorkImage
        src="/images/projects/grafgas_05.jpg"
        alt="Graf-Gas profile page in edit mode"
      />
      <WorkImage
        src="/images/projects/grafgas_06.jpg"
        alt="Graf-Gas fuel consumption table"
      />
      <WorkImage
        src="/images/projects/grafgas_07.jpg"
        alt="Graf-Gas fuel consumption KPIs"
      />
      <WorkImage
        src="/images/projects/grafgas_08.jpg"
        alt="Graf-Gas fuel consumption KPIs continued"
      />
    </Container>
  </Layout>
);

export default GrafGas;
export { getServerSideProps } from "../../components/chakra";
