// import {
//   Flex,
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   Stack,
//   Button,
//   Heading,
//   Text,
//   useColorModeValue,
//   Alert,
//   AlertIcon,
//   AlertTitle,
//   AlertDescription,
// } from "@chakra-ui/react";
// // import { useLogin } from "../../features/auth/hooks/useLogin";
// import { useLogin } from "../features/auth/useLogin";
// // import { useSelector } from "react-redux";
// // import { RootState } from "@/stores/types/rootState";

// export default function AddCard() {
//   const { handleSubmit, changeHandler, errorAlert, successAlert, form } =
//     useLogin();

//   // const auth = useSelector((state: RootState) => state.auth);

//   return (
//     <Flex
//       minH={"100vh"}
//       alignItems={"center"}
//       bg={useColorModeValue("gray.50", "gray.800")}
//       justifyContent={"center"}
//     >
//       <Box
//         width={"100%"}
//         height={"100vh"}
//         bgImage={
//           "https://ik.imagekit.io/lcfefbv0i/bgwhite.svg?updatedAt=1696671495243"
//         }
//         alignItems={"center"}
//       >
//         <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
//           <Stack align={"center"}>
//             <Heading fontSize={"4xl"}>
//               <Text color={"teal"}>
//                 Add New Issue in Gather
//                 <Text as="span" color={"#83b735"}>
//                   Li
//                 </Text>
//                 .
//               </Text>
//             </Heading>
//             {/* <Text fontSize={"lg"} color={"gray.600"}>
//               to enjoy all of our cool features ✌️
//             </Text> */}
//           </Stack>
//           <Box
//             // rounded={"lg"}
//             borderRadius={"30px"}
//             bgImage={
//               "https://ik.imagekit.io/lcfefbv0i/bg.svg?updatedAt=1696669804112"
//             }
//             boxShadow={"lg"}
//             p={8}
//           >
//             <form onSubmit={handleSubmit}>
//               {errorAlert && (
//                 <Alert status="error" mb={4}>
//                   <AlertIcon />
//                   <AlertTitle mr={2}>Terjadi Kesalahan</AlertTitle>
//                   <AlertDescription>{errorAlert}</AlertDescription>
//                 </Alert>
//               )}

//               {successAlert && (
//                 <Alert status="success" mb={4}>
//                   <AlertIcon />
//                   <AlertTitle mr={2}>Sukses</AlertTitle>
//                   <AlertDescription>{successAlert}</AlertDescription>
//                 </Alert>
//               )}

//               <Stack spacing={4}>
//                 <FormControl id="title">
//                   <FormLabel>Title</FormLabel>
//                   <Input
//                     type="text"
//                     name="title"
//                     onChange={changeHandler}
//                     value={form.title}
//                     bg={"teal"}
//                   />
//                 </FormControl>
//                 <FormControl id="description">
//                   <FormLabel>Description</FormLabel>
//                   <Input
//                     type="text"
//                     name="description"
//                     onChange={changeHandler}
//                     value={form.description}
//                     bg={"teal"}
//                   />
//                 </FormControl>
//                 <FormControl id="image">
//                   <FormLabel>Upload Image</FormLabel>
//                   <Input
//                     type="file"
//                     name="uploadImage"
//                     onChange={changeHandler}
//                     value={form.uploadImage}
//                     bg={"teal"}
//                     placeholder="Upload an image issue"
//                     accept="image/*"
//                     hidden
//                   />
//                 </FormControl>
//               </Stack>
//             </form>
//             <Button
//               fontWeight={"bold"}
//               mt={"15px"}
//               type="submit"
//               width={"100%"}
//               padding={"5px 15px"}
//               border={"1px solid teal "}
//               borderRadius={"30px"}
//               bg={"white"}
//               color={"teal"}
//               _hover={{
//                 bg: "teal",
//                 color: "white",
//                 border: "1px solid white",
//               }}
//               onClick={handleSubmit}
//             >
//               Post
//             </Button>
//           </Box>
//         </Stack>
//       </Box>
//     </Flex>
//   );
// }
