import React from "react";
import { Box, AspectRatio } from "@chakra-ui/react";

const Map: React.FC = () => {
  return (
    <Box width="320px" justifySelf={{ base: "center", md: "end" }}>
      <AspectRatio maxW="320px" ratio={1}>
        <iframe
          title="location"
          src="https://www.google.com/maps/embed/v1/place?q=sesto+marelli&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        ></iframe>
      </AspectRatio>
    </Box>
  );
};

export default Map;
