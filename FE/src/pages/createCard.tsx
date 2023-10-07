


"use client";

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    Alert,
    AlertTitle,
    AlertIcon,
    AlertDescription,
    Toast,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
// import { useRegister } from "../features/auth/useRegister";
import { useRegister } from "../features/auth/useRegister";
import { useNavigate } from "react-router-dom";
import { ICard } from "../interface/card";
import { ChangeEvent, FormEvent, useState } from "react";
import { API } from "../libs/api";
import { GET_THREADS } from "../stores/rootReducer";
import { useDispatch } from "react-redux";

export default function CreateCard() {
    // const {
    //     // form,
    //     // handleSubmit,
    //     // changeHandler,
    //     setShowPassword,
    //     errorAlert,
    //     successAlert,
    //     showPassword,
    // } = useRegister();

    const dispatch = useDispatch();

    const [form, setForm] = useState<ICard>({
        content: "",
        image: "",
        title: "",
    });

    function changeHandler(event: ChangeEvent<HTMLInputElement>) {
        const { name, value, files } = event.target;
        if (files) {
            console.log("ini files", files[0]);
            const image = URL.createObjectURL(files[0]);
            //   setPreviewImage(image);
            setForm({
                ...form,
                [name]: files[0],
            });
        } else {
            console.log("ini value", value);
            setForm({
                ...form,
                [name]: value,
            });
        }
    }

    async function getThreads() {
        const response = await API.get("/threads");
        dispatch(GET_THREADS(response.data));
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("title", form.title);
        formData.append("content", form.content);

        if (form.image) {
            formData.append("image", form.image as string);
        }
        try {
            const response = await API.post("/card", formData);

            console.log(response.data, "ini post");
            setForm({
                content: "",
                image: "",
                title: "",
            });

            //   setPreviewImage("");
            getThreads();
        } catch (err) {
            console.log("ini eror", err);
            Toast({
                title: "Coba Lagi",
                status: "error",
            });
        }
    };

    const navigate = useNavigate();

    return (
        <Flex
            minH={"200%"}
            align={"center"}
            justify={"center"}
            bgImage={
                "https://ik.imagekit.io/lcfefbv0i/bg.svg?updatedAt=1696669804112"
            }
        >
            <Box
                width={"40%"}
                bgImage={
                    "https://ik.imagekit.io/lcfefbv0i/bg.svg?updatedAt=1696669804112"
                }
                height={"100vh"}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                flexDirection={"column"}
            >
                <Heading color={"white"} fontSize={"60px"}>
                    Welcome Back!
                </Heading>
                <Text width={"250px"} mt={"40px"} textAlign={"center"}>
                    To keep connected with us please login with your personal info
                </Text>
                <Box display={"flex"} width={"250px"} textAlign={"center"} mt={"40px"}>
                    <Text
                        fontWeight={"bold"}
                        width={"100%"}
                        padding={"5px 15px"}
                        border={"1px solid teal "}
                        borderRadius={"30px"}
                        bg={"white"}
                        color={"teal"}
                        _hover={{
                            bg: "teal",
                            color: "white",
                            border: "1px solid white",
                        }}
                        cursor={"pointer"}
                        ml={2}
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </Text>
                </Box>
            </Box>

            {/* RightSide */}
            <Box
                width={"60%"}
                bgImage={
                    "https://ik.imagekit.io/lcfefbv0i/bgwhite.svg?updatedAt=1696671495243"
                }
            >
                <Stack
                    spacing={8}
                    mx={"auto"}
                    maxW={"lg"}
                    py={6}
                    px={6}
                    width={"100em"}
                >
                    <Stack align={"center"}>
                        <Heading fontSize={"4xl"} textAlign={"center"} color={"teal"}>
                            Create Account
                        </Heading>
                        {/* <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool features ✌️
            </Text> */}
                    </Stack>
                    <Box
                        // rounded={"lg"}
                        borderRadius={"30px"}
                        bgImage={
                            "https://ik.imagekit.io/lcfefbv0i/bg.svg?updatedAt=1696669804112"
                        }
                        boxShadow={"lg"}
                        p={8}
                    >
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            {/* {errorAlert.map((alert, index) => (
                                <Alert key={index} status="error" mb={4}>
                                    <AlertIcon />
                                    <AlertTitle mr={2}>There is an error</AlertTitle>

                                    <AlertDescription>{alert as string}</AlertDescription>
                                </Alert>
                            ))} */}
                            {/* {errorAlert && (
              <Alert status="error" mb={4}>
                <AlertIcon />
                <AlertTitle mr={2}>Terjadi Kesalahan</AlertTitle>
                <AlertDescription>{errorAlert.message}</AlertDescription>
              </Alert>
            )} */}

                            {/* {successAlert && (
                                <Alert status="success" mb={4}>
                                    <AlertIcon />
                                    <AlertTitle mr={2}>Sukses</AlertTitle>
                                    <AlertDescription>{successAlert}</AlertDescription>
                                </Alert>
                            )} */}

                            <Stack spacing={4}>
                                <FormControl id="username" isRequired>
                                    <FormLabel>Username</FormLabel>
                                    <Input
                                        minLength={3}
                                        name="title"
                                        type="text"
                                        onChange={changeHandler}
                                        value={form.title}
                                        bg={"teal"}
                                    />
                                </FormControl>

                                <FormControl id="firstName" isRequired>
                                    <FormLabel>Full Name</FormLabel>
                                    <Input
                                        name="content"
                                        type="text"
                                        onChange={changeHandler}
                                        value={form.content}
                                        bg={"teal"}
                                    />
                                </FormControl>

                                <FormControl id="image" isRequired>
                                    <FormLabel>Email address</FormLabel>
                                    <Input
                                        name="image"
                                        type="file"
                                        onChange={changeHandler}
                                        // value={form.image}
                                        bg={"teal"}
                                        accept="image/*"
                                    />
                                </FormControl>
                                {/* <FormControl id="password" isRequired>
                                    <FormLabel>Password</FormLabel>
                                    <InputGroup>
                                        <Input
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            onChange={changeHandler}
                                            value={form.password}
                                            minLength={3}
                                            bg={"teal"}
                                        />
                                        <InputRightElement h={"full"}>
                                            <Button
                                                variant={"ghost"}
                                                onClick={() =>
                                                    setShowPassword((showPassword) => !showPassword)
                                                }
                                            >
                                                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl> */}
                                <Stack spacing={10} pt={2}>
                                    <Button
                                        type="submit"
                                        loadingText="Submitting"
                                        fontWeight={"bold"}
                                        mt={"15px"}
                                        width={"100%"}
                                        padding={"5px 15px"}
                                        border={"1px solid teal "}
                                        borderRadius={"30px"}
                                        bg={"white"}
                                        color={"teal"}
                                        _hover={{
                                            bg: "teal",
                                            color: "white",
                                            border: "1px solid white",
                                        }}
                                    >
                                        Sign up
                                    </Button>
                                </Stack>
                            </Stack>
                        </form>
                    </Box>
                </Stack>
            </Box>
        </Flex>
    );
}
