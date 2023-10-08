import {
  Card,
  Stack,
  Heading,
  CardFooter,
  Button,
  Image,
  Text,
  Box,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../stores/types/rootState";
import { API } from "../libs/api";
import { GET_CARDS } from "../stores/rootReducer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

export default function CardHome() {

  const dispatch = useDispatch()
  const cards = useSelector((state: RootState) => state.card.cards)
  const navigate = useNavigate()

  async function getCards() {
    const response = await API.get("/cards")
    dispatch(GET_CARDS(response.data))
  }

  async function deleteCard(id: number) {
    await API.delete("/cards/delete/" + id)
  }

  async function handleDeleteAndFetch(id: any) {
    await deleteCard(id); // Menghapus kartu
    await getCards(); // Mengambil data yang diperbarui
  }



  const card = cards.slice(0, 4);

  const settings = {
    dots: true, // Tampilkan titik navigasi
    infinite: true, // Membuat carousel berputar secara tak terbatas
    speed: 500, // Kecepatan animasi (milidetik)
    slidesToShow: 3, // Jumlah kartu yang ditampilkan dalam satu waktu
    slidesToScroll: 1, // Jumlah kartu yang digulirkan setiap kali
    initialSlide: 0, // Indeks kartu awal
    responsive: [
      {
        breakpoint: 1024, // Breakpoint untuk tampilan layar lebar
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Breakpoint untuk tampilan layar menengah
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <>

      {card.map((item) => (
        <Card maxW="sm">
          <Box>
            <Image
              src={item.image}
              borderRadius={"6px 6px 0 0"}
              padding={0}
              width={"100%"}
              height={"200px"}
              object-fit={"cover"}
              object-position={"center"}
            />
            <Stack mt="6" spacing="3" padding={"0 20px"} textAlign={"justify"}>
              <Heading size="md">{item.content}</Heading>
              <Text noOfLines={3}>{item.title}</Text>
            </Stack>
          </Box>

          <CardFooter>
            <Button
              variant="solid"
              bgColor={"teal"}
              width={"100%"}
              colorScheme="none"
              color={"white"}
              bottom={"0"}
              _hover={{
                bgColor: "teal.700",
              }}
              onClick={() => navigate("/detailcard/" + item.id)}
            >
              Read More
            </Button>
            {/* <Button onClick={() => deleteCard(item.id )}>tes</Button> */}
            <Button onClick={() => item.id !== undefined ? handleDeleteAndFetch(item.id) : null}>Del</Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
