import {
  Collapse,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { imgGallery } from "../data/gallery-list";
import GalleryItemModal from "./GalleryItemModal";

const GallerySection = () => {
  const [show, setShow] = useState(false);

  const handleLoadMore = () => setShow(!show);

  return (
    <section id="gallerySection">
      <VStack bg={"black"} px={8} pt={24}>
        <Text color={"blue.500"} fontWeight={"semibold"}>
          Gallery
        </Text>
        <Heading color={"white"} textAlign={"center"}>
          Foto kamu ada disini ga?
        </Heading>
        <Text color={"white"} textAlign={"center"}>
          Kamu bisa lihat dan download langsung fotonya dari website ini ya
          guysss
        </Text>

        <Tabs mt={10} variant={"unstyled"}>
          <TabList color={"white"} justifyContent={"center"}>
            {imgGallery.map((tab, i) => (
              <Tab key={i} _selected={{ color: "white", bg: "blue.500" }}>
                {tab.year}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {imgGallery.map((tab, index) => {
              return (
                <TabPanel
                  key={index}
                  w={"100%"}
                  bgColor={"black"}
                  position={"relative"}
                  // overflow={"hidden"}
                >
                  <Collapse startingHeight={260} in={show}>
                    <Wrap
                      display={"flex"}
                      flexWrap={"wrap"}
                      key={index}
                      spacing={"6px"}
                      align={"center"}
                    >
                      {tab.imgUrl.map((img, i) => (
                        <WrapItem
                          flex={"1 1 auto"}
                          height={"100px"}
                          key={i}
                          _hover={{ cursor: "pointer" }}
                        >
                          <GalleryItemModal src={img.src} alt={img.alt} />
                        </WrapItem>
                      ))}
                    </Wrap>
                  </Collapse>

                  <VStack
                    w={"100%"}
                    h={"50px"}
                    p={4}
                    bgGradient="linear(to-t, #000000 40%, transparent 100%)"
                    position={"absolute"}
                    mt={!show ? "-30px" : "0px"}
                    onClick={handleLoadMore}
                    _hover={{ cursor: "pointer" }}
                  >
                    <Text color={"white"} bottom={0}>
                      {show ? "Lebih Sedikit" : "Lebih Banyak"}
                    </Text>
                  </VStack>
                </TabPanel>
              );
            })}
          </TabPanels>
        </Tabs>
      </VStack>
    </section>
  );
};

export default GallerySection;
