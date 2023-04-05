import React from "react";
import { Box } from "rebass/styled-components";
import Navbar from "../molecules/navbar";
import SideBar from "../molecules/sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <SideBar />
        <Box
          sx={{
            width: "100%",
            marginLeft: ["0", "0", "0", "288px"],
          }}
        >
          <Navbar />
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
