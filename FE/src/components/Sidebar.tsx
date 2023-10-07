'use client'

import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
    Image,
    Divider,
} from '@chakra-ui/react'

import { FcBusinessContact } from 'react-icons/fc'

export default function Sidebar() {
    return (
        <Center >
            <Box
                maxW={'380px'}
                height={'42em'}
                w={'full'}
                mt={8}
                // eslint-disable-next-line react-hooks/rules-of-hooks
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}
            // position={"fixed"}
            // bottom={5}
            >

                <Stack>
                    <Text
                        color={'teal'}
                        textTransform={'uppercase'}
                        fontWeight={800}
                        fontSize={'1.8em'}
                        letterSpacing={1.1}
                        display={"flex"}
                        alignItems={"center"}
                        my={3}>
                        Komunitas Kami <FcBusinessContact />
                    </Text>
                    <Heading
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        Peduli Bencana Alam
                    </Heading>
                    <Text color={'gray.500'}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    </Text>
                    <Divider />
                    <Heading
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        Peduli Lingkungan
                    </Heading>
                    <Text color={'gray.500'}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    </Text>
                    <Divider />
                    <Heading
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        Peduli Apapun
                    </Heading>
                    <Text color={'gray.500'}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    </Text>
                    <Divider />
                </Stack>
                <Stack mt={9} direction={'row'} spacing={4} align={'center'}>
                    <Avatar src={'https://avatars0.githubusercontent.com/u/1164541?v=4'} />
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                        <Text fontWeight={600}>Achim Rolle</Text>
                        <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
                    </Stack>
                    <Avatar src={'https://avatars0.githubusercontent.com/u/1164541?v=4'} />
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                        <Text fontWeight={600}>Achim Rolle</Text>
                        <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
                    </Stack>
                </Stack>
                <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                    <Avatar src={'https://avatars0.githubusercontent.com/u/1164541?v=4'} />
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                        <Text fontWeight={600}>Achim Rolle</Text>
                        <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
                    </Stack>
                    <Avatar src={'https://avatars0.githubusercontent.com/u/1164541?v=4'} />
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                        <Text fontWeight={600}>Achim Rolle</Text>
                        <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
                    </Stack>
                </Stack>
            </Box>
        </Center>
    )
}