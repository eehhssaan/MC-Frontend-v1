import React from "react";
import Button from "../atoms/button";
import { Box, Text } from "rebass/styled-components";

const Navbar = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          height: "72px",
        }}
      >
        <Button
          text='black'
          margin='6px'
          height='36px'
          radius='30px'
          type='submit'
          color='white'
          border='1px solid #82889C'
          fontSize='14px'
        >
          jerome_bell
        </Button>
        <Button
          text='black'
          height='36px'
          margin='6px'
          radius='30px'
          type='submit'
          color='white'
          border='1px solid #82889C'
          fontSize='14px'
        >
          Logout
        </Button>
      </Box>
    </>
  );
};

export default Navbar;
