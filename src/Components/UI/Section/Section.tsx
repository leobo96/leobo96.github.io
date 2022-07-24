import { BoxProps, Container, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

interface sectionProps extends BoxProps {
  id: string;
  title: string;
  subtitle?: string;
  contained?: boolean;
}

const Section: React.FC<sectionProps> = ({
  id,
  title,
  subtitle,
  children,
  contained = true,
}) => {
  return (
    <Container
      as="section"
      maxW={contained ? "container.lg" : undefined}
      id={id}
      pb={24}
    >
      <VStack
        spacing={8}
        alignItems="flex-start"
        maxW={!contained ? "container.lg" : undefined}
      >
        <VStack spacing={4} alignItems="flex-start">
          <Heading>{title}</Heading>
          {subtitle && <Text>{subtitle}</Text>}
        </VStack>
        {children}
      </VStack>
    </Container>
  );
};

export default Section;
