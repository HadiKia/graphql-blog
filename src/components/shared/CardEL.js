import React from "react";
import {
  Avatar,
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
import sanitizeHtml from "sanitize-html";
import { ArrowBack } from "@mui/icons-material";

const CardEL = ({
  title,
  slug,
  coverPhoto,
  author,
  datePublished,
  content,
}) => {
  const date = new DateObject({
    date: new Date(
      datePublished.slice(0, 4),
      datePublished.slice(5, 7),
      datePublished.slice(8)
    ),
    calendar: persian,
  });

  return (
    <Card
      sx={{ boxShadow: "none", borderRadius: 4, border: "1px solid #ECF0F6" }}
    >
      <CardMedia
        component="img"
        height="194"
        image={coverPhoto.url}
        alt={slug}
      />
      <CardContent sx={{ paddingBottom: "0px" }}>
        <Typography
          component="h3"
          variant="h5"
          sx={{ color: "#1A202E", fontWeight: "600", fontSize: "1.7rem" }}
        >
          {title}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          paddingX: "1em",
          paddingTop: "0px",
        }}
      >
        <div
          style={{
            color: "#5e6a86",
            fontSize: "0.9rem",
            fontWeight: "300",
            textAlign: "right",
          }}
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(content.html.slice(0, 160)),
          }}
        ></div>
        <Link
          to={`/blogs/${slug}`}
          style={{ textDecoration: "none", margin: ".25em 0" }}
        >
          <Button
            variant="outlined"
            size="small"
            sx={{
              color: "#457EFF",
              border: "none",
              bgcolor: "#F4F7FC",
              borderRadius: "1.5em",
              "&:hover": {
                border: "none",
                bgcolor: "#457EFF20",
              },
              margin: "-0.5em -0.5em 0.5em 0em",
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
      <CardHeader
        avatar={
          <Avatar
            src={author.avatar.url}
            sx={{
              margin: "0 -.6em .1em .25em",
            }}
          />
        }
        title={
          <Typography
            component="p"
            variant="p"
            sx={{
              color: "#495367",
              fontSize: ".9em",
              fontWeight: "500",
              display: "flex",
              flexDirection: "column",
              paddingLeft: "1.2em",
            }}
          >
            {author.name}
            <span style={{ color: "#96A2BE", fontSize: ".9rem" }}>
              {convertEnNumberToPersian(date.format().slice(0, 4))}/
              {convertEnNumberToPersian(date.format().slice(5, 7))}/
              {convertEnNumberToPersian(date.format().slice(8))}
            </span>
          </Typography>
        }
        sx={{
          padding: ".75em 0px",
          marginX: 1.5,
          borderTop: "1px solid #ECF0F6",
        }}
      />
    </Card>
  );
};

export default CardEL;
