import { Link, Grid, Container, Box } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FingerprintIcon from "@mui/icons-material/Fingerprint";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#FFFFFF", paddingTop: ".5em" }}>
      <Container
        maxWidth="lg"
        sx={{
          paddingX: ".5em",
          "@media screen and (min-width: 768px)": {
            paddingX: ".5em",
          },
        }}
      >
        <Grid
          container
          sx={{ placeItems: "center" }}
          fontWeight={600}
          color="#5e6a86"
          padding="1.25em"
        >
          <Grid item xs={4}>
            <Link
              href="https://www.instagram.com/ihadikia"
              target="_blank"
              underline="none"
            >
              <InstagramIcon sx={{ color: "#5e6a86" }} />
            </Link>
            <Link
              href="https://github.com/HadiKia"
              target="_blank"
              underline="none"
            >
              <GitHubIcon sx={{ color: "#5e6a86", mr: ".4em" }} />
            </Link>
          </Grid>
          <Grid item xs={8}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                color: "#5e6a86",
              }}
            >
              <span style={{ fontSize: "1.1rem" }}>developed by HadiKia</span>
              <FingerprintIcon sx={{ marginBottom: ".35em" }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
