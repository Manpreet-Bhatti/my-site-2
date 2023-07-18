import { Badge, Container, Text, List, ListItem, Link } from "@chakra-ui/react";
import Layout from "../../components/layouts/single-column";
import { Title, Meta, WorkImage } from "../../components/work";
import P from "../../components/paragraph";
import theme from "../../lib/theme";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Agentnoon = () => (
    <Layout title="Agentnoon">
        <Container>
            <Title>
                Agentnoon (Software Developer) <Badge>Jan 2023 - Present</Badge>
            </Title>
            <P>
                A software company that provides real-time workforce planning for fast HR system integrations.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link variant="red-link" href="https://agentnoon.com/">
                        https://agentnoon.com/ <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>
            <Text color={theme.colors.redLight}>S&P 500 Spending Benchmark Tool</Text>
            <P>
                Supervised the creation of an S&P 500 benchmark tool that gave executives access to market information such total revenue, cost of revenue, R&D spending, selling and marketing expenses, and general and administrative costs.
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
                    <span>Python, TypeScript, Vue, Nuxt.js</span>
                </ListItem>
            </List>
            <Text color={theme.colors.redLight}>NoonAI</Text>
            <P></P>
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
                    <span>JavaScript, Vue</span>
                </ListItem>
            </List>
            <Text color={theme.colors.redLight}>Agentnoon.com</Text>
            <P></P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link variant="red-link" href="https://agentnoon.com/">
                        https://agentnoon.com/ <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Web</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Framer, React, JavaScript</span>
                </ListItem>
            </List>
            <WorkImage
                src="/images/work/agentnoon/agentnoon_benchmark_01.png"
                alt="Agentnoon spending benchmark tool landing page"
            />
            <WorkImage
                src="/images/work/agentnoon/agentnoon_benchmark_02.png"
                alt="Agentnoon spending benchmark for the Software industry"
            />
            <WorkImage
                src="/images/work/agentnoon/agentnoon_benchmark_03.png"
                alt="Example org chart for the Software industry"
            />
        </Container>
    </Layout>
);

export default Agentnoon;
export { getServerSideProps } from "../../components/chakra";