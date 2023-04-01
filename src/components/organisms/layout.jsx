import React from "react";
import { Box } from "rebass/styled-components";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        // flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      {children}
    </Box>
  );
};

export default Layout;
