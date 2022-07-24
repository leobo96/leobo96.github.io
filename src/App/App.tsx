import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import ActiveSectionProvider from "../context/active-section-context";
import theme from "../GlobalTheme";
import Home from "../Pages/Home/Home";
import Layout from "../Components/Layout";

export const App: React.FC = () => (
  <ChakraProvider theme={theme}>
    <ActiveSectionProvider>
      <Layout>
        <Home />
      </Layout>
    </ActiveSectionProvider>
  </ChakraProvider>
);
