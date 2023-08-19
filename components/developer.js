import Image from "next/image";
import { Box } from "@chakra-ui/react";

const Developer = () => {
  const developerGif = "/images/developer.gif";

  return (
    <Box mt={14} mb={-7}>
      <Image src={developerGif} alt="developer" width={280} height={280} />
    </Box>
  );
};

export default Developer;
