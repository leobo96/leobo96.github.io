import {
  Box,
  Container,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { navItemType } from ".";
import { portfolioRepository } from "../../Assets/data";
import Logo from "../UI/Logo/Logo";
import { useActiveSection } from "../../context/active-section-context";
import { SocialButtons } from "./SocialButtons";

const FooterNav: React.FC<{ navItems: navItemType[] }> = ({ navItems }) => {
  const { changeActiveSection } = useActiveSection();
  return (
    <Stack as="nav" direction={{ base: "column", md: "row" }} spacing={6}>
      {navItems.map((item) => (
        <Text
          textAlign="center"
          key={item.name}
          onClick={() => changeActiveSection(item.url)}
          color="white"
          cursor="pointer"
        >
          {item.name}
        </Text>
      ))}
    </Stack>
  );
};

const Footer: React.FC<{ navItems: navItemType[] }> = ({ navItems }) => {
  return (
    <Box
      as="footer"
      bg={useColorModeValue("gray.800", "gray.900")}
      color={useColorModeValue("gray.200", "gray.200")}
    >
      <Container maxW={"6xl"}>
        <Stack py={6} spacing={4} justify={"center"} align={"center"}>
          <Logo />
          <FooterNav navItems={navItems} />
        </Stack>

        <Text fontSize="xs">
          Ehi! This website is built with <Icon as={FaReact} /> react.ts,{" "}
          <Icon as={SiTypescript} /> typescript and chakra UI and it's
          open-source!{" "}
          <Link href={portfolioRepository} textDecor="underline" isExternal>
            Check the source code here
          </Link>
        </Text>

        <Stack
          py={4}
          spacing={4}
          direction={{ base: "column", md: "row-reverse" }}
          justify={{ base: "center", md: "space-between" }}
          align={"center"}
        >
          <SocialButtons />

          <Text fontSize="xs">
            © 2022 Leonardo Bonaventura. All rights reserved
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
