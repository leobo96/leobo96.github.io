import { Text } from "@chakra-ui/react";
import { useActiveSection } from "../../../context/active-section-context";

const Logo = () => {
  const { changeActiveSection } = useActiveSection();

  return (
    <Text
      fontFamily="heading"
      fontSize="xl"
      fontWeight="bold"
      bgGradient="linear(to-l, red.500, blue.500)"
      bgClip="text"
      onClick={() => changeActiveSection("#home")}
      cursor="pointer"
    >
      Leonardo Bonaventura
    </Text>
  );
};

export default Logo;
