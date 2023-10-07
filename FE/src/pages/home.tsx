import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import FooterTemplate from "../components/Footer";
// import { useState } from "react";
import CardHome from "../components/Card";
import About from "../components/About";
import AddCardPopup from "../components/addCardPopup";
export default function Home() {
  // const initialCards = [
  //   { title: 'Card 1' },
  //   { title: 'Card 2' },
  //   { title: 'Card 3' },
  //   // Add more cards here
  // ];

  // const [cards, setCards] = useState(initialCards);
  // const [filter, setFilter] = useState<string>('');

  // const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setFilter(event.target.value);
  // };

  // const filteredCards = cards.filter((card) =>
  //   card.title.toLowerCase().includes(filter.toLowerCase())
  // );
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
