import {
  AspectRatio,
  Card,
  CardBody,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
  WrapItem,
} from "@chakra-ui/react";
import { RiMap2Line, RiMapPin2Line, RiTimer2Line } from "@remixicon/react";
import React from "react";
import { EventItem } from "../data/event-list";

const ScheduleItem: React.FC<{ data: EventItem }> = (props) => {
  const item = props.data;

  return (
    <WrapItem>
      <Card
        bgColor="rgba(0, 0 ,0 ,0.5)"
        backdropFilter="auto"
        backdropBlur={"2px"}
        w={{ base: "220px", sm: "240px", md: "320px", lg: "360px" }}
      >
        <CardBody>
          <AspectRatio ratio={16 / 9}>
            <Image
              src={item.thumbnail}
              alt={item.name}
              borderRadius="lg"
              w={"100%"}
            />
          </AspectRatio>
          <VStack align={"stretch"}>
            <Text color="red.500" fontSize="10px" mt={4}>
              Festival, Music
            </Text>
            <Heading as={"h5"} size={"sm"} color={"white"} mt={-1.5}>
              {item.name}
            </Heading>
            <HStack color={"white"} mt={2}>
              <Icon as={RiMapPin2Line}></Icon>
              <Text fontSize={{ base: "10px", md: "12px", lg: "14px" }}>
                {item.location}
              </Text>
            </HStack>
            <HStack color={"white"}>
              <Icon as={RiTimer2Line}></Icon>
              <Text fontSize={{ base: "10px", md: "12px", lg: "14px" }}>
                {item.time}
              </Text>
            </HStack>
          </VStack>
        </CardBody>
      </Card>
    </WrapItem>
  );
};

export default ScheduleItem;
