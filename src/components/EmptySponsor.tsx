import { Button, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";

const EmptySponsor: React.FC<{ bigSponsor: boolean }> = (props) => {
  return (
    <VStack
      mt={props.bigSponsor ? "undefined" : 10}
      p={props.bigSponsor ? 4 : 8}
      border={props.bigSponsor ? "undefined" : "4px"}
      borderBottomColor={props.bigSponsor ? "undefined" : "red.500"}
      borderLeftColor={props.bigSponsor ? "undefined" : "red.500"}
      borderRightColor={props.bigSponsor ? "undefined" : "blue.500"}
      borderTopColor={props.bigSponsor ? "undefined" : "blue.500"}
      borderRadius={props.bigSponsor ? "undefined" : "lg"}
      textAlign={"center"}
    >
      <Text color={"white"}>~ Belum ada sponsor nicchh ~</Text>
      {!props.bigSponsor && (
        <Text color={"white"}>
          sponsorin acaranya dong nanti logo ataupun wajah kamu bisa terpampang
          disini
        </Text>
      )}
      <Link
        href="http://localhost:3000/#contactSection"
        style={{ textDecoration: "none" }}
      >
        <Button variant={"solid"} size={"sm"} colorScheme={"blue"} mt={2}>
          Chat Admin
        </Button>
      </Link>
    </VStack>
  );
};

export default EmptySponsor;
