import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Text } from "rebass";

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
    <>
      <Text>Dashboard</Text>
      <UserProfileTable userData={userData} />
    </>
  );
};

export default Dashboard;
