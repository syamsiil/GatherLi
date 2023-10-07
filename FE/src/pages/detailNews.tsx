import {
  Container,
  Heading,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import dataNews from "../utils/dataNews.json";




export default function ArticlePage() {
  const { id } = useParams();
  const newsArticle = dataNews.find((item) => item.id === id);
  if (!newsArticle) {
    // Handle the case where the news article with the specified id is not found
    return <Text>News article not found.</Text>;
  }

  return (
    <Container maxW="xl" py={8}>
      {/* Article Title */}
      <Heading as="h1" fontSize="2xl" mb={4}>
        {newsArticle.Title}
      </Heading>

      {/* Author and Date */}
      <Flex justifyContent="space-between" mb={4}>
        <Text fontSize="sm" color="gray.500">
          By John Doe
        </Text>
        <Text fontSize="sm" color="gray.500">
          October 6, 2023
        </Text>
      </Flex>

      {/* Article Image */}
      <Image
        src={newsArticle.Image} // Replace with your image URL
        alt="Article Image"
        borderRadius="md"
        mb={6}
      />

      {/* Article Content */}
      <Text fontSize="lg" mb={4}>
        {newsArticle.NewsItem}
      </Text>
    </Container>
  );
}
