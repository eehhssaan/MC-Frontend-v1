import React from "react";
import { Button as ReBassButton } from "rebass/styled-components";

const Button = ({
  border,
  color,
  children,
  height,
  onClick,
  radius,
  width,
  text,
  fontSize,
  margin,
}) => {
  return (
    <ReBassButton
      onClick={onClick}
      style={{
        backgroundColor: color,
        border,
        borderRadius: radius,
        height,
        width,
        margin,
        color: text,
        display: "flex",
        cursor: "pointer",
        justifyContent: "center",
        alignItems: "center",
        fontSize,
      }}
    >
      {children}
    </ReBassButton>
  );
};

export default Button;
