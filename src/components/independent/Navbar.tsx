import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Icon,
  IconButton,
  Image,
  Text,
  VStack,
  Wrap,
  useDisclosure,
} from "@chakra-ui/react";
import { RiMenu4Line } from "@remixicon/react";
import { HashLink } from "react-router-hash-link";
import { event } from "../../data/event";
import { navs } from "../../data/nav-list";
import useScreenWidth from "../../lib/useScreenWidth";

const Navbar = () => {
  const sw = useScreenWidth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HStack
      w={"100%"}
      justify={"space-between"}
      px={[5, null, 8]}
      py={6}
      position="fixed"
      bg="rgba(0, 0 ,0 ,0.5)"
      zIndex={2}
    >
      <Box>
        <Text color="white" fontSize={{ base: "12px", md: "24px", lg: "32px" }}>
          LaLaLa Fest
        </Text>
      </Box>

      {sw >= 640 && (
        <HStack>
          {navs.map((nav, i) => (
            <HashLink to={nav.link} key={i}>
              <Button key={i} colorScheme="red" variant="ghost">
                {nav.label}
              </Button>
            </HashLink>
          ))}
        </HStack>
      )}

      {sw < 768 && (
        <>
          <IconButton
            aria-label="nav-button"
            icon={<Icon as={RiMenu4Line} fontSize={20} onClick={onOpen} />}
          />
          <Drawer onClose={onClose} isOpen={isOpen} size={"xs"}>
            <DrawerOverlay />
            <DrawerContent bg={"#E53E3E"}>
              <DrawerCloseButton />
              <DrawerHeader>
                <VStack>
                  <Image src={event.eventLogo} h="80px" />
                  <Text color="white">{event.eventName}</Text>
                </VStack>
              </DrawerHeader>
              <DrawerBody>
                <VStack alignItems="left">
                  <Wrap justify="center">
                    <Box bg="white" h="1px" w="90%" opacity="0.3"></Box>
                  </Wrap>
                  {navs.map((nav, i) => (
                    <HashLink to={nav.link} key={i}>
                      <Button
                        key={i}
                        colorScheme="red"
                        textColor="white"
                        variant="ghost"
                      >
                        {nav.label}
                      </Button>
                    </HashLink>
                  ))}
                </VStack>
              </DrawerBody>
              <Box position="relative" opacity="0.1">
                <Image
                  src={event.eventLogo}
                  h="200px"
                  position="absolute"
                  bottom="0"
                  right="0"
                />
              </Box>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </HStack>
  );
};

export default Navbar;
