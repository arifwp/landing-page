import { Heading, Text, VStack, Wrap } from "@chakra-ui/react";
import Event from "../components/Event";
import { eventList } from "../data/event-list";

const ScheduleSection = () => {
  return (
    <section id="scheduleSection">
      <VStack bg={"black"} px={8} py={24} boxSize={"cover"}>
        <VStack>
          <Text color={"blue.500"}>lorem ipsum dolor sit amet</Text>
          <Heading color={"white"} textAlign={"center"}>
            Lorem ipsum dolor sit amet gila saja
          </Heading>
          <Text color={"white"}>ini description</Text>
          <Wrap spacing={"30px"} justify={"center"} mt={10} mx={"auto"}>
            {eventList.length > 0 ? (
              eventList.map((event, i) => <Event data={event} key={i} />)
            ) : (
              <Text color={"white"}>
                ~ Belum ada informasi untuk ditampilkan ~
              </Text>
            )}
          </Wrap>
        </VStack>
      </VStack>
    </section>
  );
};

export default ScheduleSection;
