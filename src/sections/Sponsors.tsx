import { Heading, Image, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import Empty from "../components/Empty";
import { event } from "../data/event";
import { sponsors } from "../data/sponsors";
import useScreenWidth from "../lib/useScreenWidth";
import { CContainer } from "../components/CContainer";

const SponsorsSection = () => {
  const sw = useScreenWidth();

  return (
    <CContainer>
      <section id="sponsorsSection" style={{ width: "100%" }}>
        <VStack bg={"black"} px={8} pt={24}>
          <Text color={"blue.500"} fontWeight={"semibold"}>
            {`Sponsor ${event.eventNameWithYear}`}
          </Text>
          <Heading color={"white"} textAlign={"center"}>
            Kenalin nih sponsor kita!
          </Heading>
          {sponsors.length > 0 && (
            <Text color={"white"} textAlign={"center"} mb={10}>
              dua tiga tupai melompat, nyeponsorin acara ini bikin exposure mu
              tambah berkali lipat
            </Text>
          )}

          {sponsors.length > 0 ? (
            <>
              <Wrap
                display={"flex"}
                flexWrap={"wrap"}
                spacing={"16px"}
                align={"center"}
                direction={["column", "row"]}
              >
                {sponsors.map(
                  (item, i) =>
                    item.isBig && (
                      <WrapItem
                        flex={"1 1 auto"}
                        w={sw >= 640 ? "200px" : "175px"}
                        key={i}
                      >
                        <Image
                          w={"100%"}
                          h={"100%"}
                          objectFit={"contain"}
                          src={item.imgUrl}
                        />
                      </WrapItem>
                    )
                )}
              </Wrap>

              <Wrap
                display={"flex"}
                flexWrap={"wrap"}
                spacing={"16px"}
                align={"center"}
                mt={4}
              >
                {sponsors.map(
                  (item, i) =>
                    !item.isBig && (
                      <WrapItem flex={"1 1 auto"} w={"50px"} key={i}>
                        <Image
                          w={"100%"}
                          h={"100%"}
                          objectFit={"contain"}
                          src={item.imgUrl}
                        />
                      </WrapItem>
                    )
                )}
              </Wrap>
            </>
          ) : (
            <Empty componentName="sponsor" bigSponsor={false} />
          )}
        </VStack>
      </section>
    </CContainer>
  );
};

export default SponsorsSection;
