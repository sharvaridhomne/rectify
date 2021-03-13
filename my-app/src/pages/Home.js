import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, IconButton, Collapse } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";

import PlaceToVisit from "../pages/PlaceToVisit";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "assets/home1.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  // spacing: 4,
  colorText: {
    color: "#5AFF3D",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontSize: "4.5rem",
  },
  goDown: {
    color: "#5AFF3D",
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
              Welcome to <br />
              Rectify<span className={classes.colorText}>Credit.</span>
            </h1>
            <Scroll to="place-to-visit" smooth={true}>
              <IconButton>
                <ExpandMoreIcon className={classes.goDown} />
              </IconButton>
            </Scroll>
          </div>
        </Collapse>
        <PlaceToVisit />
      </div>
    </div>
  );
}
