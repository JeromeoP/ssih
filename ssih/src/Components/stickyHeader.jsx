import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

function StickyHeader() {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      px={8}
      py={4}
      bg="gray.800"
      color="white"
      position="sticky"
      top={0}
      zIndex={10}
    >
      <Heading size="md">Saker som inte hänt 2023</Heading>
    </Flex>
  );
}

export default StickyHeader;
