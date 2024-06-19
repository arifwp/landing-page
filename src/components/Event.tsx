import { Box, HStack, Icon, Text, VStack, WrapItem } from "@chakra-ui/react";
import { RiMapPin2Fill, RiTimeFill } from "@remixicon/react";
import React from "react";
import { EventItem } from "../data/event-list";

const Event: React.FC<{ data: EventItem }> = (data) => {
  const item = data.data;

  return (
    <WrapItem
      minH={"300px"}
      minW={"260px"}
      position="relative"
      backgroundImage={item.thumbnail}
      bgSize={"cover"}
      backgroundPosition={"center"}
    >
      <Box
        bgGradient="linear(to-b, #ffffff00 40%, #3182CE 100%)"
        w={"100%"}
        h={"100%"}
        position={"absolute"}
      ></Box>
      <VStack
        w={"100%"}
        bottom={0}
        m={0}
        p={0}
        position={"absolute"}
        textAlign={"center"}
      >
        <Text color={"white"} as="b" fontSize={"16px"} textAlign={"center"}>
          {item.name}
        </Text>

        <HStack mb={4} spacing={4} textAlign={"center"} mx={4}>
          <HStack textAlign={"left"}>
            <Icon as={RiMapPin2Fill} color={"white"}></Icon>
            <Text color={"white"} fontSize={"14px"}>
              {item.location}
            </Text>
          </HStack>

          <HStack textAlign={"left"}>
            <Icon as={RiTimeFill} color={"white"}></Icon>
            <Text color={"white"} fontSize={"14px"}>
              {item.time}
            </Text>
          </HStack>
        </HStack>
      </VStack>
    </WrapItem>
  );
};

export default Event;
