import { Box, Typography } from "@mui/material";
import React from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";


const Layout = ({ children }) => {

  const currentLocation = useLocation();

  const isHomePage = currentLocation.pathname === "/";

  return (
    <>
    
    
    <Box display="flex" height="100%" >
      {isHomePage ? <Header/> : null}
      <Box
        sx={{
          margin: "5rem 0rem",
          width: "100%",
        }}
        >
        {children}
        
      </Box>
      
    </Box>
    {
      isHomePage ? 
      <Box
          sx={{
            width: "100%",
            bgcolor:'#242424',
            height:"5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            
          }}
        >
          <Typography color='#fff'>
          © 2024 Copyright: HealthyMe
          </Typography>
        </Box> 
        : null
    }
    
        </>
  );
};

export default Layout;
