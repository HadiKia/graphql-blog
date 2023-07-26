import React from "react";
import { Skeleton } from "@mui/material";

const PostTitleLoader = () => {
  return (
    <Skeleton
      variant="text"
      animation="wave"
      sx={{
        bgcolor: "#f1f3f6",
        marginRight: 1,
        width: 200,
        height: 50,
        "@media screen and (min-width: 768px)": {
          width: 400,
        },
      }}
    />
  );
};

const CoverPhotoLoader = () => {
  return (
    <Skeleton
      animation="wave"
      variant="rounded"
      sx={{
        bgcolor: "#f1f3f6",
        height: 180,
        "@media screen and (min-width: 768px)": {
          height: 300,
        },
        "@media screen and (min-width: 1024px)": {
          height: 225,
        },
      }}
    />
  );
};

const AuthorAvatarLoader = () => {
  return (
    <Skeleton
      variant="circular"
      animation="wave"
      sx={{
        width: 45,
        height: 45,
        marginLeft: 1,
        bgcolor: "#f1f3f6",
        "@media screen and (min-width: 768px)": {
          width: 50,
          height: 50,
        },
      }}
    />
  );
};

const AuthorNameLoader = () => {
  return (
    <Skeleton
      variant="text"
      animation="wave"
      width={75}
      height={25}
      sx={{ bgcolor: "#f1f3f6" }}
    />
  );
};

const AuthorFieldLoader = () => {
  return (
    <Skeleton
      variant="text"
      animation="wave"
      width={75}
      height={17.5}
      sx={{ bgcolor: "#f1f3f6" }}
    />
  );
};

const PostContentLoader = () => {
  return (
    <Skeleton
      variant="rounded"
      animation="wave"
      height={600}
      sx={{ marginTop: 2.5, bgcolor: "#f1f3f6" }}
    />
  );
};

const CommentFormLoader = () => {
  <Skeleton
    variant="rounded"
    animation="wave"
    height={200}
    sx={{ bgcolor: "#f1f3f6" }}
  />;
};

const CommentsLoader = () => {
  return (
    <Skeleton
      variant="rounded"
      animation="wave"
      height={100}
      sx={{ bgcolor: "#f1f3f6" }}
    />
  );
};

export {
  PostTitleLoader,
  CoverPhotoLoader,
  AuthorAvatarLoader,
  AuthorNameLoader,
  AuthorFieldLoader,
  PostContentLoader,
  CommentFormLoader,
  CommentsLoader,
};
