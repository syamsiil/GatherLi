import { Box, Text, Heading, Link, OrderedList } from "@chakra-ui/react";
import {
  BiLogoInstagram,
  BiLogoFacebookCircle,
  BiLogoTwitter,
} from "react-icons/bi";
export default function FooterTemplate() {
  return (
    // <Box
    //   padding={"10px 5%"}
    //   bg={"teal"}
    //   color={"white"}
    //   fontWeight={"400"}
    //   display={"flex"}
    //   justifyContent={"space-between"}
    //   alignItems={"center"}
    // >
    //   <Box display={"flex"} alignItems={"center"} gap={"10px"}>
    //     <Box>
    //       <Image
    //         src="https://ik.imagekit.io/lcfefbv0i/GatherLi_Logo_v3-removebg-preview.svg?updatedAt=1696577019435"
    //         width={"40px"}
    //         height={"40px"}
    //         padding={"5px"}
    //         bg={"white"}
    //         borderRadius={"40%"}
    //         alignItems={"center"}
    //       />
    //     </Box>

    //     <Box>
    //       <Text color={"white"} alignItems={"center"}>
    //         Gather
    //         <Text as="span" color={"#83b735"}>
    //           Li.
    //         </Text>
    //       </Text>
    //     </Box>
    //   </Box>

    //   <Box>
    //     <Text>&#169; 2023 | All Right Reserved.</Text>
    //   </Box>
    // </Box>

    <>
      <Box
        padding={"10px 5%"}
        display={"grid"}
        gridTemplateColumns={"repeat(auto-fit,minmax(240px,auto))"}
        gap={"15px"}
      >
        <Box>
          <Heading fontSize={"20px"} fontWeight={"600"} mb={"10px"}>
            Gather
            <Text as="span" color={"#83b735"}>
              Li
            </Text>
            .
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            dolores explicabo, earum excepturi incidunt quas!
          </Text>
          <Box display={"flex"} alignItems={"center"} gap={"10px"}>
            <Link
              fontSize={"24px"}
              color={"white"}
              padding={"5px"}
              borderRadius={"50%"}
              _hover={{
                bgColor: "teal.700",
              }}
            >
              <BiLogoFacebookCircle />
            </Link>
            <Link
              fontSize={"24px"}
              color={"white"}
              padding={"5px"}
              borderRadius={"50%"}
              _hover={{
                bgColor: "teal.700",
              }}
            >
              <BiLogoTwitter />
            </Link>
            <Link
              fontSize={"24px"}
              color={"white"}
              padding={"5px"}
              borderRadius={"50%"}
              _hover={{
                bgColor: "teal.700",
              }}
            >
              <BiLogoInstagram />
            </Link>
          </Box>
        </Box>
        <Box>
          <Text fontWeight={"600"}>Services</Text>

          <OrderedList marginLeft={0}>
            <Link href="">Help & Support</Link>
          </OrderedList>

          <OrderedList marginLeft={0}>
            <Link href="">FAQ</Link>
          </OrderedList>
        </Box>

        <Box display={"flex"} flexDirection={"column"}>
          <Text fontWeight={"600"}>Contact</Text>
          <Text as="span">Kuningan, WestJava 45573</Text>
          <Text as="span">+62 821 2507 3333 </Text>
          <Text as="span">gatherli@gmail.com </Text>
        </Box>
      </Box>
      <Box padding={"20px"} textAlign={"center"}>
        <Text>&#169; GatherLi All Right Reserved.</Text>
      </Box>
    </>
  );
}
