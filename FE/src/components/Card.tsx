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

import dummy from "../utils/dummyCardHome.json";
import Slider from "react-slick";

export default function CardHome() {
  const limitedData = dummy.slice(0, 4);

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

  return (
    <>
      <Slider key={"slider"} {...settings}>
        {limitedData.map((item, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent="center" // Mengatur posisi kartu ke tengah
            maxWidth="370px"
            margin="0 10px 20px 10px"
          >
            <Card flexWrap="wrap" flex="1" maxWidth="370px">
              <Box>
                <Image
                  src={item.Image}
                  borderRadius={"6px 6px 0 0"}
                  padding={0}
                  width={"100%"}
                  height={"200px"}
                  object-fit={"cover"}
                  object-position={"center"}
                />
                <Stack
                  mt="6"
                  spacing="3"
                  padding={"0 20px"}
                  textAlign={"justify"}
                >
                  <Heading size="md">{item.Title}</Heading>
                  <Text noOfLines={3}>{item.Description}</Text>
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
                >
                  Read More
                </Button>
              </CardFooter>
            </Card>
          </Box>
        ))}
      </Slider>
    </>
  );
}
