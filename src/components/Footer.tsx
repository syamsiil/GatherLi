import { Box, Text, Image } from "@chakra-ui/react";
export default function FooterTemplate() {
  return (
    <Box
      padding={"10px 5%"}
      bg={"teal"}
      color={"white"}
      fontWeight={"400"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box display={"flex"} alignItems={"center"} gap={"10px"}>
        <Box>
          <Image
            src="https://ik.imagekit.io/lcfefbv0i/GatherLi_Logo_v3-removebg-preview.svg?updatedAt=1696577019435"
            width={"40px"}
            height={"40px"}
            padding={"5px"}
            bg={"white"}
            borderRadius={"40%"}
            alignItems={"center"}
          />
        </Box>

        <Box>
          <Text color={"white"} alignItems={"center"}>
            Gather
            <Text as="span" color={"#83b735"}>
              Li.
            </Text>
          </Text>
        </Box>
      </Box>

      <Box>
        <Text>&#169; 2023 | All Right Reserved.</Text>
      </Box>
    </Box>
  );
}
