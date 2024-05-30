import { HStack, Stack, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import Empty from "../components/Empty";
import Event from "../components/Event";
import { eventList } from "../data/event-list";
import ScheduleItem from "../components/ScheduleItem";

const ScheduleSection = () => {
  return (
    <section id="scheduleSection">
      <VStack
        backgroundImage="url('/images/bg_artist.png')"
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        py={24}
        boxSize={"cover"}
      >
        <Wrap py={4} spacing={10} align="center" justify="center" px={2}>
          <WrapItem>
            <Stack direction={["row", "row", "column", "column"]} align={"end"}>
              <Text
                color={"white"}
                fontSize={{ base: "12px", md: "14px", lg: "16px" }}
              >
                ayo ramaikan
              </Text>
              <Text
                color={"white"}
                fontSize={{ base: "12px", md: "14px", lg: "16px" }}
              >
                datang ke
              </Text>
              <Text
                color={"white"}
                fontSize={{ base: "12px", md: "14px", lg: "16px" }}
              >
                event ini
              </Text>
            </Stack>
          </WrapItem>

          <WrapItem>
            <HStack spacing={8} align={"stretch"}>
              <VStack>
                <Text
                  color={"white"}
                  fontWeight={"bold"}
                  fontSize={{
                    base: "20px",
                    sm: "40px",
                    md: "40px",
                    lg: "68px",
                  }}
                >
                  30
                </Text>
                <Text
                  color={"blue.500"}
                  fontWeight={"semibold"}
                  fontSize={{ base: "12px", md: "16px", lg: "24px" }}
                >
                  Tanggal
                </Text>
              </VStack>

              {/* <Heading color={"white"}>/</Heading> */}

              <VStack>
                <Text
                  color={"white"}
                  fontWeight={"bold"}
                  fontSize={{
                    base: "20px",
                    sm: "40px",
                    md: "40px",
                    lg: "68px",
                  }}
                >
                  September
                </Text>
                <Text
                  color={"blue.500"}
                  fontWeight={"semibold"}
                  fontSize={{ base: "12px", md: "16px", lg: "24px" }}
                >
                  Bulan
                </Text>
              </VStack>

              {/* <Heading color={"white"}>/</Heading> */}

              <VStack>
                <Text
                  color={"white"}
                  fontWeight={"bold"}
                  fontSize={{
                    base: "20px",
                    sm: "40px",
                    md: "40px",
                    lg: "68px",
                  }}
                >
                  2024
                </Text>
                <Text
                  color={"blue.500"}
                  fontWeight={"semibold"}
                  fontSize={{ base: "12px", md: "16px", lg: "24px" }}
                >
                  Tahun
                </Text>
              </VStack>
            </HStack>
          </WrapItem>
        </Wrap>

        {eventList.length > 0 ? (
          <Wrap spacing={"30px"} justify={"center"} mt={10} mx={"auto"} px={8}>
            {eventList.map((event, i) => (
              // <Event data={event} key={i} />

              <ScheduleItem data={event} key={i} />
            ))}
          </Wrap>
        ) : (
          <Empty componentName="schedule" />
        )}

        {/* <Wrap spacing={"30px"} justify={"center"} mt={10} mx={"auto"}>
            {eventList.length > 0 ? (
              eventList.map((event, i) => <Event data={event} key={i} />)
            ) : (
              <Empty componentName="schedule" />
            )}
          </Wrap> */}
      </VStack>
    </section>
  );
};

export default ScheduleSection;
