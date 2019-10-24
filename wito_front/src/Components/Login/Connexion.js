import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://wito.com/">
        Wito
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
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
}));


export default function SignIn() {
  let submit = function (){
    let utilisateur = {
      mail : document.getElementById('email').value,
      mdp : document.getElementById('password').value
    }
    console.log("utilisateur: " + JSON.stringify(utilisateur));

    fetch('http://localhost:3010/professeurs/auth',{
        method: 'POST',
        body: JSON.stringify({
            mail : utilisateur.mail,
            mdp : utilisateur.mdp,
    }),
    headers: {"Content-Type": "application/json"}
    })
    .then((resp) => resp.json())
    .then(function(data) {
        console.log("data - " + data.text);

        if(data.text === "Erreur"){
          console.log("data - " + data.text);
          fetch('http://localhost:3010/etudiants/auth',{
              method: 'POST',
              body: JSON.stringify({
                  mail : utilisateur.mail,
                  mdp : utilisateur.mdp,
          }),
          headers: {"Content-Type": "application/json"}
          })
          .then((resp) => resp.json())
          .then(function(data) {
              console.log("data - " + data.text);

              if(data.text === "Erreur"){
                console.log("data - " + data.text);
              
                window.location.replace("/");
              } else {
                localStorage.setItem('user_token', data.token);  
              }
          });
        } else {
          localStorage.setItem('user_token', data.token);  
        }
    });
  }

  const classes = useStyles();
  
  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} action='/cours' noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={submit}
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
  );
}