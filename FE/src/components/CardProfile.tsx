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
  Text,
} from "@chakra-ui/react";
import Navbar from "./Navbar";
import useProfile from "../hooks/useProfile";

export default function CardProfile() {
  const { selectedImage, handleImageUpload,handleFormSubmit, setName, setEmail, setBio } =
    useProfile();

    console.log("isi selectedImage", selectedImage)
    console.log("isi handleImageUpload", handleImageUpload)
    console.log("isi handleFormSubmit", handleFormSubmit)
    console.log("isi setName", setName)
    console.log("isi setEmail", setEmail)
    console.log("isi setBio", setBio)

  return (
    <>
      <Navbar />
      <Container mb={"1em"} mt={"5em"} maxWidth={"100%"}>
        <Box>
          <Box mb={"0.5em"}>
            <Heading textAlign={"center"}>Account Settings</Heading>
            <Text textAlign={"center"}>Edit your name , avatar etc</Text>
          </Box>
          <Center>
            <Card width={"1000px"} alignItems={"center"}>
              <CardBody>
                <Flex>
                  <form action="">
                    <FormControl isRequired>
                      <Flex mt={"1.5em"}>
                        <Box me={"1em"}>
                          <FormLabel>Nama Lengkap</FormLabel>
                          <Input
                            placeholder="Your Name"
                            width={"500px"}
                            name="name"
                            onChange={(event) => setName(event.target.value)}
                          />
                        </Box>
                      </Flex>
                      <Box mt={"1.5em"}>
                        <FormLabel>Alamat Email</FormLabel>
                        <Input
                          type="email"
                          placeholder="Email"
                          name="email"
                          onChange={(event) => setEmail(event.target.value)}
                        />
                      </Box>
                      <Box mt={"1.5em"}>
                        <FormLabel>Biografi</FormLabel>
                        <Textarea
                          resize={"none"}
                          height={"200px"}
                          name="bio"
                          onChange={(event) => setBio(event.target.value)}
                        />
                      </Box>
                      <Flex
                        justifyContent={"end"}
                        mt={"1.5em"}
                        cursor={"pointer"}
                      >
                        <Button
                          backgroundColor={"#474fa0"}
                          _hover={{
                            backgroundColor: "#1c2844",
                            textColor: "#fff",
                          }}
                          colorScheme="none"
                          onClick={handleFormSubmit}

                        >
                          Simpan
                        </Button>
                      </Flex>
                    </FormControl>
                  </form>

                  <Flex
                    flexDirection={"column"}
                    alignItems={"center"}
                    ml={"4em"}
                    mt={"3em"}
                  >
                    <Avatar
                      src={selectedImage}
                      me="0.5em"
                      mb={"0.5em"}
                      size={"xl"}
                    />
                    <Button
                      as="label"
                      htmlFor="imageUpload"
                      cursor={"pointer"}
                      backgroundColor={"#474fa0"}
                      _hover={{ backgroundColor: "#1c2844", textColor: "#fff" }}
                      colorScheme="none"
                    >
                      Unggah Foto
                    </Button>
                    <input
                      id="imageUpload"
                      type="file"
                      onChange={handleImageUpload}
                      style={{ display: "none" }}
                    />
                  </Flex>
                </Flex>
              </CardBody>
            </Card>
          </Center>
        </Box>
      </Container>
    </>
  );
}
