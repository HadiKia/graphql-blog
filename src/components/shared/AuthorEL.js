import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const AuthorEL = (author) => {
  return (
    <Box
      sx={{
        bgcolor: "#FFFFFF",
        padding: "1em",
        borderRadius: 4,
        border: "1px solid #ECF0F6",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "0px .5em",
          marginBottom: "2em",
        }}
      >
        <Avatar src={author.avatar.url} />
        <Box>
          <Typography
            component="p"
            variant="p"
            sx={{ color: "#1A202E", fontWeight: "500" }}
          >
            {author.name}
          </Typography>
          <Typography
            component="p"
            variant="p"
            sx={{ color: "#495367", fontSize: ".9rem" }}
          >
            {author.field}
          </Typography>
        </Box>
      </Box>

      <Link
        to={`/authors/${author.slug}`}
        style={{
          textDecoration: "none",
          display: "block",
          backgroundColor: "#457EFF10",
          color: "#457EFF",
          textAlign: "center",
          padding: ".5em",
          borderRadius: ".5em",
          fontWeight : '500'
        }}
      >
        مشاهده پروفایل
      </Link>
    </Box>
  );
};

export default AuthorEL;
