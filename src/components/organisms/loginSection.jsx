import { Box } from "rebass/styled-components";
import React, { useContext } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

// internal imports
import { appContext } from "../../context/app.context";
import LoginForm from "../molecules/loginForm";

const Login = () => {
  const { loginAdmin, dispatch } = useContext(appContext);

  const router = useRouter();

  const onLoginSubmit = async ({ email, password }) => {
    const cookieTimeOut = 365 * 5;

    try {
      if (email && password) {
        const resp = await loginAdmin({ email, password });
        if (resp.ok) {
          const data = await resp.json();
          dispatch({ type: "USER_LOGIN", payload: data });
          Cookies.set("userInfo", JSON.stringify(data), {
            expires: cookieTimeOut,
          });

          router.push("/dashboard");
        }
      }
    } catch (err) {
      console.log(err);
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
