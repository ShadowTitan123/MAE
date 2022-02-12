import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "@mui/material/Link";
const preventDefault = (event) => event.preventDefault();
const steps = [
  {
    label: "Software Developer",
    description: `Responsible for making Restful APIs and maintaining the backend of the following applications:`,
  },
  {
    label: "Backend NodeJS Developer",
    description:
      "Worked on a NoCode platform called Ezee.Ai, published more than 15 NPM modules.",
  },
  {
    label: "Full Stack Developer",
    description: `The quick brown fox jumped over the lazy dog.`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        width: "80%",
        height: 600,
        margin: "auto",
      }}
    >
      <Typography variant="h3">My trails & errors</Typography>

      <Stepper orientation="vertical" style={{ margin : "30px 0px 0px 0px"}}>
        {steps.map((step, index) => (
          <Step active={true} key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent style={{ padding : "30px"}}>
              <Typography>{step.description}</Typography>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Link href="#" underline="hover">
                  a1services.live
                </Link>

                <Link href="#" underline="hover">
                  a1services.live
                </Link>

                <Link href="#" underline="hover">
                  a1services.live
                </Link>

                <Link href="#" underline="hover">
                  a1services.live
                </Link>

               
              </div>
              <Stack direction="row" spacing={5} style={{marginTop: "30px"}}>
                  <Avatar alt="Remy Sharp" src="/tech/slim.png" />
                  <Avatar alt="Remy Sharp" src="/tech/slim.png" />
                  <Avatar alt="Remy Sharp" src="/tech/slim.png" />
                  <Avatar alt="Remy Sharp" src="/tech/slim.png" />
                </Stack>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
