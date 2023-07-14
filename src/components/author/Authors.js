import React from "react";

import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import { Avatar, Divider, Grid, Typography } from "@mui/material";

const Authors = () => {
  const { loading, data, errors } = useQuery(GET_AUTHORS_INFO);

  if (loading) return <h3>Loading ...</h3>;
  if (errors) return <h3>errors ...</h3>;

  const { authors } = data;
  return (
    <Grid
      container
      sx={{
        borderRadius: 4,
        border: "1px solid #DEE3EB",
        bgcolor: "#FFFFFF",
      }}
    >
      {authors.map((author, index) => (
        <React.Fragment key={author.id}>
          <Grid item xs={12} sx={{ padding: "1em" }}>
            <a
              href={`/authors/${author.slug}`}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                gap: "0px .5em",
              }}
            >
              <Avatar src={author.avatar.url} />
              <Typography
                component="p"
                variant="p"
                sx={{ color: "#1A202E" }}
              >
                {author.name}
              </Typography>
            </a>
          </Grid>
          {index !== authors.length - 1 && (
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default Authors;
