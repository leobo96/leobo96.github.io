import React from "react";
import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";
import Projects from "../../Components/Projects/Projects";
import Contacts from "../../Components/Contacts/Contacts";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contacts />
    </>
  );
};

export default Home;
