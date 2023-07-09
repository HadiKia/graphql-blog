import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Authors from "../author/Authors";
import Blogs from "../blog/Blogs";

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} padding={3} mt={4} mr={-2}>
        <Grid item xs={12} sm={4} mt={4}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={600}>
            نویسنده ها
          </Typography>
          <Authors />
        </Grid>
        <Grid item xs={12} sm={8} mt={4}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={600}>
            مقالات
          </Typography>
          <Blogs />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
