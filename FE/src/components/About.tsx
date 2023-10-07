import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <>
      <Heading textAlign={"center"} mt={"50px"}>
        About
      </Heading>
      <Flex gap={"20px"} margin={"50px 5%"}>
        <Box flex={"50%"}>
          <Image
            src="https://ik.imagekit.io/lcfefbv0i/clay-banks-LjqARJaJotc-unsplash.jpg?updatedAt=1696609939075"
            height={"300px"}
            width={"100%"}
          />
        </Box>

        <Box flex={"50%"}>
          <Heading fontWeight={"600"} fontSize={"2xl"} mb={"12px"}>
            Bersama kita Peduli
          </Heading>
          <Text>
            Bersama kita Peduli dan membantu orang-orang di sekitar kita untuk
            menyelesaikan masalah.
          </Text>

          <Box
            display={"grid"}
            gridTemplateColumns={"repeat(3, 1fr)"}
            textAlign={"center"}
            mt={"32px"}
            justifyContent={"center"}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Heading>500+</Heading>
              <Box
                width={"58px"}
                height={"8px"}
                bg={"teal"}
                mt={"8px"}
                mb={"8px"}
                justifyContent={"center"}
              ></Box>
              <Text>Relawan</Text>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Heading>100+</Heading>
              <Box
                width={"58px"}
                height={"8px"}
                bg={"teal"}
                mt={"8px"}
                mb={"8px"}
                justifyContent={"center"}
              ></Box>
              <Text>Issues</Text>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Heading>100+</Heading>
              <Box
                width={"58px"}
                height={"8px"}
                bg={"teal"}
                mt={"8px"}
                mb={"8px"}
                justifyContent={"center"}
              ></Box>
              <Text>Tourguides</Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
