import NextLink from "next/link";
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Uh oh 😬</Heading>
      <Text>
        The page you&apos;re looking for was not found. Please try another time!
      </Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Button as={NextLink} href="/" variant={"red-button"}>Return to home</Button>
      </Box>
    </Container>
  );
};

export default NotFound;
