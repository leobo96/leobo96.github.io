import { Container, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const CardGrid: React.FC = ({ children }) => {
  return (
    <Container maxW="container.lg">
      <SimpleGrid minChildWidth={{ base: "100%", md: "300px" }} gap={6}>
        {Array.isArray(children) && children.map((card) => card)}
      </SimpleGrid>
    </Container>
  );
};

export default CardGrid;
