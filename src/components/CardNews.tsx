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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import dataNews from "../utils/dataNews.json"


export default function CardNews() {

  return (
    <>
      <Center m={10}>
        {dataNews.map((item) => (
          <Card
            key={item.id}
            width="400px" // Set a fixed width
            height="600px"
            maxW="sm"
            m={5}
            transition="transform 0.5s"
            _hover={{
              transform: "scale(1.05)",
            }}
            overflow="hidden"
          >
            <Box
              height="100%" overflow="auto">
              <Image
                src={item.Image}
                alt="Green double couch with wooden legs"
                borderRadius={"6px 6px 0 0"}
                padding={0}
                h={'250px'}
                w={'500px'}
                objectFit="cover"
              />
              <Stack
                mt="6"
                spacing="3"
                padding={"0 20px"}
                textAlign={"justify"}
              >
                <Heading size="md">{item.Title}</Heading>
                <HStack>
                  <Text fontSize={"xs"} color={"grey"}>
                    {/* {new Date(item.publishedAt).toLocaleDateString()}// */}
                  </Text>
                  <Text fontSize={"xs"} color={"grey"}>
                    {/* {new Date(item.publishedAt).toLocaleTimeString()}  */}
                  </Text>
                </HStack>
                <Text>
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
      </Center>
    </>
  );
}
