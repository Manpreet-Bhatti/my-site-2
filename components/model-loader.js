import { forwardRef } from "react";
import { Box, Spinner } from "@chakra-ui/react";
import theme from "../lib/theme";

export const ModelSpinner = () => (
  <Spinner
    color={theme.colors.redLight}
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);

export const ModelContainer = forwardRef(({ children }, ref) => (
  <Box ref={ref} m="auto" mt={["56px"]} w={200} h={200} position="relative">
    {children}
  </Box>
));

const Loader = () => {
  return (
    <ModelContainer>
      <ModelSpinner />
    </ModelContainer>
  );
};

export default Loader;
