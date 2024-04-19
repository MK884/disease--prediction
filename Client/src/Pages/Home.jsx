import {
  Box,
  Button,
  Container,
  IconButton,
  Typography,
  Drawer,
} from "@mui/material";
import React from "react";
import Ellips from "../assets/Ellipse.svg";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DocImg from "../assets/doctor.png";
import CloseIcon from "@mui/icons-material/Close";
import Check from "../Components/Check";
import Svg from "../Components/Svg";
import FeatureCard from "../Components/FeatureCard";
import Chatbot from "../assets/chatbot.png";
import Recomend from "../assets/recom.png";
import Skin from "../assets/skin.png";

const Home = () => {
  const [open, setOpen] = React.useState(false);

  const Features = [
    {
      id: 1,
      icon: Chatbot,
      title: "Interactive Chatbot",
      desc: "Solve your queries by interacting with our bot.",
    },
    {
      id: 2,
      icon: Skin,
      title: "5+ Diseases",
      desc: "Six Disease Offers",
    },
    {
      id: 3,
      icon: Recomend,
      title: "Recommendations",
      desc: "Get your recommendations",
    },
  ];
  return (
    <>
      <Container
        sx={{
          userSelect: "none",
        }}
      >
        {/* Hero Section start */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              width: "60%",
              position: "relative",
            }}
          >
            <img
              src={Ellips}
              alt="Back"
              style={{
                width: "100%",
                position: "absolute",
                zIndex: 0,
              }}
            />
            <Box
              sx={{
                display: "flex",
                zIndex: 1,
                position: "relative",
                flexDirection: "column",
                marginTop: "5rem",
              }}
            >
              <Button
                startIcon={<HealthAndSafetyIcon />}
                variant="contained"
                sx={{
                  borderRadius: "30px",
                  bgcolor: "#fff",
                  color: "black",
                  border: " 1px solid #B4B4B4",
                  width: "fit-content",
                  boxShadow: 0,
                  ":hover": {
                    bgcolor: "#fff",
                    boxShadow: 0,
                  },
                  marginBottom: "1rem",
                }}
              >
                Health Matters
              </Button>
              <Typography
                fontSize={54}
                fontWeight={600}
                sx={{
                  color: "#1678F2",
                }}
              >
                One Step Solution
              </Typography>
              <Typography
                fontSize={54}
                fontWeight={600}
                sx={{
                  color: "black",
                }}
              >
                For All Your Skin Need
              </Typography>

              <Typography fontSize={16} fontWeight={400} color="#8A8585">
                Using AI Check Your Skin Disease and Get Instant Result with
                minimum Efforts.
              </Typography>
              <Button
                variant="contained"
                startIcon={<OpenInNewIcon />}
                sx={{
                  bgcolor: "#fff",
                  color: "#8A8585",
                  width: "fit-content",
                  borderRadius: "30px",
                  marginTop: "50px",
                  ":hover": {
                    bgcolor: "#fff",
                  },
                }}
                onClick={() => setOpen(true)}
              >
                Check Here
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              width: "40%",
              position: "relative",
            }}
          >
            <img
              src={Ellips}
              style={{
                width: "110%",
                position: "absolute",
                zIndex: 0,
              }}
            />
            <img
              src={DocImg}
              style={{
                height: "40rem",
              }}
            />
          </Box>
        </Box>
        {/* Hero Section End */}
        {/* Features Section start */}
        <Box>
          <Typography color="#3A8EF6" fontWeight={600} fontSize={24}>
            FEATURES WE PROVIDE
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 10,
              justifyContent: "center",
              marginTop: "3rem",
            }}
          >
            {Features.map((feature) => (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                icon={feature.icon}
                desc={feature.desc}
              />
            ))}
          </Box>
        </Box>
        {/* Features Section End */}
        {/* Info Section start */}
        <Box
          sx={{
            marginTop: 10,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              marginTop: 20,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "40%",
                display: "flex",
              }}
            >
              <img src="https://ai-derm.com/assets/man-318621c4.webp" />
            </Box>
            <Box>
              <Typography fontSize={32} fontWeight={700}>
                AI Dermatologist can save your life
              </Typography>
              <Typography>
                One of the most dangerous diseases that AI Dermatologist can
                help identify is skin cancer.
              </Typography>
              <Typography fontWeight={700}>
                Skin cancer is the most common cancer in the United States and
                worldwide.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography fontSize={32} fontWeight={700}>
                What Do you Know in 1 minute?
              </Typography>
              <Typography>
                Risks Detection and Assessment more than 12 diseases:
              </Typography>
              <Button
                variant="contained"
                size="large"
                color="warning"
                onClick={() => setOpen(true)}
                sx={{
                  borderRadius: "10px",
                  marginTop: 7,
                }}
              >
                Check your Skin Now
              </Button>
            </Box>
            <Box>
              <Box
                sx={{
                  backgroundColor: "rgba( 59, 197, 206, 0.95 )",
                  boxShadow: "0 8px 32px 0 rgba( 59, 197, 206, 0.95 )",
                  backdropFilter: "blur(13px)",
                  borderRadius: "10px",
                  borderColor: "1px solid rgba( 255, 255, 255, 0.18 )",
                  height: "auto",
                  width: "25rem",
                  padding: "1rem 2rem 1rem 3rem",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <Typography sx={{ fontWeight: "bold", width: "65%" }}>
                  AI Dermatologist is based on Artificial Intelligence
                  technologies
                </Typography>
                <Svg />
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Info Section End */}
      </Container>

      {/* Drawer start */}
      <Drawer
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
      </Drawer>
      {/* Drawer End */}
    </>
  );
};

export default Home;
