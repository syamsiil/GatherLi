import {
  Heading,
  Box,
  Flex,
  Avatar,
  Button,
  FormControl,
  FormLabel,
  Input,
  Center,
  Card,
  CardBody,
  Textarea,
  Container,
} from "@chakra-ui/react";
import Navbar from "./Navbar";
import { useState } from "react";

export default function CardProfile() {
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageUpload = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      setSelectedImage(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
      <Navbar />
      <Container mb={"1em"}>
        <Box mt={"2em"}>
          <Heading textAlign={"center"} mb={"0.5em"}>
            Ubah Profil
          </Heading>
          <Center>
            <Card>
              <CardBody>
                <Box>
                  <Heading as="h6" size="md" mb={"1em"}>
                    Detail Profil
                  </Heading>
                  <Flex alignItems="center">
                    <Avatar src={selectedImage} me="0.5em" />
                    <Button as="label" htmlFor="imageUpload" cursor={"pointer"} backgroundColor={"#474fa0"} _hover={{backgroundColor: "#1c2844", textColor: "#fff"}} colorScheme="none">
                      Unggah Foto
                    </Button>
                    <input
                      id="imageUpload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      style={{ display: "none" }}
                    />
                  </Flex>
                  <FormControl isRequired>
                    <Flex mt={"1.5em"}>
                      <Box me={"1em"}>
                        <FormLabel>First name</FormLabel>
                        <Input placeholder="First name" />
                      </Box>
                      <Box>
                        <FormLabel>Last name</FormLabel>
                        <Input placeholder="Last name" />
                      </Box>
                    </Flex>
                    <Box mt={"1.5em"}>
                      <FormLabel>Alamat Email</FormLabel>
                      <Input type="email" placeholder="Email" />
                    </Box>
                    <Box mt={"1.5em"}>
                      <FormLabel>Biografi</FormLabel>
                      <Textarea resize={"none"} height={"200px"} />
                    </Box>
                    <Flex justifyContent={"end"} mt={"1.5em"} cursor={"pointer"}>
                      <Button backgroundColor={"#474fa0"} _hover={{backgroundColor: "#1c2844", textColor: "#fff"}} colorScheme="none">Simpan</Button>
                    </Flex>
                  </FormControl>
                </Box>
              </CardBody>
            </Card>
          </Center>
        </Box>
      </Container>
    </>
  );
}
