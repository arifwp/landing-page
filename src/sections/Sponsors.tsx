import {
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Empty from "../components/Empty";
import { sponsors } from "../data/sponsors";
import useScreenWidth from "../lib/useScreenWidth";
import { event } from "../data/event";

const SponsorsSection = () => {
  const sw = useScreenWidth();

  return (
    <section id="sponsorsSection">
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

            {/* <SimpleGrid columns={[2, null, 3]} spacing={10} mt={10}>
              {sponsors.map(
                (sponsor, i) =>
                  sponsor.isBig && (
                    <Image
                      key={sponsor.id}
                      src={sponsor.imgUrl}
                      alt={sponsor.name}
                      objectFit={"contain"}
                      my={"auto"}
                      maxW={"120px"}
                    />
                  )
              )}
            </SimpleGrid>

            <Wrap>
              {sponsors.map(
                (sponsor, i) =>
                  !sponsor.isBig && (
                    <WrapItem key={sponsor.id}>
                      <Image
                        key={sponsor.id}
                        src={sponsor.imgUrl}
                        alt={sponsor.name}
                        objectFit={"contain"}
                        my={"auto"}
                        maxW={"40px"}
                        onClick={(e) => console.log(sponsor.id)}
                      />
                    </WrapItem>
                  )
              )}
            </Wrap> */}
          </>
        ) : (
          <Empty componentName="sponsor" bigSponsor={false} />
        )}
      </VStack>
    </section>
  );
};

export default SponsorsSection;
