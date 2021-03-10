import React from "react";

import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";


const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://cdn.searchenginejournal.com/wp-content/uploads/2018/09/25-of-the-Best-Examples-of-Effective-FAQ-Pages-1520x800.png')`,
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
      fontSize: "4rem",
    },
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  root: {
    root: {
      width: "100%",
    },
  },

  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Faq() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <div>
      <Box className={classes.hero}>
        {/* <Typography>
            Repair your Credit Score and ensure your Loan Eligibility with Rectify
            Credit In optimal time
          </Typography> */}
        {/* <Box>reliable experts in rebuilding your Credit Score </Box> */}
      </Box>
      <div style={{ backgroundColor: "#cfe8fc" }}>
        <Container>
          <Typography gutterBottom variant="h4" component="h1">
            Just click on the question to scroll down to the answer!
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                1. How does Rectify Credit help me?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List component="nav" aria-label="secondary mailbox folders" >
                <ListItem >
                  <ListItemText
                    color="textSecondary"
                    primary="With RectifyCredit you get your Credit on track with Simple Steps:"
                  />
                  
                </ListItem>
                <ListItem>
                  <ListItemText
                    color="textSecondary"
                    secondary="Just register yourself on our web Site RectifyCredit.com"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    color="textSecondary"
                    secondary="Send your personal Credit report to us on:   info@rectifycredit.com"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    color="textSecondary"
                    secondary="Call your RectifyCredit advisor on 8082554356/57/58/59"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    color="textSecondary"
                    secondary="RectifyCredit Advisors will read you CIBIL report and help you resolving CIBIL issues."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    color="textSecondary"
                    secondary="RectifyCredit Avisors will handhold you through the credit Report Restoration process."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    color="textSecondary"
                    secondary="Once your CIBIL Report is repaired you can confidently apply for any loan from any Bank."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    color="textSecondary"
                    secondary="Just register yourself on our web Site RectifyCredit.com"
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                2. Where do I begin?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
                You can do it right here, just now by registering on our
                website,
                <Link
                  href="https://www.rectifycredit.com"
                  onClick={preventDefault}
                >
                  www.rectifycredit.com
                </Link>{" "}
                . On registering, you will receive an email with our contact
                details and simple instructions to apply for the credit report
                and sharing it with us. Once we receive your report our team
                will do a thorough analysis and explain the rectification
                process.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                3. How much will it cost me?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
                Our basic fees start from Rs 5000 ( plus taxes as applicable).
                We charge in advance. These fees are normally based on the
                effort and support that is needed to assist you to achieve the
                changes.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                4. What does Rectify Credit offer?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
                We offer the most economical and sure shot approach to achieve
                your reasonable credit scores mean. We do a detailed analysis of
                your credit report to understand the issues that could be
                harming your credit report. We then engage in personalized
                advise, and handholding on emails and telephones till the
                defined steps are completed.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                5. How long does it take?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
                The entire process of interaction is generally slow and can take
                time in months typically 2-3 months. The time taken can be less
                if the issues are simpler in nature then may be couple of weeks
                should be enough. But note the entire process can start only
                after your send us your credit report pulled by you!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                6. Where do I begin?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
                You can do it right here, just now by registering on our
                website, www.rectifycredit.com . On registering, you will
                receive an email with our contact details and simple
                instructions to apply for the credit report and sharing it with
                us. Once we receive your report our team will do a thorough
                analysis and explain the rectification process.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                7. Where do I send the Credit Report?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
                Once you receive the report, you could email us the report to:
                <Link
                  href="https://reports@rectifycredit.com"
                  onClick={preventDefault}
                >
                  reports@rectifycredit.com
                </Link>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                8. Will pulling out my own credit report create problem for me in
                any ways?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
                When you pull out your own credit report it will not create
                problem for you in any possible way. Your credit score will not
                be effected.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                9. I am afraid if my information will be shared with other
                agencies?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
                We respect our customers privacy and do not share your
                information with any one unless you direct us to do so in
                writing.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Container>
      </div>
    </div>
  );
}
