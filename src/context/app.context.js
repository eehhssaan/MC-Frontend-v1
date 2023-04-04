import React, { createContext } from "react";

export const appContext = createContext({});

export const AppProvider = ({ children }) => {
  const createAdmin = async () => {
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/admin/register`,
      {
        method: "POST",
        redirect: "manual",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return resp;
  };

  const loginAdmin = async ({ email, password }) => {
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/admin/login`,
      {
        method: "POST",
        redirect: "manual",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
    return resp;
  };

  return (
    <appContext.Provider
      value={{
        createAdmin,
        loginAdmin,
      }}
    >
      {children}
    </appContext.Provider>
  );
};
