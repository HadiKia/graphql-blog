import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
// import { Link } from "react-router-dom";
import persian from "react-date-object/calendars/persian";
import { DateObject } from "react-multi-date-picker";
import { convertEnNumberToPersian } from "../helper/convertNumber";

const CardEL = ({ title, slug, coverPhoto, author, datePublished }) => {
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
      sx={{ boxShadow: "none", borderRadius: 4, border: "1px solid #DEE3EB" }}
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
          variant="h6"
          sx={{ color: "#1A202E", fontWeight: "600" }}
        >
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Link to={`/blogs/${slug}`} style={{textDecoration : 'none'}}> */}
        <Button
          variant="text"
          sx={{ color: "#5e6a86", fontSize: "1rem", fontWeight: "400" }}
        >
          مطالعه مقاله
        </Button>
        {/* </Link> */}
      </CardActions>
      <Divider variant="middle" />
      <CardHeader
        avatar={
          <Avatar
            src={author.avatar.url}
            sx={{
              marginLeft: ".25em",
              transform: "scale(.8)",
              marginBottom: ".1em",
            }}
          />
        }
        title={
          <Typography
            component="p"
            variant="p"
            sx={{
              color: "#5e6a86",
              fontSize: ".9em",
              fontWeight: "500",
              display: "flex",
              justifyContent: "space-between",
              paddingLeft: "1.2em",
            }}
          >
            {author.name}
            <span style={{ marginRight: ".5em" }}>
              {convertEnNumberToPersian(date.format().slice(0, 4))}/
              {convertEnNumberToPersian(date.format().slice(5, 7))}/
              {convertEnNumberToPersian(date.format().slice(8))}
            </span>
          </Typography>
        }
        sx={{ padding: ".75em 0px", marginRight: "-0.2em" }}
      />
    </Card>
  );
};

export default CardEL;
