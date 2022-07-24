import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { navItemType } from ".";
import Logo from "../UI/Logo/Logo";
import { useActiveSection } from "../../context/active-section-context";
import useStyleOnScroll from "../../hooks/useStyleOnScroll";
import Navigation from "./Navigation";

const Header: React.FC<{ navItems: navItemType[] }> = ({ navItems }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgStyle = useStyleOnScroll("trasparent", "white");

  const { activeSection, changeActiveSection } = useActiveSection();

  const onNavLinkClick = useCallback(
    (url: string) => {
      if (url !== activeSection || !activeSection) {
        changeActiveSection(url);
      }

      if (isOpen) {
        onClose();
      }
    },
    [activeSection, changeActiveSection, isOpen, onClose]
  );

  return (
    <Box
      as="header"
      bg={isOpen ? "white" : bgStyle}
      px={4}
      pos="fixed"
      zIndex={"sticky"}
      w="full"
      h={isOpen ? "100vh" : "max-content"}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Logo />

        <Box display={{ base: "none", lg: "flex" }}>
          <Navigation
            navItems={navItems}
            direction="row"
            onNavLinkClick={onNavLinkClick}
          />
        </Box>

        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ lg: "none" }}
          onClick={isOpen ? onClose : onOpen}
          colorScheme={"gray"}
        />
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ lg: "none" }} color={"white"} h="full">
          <Navigation
            navItems={navItems}
            direction="column"
            onNavLinkClick={onNavLinkClick}
          />
        </Box>
      )}
    </Box>
  );
};

export default Header;
