import { Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { DownloadResumeButton } from "../UI/DownloadResumeButton/DownloadResumeButton";
import { useActiveSection } from "../../context/active-section-context";

const Hero: React.FC = () => {
  const { changeActiveSection } = useActiveSection();

  return (
    <Container
      textAlign={{ base: "center", sm: "start" }}
      maxW={"3xl"}
      as="section"
      h={{ base: "70vh", md: "90vh" }}
      display="flex"
      alignItems="center"
      id="home"
    >
      <Stack spacing={{ base: 8, md: 14 }}>
        <Heading
          as="h1"
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
          bgGradient="linear(to-l, red.500, blue.500)"
          bgClip="text"
        >
          Leonardo Bonaventura
        </Heading>
        <Text>
          I'm a front-end developer. I build responsive user interfaces for web
          application in React with particular attention to usability and user
          experience
        </Text>
        <Stack
          direction={["column", "row"]}
          spacing={6}
          align={"center"}
          alignSelf={"center"}
          position={"relative"}
        >
          <Button onClick={() => changeActiveSection("#contacts")} size="lg">
            Contact me
          </Button>
          <DownloadResumeButton variant={"outline"} size="md">
            Download CV
          </DownloadResumeButton>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Hero;
