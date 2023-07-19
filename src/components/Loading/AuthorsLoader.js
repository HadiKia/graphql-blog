import React from "react";
import { Box, Skeleton } from "@mui/material";

const iterations = [1, 2, 3];

const AuthorsLoader = () => {
  return (
    <>
      {iterations.map((iteration) => (
        <Box
          key={iteration}
          sx={{ display: "flex", flexDirection: "column", marginTop: 2 }}
        >
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
          <Skeleton
            variant="text"
            animation="wave"
            height={40}
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
        </Box>
      ))}
    </>
  );
};

export default AuthorsLoader;
