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
        color: text,
        cursor: "pointer",
      }}
    >
      {children}
    </ReBassButton>
  );
};

export default Button;
