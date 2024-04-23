import { Box, Typography } from "@mui/material";
import React from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import { Header as DashHeader} from "./header/Header";
import Slider from "./slider/Slider";

const Layout = ({ children }) => {
  const currentLocation = useLocation();

  const isHomePage = currentLocation.pathname === "/";

  return (
    <>
      <Box display={!isHomePage && 'flex'} height="100%">
        {!isHomePage && <Slider />}
        <Box
          bgcolor={!isHomePage && '#eee'}
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            minHeight: "100vh",
          }}
        >
          {isHomePage ? <Header /> : <DashHeader/>}
          <Box
            component="main"
            sx={{
              p: { xs: 1, md: 2, lg: 3 },
              flexGrow: 1,
            }}
          >
            {children}
          </Box>
        </Box>
        {isHomePage && (
          <Box
            sx={{
              width: "100%",
              bgcolor: "#242424",
              height: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography color="#fff">© 2024 Copyright: HealthyMe</Typography>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Layout;
