import { AspectRatio, Box, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { about } from "../data/about";
import { useState } from "react";

const AboutSection = () => {
  const [play, setPlay] = useState(0);

  function handleSetPlay(value: any) {
    setPlay(value);
  }

  return (
    <section id="aboutSection">
      <SimpleGrid columns={[1, 2, 2]} maxW="100vw">
        <VStack bg="black" px={8} align={"stretch"} py={24}>
          <Box my={"auto"}>
            <Text color="white">{about.title}</Text>
            <Text mt={4} color="white" textAlign="justify">
              {about.description}
            </Text>
          </Box>
        </VStack>
        <VStack bg="black" px={8} py={24}>
          <Box my={"auto"} position={"relative"}>
            <Box position="absolute" px={6} py={6}>
              <Box
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                w={300}
                h={200}
                borderRadius={10}
                p={4}
              >
                {/* https://www.youtube.com/watch?v=DiwIv8tL6qo */}
              </Box>
            </Box>

            <Box
              w={300}
              h={200}
              borderRadius={10}
              overflow={"clip"}
              p={4}
              position="relative"
            >
              <AspectRatio
                maxW="400px"
                ratio={4 / 3}
                position="static"
                zIndex={2}
              >
                <iframe
                  title="Event Preview"
                  src={about.videoUrl + `?autoplay=${play}`}
                />
              </AspectRatio>
            </Box>

            {play === 0 && (
              <Box
                position="absolute"
                top={0}
                left={0}
                bgGradient="linear(to-l, #7928CA50, #FF008050)"
                w={300}
                h={200}
                borderRadius={10}
                p={4}
                onClick={() => handleSetPlay(1)}
              />
            )}
          </Box>
        </VStack>
      </SimpleGrid>
    </section>
  );
};

export default AboutSection;
