import { Link } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  makeStyles,
  Grid,
  fade,
} from "@material-ui/core";
import HeroImg from "../assets/img/hero-login.png";
const useStyles = makeStyles((theme) => ({
  heroWrapper: {
    backgroundColor: theme.palette.primary.main,
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  hero: {
    width: "35vw",
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      justifyContent: "start",
      width: "100vw",
    },
  },
  contentWrapper: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "center",
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(3),
    },
  },
  content: {
    height: "100vh",
    margin: "auto 0",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      maxWidth: 550,
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
  },
  title: {
    paddingBottom: theme.spacing(0.5),
    fontWeight: 800,
    fontSize: 30,
    [theme.breakpoints.up("md")]: {
      fontSize: 40,
    },
  },
  caption: {
    color: "#939393",
    fontWeight: 400,
    fontSize: 12,
    [theme.breakpoints.up("md")]: {
      fontSize: 18,
    },
  },
  form: {
    marginTop: theme.spacing(4),
  },
  textField: {
    marginBottom: theme.spacing(2),
    "& .MuiFormLabel-root.Mui-focused": {
      fontWeight: 500,
      fontSize: 18,
    },
    "& .MuiInputBase-root": {
      borderRadius: 15,
    },
    "& .MuiOutlinedInput-input": {
      fontWeight: 500,
    },
    "& .MuiInputBase-root.Mui-focused": {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.3rem`,
      borderColor: theme.palette.primary.main,
    },
  },
  wideButton: {
    height: theme.spacing(6),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    fontWeight: 700,
    fontSize: 18,
    [theme.breakpoints.up("sm")]: {
      height: theme.spacing(8),
      fontSize: 20,
    },
  },
  registerLinks: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  linkText: {
    fontWeight: 400,
    paddingTop: theme.spacing(0.5),
    fontSize: 14,
    [theme.breakpoints.up("md")]: {
      fontSize: 16,
      paddingTop: theme.spacing(1),
    },
  },
  link: {
    fontWeight: 700,
    color: theme.palette.primary.main,
    textDecoration: "none",
    fontSize: 14,
    [theme.breakpoints.up("md")]: {
      fontSize: 16,
    },
  },
  remember: {
    fontWeight: 500,
    fontSize: 12,
    [theme.breakpoints.up("sm")]: {
      fontSize: 18,
    },
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.wrapper}>
      <Grid item xs={0} md={6} className={classes.heroWrapper}>
        <img src={HeroImg} className={classes.hero} alt="Invoice" />
      </Grid>
      <Grid item xs={12} md={6} className={classes.contentWrapper}>
        <div className={classes.content}>
          <Typography className={classes.title}>Log in to invoice</Typography>
          <Typography className={classes.caption}>
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
              className={classes.remember}
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
              LogIn
            </Button>
          </Link>

          <div className={classes.registerLinks}>
            <Link to="#" className={classes.link}>
              Forgot Password
            </Link>
            <Typography className={classes.linkText}>
              Haven't joined yet?
              <Link to="#" className={classes.link}>
                Register now!
              </Link>
            </Typography>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
