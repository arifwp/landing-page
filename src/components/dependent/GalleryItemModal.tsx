import {
  Image,
  ImageProps,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

interface Props extends ImageProps {
  src: string;
}

export default function GalleryItemModal({ src }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Image
        h={"100%"}
        w={"100%"}
        objectFit={"cover"}
        src={src}
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent bgColor={"transparent"} w={"100%"}>
          <ModalBody>
            <Image src={src} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
