import { Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import ContactWhatsapp from "../components/ContactWhatsapp";
import EventInfo from "../components/EventInfo";

const ContactSection = () => {
  return (
    <section id="contactSection">
      <VStack px={8} py={24} bg={"black"}>
        <Text color={"blue.500"} fontWeight={"semibold"}>
          Kontak Kita
        </Text>
        <Heading color={"white"} textAlign={"center"}>
          Kirim Pesan
        </Heading>
        <Text color={"white"} textAlign={"center"}>
          Disini kamu bisa ngirim pesan via whatsapp ke admin kita lohh
        </Text>

        <SimpleGrid columns={[1, null, 2]} spacing={10} w={"100%"}>
          <ContactWhatsapp />

          <EventInfo />
        </SimpleGrid>
      </VStack>
    </section>
  );
};

export default ContactSection;
