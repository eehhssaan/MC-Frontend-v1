import React from "react";
import { Box } from "rebass/styled-components";
import Navbar from "../molecules/navbar";

const Layout = ({ children }) => {
  return (
    <Box>
      <Navbar />
      {children}
    </Box>
  );
};

export default Layout;
