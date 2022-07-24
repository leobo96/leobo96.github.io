import { Badge, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";

const BadgeList: React.FC<{ data: string[] }> = ({ data }) => {
  return (
    <Wrap spacing={2} align={"center"}>
      {data.map((singleData: string) => (
        <WrapItem key={singleData}>
          <Badge>{singleData}</Badge>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default BadgeList;
