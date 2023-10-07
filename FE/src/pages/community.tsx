import { Box, Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Threads from "../components/Threads";
import Carousel from "../components/Carousel";

export default function Community() {
  return (
    <Box>
      <Navbar />
      <Grid templateColumns="repeat(12, 1fr)">
        <GridItem colSpan={3}>
          <Box position={"fixed"}>
            <Sidebar />
          </Box>
        </GridItem>
        <GridItem colSpan={6}>
          <Threads />
        </GridItem>
        <GridItem colSpan={3}>
          <Box px={4} py={"10"} position={"sticky"} maxHeight="100vh">
            <Carousel />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}
