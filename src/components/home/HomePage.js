import React from "react";
import { Container, Typography, Tab, Box, Tabs } from "@mui/material";
import PropTypes from "prop-types";

import Authors from "../author/Authors";
import Blogs from "../blog/Blogs";

import Banner from "./Banner";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="span" variant="span">
            {children}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const HomePage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: "7em" }}>
      <Banner />
      <Typography
        component="h2"
        variant="h5"
        sx={{
          fontWeight: "600",
          color: "#1A202E",
          paddingX: ".25em",
          marginBottom: "1em",
        }}
      >
        دسته بندی
      </Typography>
      <Box sx={{ marginX: -2 }}>
        <Box sx={{ marginX: 3, marginBottom: 1 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{
              hidden: true,
            }}
            sx={{
              "& button": {
                color: "#5e6a86",
                border: "1px solid #BAC2D6",
                borderRadius: ".5em",
                marginLeft: "1em",
                fontWeight: "500",
              },
              "& button.Mui-selected": {
                color: "#457EFF",
                borderColor: "#457EFF",
                bgcolor: "#457EFF10",
              },
            }}
          >
            <Tab label="مقاله ها" {...a11yProps(0)} />
            <Tab label="نویسنده ها" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Blogs />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Authors />
        </CustomTabPanel>
      </Box>
    </Container>
  );
};

export default HomePage;
