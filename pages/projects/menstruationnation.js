import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Container, List, ListItem } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import Layout from "../../components/layouts/single-column";
import P from "../../components/paragraph";
import { Meta, Title, WorkImage } from "../../components/work";

const MenstruationNation = () => (
  <Layout title="Menstruation Nation">
    <Container>
      <Title type="projects">
        Developer <Badge>Oct 2022 - Jul 2023</Badge>
      </Title>
      <P>A free period tracker designed by youth for youth.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            variant="red-link"
            href="https://play.google.com/store/apps/details?id=com.tpp.theperiodpurse"
          >
            https://play.google.com/store/apps/details?id=com.tpp.theperiodpurse{" "}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link
            variant="red-link"
            href="https://github.com/uoftblueprint/the-period-purse-2023"
          >
            https://github.com/uoftblueprint/the-period-purse-2023{" "}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Kotlin, Android Jetpack, Room</span>
        </ListItem>
      </List>
      <WorkImage
        src="/images/projects/menstruation_nation/mnation_log.png"
        alt="Log your period"
      />
      <WorkImage
        src="/images/projects/menstruation_nation/mnation_record.png"
        alt="Record multiple period days at once"
      />
      <WorkImage
        src="/images/projects/menstruation_nation/mnation_track.png"
        alt="Keep track of symptoms"
      />
      <WorkImage
        src="/images/projects/menstruation_nation/mnation_cycle.png"
        alt="Understand your cycle"
      />
      <WorkImage
        src="/images/projects/menstruation_nation/mnation_learn.png"
        alt="Learn more about periods"
      />
      <WorkImage
        src="/images/projects/menstruation_nation/mnation_settings.png"
        alt="Customize your experience"
      />
    </Container>
  </Layout>
);

export default MenstruationNation;
export { getServerSideProps } from "../../components/chakra";
