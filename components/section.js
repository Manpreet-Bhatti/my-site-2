import { motion } from "framer-motion";
import {
  chakra,
  shouldForwardProp,
  usePrefersReducedMotion,
} from "@chakra-ui/react";

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => shouldForwardProp(prop) || prop === "transition",
});

const Section = ({ children, delay = 0 }) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animationProps = prefersReducedMotion
    ? {}
    : {
        initial: { y: 10, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.8, delay },
      };

  return (
    <StyledDiv {...animationProps} mb={6}>
      {children}
    </StyledDiv>
  );
};

export default Section;
