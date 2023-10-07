
  import Navbar from "../components/Navbar";
  import CardNews from "../components/CardNews";
import { Box } from "../../node_modules/framer-motion/dist/index";
  
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
  