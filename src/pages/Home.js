import {
  makeStyles,
  Typography,
  Popper,
  Grow,
  ClickAwayListener,
  Paper,
  MenuList,
  MenuItem,
  Button,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import HeroImg from "../assets/img/hero_empty-state.png";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.background.default,
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(3),
  },
  head: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "center",
    flex: "1 100%",
  },
  title: {
    flex: "100 0px",
    color: theme.palette.text.dark,
    fontWeight: 800,
    fontSize: 20,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 28,
    },
  },
  dropdownWrapper: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    flex: "1 auto",
    order: 2,
  },
  dropdownText: {
    fontWeight: 600,
    fontSize: 12,
    color: theme.palette.text.dark,
    [theme.breakpoints.down("sm")]: {
      fontSize: 11,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 14,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 16,
    },
  },
  iconArrow: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 35,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 40,
    },
  },
  linkNew: {
    order: 3,
    textDecoration: "none",
    flex: "1 auto",
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(0.5),
    },
  },
  btnNew: {
    textTransform: "unset",
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0.5),
    },
  },
  iconNew: {
    color: "#F8F7FC",
    [theme.breakpoints.up("sm")]: {
      fontSize: 30,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 40,
    },
  },
  btnText: {
    color: "#F8F7FC",
    fontWeight: 500,
    fontSize: 12,
    paddingLeft: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(0.5),
      fontSize: 11,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 14,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 16,
    },
  },
  content: {
    height: "60vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      height: "70vh",
    },
  },
  hero: {
    width: "50vw",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(6),
    [theme.breakpoints.up("sm")]: {
      width: "40vw",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(6),
      width: "20vw",
    },
  },
  contentText: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontWeight: 400,
    fontSize: 14,
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 18,
    },
  },
  contentLink: {
    textDecoration: "none",
    textAlign: "center",
    color: theme.palette.primary.main,
    fontWeight: 500,
    fontSize: 14,
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 18,
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.head}>
        <Typography className={classes.title}>Invoice Records</Typography>
        <div>
          <Link
            ref={anchorRef}
            aria-haspopup="true"
            onClick={handleToggle}
            className={classes.dropdownWrapper}
          >
            <Typography className={classes.dropdownText}>Filter</Typography>
            <ExpandMoreRoundedIcon className={classes.iconArrow} />
          </Link>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClose}>Status</MenuItem>
                      <MenuItem onClick={handleClose}>Due</MenuItem>
                      <MenuItem onClick={handleClose}>Invoice Amount</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
        <Link to="/" className={classes.linkNew}>
          <Button
            variant="contained"
            color="primary"
            className={classes.btnNew}
          >
            <AddCircleRoundedIcon className={classes.iconNew} />
            <Typography className={classes.btnText}>New</Typography>
          </Button>
        </Link>
      </div>
      <div className={classes.content}>
        <img src={HeroImg} className={classes.hero} alt="Invoice" />
        <Typography className={classes.contentText}>
          Whoopsie, looks like your invoice record is empty.
        </Typography>
        <Link to="/#" className={classes.contentLink}>
          Add your first invoice now!
        </Link>
      </div>
    </div>
    /*    <Box>
      home{" "}
      <Link to="/login">
        <Button color="primary" variant="contained">
          Mark as paid
        </Button>
      </Link>
      <Button color="secondary" variant="contained">
        Delete
      </Button>
      <Button color="primary" variant="outlined">
        Edit
      </Button>
    </Box>
*/
  );
};

export default Home;
