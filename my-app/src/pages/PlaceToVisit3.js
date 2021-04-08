import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import useWindowPosition from "../Hooks/useWindowPosition";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  colorText1: {
    color: "#fff",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#5AFF3D",
    fontSize: "4.5rem",
  },
}));
export default function PlaceToVisit1() {
  const classes = useStyles();
  const checked = useWindowPosition("header");

  return (
    <div className={classes.root} id="place-to-visit3">
      <div className={classes.container}>
        <h1 className={classes.title}>
          Coming 
          <span className={classes.colorText1}> Soon...</span>
        </h1>
      </div>
    </div>
  );
}
