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
    <>
      <Box
        sx={{
          bgcolor: "background.paper",
          width: "80%",
          height: 600,
          margin: "auto",
          border: "1px solid",
        }}
      >
        <Typography variant="h3">My mastery in languages</Typography>
        <AppBar position="static" style={{ margin: "30px 0px 0px 0px" }}>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                >
                  <g id="Icon" transform="translate(14557 -6778)">
                    <circle
                      id="bg"
                      cx="25"
                      cy="25"
                      r="25"
                      transform="translate(-14557 6778)"
                      fill="#e5ebfb"
                    />
                    <path
                      id="react"
                      d="M12,10.119a2.2,2.2,0,1,0,2.139,2.2A2.172,2.172,0,0,0,12,10.119ZM6.008,16.707l-.472-.124C2.018,15.667,0,14.113,0,12.319S2.018,8.971,5.536,8.055l.472-.123.133.482A24.7,24.7,0,0,0,7.5,12.1l.1.219-.1.219a24.466,24.466,0,0,0-1.363,3.686l-.133.481ZM5.317,9.181C2.643,9.955,1,11.138,1,12.319s1.641,2.363,4.315,3.138A26.182,26.182,0,0,1,6.5,12.319,25.974,25.974,0,0,1,5.317,9.181Zm12.675,7.526-.133-.483A24.518,24.518,0,0,0,16.5,12.539l-.1-.219.1-.219a24.585,24.585,0,0,0,1.364-3.686l.133-.482.473.123C21.982,8.97,24,10.524,24,12.319s-2.018,3.348-5.535,4.264ZM17.5,12.319a25.948,25.948,0,0,1,1.182,3.138C21.358,14.683,23,13.5,23,12.319s-1.641-2.363-4.315-3.138A26.012,26.012,0,0,1,17.5,12.319ZM5.31,9.176l-.133-.481C4.188,5.1,4.488,2.529,6,1.631c1.483-.882,3.864.16,6.359,2.8l.34.36-.34.36A24.136,24.136,0,0,0,9.937,8.205L9.8,8.4l-.235.021a23.017,23.017,0,0,0-3.785.628l-.472.123Zm1.9-6.831a1.363,1.363,0,0,0-.7.178c-.994.59-1.17,2.643-.485,5.412a24.438,24.438,0,0,1,3.233-.516A25.476,25.476,0,0,1,11.3,4.8c-1.56-1.565-3.037-2.453-4.1-2.453ZM16.8,23.323h0c-1.425,0-3.255-1.105-5.154-3.115l-.34-.36.34-.36a24.114,24.114,0,0,0,2.421-3.058l.135-.2.234-.021a22.991,22.991,0,0,0,3.787-.627l.472-.123.134.482c.987,3.589.688,6.164-.824,7.061a2.325,2.325,0,0,1-1.2.317ZM12.7,19.84c1.56,1.565,3.037,2.453,4.095,2.453h0a1.359,1.359,0,0,0,.7-.178c.994-.59,1.171-2.644.485-5.413a24.338,24.338,0,0,1-3.234.516A25.3,25.3,0,0,1,12.7,19.84ZM18.69,9.176l-.472-.123a22.844,22.844,0,0,0-3.787-.628L14.2,8.4l-.135-.2a24,24,0,0,0-2.421-3.057l-.34-.36.34-.36C14.135,1.792,16.515.75,18,1.631c1.512.9,1.812,3.472.824,7.063l-.134.482ZM14.75,7.419a24.26,24.26,0,0,1,3.234.516c.686-2.769.509-4.822-.485-5.412s-2.845.313-4.8,2.275A25.479,25.479,0,0,1,14.75,7.419Zm-7.544,15.9A2.325,2.325,0,0,1,6,23.006c-1.512-.9-1.812-3.471-.823-7.061l.132-.482.472.123a22.966,22.966,0,0,0,3.785.627l.235.021.134.2a24.181,24.181,0,0,0,2.422,3.058l.34.36-.34.36c-1.9,2.009-3.728,3.115-5.151,3.115ZM6.016,16.7c-.686,2.769-.509,4.823.485,5.413s2.843-.314,4.8-2.275a25.632,25.632,0,0,1-2.052-2.622A24.3,24.3,0,0,1,6.016,16.7ZM12,17.349c-.823,0-1.669-.037-2.516-.109l-.235-.021-.135-.2q-.719-1.064-1.35-2.186T6.6,12.539l-.1-.219.1-.219q.537-1.172,1.166-2.3c.414-.738.869-1.473,1.35-2.186l.135-.2L9.484,7.4a28.913,28.913,0,0,1,5.033,0l.234.021.134.2A31.157,31.157,0,0,1,17.4,12.1l.1.219-.1.219a30.736,30.736,0,0,1-2.517,4.482l-.134.2-.234.021c-.847.072-1.694.109-2.517.109ZM9.8,16.232a28.194,28.194,0,0,0,4.4,0,30.12,30.12,0,0,0,2.2-3.913,29.682,29.682,0,0,0-2.2-3.913,28.181,28.181,0,0,0-4.394,0,29.57,29.57,0,0,0-2.2,3.913,30.231,30.231,0,0,0,2.2,3.913Z"
                      transform="translate(-14544 6790.676)"
                      fill="#2962ff"
                    />
                  </g>
                </svg>

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
          <TabPanel value={value} index={2} dir={theme.direction}>
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
          <TabPanel value={value} index={3} dir={theme.direction}>
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
        </SwipeableViews>
      </Box>
    </>
  );
}
