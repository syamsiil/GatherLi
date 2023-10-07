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
import { useState } from "react";

export default function CardProfile() {
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageUpload = (event: any) => {
    const file = event.target.files[0]; //mengambil file pertama dalam array (dalam hal ini, gambar yang dipilih oleh pengguna)
    const reader = new FileReader(); // Objek ini digunakan untuk membaca konten file yang dipilih oleh pengguna.

    reader.onload = (e: any) => {
      //callback yang akan dipanggil ketika pembaca telah selesai membaca file gambar yang dipilih oleh pengguna
      setSelectedImage(e.target.result);

      console.log("ini isi setSelectedImage", e.target.result);
    };

    reader.readAsDataURL(file); // pembacaan file yang dipilih oleh pengguna sebagai data URL

    console.log("ini isi selectedImage", selectedImage);
  };

  return (
    <>
      <Navbar />
      <Container mb={"1em"} mt={"5em"} maxWidth={"100%"}>
        <Box>
          <Box mb={"0.5em"}>
            <Heading textAlign={"center"}>
              Account Settings
            </Heading>
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
                          <Input placeholder="Your Name" width={"500px"} />
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
