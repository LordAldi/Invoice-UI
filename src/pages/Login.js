import { Link } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  content: {
    height: "100vh",
    margin: "auto 24px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    marginBottom: theme.spacing(0.5),
    fontWeight: 800,
  },
  form: {
    marginTop: theme.spacing(4),
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  wideButton: {
    height: theme.spacing(6),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  registerLinks: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  link: {
    marginBottom: theme.spacing(1),
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Typography variant="h4" className={classes.title}>
        Log in to invoice
      </Typography>
      <Typography variant="caption">
        Glad to have you back! Please log in to your account.
      </Typography>

      <form noValidate autoComplete="off" className={classes.form}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          required
          className={classes.textField}
        />
        <TextField
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          fullWidth
          required
          className={classes.textField}
        />
        <FormControlLabel
          control={<Checkbox name="rememberme" color="primary" />}
          label="Remember Me"
        />
      </form>

      <Link to="/">
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          className={classes.wideButton}
        >
          Log In
        </Button>
      </Link>

      <div className={classes.registerLinks}>
        <Typography className={classes.link}>
          <Link to="#">Forgot Password</Link>
        </Typography>
        <Typography>
          Haven't joined yet?
          <Link to="#">Register now!</Link>
        </Typography>
      </div>
    </div>
  );
};

export default Login;
