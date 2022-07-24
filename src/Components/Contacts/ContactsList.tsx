import { ExternalLinkIcon } from "@chakra-ui/icons";
import { HStack, Link, Stack, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface contactInfo {
  label: string;
  icon: ReactNode;
  url?: string;
}

const contacts = [
  {
    label: "Leonardo Bonaventura on LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/leonardobonaventura/",
  },
  {
    label: "leobo96 on Github",
    icon: <FaGithub />,
    url: "https://github.com/leobo96",
  },
];

const ContactRow: React.FC<contactInfo> = ({ label, icon, url }) => {
  const Base: React.FC = () => {
    return (
      <HStack>
        {icon}
        <Text>{label}</Text>
      </HStack>
    );
  };

  return (
    <>
      {url ? (
        <HStack>
          <Link href={url} isExternal>
            <Base />
          </Link>
          <ExternalLinkIcon />
        </HStack>
      ) : (
        <Base />
      )}
    </>
  );
};

const ContactsList: React.FC = () => {
  return (
    <Stack spacing={10}>
      {contacts.map((contact) => (
        <ContactRow
          key={contact.label}
          label={contact.label}
          icon={contact.icon}
          url={contact.url}
        />
      ))}
    </Stack>
  );
};

export default ContactsList;
