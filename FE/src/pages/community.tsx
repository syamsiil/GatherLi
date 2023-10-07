import { Box, Button, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Threads from "../components/Threads";
import Carousel from "../components/CarouselCommunity";

export default function Community() {
    return (
        <Box>
            <Navbar />
            <Grid templateColumns="repeat(12, 1fr)">
                <GridItem colSpan={3}>
                    <Box position={"fixed"} mt={7} >
                        <Sidebar />
                    </Box>
                </GridItem>
                <GridItem colSpan={6} mt={10}>
                    <Threads />
                </GridItem>
                <GridItem colSpan={3} mt={10}>
                    <Box px={4} py={9} >
                        <Carousel />
                        <Box position={"fixed"} bottom={8}>
                            <Heading mt={4}>#KitaPeduli</Heading>
                            <Text mt={4}>
                                #KitaPeduli adalah gerakan sosial yang mengajak publik bergotong royong untuk membantu pelaku usaha Parekraf Indonesia yang terdampak pandemi, dengan berdonasi.

                                #KitaPeduli adalah gerakan kolaboratif antara
                            </Text>
                            <Button width={"full"} mt={3} bgColor={"teal"}>KLIK UNTUK IKUT EVENT SELANJUTNYA</Button>
                        </Box>
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    );
}
