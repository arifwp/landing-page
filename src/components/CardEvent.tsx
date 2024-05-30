import {
  AspectRatio,
  Box,
  Container,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { EventItem } from "../data/event-list";
import React from "react";

const CardEvent: React.FC<{ data: EventItem }> = (data) => {
  const item = data.data;

  return (
    <Box m={2}>
      <Box
        h={"360px"}
        position="relative"
        // bgImage="https://fakeimg.pl/800x600"
        bgImage={item.thumbnail}
        bgSize={"cover"}
        backgroundPosition={"center"}
      >
        <Box
          bgGradient="linear(to-l, #A00000, #C62128)"
          opacity={"0.3"}
          h={"100%"}
        ></Box>
      </Box>
      <VStack bg={"black"} mt={8} mb={12}>
        <Text color={"red.500"} as="b" fontSize={"24px"} textAlign={"center"}>
          {item.name}
        </Text>
        <Text color={"white"} fontSize={"20px"} mb={8}>
          {item.location}
        </Text>
        <Box h={1} bg={"red.500"} width={"100%"} bottom={0}></Box>
      </VStack>
    </Box>
  );
};

export default CardEvent;
