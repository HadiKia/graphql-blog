import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Authors from "../author/Authors";
import Blogs from "../blog/Blogs";

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        mt={9}
        sx={{
          paddingX: ".5em",
          "@media screen and (min-width: 768px)": {
            paddingX: "1.5em",
          },
        }}
      >
        <Grid item xs={12} sm={3.5} lg={2.5} mt={4} sx={{"@media screen and (min-width: 768px)": {
            paddingLeft: "1.25em",
          },}}>
          <Typography component="h3" variant="h5" mb={3} mr={2} fontWeight={600} sx={{color : '#5e6a86'}}>
            نویسنده ها
          </Typography>
          <Authors />
        </Grid>
        <Grid item xs={12} sm={8.5} lg={9.5} mt={4}>
          <Typography component="h3" variant="h5" mb={3} mr={2} fontWeight={600} sx={{color : '#5e6a86'}}>
            مقالات
          </Typography>
          <Blogs />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
