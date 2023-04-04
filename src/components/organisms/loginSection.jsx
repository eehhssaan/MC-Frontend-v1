import { Box } from "rebass/styled-components";
import React, { useContext } from "react";
import { useRouter } from "next/router";

// internal imports
import { appContext } from "../../context/app.context";
import LoginForm from "../molecules/loginForm";

const Login = () => {
  const { loginAdmin } = useContext(appContext);
  const router = useRouter();

  const onLoginSubmit = async ({ email, password }) => {
    if (email && password) {
      loginAdmin({ email, password })
        .then((resp) => {
          if (resp.ok) {
            router.push("/dashboard");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
