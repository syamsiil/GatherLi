import {
  Box, Center, Heading,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import CardNews from "../components/CardNews";

export default function News() {
  return (
    <>
      <Box>
        <Navbar />
      </Box>
      <Center>
        <Heading my={5}>
          What's Going on in your Area?
        </Heading>
      </Center>
      <Box>
        <CardNews />
      </Box>
    </>
  );
}
