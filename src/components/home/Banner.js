import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import persian from "react-date-object/calendars/persian";
import { DateObject } from "react-multi-date-picker";
import { convertEnNumberToPersian } from "../helper/convertNumber";
import { GET_BLOGS_INFO } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import sanitizeHtml from "sanitize-html";
import { ArrowBack } from "@mui/icons-material";

const Banner = () => {
  const { loading, data, errors } = useQuery(GET_BLOGS_INFO);

  if (loading) return <Box>Loading ...</Box>;
  if (errors) return <Box>Error ...</Box>;

  const date = new DateObject({
    date: new Date(
      data.posts[3].datePublished.slice(0, 4),
      data.posts[3].datePublished.slice(5, 7),
      data.posts[3].datePublished.slice(8)
    ),
    calendar: persian,
  });

  return (
    <>
      <Typography
        component="h2"
        variant="h5"
        sx={{
          fontWeight: "600",
          color: "#1A202E",
          paddingX: "0.25em",
          marginBottom: "1em",
        }}
      >
        پر بازدید ترین
      </Typography>

      <Box
        component="div"
        bgcolor="#FFFFFF"
        borderRadius={4}
        sx={{ padding: "1.5em 1.5em .5em 1.5em", marginBottom: "2em" }}
      >
        <Card
          sx={{
            boxShadow: "none",
            borderRadius: 3,
            "@media screen and (min-width: 768px)": {
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row-reverse",
              alignItems: "start",
            },
            "@media screen and (min-width: 1200px)": {
              alignItems: "center",
            },
          }}
        >
          <CardMedia
            component="img"
            image={data.posts[3].coverPhoto.url}
            alt={data.posts[3].slug}
            sx={{
              width: "100%",
              borderRadius: 3,
              marginBottom: 1,
              "@media screen and (min-width: 768px)": {
                width: "350px",
                height: "100%",
              },
              "@media screen and (min-width: 1024px)": {
                width: "500px",
                height: "100%",
              },
              "@media screen and (min-width: 1200px)": {
                width: "550px",
                height: "100%",
              },
            }}
          />
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              "@media screen and (min-width: 1024px)": {
               paddingLeft : '1em'
              },
            }}
          >
            <Box component="div">
              <CardContent sx={{ padding : '0px' }}>
                <Typography
                  component="h3"
                  variant="h6"
                  sx={{
                    color: "#1A202E",
                    fontWeight: "600",
                    fontSize: "1.6rem",
                    paddingTop :'.5em',
                    "@media screen and (min-width: 1024px)": {
                      fontSize: "2.2rem",
                      paddingTop :'0px',
                    },
                  }}
                >
                  {data.posts[3].title}
                </Typography>
                <div
                  style={{ color: "#495367", marginTop: "-0.5em", }}
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(
                      data.posts[3].content.html.slice(0, 276)
                    ),
                  }}
                ></div>
              </CardContent>
              <CardActions>
                <Link
                  to={`/blogs/${data.posts[3].slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      color: "#457EFF",
                      border: "none",
                      bgcolor: "#F4F7FC",
                      fontSize: "1rem",
                      fontWeight: "500",
                      borderRadius: "1.5em",
                      "&:hover": {
                        border: "none",
                        bgcolor: "#457EFF20",
                      },
                      margin : '-0.5em -0.5em 0.5em 0em'
                    }}
                  >
                    مطالعه بیشتر
                    <ArrowBack
                      sx={{
                        marginRight: ".2em",
                        paddingBottom: ".1em",
                        fontSize: "1.25em",
                      }}
                    />
                  </Button>
                </Link>
              </CardActions>
            </Box>
            <Box component="div">
              <CardHeader
                avatar={
                  <Avatar
                    src={data.posts[3].author.avatar.url}
                    sx={{
                      transform: "scale(1.2)",
                      marginLeft: ".5em",
                      marginBottom: ".2em",
                      marginRight: "-0.3em",
                    }}
                  />
                }
                title={
                  <>
                    <Typography
                      component="p"
                      variant="p"
                      sx={{
                        color: "#495367",
                        fontSize: "1.3em",
                        fontWeight: "500",
                        paddingRight: ".25em",
                        marginBottom: ".05em",
                      }}
                    >
                      {data.posts[3].author.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#96A2BE",
                        fontSize: "1em",
                        fontWeight: "500",
                        paddingRight: ".25em",
                      }}
                    >
                      ارسال شده : ‌
                      {convertEnNumberToPersian(date.format().slice(0, 4))}/
                      {convertEnNumberToPersian(date.format().slice(5, 7))}/
                      {convertEnNumberToPersian(date.format().slice(8))}
                    </Typography>
                  </>
                }
                sx={{ padding: ".75em 0px", borderTop: "1px solid #ECF0F6" }}
              />
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default Banner;
