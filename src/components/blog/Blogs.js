import React from "react";
import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import CardEL from "../shared/CardEL";

import { GET_BLOGS_INFO } from "../../graphql/queries";

const Blogs = () => {
  const { loading, data, errors } = useQuery(GET_BLOGS_INFO);
  if (loading) return <h4>Loading ...</h4>;
  if (errors) return <h4>Error ...</h4>;
  return (
    <Grid container spacing={3}>
      {data.posts.map((post) => (
        <Grid item key={post.id} xs={12} sm={6} lg={4}>
          <CardEL {...post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Blogs;
