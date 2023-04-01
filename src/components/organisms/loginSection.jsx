import React from "react";
import { Box } from "rebass/styled-components";

// internal imports
import LoginForm from "../molecules/loginForm";

const Login = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#38AE99",
          height: "100%",
          width: "100%",
        }}
      >
        <LoginForm />
      </Box>
    </>
  );
};

export default Login;
