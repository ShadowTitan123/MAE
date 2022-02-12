import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

export default function Contact() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
        bgcolor: "background.paper",
        width: "80%",
        height: 600,
        margin: "auto",
      }}
      noValidate
      autoComplete="off"
    >
      <Grid container spacing={2}>
        <Grid item xs={6} style={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h3" style={{ marginBottom: 15 }}>
            Let's Connect
          </Typography>
          <TextField
            id="outlined-basic"
            label="Your Name"
            variant="outlined"
            style={{ marginBottom: 15 }}
          />
          <TextField
            id="outlined-basic"
            label="Email ID"
            variant="outlined"
            style={{ marginBottom: 15 }}
          />
          <TextField
            id="outlined-basic"
            multiline={true}
            rows={7}
            label="Your Message…"
            variant="outlined"
            style={{ marginBottom: 15 }}
          />

          <Button
            style={{ width: 120 }}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </Grid>
        <Grid item xs={6}>
          <img width="490px" height="490px" src="/tech/code.png" />
        </Grid>
      </Grid>
    </Box>
  );
}
