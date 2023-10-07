import {
  Box,
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
  Text,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import FooterTemplate from "../components/Footer";
// import { useState } from "react";
import CardHome from "../components/Card";
import About from "../components/About";
// import AddCardPopup from "../components/addCardPopup";
import React from "react";
import { BiSolidImageAdd } from "react-icons/bi";
export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <>
      <Box>
        <Box>
          <Navbar />
        </Box>
        <Carousel />

        <About />

        {/* popup modal */}
        <Box display={"flex"} justifyContent={"center"}>
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
                <ModalBody>
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
                    <FormLabel padding={"5px "} mt={"15px"}>
                      <Text
                        display={"flex"}
                        color={"white"}
                        alignItems={"center"}
                        textAlign={"center"}
                        fontSize={"40px"}
                        cursor={"pointer"}
                      >
                        <BiSolidImageAdd />
                      </Text>
                    </FormLabel>
                    <Input
                      placeholder="Upload Image"
                      type="file"
                      bg={"white"}
                      hidden
                    />
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
        </Box>

        <Box
          // display={"grid"}
          // gridTemplateColumns={"repeat(auto-fit,minmax(270px,1fr))"}
          margin={"20px 5%"}
        >
          <CardHome />
        </Box>

        <FooterTemplate />
      </Box>
    </>
  );
}
