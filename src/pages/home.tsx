import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import FooterTemplate from "../components/Footer";
export default function Home() {
  return (
    <>
      <Box>
        <Box>
          <Navbar />
        </Box>
        <Carousel />
        <Box
          display={"grid"}
          gridTemplateColumns={"repeat(auto-fit,minmax(270px,auto))"}
          gap={"10px"}
          margin={"50px 5%"}
        >
          <Card />
          <Card />
          <Card />
        </Box>

        <FooterTemplate />
      </Box>
    </>
  );
}
