import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import FooterTemplate from "../components/Footer";
// import { useState } from "react";
import CardHome from "../components/Card";
import About from "../components/About";
import { useSelector } from "react-redux";
import { RootState } from "../stores/types/rootState";
import AddCardPopup from "../components/AddCardPopup";
export default function Home() {

  const auth = useSelector((state: RootState) => state.auth);
  return (
    <>
      <Box>
        <Box>
          <Navbar />
        </Box>
        <Carousel />

        <About />

        <Box display={"flex"} justifyContent={"center"}>
          <AddCardPopup />
        </Box>

        <Box
          display={"grid"}
          gridTemplateColumns={"repeat(auto-fit,minmax(270px,auto))"}
          gap={"15px"}
          margin={"20px 5%"}
        >
          <CardHome />
        </Box>

        <FooterTemplate />
      </Box>
    </>
  );
}
