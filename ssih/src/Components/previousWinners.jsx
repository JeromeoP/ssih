import {
  Box,
  Container,
  Heading,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";

function PreviousWinners() {
  const winners = [
    { year: "2021", name: "Mona Sahlin", tweet: "Ey, leker ni arga leken?" },
    { year: "2020", name: "Michael Saliba", tweet: "I duschen på sats" },
    { year: "2019", name: "@Maiihan", tweet: "Den snälla rånaren" },
  ];

  return (
    <Container maxW="container.lg" py={16}>
      <Box textAlign="center" mb={8}>
        <Heading as="h2" size="xl" mb={4}>
          Tidigare vinnare
        </Heading>
        <Text fontSize="lg">
          Check out some of the funniest lies ever told on Twitter and the
          people who got away with them.
        </Text>
      </Box>
      <List spacing={3}>
        {winners.map((winner) => (
          <ListItem key={winner.year}>
            <Box>
              <Text fontSize="xl" fontWeight="bold">
                {winner.year} Segrare: {winner.name}
              </Text>
              <Text>{winner.tweet}</Text>
            </Box>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default PreviousWinners;
