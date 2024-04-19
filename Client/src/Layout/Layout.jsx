import { Box } from "@mui/material";
import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Box display="flex" height="100%">
      <Header />
      <Box
        sx={{
          margin: "5rem 0rem",
          width: "100%",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
