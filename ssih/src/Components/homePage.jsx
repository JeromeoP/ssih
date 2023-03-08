import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";
import { Link as ReachLink } from "@reach/router";

function HomePage() {
  return (
    <Container maxW="container.lg" py={16}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "stretch" }}
        my={8}
      >
        <Box flex="1" textAlign={{ base: "center", md: "left" }} mr={{ md: 8 }}>
          <Heading as="h1" size="2xl" mb={4}>
            Hello, World!
          </Heading>
          <Text fontSize="lg" mb={8}>
            Welcome to my website. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed at ante augue. Nunc mattis magna sed purus
            bibendum, a commodo elit maximus.
          </Text>
        </Box>
        <Box flex="1" alignSelf={{ base: "center", md: "flex-start" }}>
          <Image
            src="https://via.placeholder.com/400x400"
            alt="Placeholder Image"
            borderRadius="md"
          />
        </Box>
      </Flex>

      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
      >
        <Box
          flex="1"
          textAlign={{ base: "center", md: "left" }}
          mb={{ base: 8, md: 0 }}
        >
          <Heading as="h2" size="xl" mb={4}>
            <Link as={ReachLink} to="/previous-winner">
              Tidigare vinnare
            </Link>
          </Heading>
          <Text fontSize="lg">
            Återupplev de gamla ärofyllda vinnarnas bidrag med Sahlins "Ey,
            leker ni arga leken?" i spetsen.
          </Text>
        </Box>
        <Box flex="1">
          <Image
            src="/img/winner2020.png"
            alt="Placeholder Image"
            borderRadius="md"
          />
        </Box>
      </Flex>

      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
      >
        <Box
          flex="1"
          textAlign={{ base: "center", md: "left" }}
          mb={{ base: 8, md: 0 }}
        >
          <Heading as="h2" size="xl" mb={4}>
            Our Team
          </Heading>
          <Text fontSize="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante
            augue. Nunc mattis magna sed purus bibendum, a commodo elit maximus.
          </Text>
        </Box>
        <Box flex="1">
          <Image
            src="https://via.placeholder.com/400x400"
            alt="Placeholder Image"
            borderRadius="md"
          />
        </Box>
      </Flex>
    </Container>
  );
}

export default HomePage;
