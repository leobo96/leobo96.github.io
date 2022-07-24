import { Container, SimpleGrid } from "@chakra-ui/react";
import Section from "../UI/Section/Section";
import ContactsList from "./ContactsList";
import Map from "./Map";

const Contacts: React.FC = () => {
  return (
    <Section
      id="contacts"
      title="Contacts"
      subtitle="Would you like to ask me something or just keep in touch?"
    >
      <Container maxW="container.lg">
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={10}
          alignItems="center"
        >
          <ContactsList />
          {/* <Map /> */}
        </SimpleGrid>
      </Container>
    </Section>
  );
};

export default Contacts;
