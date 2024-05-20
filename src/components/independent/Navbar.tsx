import { Box, Button, HStack, Icon, IconButton, Text } from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";
import useScreenWidth from "../../lib/useScreenWidth";
import { navs } from "../../data/nav-list";
import { RiMenu4Line } from "@remixicon/react";

const Navbar = () => {
  const sw = useScreenWidth();

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
        <IconButton
          aria-label="nav-button"
          icon={<Icon as={RiMenu4Line} fontSize={20} />}
        />
      )}
    </HStack>
  );
};

export default Navbar;
