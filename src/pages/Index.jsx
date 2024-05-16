import React, { useState } from "react";
import { Container, VStack, Input, Button, Select, Text, Box, IconButton, useToast } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";

const Index = () => {
  const [url, setUrl] = useState("");
  const [format, setFormat] = useState("360p");
  const toast = useToast();

  const handleDownload = () => {
    if (!url) {
      toast({
        title: "Error",
        description: "Please enter a valid YouTube URL.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // This is where you would typically make a request to your backend server to handle the download
    // For example:
    // fetch(`/api/download?url=${url}&format=${format}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     // Handle the response data
    //   });

    toast({
      title: "Download started",
      description: `Downloading video in ${format} format.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" fontWeight="bold">
          YouTube Video Downloader
        </Text>
        <Input placeholder="Enter YouTube URL" value={url} onChange={(e) => setUrl(e.target.value)} />
        <Select value={format} onChange={(e) => setFormat(e.target.value)}>
          <option value="360p">360p</option>
          <option value="480p">480p</option>
          <option value="720p">720p</option>
        </Select>
        <Button leftIcon={<FaDownload />} colorScheme="blue" onClick={handleDownload}>
          Download
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
