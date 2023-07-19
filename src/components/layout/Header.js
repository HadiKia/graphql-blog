import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Button,
  Typography,
} from "@mui/material";

import logoImage from "./logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar
      elevation={0}
      sx={{ bgcolor: "#FFFFFF", borderBottom: "1px solid #ECF0F6" }}
    >
      <Container
        maxWidth="lg"
        sx={{
          padding: ".5em",
          "@media screen and (min-width: 768px)": {
            paddingX: ".25em",
          },
        }}
      >
        <Toolbar>
          <img src={logoImage} alt="logo" width="40px" />
          <Typography
            flex={1}
            component="h1"
            variant="h5"
            fontWeight="bold"
            sx={{ paddingTop: ".2em", color: "#5e6a86", marginRight: ".3em" }}
          >
            وبلاگ
          </Typography>
          <Box sx={{ display: "flex", columnGap: ".5em" }}>
           <Link to="/">
           <Button
              variant="outlined"
              sx={{
                fontWeight: 600,
                borderRadius: "1.5em",
                color: "#457EFF",
                borderColor: "#457EFF",
              }}
            >
              صفحه اصلی
            </Button>
           </Link>
            <Button
              variant="contained"
              sx={{
                fontWeight: 600,
                backgroundColor: "#457EFF",
                borderRadius: "1.5em",
                boxShadow: 0,
                "&:hover": {
                  backgroundColor: "#457EFF",
                  boxShadow: 0,
                },
              }}
            >
              ثبت نام
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
