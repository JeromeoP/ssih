import {
  Box,
  Container,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

function PreviousWinners() {
  const winners = [
    { year: "2021", name: "Mona Sahlin", tweet: "Ey, leker ni arga leken?" },
    { year: "2020", name: "Michael Saliba", tweet: "I duschen på sats" },
    { year: "2019", name: "@Maiihan", tweet: "Den snälla rånaren" },
  ];

  const [showImage, setShowImage] = useState(false);

  const handleToggleImage = () => {
    setShowImage(!showImage);
  };

  return (
    <Container maxW="container.lg" py={16}>
      <Box textAlign="center" mb={8}>
        <Heading
          as="h2"
          size="2xl"
          mb={4}
          onClick={handleToggleImage}
          cursor="pointer"
        >
          Tidigare vinnare
        </Heading>
        <Text fontSize="xl" color="gray.600">
          Check out some of the funniest lies ever told on Twitter and the
          people who got away with them.
        </Text>
        {showImage && (
          <Box mt={8}>
            <Image
              src="https://via.placeholder.com/600x200"
              alt="Previous winners"
              borderRadius="lg"
              boxShadow="md"
            />
          </Box>
        )}
      </Box>
      <List spacing={3}>
        {winners.map((winner) => (
          <ListItem
            key={winner.year}
            bg="white"
            borderRadius="md"
            boxShadow="md"
            p={4}
          >
            <Box>
              <Text fontSize="xl" fontWeight="bold" mb={2}>
                {winner.year} Segrare: {winner.name}
              </Text>
              <Text fontSize="lg">{winner.tweet}</Text>
            </Box>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default PreviousWinners;
