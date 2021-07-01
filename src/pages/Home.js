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

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(3),
  },
  head: {
    // display: "grid",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontWeight: 800,
    fontSize: 20,
    [theme.breakpoints.up("sm")]: {
      fontSize: 28,
    },
  },
  dropdownWrapper: {
    textDecoration: "none",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
  },
  dropdownText: {
    fontWeight: 600,
    fontSize: 12,
    color: "black",
    [theme.breakpoints.up("sm")]: {
      fontSize: 14,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 16,
    },
  },
  iconArrow: {
    color: theme.palette.primary.main,
    [theme.breakpoints.up("sm")]: {
      fontSize: 35,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 40,
    },
  },
  linkNew: {
    textDecoration: "none",
    gridArea: "1 / col6-start / row1-end / 6",
  },
  btnNew: {
    textTransform: "unset",
    padding: theme.spacing(1),
  },
  iconNew: {
    [theme.breakpoints.up("sm")]: {
      fontSize: 30,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 40,
    },
  },
  btnText: {
    fontWeight: 500,
    fontSize: 12,
    paddingLeft: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: 14,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 16,
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
            <Typography className={classes.btnText}>New Invoice</Typography>
          </Button>
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
