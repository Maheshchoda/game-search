import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <Box padding={5}>
      <Heading>Oops...</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? "This page doesn't exist"
          : "An Unexpected Error occurred"}
      </Text>
    </Box>
  );
};

export default ErrorPage;
