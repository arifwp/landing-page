import { AspectRatio, Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { RiMapPin2Line } from "@remixicon/react";
import { event } from "../data/event";

const EventInfo = () => {
  return (
    <VStack align={"stretch"} mt={10}>
      <Text color={"white"} fontSize={"18px"} fontWeight={"semibold"}>
        Kontak Whatsapp
      </Text>

      <Text
        color={"white"}
      >{`${event.generalAdminWhatsapp} ( ${event.generalAdminName} )`}</Text>
      <Text
        color={"white"}
      >{`${event.bazarAdminWhatsapp} ( ${event.bazarAdminName} )`}</Text>

      <Text color={"white"} fontSize={"18px"} fontWeight={"semibold"} mt={8}>
        {`Sekretariat ${event.eventNameWithYear}`}
      </Text>
      <HStack spacing={2}>
        <Icon as={RiMapPin2Line} color={"white"}></Icon>
        <Text color={"white"}>Depan Tugu KB Desa Ketaon</Text>
      </HStack>

      <AspectRatio ratio={16 / 9} mt={4}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.4209307238666!2d110.6777817!3d-7.5289831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a6d3eb0bd5825%3A0x8661c45e26616318!2sBalai%20Desa%20Ketaon!5e0!3m2!1sen!2sid!4v1717057286251!5m2!1sen!2sid"></iframe>
      </AspectRatio>
    </VStack>
  );
};

export default EventInfo;
