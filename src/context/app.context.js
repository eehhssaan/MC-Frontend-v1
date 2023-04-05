import React, { createContext, useReducer } from "react";
import Cookies from "js-cookie";

export const appContext = createContext({});

const initialState = {
  userInfo: Cookies.get("userInfo")
    ? JSON.parse(Cookies.get("userInfo"))
    : null,
};

function reducer(state, action) {
  switch (action.type) {
    case "USER_LOGIN":
      return { ...state, userInfo: action.payload };

    case "USER_LOGOUT":
      return {
        ...state,
        userInfo: null,
      };
  }
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
        credentials: "include",
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

  const logoutAdmin = async () => {
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/admin/logout`,
      {
        credentials: "include",
        method: "POST",
        redirect: "manual",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return resp;
  };

  const getAllUsers = async () => {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/user/`, {
      credentials: "include",
      method: "GET",
      redirect: "manual",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return resp;
  };

  return (
    <appContext.Provider
      value={{
        state,
        dispatch,
        createAdmin,
        getAllUsers,
        loginAdmin,
        logoutAdmin,
      }}
    >
      {children}
    </appContext.Provider>
  );
};
