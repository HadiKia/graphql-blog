import React from "react";
import { Box, Skeleton } from "@mui/material";

const iterations = [1, 2, 3];

const AvatarLoader = () => {
  return (
    <Skeleton
      variant="circular"
      animation="wave"
      width={100}
      height={100}
      sx={{ bgcolor: "#f1f3f6" }}
    />
  );
};

const NameLoader = () => {
  return (
    <Skeleton
      variant="text"
      animation="wave"
      width={80}
      height={20}
      sx={{ bgcolor: "#f1f3f6" }}
    />
  );
};

const AboutAuthorLoader = () => {
  return (
    <Skeleton
      variant="rounded"
      animation="wave"
      height={100}
      sx={{
        bgcolor: "#f1f3f6",
        marginTop: 4,
        width: 330,
        "@media screen and (min-width: 768px)": {
          width: 220,
        },
        "@media screen and (min-width: 1024px)": {
          width: 302,
        },
        "@media screen and (min-width: 1200px)": {
          width: 260,
        },
      }}
    />
  );
};

const ArticleTitleLoader = () => {
  return (
    <Skeleton
      variant="rounded"
      animation="wave"
      width={100}
      height={40}
      sx={{ bgcolor: "#f1f3f6", marginBottom: 4 }}
    />
  );
};

const ArticleBoxLoader = () => {
  return (
    <>
      {iterations.map((iteration) => (
        <Box key={iteration} sx={{ display: "flex", flexDirection: "column" }}>
          <Skeleton
            variant="rounded"
            animation="wave"
            height={200}
            sx={{
              bgcolor: "#f1f3f6",
              marginTop: 2,
              width: 330,
              "@media screen and (min-width: 768px)": {
                width: 482,
              },
              "@media screen and (min-width: 1024px)": {
                width: 303,
              },
              "@media screen and (min-width: 1200px)": {
                width: 411,
              },
            }}
          />
          <Skeleton
            variant="text"
            animation="wave"
            height={50}
            sx={{
              bgcolor: "#f1f3f6",
              marginLeft: 3,
              width: 330,
              "@media screen and (min-width: 768px)": {
                width: 482,
              },
              "@media screen and (min-width: 1024px)": {
                width: 303,
              },
              "@media screen and (min-width: 1200px)": {
                width: 411,
              },
            }}
          />
          <Skeleton
            variant="text"
            animation="wave"
            height={25}
            width={100}
            sx={{
              bgcolor: "#f1f3f6",
              marginLeft: 3,
            }}
          />
        </Box>
      ))}
    </>
  );
};

export {
  AvatarLoader,
  NameLoader,
  AboutAuthorLoader,
  ArticleTitleLoader,
  ArticleBoxLoader,
};
