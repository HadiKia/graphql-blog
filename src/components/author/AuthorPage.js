import React from "react";

import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import sanitizeHtml from "sanitize-html";
import CardEL from "../shared/CardEL";
import {
  AboutAuthorLoader,
  ArticleBoxLoader,
  ArticleTitleLoader,
  AvatarLoader,
  NameLoader,
} from "../Loading/AuthorPageLoader";

const AuthorPage = () => {
  const { slug } = useParams();

  const { loading, data, errors } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });

  if (errors) return <h3>errors ...</h3>;

  if (!loading) {
    var {
      author: { name, field, avatar, description, posts },
    } = data;
  }

  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: "7em",
        minHeight: "100vh",
        "@media screen and (min-width: 768px)": {
          marginTop: "8em",
        },
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={4} lg={3}>
          <Grid container>
            <Grid
              item
              xs={12}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              {loading ? (
                <AvatarLoader />
              ) : (
                <Avatar
                  src={avatar.url}
                  sx={{ width: "100px", height: "100px", marginBottom: "1em" }}
                />
              )}
              {loading ? (
                <NameLoader />
              ) : (
                <Typography
                  component="h3"
                  variant="h5"
                  fontWeight="600"
                  color="#1A202E"
                  marginBottom=".25em"
                >
                  {name}
                </Typography>
              )}
              {loading ? (
                <NameLoader />
              ) : (
                <Typography
                  component="p"
                  variant="h5"
                  color="#495367"
                  fontSize="1.1rem"
                  marginBottom=".5em"
                >
                  {field}
                </Typography>
              )}
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
              {loading ? (
                <AboutAuthorLoader />
              ) : (
                <div
                  style={{ color: "#1A202E", lineHeight: 1.75 }}
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(description.html),
                  }}
                ></div>
              )}
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sm={8}
          lg={9}
          paddingX={1.5}
          marginBottom={5}
          sx={{
            "@media screen and (min-width: 768px)": {
              paddingX: ".5em",
            },
          }}
        >
          {loading ? (
            <ArticleTitleLoader />
          ) : (
            <Typography
              component="h3"
              variable="h5"
              fontWeight="600"
              fontSize="1.4rem"
              color="#495367"
              sx={{
                marginBottom: "1em",
                "@media screen and (min-width: 1024px)": {
                  marginBottom: "1.25em",
                  fontSize: "1.5rem",
                },
              }}
            >
              مقالات {name}
            </Typography>
          )}
          <Grid container spacing={3}>
            {loading ? (
              <ArticleBoxLoader />
            ) : (
              posts.map((post) => (
                <Grid item xs={12} md={6} key={post.id}>
                  <CardEL
                    title={post.title}
                    slug={post.slug}
                    coverPhoto={post.coverPhoto}
                    datePublished={post.datePublished}
                    content={post.content}
                  />
                </Grid>
              ))
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AuthorPage;
