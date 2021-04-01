import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, IconButton, Collapse } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";

import PlaceToVisit1 from "../pages/PlaceToVisit1";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "assets/bg6.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  // spacing: 4,
  colorText: {
    color: "#33691e",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#64dd17",
    fontSize: "3.5rem",
  },
  goDown: {
    color: "#33691e",
    fontSize: "4rem",
  },
  cardimage: {
    maxWidth: 345,
  },
}));
export default function Home() {
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
              Repair your Credit Score <br />
              and ensure your <br />
              <span className={classes.colorText}>
            Loan Eligiblity with<br/>
               Rectify Credit in Optimal Time.</span>
            </h1>
            <Scroll to="place-to-visit1" smooth={true}>
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


          </div>
        </Collapse>
        <PlaceToVisit1 />
      </div>
    </div>
  );
}
