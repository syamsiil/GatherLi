import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import dataDetail from "../utils/dummyDetail.json";

export default function DetailCardComponent() {
  const { id } = useParams();
  const cardDetail = dataDetail.find((item) => item.id === id);
  if (!cardDetail) {
    // Handle the case where the news article with the specified id is not found
    return <Text>Detail not found.</Text>;
  }
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
            {cardDetail.Title}
          </Text>
          <Image
            src={cardDetail.Image}
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
            <Heading>{cardDetail.Title}</Heading>
            <Text textAlign={"justify"}>{cardDetail.Description}</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
