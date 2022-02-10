import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RecommendIcon from "@mui/icons-material/Recommend";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        width: 900,
        height: 600,
        margin: "auto",
      }}
    >
      <Typography variant="h3">My mastery in languages</Typography>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Frontend" {...a11yProps(0)} />
          <Tab label="Backend" {...a11yProps(1)} />
          <Tab label="Databases" {...a11yProps(2)} />
          <Tab label="Others" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div>
            {" "}
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginBottom: "100px",
              }}
            >
              <RecommendIcon />
              <RecommendIcon />
              <RecommendIcon />
              <RecommendIcon />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginBottom: "100px",
              }}
            >
              <RecommendIcon />
              <RecommendIcon />
              <RecommendIcon />
              <RecommendIcon />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginBottom: "100px",
              }}
            >
              <RecommendIcon />
              <RecommendIcon />
              <RecommendIcon />
              <RecommendIcon />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div>
            {" "}
            <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: "100px", }}>
              <RecommendIcon />
              <RecommendIcon />
              <RecommendIcon />
              <RecommendIcon />
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: "100px", }}>
              <RecommendIcon />
              <RecommendIcon />
              <RecommendIcon />
              <RecommendIcon />
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly",  marginBottom: "100px", }}>
              <RecommendIcon />
              <RecommendIcon />
              <RecommendIcon />
              <RecommendIcon />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <div>
            {" "}
            <div style={{ display: "flex", justifyContent: "space-evenly",  marginBottom: "100px", }}>
              <RecommendIcon />
              <RecommendIcon />
              <RecommendIcon />
              <RecommendIcon />
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly",  marginBottom: "100px", }}>
              <RecommendIcon />
              <RecommendIcon />
              <RecommendIcon />
              <RecommendIcon />
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly",  marginBottom: "100px", }}>
              <RecommendIcon />
              <RecommendIcon />
              <RecommendIcon />
              <RecommendIcon />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <div>
            {" "}
            <div style={{ display: "flex", justifyContent: "space-evenly",  marginBottom: "100px", }}>
              <RecommendIcon />
              <RecommendIcon />
              <RecommendIcon />
              <RecommendIcon />
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly",  marginBottom: "100px", }}>
              <RecommendIcon />
              <RecommendIcon />
              <RecommendIcon />
              <RecommendIcon />
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly",  marginBottom: "100px", }}>
              <RecommendIcon />
              <RecommendIcon />
              <RecommendIcon />
              <RecommendIcon />
            </div>
          </div>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
