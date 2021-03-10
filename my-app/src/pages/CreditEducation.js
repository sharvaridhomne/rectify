import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import img1 from "../images/img1.jpg";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import { withStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    hero: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img1})`,
      height: "500px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      fontSize: "4rem",
      [theme.breakpoints.down("sm")]: {
        height: 300,
        fontSize: "3em"
      }
    }
  }));

const WhiteTextTypography = withStyles({
    root: {
    color: "green"
    }
})(Typography);



export default function CreditEducation() {
    const classes = useStyles();
  
    return (
      <div className="App">
        
        <Box className={classes.hero}>
          {/* <Box>Rectify credit</Box> */}
        </Box>
        <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit"> .</Typography>
            </Toolbar>
        </Container>

        <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h3" align="center" className={classes.blogTitle} gutterBottom>
        Credit Education
        </Typography>
        <WhiteTextTypography variant="h3" align="center" className={classes.blogTitle} gutterBottom>
        Coming Soon...
        </WhiteTextTypography>
        </Container>
      </div>
    );
}


