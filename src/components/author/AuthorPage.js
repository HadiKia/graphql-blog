import React from "react";

import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import sanitizeHtml from "sanitize-html";
import CardEL from "../shared/CardEL";

const AuthorPage = () => {
  const { slug } = useParams();

  const { loading, data, errors } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });

  if (loading) return <h3>Loading ...</h3>;
  if (errors) return <h3>errors ...</h3>;

  const {
    author: { name, field, avatar, description, posts },
  } = data;

  return (
    <Container maxWidth="lg" sx={{ marginTop: "7em" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} lg={3}>
          <Grid container>
            <Grid
              item
              xs={12}
              display="flex"
              flexDirection="column"
              alignItems="center"
              marginBottom={3}
            >
              <Avatar
                src={avatar.url}
                sx={{ width: "100px", height: "100px", marginBottom: "1em" }}
              />
              <Typography
                component="h3"
                variant="h5"
                fontWeight="600"
                color="#1A202E"
                marginBottom=".25em"
              >
                {name}
              </Typography>
              <Typography
                component="p"
                variant="h5"
                color="#5E6A86"
                fontSize="1.2rem"
                marginBottom=".5em"
              >
                {field}
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              paddingX={1.5}
              sx={{
                "@media screen and (min-width: 768px)": {
                  paddingX: ".5em",
                },
              }}
              marginBottom={3}
            >
              <Typography
                component="h3"
                variable="h5"
                fontWeight="600"
                fontSize="1.5rem"
                marginBottom="-0.5em"
              >
                درباره نویسنده
              </Typography>
              <div
                style={{ color: "#1A202E", lineHeight: "1.75em" }}
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(description.html),
                }}
              ></div>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sm={8}
          lg={9}
          paddingX={1.5}
          marginBottom={4}
          sx={{
            "@media screen and (min-width: 768px)": {
              paddingX: ".5em",
            },
          }}
        >
          <Typography
            component="h3"
            variable="h5"
            fontWeight="600"
            fontSize="1.5rem"
            marginBottom="1em"
          >
            مقالات {name}
          </Typography>
          <Grid container spacing={3}>
            {posts.map((post) => (
              <Grid item xs={12} md={6} key={post.id}>
                <CardEL
                  title={post.title}
                  slug={post.slug}
                  coverPhoto={post.coverPhoto}
                  datePublished={post.datePublished}
                  content={post.content}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AuthorPage;