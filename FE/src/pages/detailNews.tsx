import {
  Container,
  Heading,
  Text,
  Image,
  Flex,
  Button,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import dataNews from "../utils/dataNews.json";
import Navbar from "../components/Navbar"
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import Loading from "../components/PropagateLoading";




export default function ArticlePage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (replace with actual data fetching)
    setTimeout(() => {
      setLoading(false); // Set loading to false when content is loaded
    }, 1500);
  }, []);

  if (loading) {
    return <Loading />;
  }


  const newsArticle = dataNews.find((item) => item.id === id);
  if (!newsArticle) {
    // Handle the case where the news article with the specified id is not found
    return <Text>News article not found.</Text>;
  }

  return (
    <>
      <Navbar />
      <Container maxW="xl" py={8}>
        <Link to={'/news'}>
          <Button mb={5}>
            <ArrowBackIcon />
          </Button>
        </Link>
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
    </>
  );
}
