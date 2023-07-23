import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GET_POST_INFO } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import persian from "react-date-object/calendars/persian";
import { DateObject } from "react-multi-date-picker";
import { convertEnNumberToPersian } from "../helper/convertNumber";
import sanitizeHtml from "sanitize-html";
import CommentForm from "../comment/CommentForm";
import Comments from "../comment/Comments";

const BlogPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { loading, data, errors } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });

  if (loading) return <h3>loading ...</h3>;
  if (errors) return <h3>errors ...</h3>;

  const date = new DateObject({
    date: new Date(
      data.post.datePublished.slice(0, 4),
      data.post.datePublished.slice(5, 7),
      data.post.datePublished.slice(8)
    ),
    calendar: persian,
  });

  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: "7em",
        "@media screen and (min-width: 768px)": {
          marginTop: "8em",
        },
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          paddingX={0.5}
          sx={{
            marginBottom: 2,
            "@media screen and (min-width: 1024px)": {
              marginBottom: 4,
            },
          }}
        >
          <Typography
            component="h2"
            variant="h4"
            color="#1A202E"
            fontWeight={800}
            paddingRight={1.25}
            sx={{
              fontSize: "1.4rem",
              "@media screen and (min-width: 768px)": {
                fontSize: "2rem",
              },
            }}
          >
            {data.post.title}
          </Typography>
          <Button
            onClick={() => navigate(-1)}
            variant="outlined"
            sx={{
              color: "#457EFF",
              border: "none",
              bgcolor: "#457EFF10",
              fontSize: "1rem",
              fontWeight: "500",
              borderRadius: "1.5em",
              "&:hover": {
                border: "none",
                bgcolor: "#457EFF20",
              },
            }}
          >
            <Box
              component="span"
              sx={{
                display: "none",
                "@media screen and (min-width: 768px)": {
                  display: "block",
                },
              }}
            >
              بازگشت
            </Box>
            <ArrowBack
              sx={{
                marginRight: ".2em",
                paddingBottom: ".1em",
                fontSize: "1.25em",
              }}
            />
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Grid
            container
            sx={{
              "@media screen and (min-width: 728px)": {
                display: "flex",
                flexDirection: "row-reverse",
              },
            }}
          >
            <Grid item xs={12} md={5} paddingX={1.25} marginBottom={4}>
              <img
                src={data.post.coverPhoto.url}
                alt={data.post.slug}
                width="100%"
                style={{ borderRadius: 15 }}
              />
            </Grid>

            <Grid item xs={12} md={7}>
              <Box
                paddingX={1.25}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mb={0}
              >
                <Box display="flex" alignItems="center">
                  <Avatar
                    src={data.post.author.avatar.url}
                    sx={{
                      width: 45,
                      height: 45,
                      marginLeft: 1,
                      "@media screen and (min-width: 768px)": {
                        width: 50,
                        height: 50,
                      },
                    }}
                  />
                  <Typography
                    component="p"
                    variant="p"
                    sx={{
                      color: "#495367",
                      fontSize: "1em",
                      fontWeight: "600",
                      display: "flex",
                      flexDirection: "column",
                      "@media screen and (min-width: 768px)": {
                        fontSize: "1.2rem",
                      },
                    }}
                  >
                    <Link
                      to={`/authors/${data.post.author.slug}`}
                      style={{
                        color: "#495367",
                        textDecoration: "none",
                      }}
                    >
                      {data.post.author.name}
                    </Link>
                    <Box
                      component="span"
                      sx={{
                        color: "#96A2BE",
                        fontSize: ".9rem",
                        "@media screen and (min-width: 768px)": {
                          fontSize: "1rem",
                        },
                      }}
                    >
                      {data.post.author.field}
                    </Box>
                  </Typography>
                </Box>
                <Typography
                  style={{
                    color: "#96A2BE",
                    fontSize: "1.1rem",
                    fontWeight: 500,
                  }}
                >
                  {convertEnNumberToPersian(date.format().slice(0, 4))}/
                  {convertEnNumberToPersian(date.format().slice(5, 7))}/
                  {convertEnNumberToPersian(date.format().slice(8))}
                </Typography>
              </Box>

              <Box paddingX={1.25} mb={5}>
                <Box
                  sx={{
                    color: "#1A202E",
                    "@media screen and (min-width: 768px)": {
                      fontSize: "1.2rem",
                    },
                    "@media screen and (min-width: 1024px)": {
                      textAlign: "justify",
                    },
                  }}
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(data.post.content.html),
                  }}
                ></Box>
              </Box>

              <Box paddingX={1.25} mb={5}>
                <CommentForm slug={slug} />
              </Box>

              <Box paddingX={1.25} mb={7}>
                <Comments slug={slug} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogPage;
