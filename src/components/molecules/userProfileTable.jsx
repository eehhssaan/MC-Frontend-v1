import React from "react";
import { Box, Flex, Text } from "rebass";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";

const UserProfileTable = ({ userData }) => {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return (
    <Box
      sx={{
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        width: "100%",
        borderRadius: "10px !important",
        overflow: "hidden !important",
      }}
    >
      <Box p={3} bg='#F3F4F6'>
        <Flex alignItems='center'>
          <Box flex={1} sx={itemStyle}>
            First Name
          </Box>
          <Box flex={1} sx={itemStyle}>
            Last Name
          </Box>
          <Box flex={1} sx={itemStyle}>
            Gender
          </Box>
          <Box flex={2} sx={itemStyle}>
            Email
          </Box>
          <Box flex={1} sx={itemStyle}>
            Phone No.
          </Box>
          <Box flex={1} sx={itemStyle}>
            Created At
          </Box>
          <Box flex={1} sx={itemStyle}>
            Created By
          </Box>
          <Box flex={1} sx={itemStyle}>
            Action
          </Box>
        </Flex>
      </Box>
      {userData.items?.slice(startIndex, endIndex).map(
        (e) => (
          <Flex key={e.item._id} sx={rowStyle}>
            <Box flex={1} sx={itemStyle}>
              {e.item.firstname}
            </Box>
            <Box flex={1} sx={itemStyle}>
              {e.item.lastname}
            </Box>
            <Box flex={1} sx={itemStyle}>
              {e.item.gender}
            </Box>
            <Box flex={2} sx={itemStyle}>
              {e.item.email}
            </Box>
            <Box flex={1} sx={itemStyle}>
              {e.item.phone}
            </Box>
            {/* <Box flex={2} sx={itemStyle}>
              {e.item}
            </Box> */}
            <Box flex={1} sx={itemStyle}>
              {new Date(e.createdAt).toLocaleDateString()}
            </Box>

            <Box flex={1} sx={itemStyle}>
              {e.item.createdBy}
            </Box>

            <Box flex={1} sx={{ width: "10%" }}>
              <CiCircleMore />
            </Box>
          </Flex>
        )
        // console.log(e.item.email)
      )}
      <Box p={4} bg='white' sx={{ borderTop: "1px solid #E8E9EB" }}>
        <Flex
          justifyContent='end'
          sx={{ color: "#5A6074" }}
          alignItems='center'
        >
          <Text>
            {startIndex + 1}-{Math.min(endIndex, userData.items?.length)} of{" "}
            {userData.items?.length}
          </Text>
          <Flex>
            <Box
              sx={paginationStyle(currentPage > 1)}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <FaChevronLeft />
            </Box>
          </Flex>
          <Flex>
            {Array.from(
              { length: Math.ceil(userData.items?.length / pageSize) },
              (_, index) => (
                <Box
                  key={index}
                  sx={paginationStyle(currentPage === index + 1)}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Box>
              )
            )}
          </Flex>
          <Flex>
            <Box
              sx={paginationStyle(
                currentPage < Math.ceil(userData.items?.length / pageSize)
              )}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <FaChevronRight />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

const rowStyle = {
  boxSizing: "border-box",
  fontFamily: "Open Sans",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "16px 24px",
  width: "inherit",
  fontSize: "14px",
  height: "56px",
  background: "#FFFFFF",
  textAlign: "center",

  // borderBottom: "1px solid #E8E9EB",
  color: "#5A6074",
};

const itemStyle = {
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "20px",
  textAlign: "center",
  /* identical to box height, or 143% */
  color: "#5A6074",
  overflow: "hidden",
};

const paginationStyle = (active) => ({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "32px",
  height: "32px",
  background: active ? "#38ae99" : "white",
  color: active ? "white" : "black",
  margin: "0 4px",
  cursor: "pointer",
  border: "1px solid #E8E9EB",
  borderRadius: "4px",
});

export default UserProfileTable;
