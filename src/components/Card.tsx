import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Text,
  Box,
} from "@chakra-ui/react";

export default function CardTemplate() {
  return (
    <>
      <Card maxW="sm">
        <Box>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius={"6px 6px 0 0"}
            padding={0}
          />
          <Stack mt="6" spacing="3" padding={"0 20px"} textAlign={"justify"}>
            <Heading size="md">Living room Sofa</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design.
            </Text>
          </Stack>
        </Box>

        <CardFooter>
          <Button variant="solid" colorScheme="blue" width={"100%"}>
            Read More
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}