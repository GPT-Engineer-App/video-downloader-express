import React from "react";
import { Container, VStack, Text, List, ListItem, ListIcon, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaVideo } from "react-icons/fa";

const Downloads = ({ downloadedVideos }) => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" fontWeight="bold">
          Downloaded Videos
        </Text>
        <List spacing={3} width="100%">
          {downloadedVideos.map((video) => (
            <ListItem key={video.id}>
              <Link as={RouterLink} to={`/video/${video.id}`} color="blue.500">
                <ListIcon as={FaVideo} color="green.500" />
                {video.title} - {video.format}
              </Link>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Downloads;
