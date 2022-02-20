import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Lottie from "react-lottie";
import animationDataHand from "../../lotties/hand.json";
import Cta from "../Cta/Cta";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Stepper";
import Contact from "../Contact/Contact";


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationDataHand,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function BasicGrid() {
  return (
    <>
      <section style={style}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            {/* <Typography variant="h5" gutterBottom component="div">
            <Lottie options={defaultOptions} style={{flex: 1 , width: "76px", height: "77px", border: "1px solid"}}/>
          </Typography> */}
            <div style={{ marginTop: 120 }}>
              <Typography variant="h5" gutterBottom component="div">
                {/* <Lottie options={defaultOptions} style={{flex: 1 , width: "76px", height: "77px", border: "1px solid"}}/> */}
                Greetings!
              </Typography>

              <Typography variant="h5" gutterBottom component="div">
                I am{" "}
                <font style={{ color: "#2962FF" }}>Mohammed Adil Ehsan,</font>{" "}
                the guy who does bug free
              </Typography>
              <Typography variant="h3" gutterBottom component="div">
                Full Stack Development
              </Typography>
              <Card sx={{ maxWidth: "572px" }} elevation="0">
                <CardContent>
                  <Typography variant="h6">
                    Experienced in all phases of product development from
                    Planning, Requirement Gathering, Implementing & Testing.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ textTransform: "capitalize" }}
                    size="large"
                  >
                    Check out my works
                  </Button>
                  <Button
                    variant="text"
                    style={{ textTransform: "capitalize", marginLeft: 20 }}
                    size="large"
                  >
                    Let’s Connect
                  </Button>
                </CardActions>
              </Card>
            </div>
          </Grid>
          <Grid item xs={4}>
            <img
              src="/Image.png"
              style={{ width: "100%", paddingBottom: "50px" }}
            />
          </Grid>
        </Grid>
      </section>

      <section style={style}>
        <Grid container spacing={2}>
          <Skills />
        </Grid>
      </section>

      <section style={style}>
        <Grid container spacing={2}>
          <Experience />
        </Grid>
      </section>

      <section style={style}>
        <Grid container spacing={2}>
          <Contact />
        </Grid>
      </section>
    </>
  );
}
