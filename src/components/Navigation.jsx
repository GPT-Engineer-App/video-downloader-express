import React from "react";
import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box bg="blue.500" p={4}>
      <Flex justify="space-between">
        <Link as={RouterLink} to="/" color="white" fontWeight="bold">
          Home
        </Link>
        <Link as={RouterLink} to="/downloads" color="white" fontWeight="bold">
          Downloads
        </Link>
      </Flex>
    </Box>
  );
};

export default Navigation;
