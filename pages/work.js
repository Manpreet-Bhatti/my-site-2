import { Container, Divider, Heading, SimpleGrid } from "@chakra-ui/react";
import { WorkGridItem } from "../components/grid-item";
import Layout from "../components/layouts/single-column";
import Section from "../components/section";

import thumbCriticalMass from "../public/images/work/critical-mass.jpg";
import thumbZonado from "../public/images/work/zonado.jpg";
import thumbIvedha from "../public/images/work/ivedha.jpg";
import thumbCheaprEats from "../public/images/work/cheapreats.jpg";
import thumbBenchMarkedStudios from "../public/images/work/benchmarkedstudios.jpg";

const Work = () => (
  <Layout title="Recent work">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Recent work
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="criticalmass"
            title="Critical Mass"
            thumbnail={thumbCriticalMass}
          >
            A full-service digital experience design agency with a relentless
            focus on the customer
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="zonado" title="Zonado" thumbnail={thumbZonado}>
            A specialised marketplace for Canadian commercial real estate and
            business sales
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="ivedha" title="iVedha" thumbnail={thumbIvedha}>
            A leading global cloud managed services provider for enterprises in
            Canada, USA, Mexico and across the world
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Previous work
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem
              id="cheapreats"
              title="CheaprEats"
              thumbnail={thumbCheaprEats}
            >
              A food pickup service that facilitates interactions between
              customers and vendors while targeting post-secondary students
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="benchmarkedstudios"
              title="benchMarked Studios"
              thumbnail={thumbBenchMarkedStudios}
            >
              A consulting agency that looks to solve problems with robust,
              tested, specifically engineered software
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from "../components/chakra";