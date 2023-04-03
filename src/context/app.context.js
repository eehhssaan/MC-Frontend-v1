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

  return (
    <appContext.Provider
      value={{
        createAdmin,
      }}
    >
      {children}
    </appContext.Provider>
  );
};
