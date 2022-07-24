import { Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { projectData, ProjectType } from "../../Assets/data";
import BadgeList from "../UI/BadgeList/BadgeList";
import Card from "../UI/Card/Card";
import CardGrid from "../UI/CardGrid/CardGrid";
import Section from "../UI/Section/Section";

const Projects: React.FC = () => {
  const cards = projectData.map((project: ProjectType) => (
    <Card
      key={project.name}
      title={project.name}
      description={project.description}
      image={project.image}
      type={project.type}
      url={project.url}
      supportUrl={project.supportUrl}
    >
      <Stack direction={"column"} spacing={2} mt={4}>
        <Heading variant="dark" fontFamily="body" as="h4" fontSize="sm">
          Skills
        </Heading>
        <BadgeList data={project.tech} />
      </Stack>
    </Card>
  ));

  return (
    <Section
      id="projects"
      title="My projects"
      subtitle="The projects I'm most proud of"
    >
      <CardGrid>{cards}</CardGrid>
    </Section>
  );
};

export default Projects;
