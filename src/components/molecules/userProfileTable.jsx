import React from "react";
import { Text } from "rebass";

const UserProfileTable = ({ userData }) => {
  return (
    <>
      <Text>{userData?.count}</Text>
      <Text>User Profile</Text>
    </>
  );
};

export default UserProfileTable;
