import { Text, useColorModeValue } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { useActiveSection } from "../../context/active-section-context";

interface NavLinkProps {
  url: string;
  text: string;
  onClick?: (_: string) => void;
}
const NavLink: React.FC<NavLinkProps> = ({ url, text, onClick }) => {
  const { activeSection } = useActiveSection();

  const clickHandler = useCallback(() => {
    onClick && onClick(url);
  }, [onClick, url]);

  const isActive = url === activeSection;

  return (
    <Text
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      color={isActive ? "red" : "gray.500"}
      onClick={clickHandler}
      cursor="pointer"
    >
      {text}
    </Text>
  );
};

export default NavLink;
