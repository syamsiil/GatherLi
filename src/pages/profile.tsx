import { Box } from "@chakra-ui/react";
import CardProfile from "../components/CardProfile";
import Navbar from "../components/Navbar";

export default function Profile() {
  return (
    <>
      <Box>
        <Navbar />
      </Box>
      <Box>
        <CardProfile />
      </Box>
    </>
  );
}
