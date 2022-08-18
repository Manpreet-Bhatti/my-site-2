import NextLink from "next/link";
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import theme from "../lib/theme";

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Uh oh 😬</Heading>
      <Text>
        The page you&apos;re looking for was not found. Please try another time!
      </Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button
            bg={useColorModeValue("#8f8f8f1a", theme.colors.redLight)}
            _hover={{ bg: useColorModeValue("#FAE8E9", "#7D1D22") }}
          >
            Return to home
          </Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound;
