import { Link, Typography, Grid, Container } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#FFFFFF" }}>
      <Container maxWidth="lg" sx={{ paddingX: "0px" }}>
        <Grid
          container
          sx={{ placeItems: "center" }}
          fontWeight={600}
          color="#5e6a86"
          padding="1.75em"
          mt={10}
          t
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
            <Typography component="p" variant="p" textAlign="left">
              Built with &#128151; by Hadi Kia
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
