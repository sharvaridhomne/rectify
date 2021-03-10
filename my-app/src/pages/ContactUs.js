import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(4, 8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));


export default function Contactus() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Get In Touch
          </Typography>
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit"> .</Typography>
            </Toolbar>
        </Container>
          <Typography component="h3" variant="h5">
            Office Address
          </Typography>
          <Typography component="h5" align="center" color="textSecondary" component="p">
          403,A-Wing,TechnoCity,Plot No.X-4/1 and 4/2, TTC Industrial Area,Mahape, Navi Mumbai-400 710, Maharashtra,India
          </Typography>
          <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h4" variant="h5" align="center" color="textPrimary" gutterBottom>
            Contact No 
        </Typography>
        <Typography component="h5" align="center" color="textSecondary" component="p">
        022 -27781302     /+91-8082-554356 /57/58
        </Typography>
      </Container>
      <Typography component="h3" variant="h5">
      Email us at 
          </Typography>
          <Typography component="h5" align="center" color="textSecondary" component="p">
          info@rectifycredit.com
          </Typography>
          
        </div>
      </Grid>
    </Grid>
  );
}