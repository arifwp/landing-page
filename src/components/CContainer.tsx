import { StackProps, VStack } from "@chakra-ui/react";

interface Props extends StackProps {
  children?: any;
}

export const CContainer = ({ children, ...props }: Props) => {
  return (
    <VStack
      w={"100%"}
      mx={"auto"}
      maxW={"1440px"}
      align={"stretch"}
      overflowX={"clip"}
      {...props}
    >
      {children}
    </VStack>
  );
};
