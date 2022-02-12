import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(3),
  color: "white",
  backgroundColor: "#2962FF",
  width: "100%",
}));

export default function BasicGrid() {
  return (
    <>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ height: "352px", backgroundImage: `url(/tech/Bg/Bg.png)` }}
      >
        <Grid
          item
          xs={6}
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: 120,
          }}
        >
          <h4>mdadilehsan77@gmail.com</h4>
          <h4>+91 89046 85570</h4>
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: 120,
          }}
        >
          <h4>MohammedAdilEhsan</h4>
          <h4>ShadowTitan123</h4>
        </Grid>
      </Grid>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#2962FF",
          color: "white",
        }}
      >
        <h3 style={{ paddingLeft: 10 }}> Designed by Aaqil Jamal </h3>

        <div style={{ display: "flex" }}>
          <h3 style={{ paddingLeft: 10 }}> Logo 1 </h3>
          <h3 style={{ paddingLeft: 10 }}> Logo 2 </h3>
        </div>
      </div>
    </>
  );
}
