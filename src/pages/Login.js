import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: theme.spacing(3),
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
  loginPage: {
    display: 'flex',
    backgroundColor: "#01C9E1",
    height: '100%',
    alignItems: 'center',
  },
  login: {
    backgroundColor: "#F9F9F9",
  },
  logo: {
    width: '100%',
  },
  image: {
    width: '15%',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#FFB600'
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2.4em',
    color: '#01C9E1',
  },
  admin: {
    marginBottom: '14px',
    marginStart: '5px',
    fontFamily: 'Mulish',
    fontWeight: '700',
  },
  errorMsg: {
    color: 'red',
    height: '10px',
  }
}));

export default function Login() {
  let history = useHistory()
  const classes = useStyles();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMsg, setErrorMsg] = React.useState('');
  const onChange = (event) => {
    const {value, name} = event.target;
    if (name === 'username'){
      console.log(value)
      setUsername(value)
    } else if (name === 'password'){
      console.log(value)
      setPassword(value)
    }
  }
  const onSubmit = (event) => {
    event.preventDefault();
    
    fetch('/authenticate', {
        method: 'POST',
        body: JSON.stringify({'username': username, 'password': password}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
      console.log(res.status)
      if(res.status === 200) {
            history.push('/');

        } else {

            const error = new Error(res.error);
            throw error;

        }
    })
    .catch(err => {
        console.log(err);
        setErrorMsg('Incorrect username or password. Please try again!');
    })
  }
  return (
    <div className={classes.loginPage}>
      <Container component="main" maxWidth="xs" className={classes.login}>
        <CssBaseline />
        <div className={classes.paper}>
          <div className={classes.title}>
            <div className={classes.image}>
              <img src="/blueIcon.png" alt="logo" className={classes.logo}/>
            </div>
            <div className={classes.admin}>
              Laundr Admin Login
            </div>
          </div>
          <div 
            className={classes.errorMsg}
          >
            {errorMsg}
          </div>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              onChange={onChange}
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
              onChange={onChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
              onClick={onSubmit}
            >
              Login
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

