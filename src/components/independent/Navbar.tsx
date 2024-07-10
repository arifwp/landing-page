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
import { RiCloseCircleLine, RiMenu3Line } from "@remixicon/react";
import { HashLink } from "react-router-hash-link";
import { event } from "../../data/event";
import { navs } from "../../data/nav-list";
import useScreenWidth from "../../lib/useScreenWidth";
import { CContainer } from "../CContainer";

const Navbar = () => {
  const sw = useScreenWidth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <CContainer>
      <HStack
        w={"100%"}
        maxW={"1440px"}
        justify={"space-between"}
        px={[5, null, 8]}
        py={4}
        position="fixed"
        bg="rgba(0, 0 ,0 ,0.5)"
        zIndex={999}
        backdropFilter="auto"
        backdropBlur={"2px"}
      >
        <Box>
          <Text
            color="white"
            fontWeight={"bold"}
            fontSize={{ base: "16px", md: "24px", lg: "32px" }}
          >
            {event.eventName}
          </Text>
        </Box>

        {sw >= 640 && (
          <HStack>
            {navs.map((nav, i) => (
              <HashLink to={nav.link} key={i}>
                <Button
                  key={i}
                  colorScheme="red"
                  textColor={"white"}
                  variant="ghost"
                  fontWeight={"semibold"}
                >
                  {nav.label}
                </Button>
              </HashLink>
            ))}
          </HStack>
        )}

        {sw <= 640 && (
          <>
            <IconButton
              aria-label="nav-button"
              bgColor={"transparent"}
              icon={
                <Icon
                  as={RiMenu3Line}
                  color={"white"}
                  fontSize={20}
                  onClick={onOpen}
                />
              }
            />
            <Drawer onClose={onClose} isOpen={isOpen} size={"xs"}>
              <DrawerOverlay />
              <DrawerContent
                bg="rgba(0, 0 ,0 ,0.5)"
                backdropFilter="auto"
                backdropBlur={"10px"}
              >
                <DrawerCloseButton>
                  <Icon
                    as={RiCloseCircleLine}
                    color={"red.500"}
                    fontSize={"28px"}
                    mt={4}
                    mr={4}
                  ></Icon>
                </DrawerCloseButton>
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
                          onClick={() => onClose()}
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
    </CContainer>
  );
};

export default Navbar;
