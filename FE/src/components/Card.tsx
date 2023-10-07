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

export default function CardHome() {
  const limitedData = dummy.slice(0, 4);

  return (
    <>
      {limitedData.map((item) => (
        <Card maxW="sm">
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
            <Stack mt="6" spacing="3" padding={"0 20px"} textAlign={"justify"}>
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
      ))}
    </>
  );
}