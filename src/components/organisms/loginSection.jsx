import { Box } from "rebass/styled-components";
import React, { useContext, useState } from "react";

// internal imports
import { appContext } from "../../context/app.context";
import LoginForm from "../molecules/loginForm";

const Login = () => {
  const { loginAdmin } = useContext(appContext);

  const onLoginSubmit = async ({ email, password }) => {
    const resp = await loginAdmin({ email, password });
    console.log(await resp.json());
  };

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
        <LoginForm onLoginSubmit={onLoginSubmit} />
      </Box>
    </>
  );
};

export default Login;
