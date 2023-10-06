import {
  Card,
  Stack,
  Heading,
  CardFooter,
  Button,
  Image,
  Text,
  Box,
  HStack,
  Center,
} from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

interface NewsArticle {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  urlToImage: string;
  // Add other properties as needed
}


export default function CardNews() {
  const [newsData, setNewsData] = useState<NewsArticle[]>([]);

  useEffect(() => {
    const apiKey = "1ed77cfa2b0440bc9da796c6ee02b79d"; 
    const apiUrl = "https://newsapi.org/v2/top-headlines/sources";

    const apiUrlWithKey = `${apiUrl}?apiKey=${apiKey}`;

    axios
      .get(apiUrlWithKey)
      .then((response) => {
        setNewsData(response.data.articles);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Center m={10}>
        {newsData.map((item) => (
          <Card 
          key={item.id}
            maxW="sm"
            m={5}
            transition="transform 0.5s"
            _hover={{
              transform: "scale(1.05)",
            }}
          >
            <Box>
              <Image
                src={item.urlToImage}
                alt="Green double couch with wooden legs"
                borderRadius={"6px 6px 0 0"}
                padding={0}
              />
              <Stack
                mt="6"
                spacing="3"
                padding={"0 20px"}  
                textAlign={"justify"}
              >
                <Heading size="md">{item.title}</Heading>
                <HStack>
                  <Text fontSize={"xs"} color={"grey"}>
                  {new Date(item.publishedAt).toLocaleDateString()}//
                  </Text>
                  <Text fontSize={"xs"} color={"grey"}>
                  {new Date(item.publishedAt).toLocaleTimeString()} 
                  </Text>
                </HStack>
                <Text>
                  {item.description}
                </Text>
              </Stack>
            </Box>
            <CardFooter>
              <Link to={'/news/' + item.id}>
              <Button variant="solid" colorScheme="teal" width={"100%"}>
                Read More
              </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </Center>
    </>
  );
}
