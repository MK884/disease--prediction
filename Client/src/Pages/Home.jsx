import { Container, useMediaQuery } from "@mui/material";
import React from "react";
import {
  AiSection,
  HeroSection,
  StarterSection,
  InfoSection,
  FeaturesSection,
} from "../Components/home";

const Home = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1280px)"); // Example breakpoint for large screens

  // Define the height based on the screen size
  const height = isLargeScreen ? "40rem" : "22rem";

  return (
    <>
      <Container>
        <HeroSection height={height} />

        <StarterSection />

        <InfoSection />

        <FeaturesSection />
        <AiSection height={height} />
      </Container>

      {/* Drawer start */}
      {/* <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: { width: 700, borderRadius: "15px 0px 0px 15px" },
        }}
      >
        <IconButton
          onClick={() => setOpen(!open)}
          sx={{
            marginRight: "auto",
            position: "fixed",
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box
          sx={{
            margin: "3rem 2rem 2rem 2rem",
            display: "flex",
            height: "100%",
          }}
        >
          <Check />
        </Box>
      </Drawer> */}
      {/* Drawer End */}
    </>
  );
};

export default Home;
