import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Text } from "rebass/styled-components";

// internal imports
import { appContext } from "../../context/app.context";
import UserProfileTable from "../molecules/userProfileTable";

const Dashboard = () => {
  const { getAllUsers } = useContext(appContext);
  const [userData, setUserData] = useState([]);
  const router = useRouter();

  async function fetchUserData() {
    try {
      const response = await getAllUsers();

      if (response.status !== 200) {
        router.push("/login");
      } else {
        const data = await response.json();

        setUserData(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <Box
      sx={{
        margin: "40px",
      }}
    >
      <Text
        sx={{
          width: "131px",
          height: "32px",
          left: "328px",
          top: "112px",
          fontFamily: "Open Sans",
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: "24px",
          lineHeight: "32px",
          letterSpacing: "-0.02em",
          color: "#1A1A1A",
          marginBottom: "38px",
          marginTop: "40px",
        }}
      >
        User Profile
      </Text>
      <UserProfileTable userData={userData} />
    </Box>
  );
};

export default Dashboard;
