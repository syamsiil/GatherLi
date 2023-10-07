import {
  Card,
  Stack,
  Heading,
  CardFooter,
  Button,
  Image,
  Text,
  Box,
  HStack,
  Center,
  Grid,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import dataNews from "../utils/dataNews.json"
import Navbar from "./Navbar";


export default function CardNews() {

  return (
    <>
    <Navbar />
      <Center mt={"5em"}>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
          {dataNews.map((item) => (
            <Card
              key={item.id}
              width="100%" // Set a fixed width
              maxW="400px"
              m={5}
              transition="transform 0.5s"
              _hover={{
                transform: "scale(1.05)",
              }}
              overflow="hidden"
              boxShadow={'10px 15px 5px black'}
            >
              <Box
                height="100%" overflow="auto">
                <Image
                  src={item.Image}
                  alt="Green double couch with wooden legs"
                  borderRadius={"6px 6px 0 0"}
                  padding={0}
                  h={'250px'}
                  w="100%"
                  objectFit="cover"
                />
                <Stack
                  mt="6"
                  spacing="3"
                  padding={"0 20px"}
                  textAlign={"justify"}
                  height="120px" // Set a fixed height for the card content
                  overflow="hidden"

                >
                  <Heading size="md" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">{item.Title}</Heading>
                  <HStack>
                    <Text fontSize={"xs"} color={"grey"}>
                      October 06, 2023
                    </Text>
                  </HStack>
                  <Text overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
                    {item.Description}
                  </Text>
                </Stack>
              </Box>
              <CardFooter>
                <Link to={'/news/' + item.id}>
                  <Button variant="solid" colorScheme="teal" width={"100%"}>
                    Read More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </Grid>
      </Center>
    </>
  );
}