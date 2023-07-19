import React from "react";
import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import CardEL from "../shared/CardEL";

import { GET_BLOGS_INFO } from "../../graphql/queries";
import BlogsLoader from "../Loading/BlogsLoader";

const Blogs = () => {
  const { loading, data, errors } = useQuery(GET_BLOGS_INFO);

  if (errors) return <h3>Error ...</h3>;

  return (
    <Grid container spacing={3}>
      {loading ? (
        <BlogsLoader />
      ) : (
        data.posts.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <CardEL {...post} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default Blogs;