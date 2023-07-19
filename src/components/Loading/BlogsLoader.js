import React from "react";
import { Box, Skeleton } from "@mui/material";

const iterations = [1, 2, 3];

const BlogsLoader = () => {
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
                width: 338,
              },
              "@media screen and (min-width: 1024px)": {
                width: 302,
              },
              "@media screen and (min-width: 1200px)": {
                width: 360,
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
                width: 338,
              },
              "@media screen and (min-width: 1024px)": {
                width: 302,
              },
              "@media screen and (min-width: 1200px)": {
                width: 360,
              },
            }}
          />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Skeleton
              variant="circular"
              animation="wave"
              width={50}
              height={50}
              sx={{ bgcolor: "#f1f3f6", marginLeft: 2 }}
            />
            <Box>
              <Skeleton
                variant="text"
                animation="wave"
                width={70}
                height={20}
                sx={{ bgcolor: "#f1f3f6" }}
              />
              <Skeleton
                variant="text"
                animation="wave"
                width={70}
                height={20}
                sx={{ bgcolor: "#f1f3f6" }}
              />
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default BlogsLoader;
