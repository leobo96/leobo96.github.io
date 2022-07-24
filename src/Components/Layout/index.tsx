import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Main } from "./styles";

export interface navItemType {
  name: string;
  url: string;
}

const navItems: navItemType[] = [
  { name: "Home", url: "#home" },
  { name: "About me", url: "#about" },
  { name: "Projects", url: "#projects" },
  { name: "Contact me", url: "#contacts" },
];

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header navItems={navItems} />
      <Main>{children}</Main>
      <Footer navItems={navItems} />
    </>
  );
};

export default Layout;
