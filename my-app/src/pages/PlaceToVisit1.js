import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
// import useWindowPosition from "../Hooks/useWindowPosition";
// import { Collapse } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    // background: "rgba(0,0,0,0.9)",
    margin: "20px",
  },
  // title: {
  //   fontSize: 14,
  // },
  pos: {
    marginBottom: 12,
  },

  title: {
    textAlign: "center",
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#33691e",
  },
  desc1: {
    fontFamily: "Nunito",
    fontSize: "1.4rem",
    color: "black",
  },
}));

export default function PlaceTovisit1() {
  const classes = useStyles();
  // const checked = useWindowPosition("header");

  return (
    // <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
    <div  id="place-to-visit1">
      <br />
      <br />
      <br />
      <br />

      <Container maxWidth="md">
        <Card className={classes.root}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h1"
              className={classes.title}
            >
              {" "}
              Credit Repair Services
            </Typography>
            <List>
              <ListItem>
                <ListItemText className={classes.desc1}>
                  Credit repair is an advisory service that we provide as a
                  professional service to individuals and corporates.
                  Understanding the report, analyzing it and offering a solution
                  based on your requirement is our forte. So what do our credit
                  repair services consist of? <br />
                  • Identifying errors in your credit report. <br />• Disputing
                  the incorrect information if any. It could be Personal
                  Information or about Accounts that are updated. <br /> •
                  Getting updations done in the credit report <br /> •
                  Communicating with your lenders on your behalf Rectify Credit
                  will work on your behalf to resolve the issues on your credit
                  report.
                </ListItemText>
              </ListItem>
            </List>
            <Divider />

            <Typography
              gutterBottom
              variant="h5"
              component="h1"
              className={classes.title}
            >
              {" "}
              Building Lines of Credit
            </Typography>
            <List>
              <ListItem>
                <ListItemText className={classes.desc1}>
                  • It is important that adequate and robust lines of credit are
                  built and maintained to ensure optimal results with the credit
                  repair process.
                  <br /> • Our team of expert credit repair consultants will
                  guide you through the steps of how to build and maintain lines
                  of credit.
                  <br /> • Rectify Credit has existing relationships with banks,
                  and other financial institutions that can help you build and
                  develop your credit. With the combined effort of Rectify
                  Credit and your cooperation in maintaining lines of credit,
                  together we will be able to build a healthy credit profile.
                  Resolving Disputes If there are any discrepancies in the
                  report we help you file apt disputes and get them resolved.
                </ListItemText>
              </ListItem>
            </List>
          </CardContent>
        </Card>

        <br />
        <br />
        <br />
      </Container>
    </div>
    // </Collapse>
  );
}
