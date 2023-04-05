import React, { useEffect, useState } from "react";
import { Box, Button, Text } from "rebass/styled-components";
import { useMediaQuery } from "@material-ui/core";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const isSmallScreen = useMediaQuery("(max-width: 769px)");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      sx={{
        width: isOpen ? "288px" : "0px",
        transition: "width 0.2s ease-out",
        backgroundColor: "white",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 999,
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.08)",
      }}
    >
      {isSmallScreen && (
        <Button
          onClick={toggleSidebar}
          sx={{
            height: "72px",
            width: isOpen ? "288px" : "80px",
            background: "#38ae99",
          }}
        >
          {isOpen ? "Hide" : "Show"} Sidebar
        </Button>
      )}
      {isOpen && (
        <Box
          sx={{
            width: "240px",
            height: "40px",
            top: "24px",
            left: "24px",
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            padding: "8px",
            margin: "24px",
          }}
        >
          <Text
            sx={{
              width: "123px",
              height: "28px",
              fontFamily: "Montserrat",
              fontWeight: "900",
              fontSize: "40px",
              lineheight: "28px",
              color: "#38AE99",
            }}
          >
            LOGO
          </Text>
          <Box
            sx={{
              mt: "120px",
            }}
          >
            <Button
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "16px",
                width: "240px",
                height: "56px",
                background: "rgba(56, 174, 153, 0.1)",
                borderRadius: "8px",
              }}
            >
              <Text
                sx={{
                  width: "80px",
                  height: "20px",
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#38AE99",
                }}
              >
                User Profile
              </Text>
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default SideBar;
