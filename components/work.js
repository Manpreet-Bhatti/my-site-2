import { Heading, Box, Image, Badge } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { ChevronRightIcon } from "@chakra-ui/icons";

export const Title = ({ type, children }) => (
  <Box>
    <Link href={`/${type}`}>
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </Link>
    <span>
      {" "}
      <ChevronRightIcon />{" "}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
);

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
);

export const Meta = ({ children }) => (
  <Badge colorScheme="red" mr={2}>
    {children}
  </Badge>
);
