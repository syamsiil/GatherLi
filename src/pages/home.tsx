import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Login from "./login";
import Carousel from "../components/Carousel";
export default function Home() {
  return (
    <>
      <Box>
        <Box>
          <Navbar />
        </Box>
        <Carousel />
      </Box>
    </>
  );
}
