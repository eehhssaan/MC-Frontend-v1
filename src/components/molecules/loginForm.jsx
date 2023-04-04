import React, { useState } from "react";
import { Box, Text } from "rebass/styled-components";
import { Input } from "@rebass/forms";

// internal
import styles from "./loginForm.module.css";
import Button from "../atoms/button";

const LoginForm = ({ onLoginSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginSubmit({ email, password });
  };

  return (
    <Box
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
        borderRadius: "8px",
      }}
    >
      <Box as='form' onSubmit={(e) => handleSubmit(e)} width='100%'>
        <Text
          sx={{
            color: "#38ae99",
            fontWeight: "bold",
            fontSize: "40px",
            textAlign: "center",
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
          id='username'
          className={styles.inputBox}
          name='username'
          type='text'
          value={email}
          placeholder='Username'
          onChange={(event) => setEmail(event.target.value)}
        />

        <Input
          id='password'
          className={styles.inputBox}
          name='password'
          type='password'
          value={password}
          placeholder='Password'
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button
          color='#38ae99'
          width='100%'
          height='48px'
          radius='4px'
          type='submit'
        >
          LOGIN
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
