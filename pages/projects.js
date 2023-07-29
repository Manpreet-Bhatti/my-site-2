import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { DynamicGridItem } from "../components/grid-item";
import Layout from "../components/layouts/single-column";
import Section from "../components/section";

import thumbMenstruationNation from "../public/images/projects/menstruation_nation/mnation_logo.png";
import thumbGrafGas from "../public/images/projects/grafgas.jpg";
import thumbAutoReadmeDocs from "../public/images/projects/autoreadmedocs.jpg";

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <DynamicGridItem
            type="projects"
            id="menstruationnation"
            title="Menstruation Nation"
            thumbnail={thumbMenstruationNation}
          >
            A free period tracker designed by youth for youth
          </DynamicGridItem>
        </Section>
        <Section>
          <DynamicGridItem
            type="projects"
            id="grafgas"
            title="Graf-Gas"
            thumbnail={thumbGrafGas}
          >
            A data analytical dashboard with a focus on fleet driver fuel
            consumption and transportation efficiency
          </DynamicGridItem>
        </Section>
        <Section>
          <DynamicGridItem
            type="projects"
            id="autoreadmedocs"
            title="Auto README Docs"
            thumbnail={thumbAutoReadmeDocs}
          >
            A web application that helps automate the README creation of GitHub
            repository file structures
          </DynamicGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Projects;
export { getServerSideProps } from "../components/chakra";
