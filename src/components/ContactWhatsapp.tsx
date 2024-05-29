import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { event } from "../data/event";

const initialValues = {
  userChoice: "",
  userMessage: "",
};

const optionSelect = [
  { value: "sponsor", label: "Sponsor" },
  { value: "standbazar", label: "Booking lapak" },
  { value: "general", label: "Nanya soal event" },
  { value: "etc", label: "Lainnya" },
];

const ContactWhatsapp = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      userChoice: Yup.string().required("*Pilih dulu mau nanya apa"),
      userMessage: Yup.string()
        .required("*Ketik dulu dong pesannya buat admin")
        .min(5, "*Dikit amat ngetiknya, agak panjangan dikit lah"),
    }),
    onSubmit: (values) => {
      if (values.userChoice === "standbazar") {
        window.location.href = `https://api.whatsapp.com/send?phone=${event.bazarAdminWhatsapp}&text=${values.userMessage}`;
      }
      window.location.href = `https://api.whatsapp.com/send?phone=${event.generalAdminWhatsapp}&text=${values.userMessage}`;
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <VStack
      bgColor={"RGBA(255, 255, 255, 0.16)"}
      mt={10}
      p={6}
      borderRadius={"lg"}
      h={"fit-content"}
    >
      <form
        id="sendMessage"
        onSubmit={formik.handleSubmit}
        style={{ width: "100%" }}
      >
        <VStack spacing={4}>
          <FormControl isInvalid={formik.errors.userChoice ? true : false}>
            <FormLabel htmlFor="userChoice" textColor={"white"}>
              Subjek
            </FormLabel>
            <Select
              name="userChoice"
              onChange={formik.handleChange}
              color={"white"}
              placeholder="Mau nanya soal apa nih?"
            >
              {optionSelect.map((option, i) => (
                <option
                  value={option.value}
                  key={option.value}
                  style={{ color: "black" }}
                >
                  {option.label}
                </option>
              ))}
            </Select>
            <FormErrorMessage>{formik.errors.userChoice}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={formik.errors.userMessage ? true : false}>
            <FormLabel htmlFor="userMessage" color={"white"}>
              Pesan
            </FormLabel>
            <Textarea
              name="userMessage"
              onChange={formik.handleChange}
              color={"white"}
              placeholder="Masukin pesanmu disini"
              resize={"vertical"}
              size={"md"}
            />

            <FormErrorMessage>{formik.errors.userMessage}</FormErrorMessage>
          </FormControl>

          <Button type="submit" colorScheme="blue">
            Kirim Pesan
          </Button>
        </VStack>
      </form>
    </VStack>
  );
};

export default ContactWhatsapp;
