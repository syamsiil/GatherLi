import {
  Box,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import CardTemplate from "../components/Card";

export default function CardNews() {
  return (
    <>
      <Box>
        <Navbar />
      </Box>
      <Box>
        <CardTemplate />
      </Box>
    </>
  );
}
