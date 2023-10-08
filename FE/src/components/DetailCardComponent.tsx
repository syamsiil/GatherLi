import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import dataDetail from "../utils/dummyDetail.json";
import { ICard } from "../interface/card";
import { useState, useEffect } from "react";
import { API } from "../libs/api";


export default function DetailCardComponent() {
  const { id } = useParams();
  const [card, setCard] = useState<ICard>();

  async function getCardById() {
    try {
      const response = await API.get("/cards/detail/" + id);
      setCard(response.data);
      console.log("berhasil mendapatkan thread", response.data);
    } catch (err) {
      console.log("gagal mendapatkan thread", err);
    }
  }

  useEffect(() => {
    getCardById();
  }, []);

  // const cardDetail = dataDetail.find((item) => item.id === id);
  // if (!cardDetail) {
  //   // Handle the case where the news article with the specified id is not found
  //   return <Text>Detail not found.</Text>;
  // }
  return (
    <Box>
      <Box
        width={"100%"}
        height={"500px"}
        bgImage={
          "https://ik.imagekit.io/lcfefbv0i/bg.svg?updatedAt=1696669804112"
        }
      >
        <Box
          margin={"auto"}
          width={"100%"}
          padding={"0 5%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          py={"100px"}
        >
          <Link to={"/"}>
            <Box
              padding={"5px 15px"}
              bg={"teal.500"}
              color={"white"}
              borderRadius={"5px"}
              _hover={{ bg: "teal.800" }}
            >
              Back to Home
            </Box>
          </Link>

          <Text
            fontSize={"48px"}
            fontWeight={"bold"}
            color={"white"}
            mb={"20px"}
          >
            {card?.title}
          </Text>
          <Image
            src={card?.image}
            alt=""
            width={"100%"}
            height={"420px"}
            objectPosition={"center"}
            objectFit={"cover"}
            boxShadow="base"
            p="6"
            rounded="md"
            bg="white"
          />

          <Box mt={"50px"}>
            <Heading>{card?.title}</Heading>
            <Text textAlign={"justify"}>{card?.content}</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
