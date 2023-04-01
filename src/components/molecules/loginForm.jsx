import React from "react";
import { Box, Text } from "rebass/styled-components";
import { Input } from "@rebass/forms";

import styles from "./loginForm.module.css";
import Button from "../atoms/button";

const LoginForm = () => {
  return (
    <Box
      as='form'
      onSubmit={(e) => e.preventDefault()}
      py={3}
      sx={{
        backgroundColor: "white",
        width: "480px",
        height: "396px",
        px: "4",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",

        alignItems: "center",
      }}
    >
      {/* logo */}
      <Text
        sx={{
          color: "#38ae99",
          fontWeight: "bold",
          fontSize: "40px",
        }}
      >
        LOGO
      </Text>

      <Text
        sx={{
          mb: "10%",
          textAlign: "center",
        }}
      >
        Please Login to the platfrom
      </Text>
      <Input
        className={styles.inputBox}
        name='username'
        placeholder='Username'
      />
      <Input
        className={styles.inputBox}
        name='password'
        placeholder='Password'
      />
      <Box
        sx={{
          height: "40px",
        }}
      />

      <Button color='#38ae99' width='100%' height='48px' radius='4px'>
        LOGIN
      </Button>
    </Box>
  );
};

export default LoginForm;
