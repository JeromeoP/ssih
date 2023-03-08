import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import { Link as ReachLink } from "@reach/router";

function Footer() {
  return (
    <Box as="footer" py={8} bg="gray.800" color="white">
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        maxW="container.lg"
        mx="auto"
      >
        <Box textAlign={{ base: "center", md: "left" }}>
          <Text fontSize="lg">&copy; Saker som inte hänt 2023</Text>
        </Box>
        <Box mt={{ base: 8, md: 0 }}>
          <Link as={ReachLink} to="/" mr={4} fontSize="lg">
            Home
          </Link>
          <Link mr={4} fontSize="lg" href="#">
            About
          </Link>
          <Link fontSize="lg" href="#">
            Contact
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}

export default Footer;
