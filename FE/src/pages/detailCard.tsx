import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import DetailCardComponent from "../components/DetailCardComponent";

export default function DetailCard() {
  return (
    <>
      <Box>
        <Box>
          <Navbar />
        </Box>
        <Box>
          <DetailCardComponent />
        </Box>
      </Box>
    </>
  );
}
