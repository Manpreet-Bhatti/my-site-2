import { Badge, Container, Text, List, ListItem, Link } from "@chakra-ui/react";
import Layout from "../../components/layouts/single-column";
import { Title, Meta } from "../../components/work";
import P from "../../components/paragraph";
import theme from "../../lib/theme";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Agentnoon = () => {
    <Layout title="Agentnoon">
        <Container>
            <Title>
                Agentnoon (Front-end Engineer) <Badge>Dec 2022 - Present</Badge>
            </Title>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link variant="red-link" href="https://agentnoon.com/">
                        https://agentnoon.com/ <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>
            <P>
                A software company that provides Real Time Work Force Planning for Fast HR System Integrations
            </P>
            <Text color={theme.colors.redLight}>Free S&P 500 Tool</Text>
            <P>
                Led the development of an S&P 500 forecast tool, allowing executives to view market data such as total revenue, cost of revenue, research and development expedenture, and more.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    {/* <Link variant="red-link" href="https://www.cheapreats.com/">
                        https://www.cheapreats.com/ <ExternalLinkIcon mx="2px" />
                    </Link> */}
                    <span>TBA</span>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Web</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Python</span>
                </ListItem>
            </List>
        </Container>
    </Layout>
};

export default Agentnoon;
export { getServerSideProps } from "../../components/chakra";