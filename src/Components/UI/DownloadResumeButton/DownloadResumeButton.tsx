import { Button, Link } from "@chakra-ui/react";
import React from "react";
import { HiDownload } from "react-icons/hi";
import curriculum from "../../../Assets/CV.pdf";

export const DownloadResumeButton: React.FC<{
  label?: string;
  variant?: "link" | "solid" | "outline";
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
}> = ({ label, variant = "solid", size = "sm", showIcon = true }) => (
  <Button
    as={Link}
    isExternal
    href={curriculum}
    variant={variant}
    size={size}
    mr={4}
    leftIcon={showIcon ? <HiDownload /> : undefined}
    maxWidth="max-content"
    minWidth="min-content"
  >
    {label ? label : "Download CV"}
  </Button>
);
