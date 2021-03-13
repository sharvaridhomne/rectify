import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "../pages/ImageCard"
import places from "../static/places"


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
  colorText: {
    color: "#fff",
  },
  colorText1: {
    color: "#5AFF3D",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontSize: "4.5rem",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export default function PlaceToVisit1() {
  const classes = useStyles();
  const checked = useWindowPosition("header");

 

  

  return (
    <div className={classes.root} id="place-to-visit1">
     
       <ImageCard place={places[1]} checked={checked} /> 
       <ImageCard place={places[0]} checked={checked} /> 
    </div>
  );
}
