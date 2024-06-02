import {
  Button,
  Icon,
  Image,
  ImageProps,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { RiCloseCircleLine, RiDownload2Fill } from "@remixicon/react";
import { downloadImage } from "../utils/helper";

interface Props extends ImageProps {
  src: string;
  alt: string;
}

export default function GalleryItemModal({ src, alt }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Image
        h={"100%"}
        w={"100%"}
        objectFit={"cover"}
        src={src}
        onClick={onOpen}
        alt={alt}
        loading="lazy"
      />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />

        <ModalContent
          bgColor={"transparent"}
          w={"100%"}
          boxShadow={"transparent"}
        >
          <ModalBody>
            <Image src={src} />
            <ModalCloseButton mr={4} mt={1}>
              <Icon
                as={RiCloseCircleLine}
                color={"red.500"}
                fontSize={"26px"}
              ></Icon>
            </ModalCloseButton>
          </ModalBody>
          <ModalFooter>
            <Button
              leftIcon={<Icon as={RiDownload2Fill}></Icon>}
              colorScheme="blue"
              variant="solid"
              size={"xs"}
              onClick={() => downloadImage(src)}
            >
              Download
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
