import {
  chakra,
  Link,
  Stack,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialButton: React.FC<{
  label: string;
  href: string;
}> = ({ label, href, children }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={Link}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
      isExternal
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const SocialButtons: React.FC = () => {
  return (
    <Stack direction={"row"} spacing={6}>
      <SocialButton
        label={"Linkedin"}
        href={"https://www.linkedin.com/in/leonardobonaventura/"}
      >
        <FaLinkedin />
      </SocialButton>
      <SocialButton label={"Github"} href={"https://github.com/leobo96"}>
        <FaGithub />
      </SocialButton>
    </Stack>
  );
};
