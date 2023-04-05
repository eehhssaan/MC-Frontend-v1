import React, { useState, useContext, useEffect } from "react";
import Button from "../atoms/button";
import { Box } from "rebass/styled-components";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

import { appContext } from "../../context/app.context";

const Navbar = () => {
  const { logoutAdmin, dispatch } = useContext(appContext);
  const [userName, setUserName] = useState("");
  const router = useRouter();

  const handleLogout = () => {
    logoutAdmin()
      .then((resp) => {
        if (resp.ok) {
          dispatch({ type: "USER_LOGOUT" });
          Cookies.remove("userInfo");
          router.push("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleProfile = () => {
    // this page does not exist as of now
    router.push("/profile");
  };

  useEffect(() => {
    if (Cookies.get("userInfo")) {
      const user = JSON.parse(Cookies.get("userInfo"));
      setUserName(user.name);
    }
  }, []);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          height: "72px",
        }}
      >
        <Button
          text='black'
          margin='6px'
          height='36px'
          radius='30px'
          type='submit'
          color='white'
          border='1px solid #82889C'
          fontSize='14px'
          // onClick={handleProfile}
        >
          {userName}
        </Button>
        <Button
          text='black'
          height='36px'
          margin='6px'
          radius='30px'
          type='submit'
          color='white'
          border='1px solid #82889C'
          fontSize='14px'
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>
    </>
  );
};

export default Navbar;
