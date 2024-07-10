import { HStack, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import Empty from "../components/Empty";
import ScheduleItem from "../components/ScheduleItem";
import { eventList } from "../data/event-list";
import { CContainer } from "../components/CContainer";

const ScheduleSection = () => {
  return (
    <CContainer>
      <section id="scheduleSection" style={{ width: "100%" }}>
        <VStack
          backgroundImage="url('/images/bg_artist.png')"
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          py={24}
          bgSize={"cover"}
        >
          <Wrap py={4} spacing={10} align="center" justify="center" px={2}>
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
                    7
                  </Text>
                  <Text
                    color={"red.500"}
                    fontWeight={"semibold"}
                    fontSize={{ base: "12px", md: "16px", lg: "24px" }}
                  >
                    Tanggal
                  </Text>
                </VStack>

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
                    color={"red.500"}
                    fontWeight={"semibold"}
                    fontSize={{ base: "12px", md: "16px", lg: "24px" }}
                  >
                    Bulan
                  </Text>
                </VStack>

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
                    color={"red.500"}
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
            <Wrap
              spacing={"30px"}
              justify={"center"}
              mt={10}
              mx={"auto"}
              px={8}
            >
              {eventList.map((event, i) => (
                <ScheduleItem data={event} key={i} />
              ))}
            </Wrap>
          ) : (
            <Empty componentName="schedule" />
          )}
        </VStack>
      </section>
    </CContainer>
  );
};

export default ScheduleSection;
