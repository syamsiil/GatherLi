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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../stores/types/rootState";
import { API } from "../libs/api";
import { GET_CARDS } from "../stores/rootReducer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CardHome() {

  const dispatch = useDispatch()
  const cards = useSelector((state: RootState) => state.card.cards)
  const navigate = useNavigate()

  async function getCards() {
    const response = await API.get("/cards")
    dispatch(GET_CARDS(response.data))
  }

  useEffect(() => {
    getCards();
  }, []);

  const limitedData = dummy.slice(0, 4);

  return (
    <>
      {cards.map((item) => (
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
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
