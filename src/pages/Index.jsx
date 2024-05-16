import React, { useState } from "react";
import { Container, VStack, Input, Button, Select, Text, Spinner, useToast, Progress } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";

const Index = ({ setDownloadedVideos }) => {
  const [url, setUrl] = useState("");
  const [format, setFormat] = useState("360p");
  const toast = useToast();
  const [progress, setProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

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

    setIsDownloading(true);

    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          setIsDownloading(false);
          const newVideo = {
            id: new Date().getTime(),
            title: `Video from ${url}`,
            format: format,
            url: `https://example.com/videos/${new Date().getTime()}.mp4`,
          };
          setDownloadedVideos((prevVideos) => [...prevVideos, newVideo]);
          toast({
            title: "Download completed",
            description: `Video in ${format} format has been downloaded.`,
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          return 0;
        }
        return Math.min(oldProgress + 10, 100);
      });
    }, 500);
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
        <Button leftIcon={<FaDownload />} colorScheme="blue" onClick={handleDownload} isLoading={isDownloading}>
          {isDownloading ? "Downloading..." : "Download"}
        </Button>
        {isDownloading && <Spinner />}
        {isDownloading && <Progress value={progress} size="xs" width="100%" />}
      </VStack>
    </Container>
  );
};

export default Index;
