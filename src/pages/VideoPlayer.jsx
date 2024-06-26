import { useParams } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";

function VideoPlayer({ downloadedVideos }) {
  const { id } = useParams();
  const video = downloadedVideos.find((video) => video.id === Number(id));

  if (!video) {
    return (
      <Box>
        <Text>Video not found</Text>
      </Box>
    );
  }

  return (
    <Box>
      <Text>{video.title}</Text>
      <video controls>
        <source src={video.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
}

export default VideoPlayer;
