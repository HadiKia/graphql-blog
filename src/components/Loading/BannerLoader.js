import React from "react";
import { Skeleton } from "@mui/material";

const CardMediaLoader = () => {
  return (
    <Skeleton
      animation="wave"
      variant="rounded"
      sx={{
        height: 180,
        bgcolor: "#f1f3f6",
        "@media screen and (min-width: 768px)": {
          width: 350,
        },
        "@media screen and (min-width: 1024px)": {
          width: 500,
        },
        "@media screen and (min-width: 1200px)": {
          width: 550,
        },
      }}
    />
  );
};

const CardContentLoader = () => {
  return (
    <Skeleton
      variant="text"
      animation="wave"
      sx={{
        bgcolor: "#f1f3f6",
        height: 50,
        "@media screen and (min-width: 768px)": {
          width: 300,
          height: 90,
          marginTop: -2,
        },
        "@media screen and (min-width: 1024px)": {
          width: 410,
        },
        "@media screen and (min-width: 1200px)": {
          width: 500,
        },
      }}
    />
  );
};

const CardActionsLoader = () => {
  return (
    <Skeleton
      variant="text"
      animation="wave"
      sx={{ bgcolor: "#f1f3f6", marginBottom: 1 }}
      width={80}
    />
  );
};

const CardHeaderLoader = () => {
  return (
    <Skeleton
      variant="circular"
      width={48}
      height={48}
      animation="wave"
      sx={{
        marginRight: "-.5em",
        marginBottom: ".2em",
        marginLeft: ".5em",
        bgcolor: "#f1f3f6",
      }}
    />
  );
};

const CardHeaderTitleLoader = () => {
  return (
    <Skeleton
      variant="text"
      animation="wave"
      width={80}
      sx={{ bgcolor: "#f1f3f6" }}
    />
  );
};

export {
  CardMediaLoader,
  CardContentLoader,
  CardActionsLoader,
  CardHeaderLoader,
  CardHeaderTitleLoader,
};
