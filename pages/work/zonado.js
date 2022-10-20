import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";
import Layout from "../../components/layouts/single-column";
import { Meta, Title, WorkImage } from "../../components/work";
import P from "../../components/paragraph";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Zonado = () => (
  <Layout title="Zonado">
    <Container>
      <Title>
        Zonado (Software Development Intern) <Badge>Mar - May 2022</Badge>
      </Title>
      <P>
        A specialised marketplace for Canadian commercial real estate and
        business sales.
      </P>
      <P>
        In a paired-programming team, I reshaped the design and user flow,
        upgraded, and repaired highly trafficked web pages to improve navigation
        and property management.
      </P>
      <P>
        This allowed the team to identify SaaS requirements, which were used as
        the basis for a solo migration I led on the driving framework used in
        the application.
      </P>
      <P>
        In addition, I built and scaled the application&apos;s accessibility
        features so that more than 1000+ users could transact with ease and
        transparency, increasing client relations and marketing outreach.
      </P>
      <P>
        I also set up a resilient and reliable payment platform with incentives
        to increase sales by 2x, creating a subscription model users could
        follow to truly extract the most out of the application.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link variant="red-link" href="https://zonado.com/">
            https://zonado.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, TypeScript, Next.js, Prisma, Chakra UI</span>
        </ListItem>
      </List>
      <WorkImage src="/images/work/zonado_01.jpg" alt="Active wants table" />
      <WorkImage src="/images/work/zonado_02.jpg" alt="Zonado landing page" />
      <WorkImage src="/images/work/zonado_03.jpg" alt="Property image drawer" />
      <WorkImage
        src="/images/work/zonado_04.jpg"
        alt="Property image slideshow"
      />
      <WorkImage src="/images/work/zonado_05.jpg" alt="Zonado plan pricing" />
    </Container>
  </Layout>
);

export default Zonado;
export { getServerSideProps } from "../../components/chakra";
