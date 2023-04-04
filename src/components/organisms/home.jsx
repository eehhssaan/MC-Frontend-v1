import React from "react";
import { Text, Box } from "rebass/styled-components";
import useAdmin from "../../context/use-admin.hook";

const Home = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
      }}
    >
      <Text>Welcome to the home page </Text>
      <Text>This page is under development</Text>
    </Box>
  );
};

export default Home;
