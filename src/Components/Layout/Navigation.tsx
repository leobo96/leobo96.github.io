import { Stack, StackDirection } from "@chakra-ui/react";
import React from "react";
import { navItemType } from ".";
import { DownloadResumeButton } from "../UI/DownloadResumeButton/DownloadResumeButton";
import NavLink from "./NavLink";
interface NavigationProps {
  navItems: navItemType[];
  direction: StackDirection;
  onNavLinkClick?: (_: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  navItems,
  direction,
  onNavLinkClick,
}) => {
  const navLinks = navItems.map((item) => {
    return (
      <NavLink
        key={item.name}
        url={item.url}
        text={item.name}
        onClick={onNavLinkClick}
      />
    );
  });

  return (
    <Stack as={"nav"} spacing={4} direction={direction}>
      {navLinks}

      <DownloadResumeButton />
    </Stack>
  );
};

export default Navigation;
