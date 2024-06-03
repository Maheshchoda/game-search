import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      transition="transform 0.3s ease, box-shadow 0.3s ease, width 0.3s ease, height 0.3s ease"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "lg",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
