import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function AddCardPopup() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Box width={"200px"}>
        <Button
          onClick={onOpen}
          variant="solid"
          bgColor={"teal"}
          width={"100%"}
          colorScheme="none"
          color={"white"}
          _hover={{
            bgColor: "teal.700",
          }}
        >
          Add
        </Button>
      </Box>

      <Box>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent
            bgImage={
              "https://ik.imagekit.io/lcfefbv0i/bg.svg?updatedAt=1696669804112"
            }
          >
            <ModalHeader>
              <Text color={"white"}>
                Add New Issue in Gather
                <Text as="span" color={"#83b735"}>
                  Li
                </Text>
                .
              </Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Input an issue title"
                  type="text"
                  bg={"white"}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Input placeholder="Description" type="text" bg={"white"} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Upload Image</FormLabel>
                <Input placeholder="Upload Image" type="file" bg={"white"} />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                width={"100%"}
                padding={"5px 15px"}
                border={"1px solid teal "}
                borderRadius={"30px"}
                bg={"white"}
                color={"teal"}
                _hover={{
                  bg: "teal",
                  color: "white",
                  border: "1px solid white",
                }}
                mr={3}
              >
                Post
              </Button>
              <Button
                onClick={onClose}
                width={"100%"}
                padding={"5px 15px"}
                border={"1px solid teal "}
                borderRadius={"30px"}
                bg={"white"}
                color={"teal"}
                _hover={{
                  bg: "teal",
                  color: "white",
                  border: "1px solid white",
                }}
              >
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
}
