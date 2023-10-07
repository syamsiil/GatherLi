import {
  Box,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import CardNews from "../components/CardNews";

export default function News() {
  return (
    <>
      <Box>
        <Navbar />
      </Box>
      <Box>
        <CardNews />
      </Box>
    </>
  );
}
