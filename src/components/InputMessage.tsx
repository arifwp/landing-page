import { Textarea } from "@chakra-ui/react";

const InputMessage = (props: any) => {
  console.log(props);
  return (
    <Textarea
      textColor={"white"}
      id="inputMessage"
      name="inputMessage"
      resize={"vertical"}
      size={"md"}
      {...props}
    />
  );
};

export default InputMessage;
