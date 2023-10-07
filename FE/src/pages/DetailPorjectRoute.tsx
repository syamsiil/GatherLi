import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Threads from "../components/Threads";
import Carousel from "../components/CarouselCommunity";
import { DetailProject } from "./DetailProject";


export default function CommunityDetail() {
    return (
        <Box>
            <Navbar />
            <Grid templateColumns="repeat(12, 1fr)">
                <GridItem colSpan={3}>
                    <Box position={"fixed"} mt={7} >
                        <Sidebar />
                    </Box>
                </GridItem>
                <GridItem colSpan={6} mt={"14"}>
                    <DetailProject />
                </GridItem>
                <GridItem colSpan={3} mt={10}>
                    <Box px={4} py={9} >
                        <Carousel />
                        <Box position={"fixed"} bottom={8}>
                            <Heading mt={4}>#KitaPeduli</Heading>
                            <Text mt={4}>
                                #KitaPeduli adalah gerakan sosial yang mengajak publik bergotong royong untuk membantu pelaku usaha Parekraf Indonesia yang terdampak pandemi, dengan berdonasi.

                                Hasil donasi akan digunakan untuk membeli paket kebutuhan pokok dan paket kesehatan yang akan didistribusi kepada para pelaku usaha Parekraf.

                                #KitaPeduli adalah gerakan kolaboratif antara
                            </Text>
                        </Box>
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    );
}