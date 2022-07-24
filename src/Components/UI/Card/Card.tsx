import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

interface CardProps {
  title: string;
  description: string;
  image: string;
  type: string;
  url: string;
  supportUrl: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  type,
  url,
  supportUrl,
  children,
}) => {
  return (
    <Flex
      direction="column"
      py={6}
      h="100%"
      maxW={{ base: "100%", md: "445px" }}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"md"}
      p={6}
      overflow={"hidden"}
    >
      <Box
        h={"max-content"}
        bg={"gray.100"}
        mt={-6}
        mx={-6}
        mb={6}
        pos={"relative"}
      >
        <Image src={image} fit="contain" alt={title} loading="lazy" />
      </Box>
      <Flex grow={1} direction="column">
        <Text
          variant="gradient"
          textTransform={"uppercase"}
          fontWeight={800}
          fontSize={"sm"}
          letterSpacing={1.1}
        >
          {type}
        </Text>
        <Heading as="h3" variant="dark" fontSize={"2xl"} fontFamily={"body"}>
          {title}
        </Heading>
        <Text>{description}</Text>
      </Flex>
      {children}
      <ButtonGroup
        spacing={3}
        size="sm"
        mt={6}
        justifySelf={"flex-end"}
        alignSelf="flex-end"
      >
        <Button as={Link} isExternal href={url}>
          View
        </Button>
        <Button as={Link} isExternal href={supportUrl} variant="outline">
          {type === "development" ? "Source" : "Details"}
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Card;
