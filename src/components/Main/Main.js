import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const style =   {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height:"100vh",
    }


export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }} style={style}>
      <Grid container spacing={2} style = {{height:"100vh"}}>
        <Grid item xs={8}>
        <Typography variant="h5" gutterBottom component="div">
      Greetings!
      </Typography>


      <Typography variant="h5" gutterBottom component="div">
      I am Mohammed Adil Ehsan, the guy who does syntax error free
      </Typography>
      <Typography variant="h3" gutterBottom component="div">
      Full Stack Development
      </Typography>

      <Typography variant="h6" gutterBottom component="div">
   
      Experienced in all phases of product development from Planning, Requirement Gathering, Implementing & Testing.
      </Typography>

      <Button variant="contained">Check out my works</Button>

      <Button variant="text">Let’s Connect</Button>

      
        </Grid>
        <Grid item xs={4}>
          <img src="/ash.png" style={{ maxWidth: "100%"}}/>
        </Grid>
       
      </Grid>
    </Box>
  );
}
