import React from "react";
import { useQuery } from "@apollo/client";
import AuthorEL from "../shared/AuthorEL";
import { Grid } from "@mui/material";

import { GET_AUTHORS_INFO } from "../../graphql/queries";
import AuthorsLoader from "../Loading/AuthorsLoader";

const Authors = () => {
  const { loading, data, errors } = useQuery(GET_AUTHORS_INFO);

  if (errors) return <h3>errors ...</h3>;

  return (
    <Grid container spacing={3}>
      {loading ? (
        <AuthorsLoader />
      ) : (
        data.authors.map((author) => (
          <Grid item key={author.id} xs={12} sm={6} md={4}>
            <AuthorEL {...author} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default Authors;
