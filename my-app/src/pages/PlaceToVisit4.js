import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import calci from "./Calci";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
  table: {
    minWidth: 650,
  },
}));

function createData(name, fat) {
  return { name, fat };
}

const rows = [
  createData("EMI-Home Loan", 60000),
  createData("EMI-Vehicle Loan", 6500),
  createData("EMI-Personal Loan", 4500),
  createData("All Other EMI", 0),
  createData("Monthly Credit Card Bills"),
  createData("Annual Life Insurance Premium", 16667),
  createData("Annual Medical Insurance Premium"),
  createData("Annual Vehicle Insurance Premium"),
  createData("Monthly Rent", 15000),
  createData("Monthly Household Expense", 15000),
  createData("Monthly Phone Bills", 2000),
  createData("Monthly Utility Bills(Power,Water,Flat Maintense,etc)", 10000),
  createData("Monthly Children Expense", 10000),
  createData("Children Maintenenses(Shoppings,etc)"),
  createData("Other Monthly Expenses", 60000),
];

function Data(name1, fat1) {
  return { name1, fat1 };
}

const rows1 = [
  Data("Monthly Salary/Income", 150000),
  Data("Rental Income", 15000),
  Data("Any Other Monthly Income"),
];

function Data1(name2, fat2) {
  return { name2, fat2 };
}

const rows2 = [
  Data1("Monthly Salary/Income", 150000),
  Data1("Rental Income", 15000),
  Data1("Any Other Monthly Income"),
];

function Data2(name3, fat3) {
  return { name3, fat3 };
}

const rows3 = [
  Data2("Outflow", 124389),
  Data2("Inflow", 165000),
  Data2("Liquids", 445000),
  Data2(""),
  Data2("Liquidity Health(LH)", 4.9),
  Data2(""),
  Data2("If LH>6", "Comfortable"),
  Data2("If LH is 4-6", "Manageable"),
  Data2("If LH is 2-3", "Risky"),
  Data2("If LH is <=1", "Danger"),
];

export default function PlaceToVisit2() {
  const classes = useStyles();
  const checked = useWindowPosition("header");

  const preventDefault = (event) => event.preventDefault();

  return (
    <div className={classes.root} id="place-to-visit2">
      <div className={classes.container}>
        <h1 className={classes.title}>
          <br />
          <span className={classes.colorText1}> </span>
        </h1>
        <br />
        <br />
        <br />
        <br />

        <div className={classes.container}>
          <Container
            maxWidth="md"
            style={{
              backgroundColor: "transparent",
            }}
          >
            <Accordion
              style={{
                backgroundColor: "rgba(135, 211, 124, 1)",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  Monthly Cash OutFlow
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Paper className="container">
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right">Rs</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.calories}</TableCell>
                          <TableCell align="right">{row.fat}</TableCell>
                          <TableCell align="right">{row.carbs}</TableCell>
                          <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Paper>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>
                  Monthly CASH INFLOW
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Paper className="container">
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right">Rs</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows1.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell component="th" scope="row">
                            {row.name1}
                          </TableCell>
                          <TableCell align="right">{row.calories1}</TableCell>
                          <TableCell align="right">{row.fat1}</TableCell>
                          <TableCell align="right">{row.carbs1}</TableCell>
                          <TableCell align="right">{row.protein1}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Paper>
              </AccordionDetails>
            </Accordion>
            <Accordion
              style={{
                backgroundColor: "rgba(135, 211, 124, 1)",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>
                  Liquids in HAND
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Paper className="container">
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right">Rs</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows2.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell component="th" scope="row">
                            {row.name2}
                          </TableCell>
                          <TableCell align="right">{row.calories2}</TableCell>
                          <TableCell align="right">{row.fat2}</TableCell>
                          <TableCell align="right">{row.carbs2}</TableCell>
                          <TableCell align="right">{row.protein2}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Paper>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>Equations</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Paper className="container">
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right">Rs</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows3.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell component="th" scope="row">
                            {row.name3}
                          </TableCell>
                          <TableCell align="right">{row.calories3}</TableCell>
                          <TableCell align="right">{row.fat3}</TableCell>
                          <TableCell align="right">{row.carbs3}</TableCell>
                          <TableCell align="right">{row.protein3}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Paper>
              </AccordionDetails>
            </Accordion>

            <br />
            <br />
            <br />
            <Button href="/calci" to="calci" smooth={true} variant="contained" color="secondary">
              Calculate Here
            </Button>
          </Container>
        </div>
      </div>

      {/* <ImageCard place={places[1]} checked={checked} /> 
       <ImageCard place={places[0]} checked={checked} />  */}
    </div>
  );
}
