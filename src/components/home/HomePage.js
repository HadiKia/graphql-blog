import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Authors from "../author/Authors";
import Blogs from "../blog/Blogs";

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Grid container mt={12} sx={{paddingX : '.5em' , '@media screen and (min-width: 768px)': {
        paddingX : '1.5em'
        },}}>
        <Grid item xs={12} sm={3} lg={2} mt={4}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={600}>
            نویسنده ها
          </Typography>
          <Authors />
        </Grid>
        <Grid item xs={12} sm={9} lg={10} mt={4}>
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
