import { Flex, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import profilePic from "../../Assets/images/profilePic-min.webp";
import { DownloadResumeButton } from "../UI/DownloadResumeButton/DownloadResumeButton";
import Section from "../UI/Section/Section";

const About: React.FC = () => {
  return (
    <Section contained id="about" title="About me">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 10, md: 0 }}>
        <Stack spacing={8}>
          <Stack spacing={4}>
            <Text>
              I started studying front-end development after I graduated in
              psychology.
            </Text>
            <Text>
              I got a Master's degree in Communication's Theory & Technology,
              where I learnt a lot about web technologies, User-centered design
              and visual design.
            </Text>
            <Text>
              My passion for psychology remains. I read a lot of books about
              Social Psychology, Internet psychology and how people take
              decisions.
            </Text>
            <Text>
              In general I am constantly engaged in learning something new, be
              it a new technology or aspects of how the mind works.
            </Text>
          </Stack>
          <Flex justifyContent={{ base: "center", md: "flex-end" }}>
            <DownloadResumeButton
              label="Look at my resume"
              size="md"
              showIcon={false}
            />
          </Flex>
        </Stack>

        <Image
          maxW={{ md: "xs", lg: "sm" }}
          justifySelf={{ base: "center", lg: "end" }}
          rounded={"md"}
          alt={"profile picture"}
          src={profilePic}
          objectFit={"cover"}
          loading="lazy"
        />
      </SimpleGrid>
    </Section>
  );
};

export default About;
