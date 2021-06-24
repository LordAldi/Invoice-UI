import { AppBar, Avatar, Toolbar, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import InLogo from "../../assets/icon/logo.svg";
import DarkModeIcon from "../../assets/icon/darkMode.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiAppBar-root": {
      justifyContent: "center",
      height: theme.spacing(9),
    },
    "& .MuiAppBar-colorPrimary": {
      backgroundColor: "#D2CEE9",
      marginBottom: theme.spacing(2),
    },
    "& .MuiAppBar-positionFixed": {
      left: 0,
    },
    [theme.breakpoints.up("sm")]: {
      "& .MuiAppBar-root": {
        width: 110,
        height: "100vh",
      },
      "& .MuiToolbar-root": {
        height: "100%",
        flexDirection: "column",
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3.5),
      },
    },
  },
  space: {
    flexGrow: 1,
  },
  logo: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  },
  avatar: {
    width: theme.spacing(4.5),
    height: theme.spacing(4.5),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
      height: theme.spacing(9),
    },
  },
  mode: {
    width: theme.spacing(2),
    height: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  },
  divider: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    height: theme.spacing(5.75),
    backgroundColor: "#8D84C0",
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9.5),
      height: 1,
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
  },
  content: {
    marginTop: theme.spacing(10),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(15),
    },
  },
}));
const Navbar = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <img src={InLogo} alt="Invoice" className={classes.logo} />
          <div className={classes.space}></div>
          <img src={DarkModeIcon} alt="Dark" className={classes.mode} />
          <Divider orientation="vertical" className={classes.divider} />
          <Avatar
            src="https://i.pravatar.cc/300"
            alt="A"
            className={classes.avatar}
          />
        </Toolbar>
      </AppBar>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Navbar;
