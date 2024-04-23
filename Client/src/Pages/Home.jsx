import {
  Box,
  Button,
  Container,
  IconButton,
  Typography,
  Drawer,
  useMediaQuery,
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
import Analytics from "../assets/analytics.png";
import AI from "../assets/AI.png";
import Skin from "../assets/skin.png";

const Home = () => {
  const [open, setOpen] = React.useState(false);

  const isLargeScreen = useMediaQuery("(min-width: 1280px)"); // Example breakpoint for large screens

  // Define the height based on the screen size
  const height = isLargeScreen ? "40rem" : "22rem"; 

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
      title: "3+ Diseases",
      desc: "Four Disease Offers",
    },
    {
      id: 3,
      icon: Analytics,
      title: "Analytics Services",
      desc: "Get your analytics information",
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
            flexDirection: { lg: 'row', xs:'column'},
            
          }}
        >
          <Box
            sx={{
              width: "100%",
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
                fontSize={{lg: 54, xs : 44}}
                fontWeight={600}
                sx={{
                  color: "#1678F2",
                }}
              >
                One Step Solution
              </Typography>
              <Typography
                fontSize={{lg: 54, xs : 44}}
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
              <Typography variant="body2" color="red">
                Note : The scan result is not a diagnosis. To obtain an accurate
                diagnosis and a recommendation for treatment - consult your
                doctor.
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
                width: "10%",
                position: "absolute",
                zIndex: 0,
              }}
            />
            
            <img
              src={DocImg}
              style={{
                height: height,
              }}
            
            />
            
          </Box>
        </Box>
        {/* Hero Section End */}

        {/* what do you know start */}

        <Box
            sx={{
              display: "flex",
              flexDirection: { lg: 'row', xs:'column'},
              width: "100%",
              justifyContent: "space-between",
              marginY:'5rem',
              gap:{lg: 0, xs: '2rem'},
              alignItems: "center",
            }}
          >
            <Box>
              <Typography fontSize={32} fontWeight={700}>
                What Do you Know in 1 minute?
              </Typography>
              <Typography variant="body2">
                Risks Detection and Assessment of 4 diseases:
              </Typography>
              <Box
                sx={{
                  marginTop:'1rem',
                }}
              >
                <Typography ><span style={{
                  color:'green'
                }}>✔</span> Eczema</Typography>
                <Typography><span style={{
                  color:'green'
                }}>✔</span> Melanoma</Typography>
                <Typography><span style={{
                  color:'green'
                }}>✔</span> Basal Cell Carcinoma</Typography>
                <Typography><span style={{
                  color:'green'
                }}>✔</span> Melanocytic Nevi</Typography>
              </Box>
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
        {/* what do you know end */}
        
        {/* Info Section start */}
        <Box
          sx={{
            marginY: '5rem',
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { lg: 'row', xs:'column'},
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              marginTop: 20,
            }}
          >
            <Box
              sx={{
                width: {lg:'40%', xs:'100%'},
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
          
        </Box>
        {/* Info Section End */}
        {/* Features Section start */}
        <Box>
          <Typography color="#3A8EF6" fontWeight={600} fontSize={24}>
            FEATURES WE PROVIDE
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { lg: 'row', xs:'column'},
              flexWrap: "wrap",
              gap: 10,
              justifyContent: "center",
              alignItems: "center",
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
        {/* AI Info Section start */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { lg: 'row', xs:'column'},
            width: "100%",
            justifyContent: "space-between",
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <img
            src={AI}
            alt="AI"
            style={{
              width: height,
            }}
          />
          <Box
            sx={{
              width: {lg:'90%', xs:'100%'},
            }}
          >
            <Typography fontSize={32} fontWeight={700}>
              How does Artificial Intelligence analyze images?
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginY: "1rem",
              }}
            >
              AI Dermatologist uses a deep machine learning algorithm
              (AI-algorithm). The human ability to learn from examples and
              experiences has been transferred to a computer. For this purpose,
              the neural network has been trained using a dermoscopic imaging
              database containing tens of thousands of examples that have
              confirmed diagnosis and assessment by dermatologists.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginY: "1rem",
              }}
            >
              The AI is able to distinguish between benign and malignant tumors,
              similar to the ABCDE rule (5 main signs of oncology: asymmetry,
              boundary, color, diameter, and change over time). The difference
              between them is that the algorithm can analyze thousands of
              features, but not only 5 of them. Of course, only a machine can
              detect that amount of evidence.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginY: "1rem",
              }}
            >
              Due to the productive cooperation with doctors, the quality of the
              algorithm performance is constantly being improved. Based on
              growing experience and its own autonomous rules, the AI is able to
              distinguish between benign and malignant tumors, find risks of
              human papillomavirus, and classify different types of acne…
            </Typography>
          </Box>
        </Box>
        {/* AI Info Section end */}
        {/* Footer start */}
        
        {/* Footer end */}
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
