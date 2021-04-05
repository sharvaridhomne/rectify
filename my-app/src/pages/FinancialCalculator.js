import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, IconButton, Collapse } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";


import PlaceToVisit4 from "./PlaceToVisit4";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    minHeight: "100vh",
    // minwidth: "600vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "assets/home2.jpeg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover ",
  },
  // spacing: 4,
  colorText: {
    color: "#5AFF3D",
    fontSize: "3.5rem"
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontSize: "3.5rem",
  },
  goDown: {
    color: "#5AFF3D",
    fontSize: "4rem",
  },
 
}));
export default function FinancialCalculator() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div>
      <div className={classes.root}>
        <CssBaseline />
        <Collapse
          in={checked}
          {...(checked ? { timeout: 1000 } : {})}
          collapsedHeight={50}
        >
          <div className={classes.container}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <h1 className={classes.title}>
              Financial <br />
              <span className={classes.colorText}>Calculator</span>
            </h1>
            <Scroll to="place-to-visit2" smooth={true}>
              <IconButton>
                <ExpandMoreIcon className={classes.goDown} />
              </IconButton>
            </Scroll>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        <br />
        <br />
        <br />



          </div>
        </Collapse>
        <PlaceToVisit4 />
      </div>
    </div>
  );
}
