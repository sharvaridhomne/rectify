import React from "react";

import Box from "@material-ui/core/Box";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Divider from '@material-ui/core/Divider';


import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtrLth8Qevva9H2VUPSJkdMRP1AnmmhRet_CpIbnoiQeCsIT05mY_V269Yc6QskGPY-w&usqp=CAU')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "3rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em",
    },
  },
  root: {
    // display: "flex",
    position: "center",
    justifyContent: "center",
    alignItems: "center",
    
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "4rem",
    },
    // maxWidth: "80%",
  },
  media: {
    height: 200,
  },
}));

export default function Creditrepair() {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.hero}>
        <Box>
          Repair your Credit Score and ensure your Loan Eligibility with Rectify
          Credit In optimal time
        </Box>
        {/* <Box>reliable experts in rebuilding your Credit Score </Box> */}
      </Box>
      <div
     
        style={{ backgroundColor: "#cfe8fc" }}
      >
        <Container>
        <Card className={classes.root}>
          <CardActionArea>
            {/* <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            /> */}
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                Credit repair services:
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Credit repair services: Credit repair is an advisory service
                that we provide as a professional service to individuals and
                corporates. Understanding the report, analyzing it and offering
                a solution based on your requirement is our forte. So what do
                our credit repair services consist of? 1. Identifying errors in
                your credit report. 2. Disputing the incorrect information if
                any. It could be Personal Information or about Accounts that are
                updated. 3. Getting updations done in the credit report 4.
                Communicating with your lenders on your behalf Rectify Credit
                will work on your behalf to resolve the issues on your credit
                report.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Divider />

        <Card className={classes.root}>
          <CardActionArea>
            {/* <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            /> */}
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                Building Lines of Credit
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                It is important that adequate and robust lines of credit are
                built and maintained to ensure optimal results with the credit
                repair process. Our team of expert credit repair consultants
                will guide you through the steps of how to build and maintain
                lines of credit. Rectify Credit has existing relationships with
                banks, and other financial institutions that can help you build
                and develop your credit. With the combined effort of Rectify
                Credit and your cooperation in maintaining lines of credit,
                together we will be able to build a healthy credit profile.
                Resolving Disputes If there are any discrepancies in the report
                we help you file apt disputes and get them resolved.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Container>
      </div>
    </div>
  );
}
