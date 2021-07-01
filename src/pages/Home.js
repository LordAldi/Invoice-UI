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

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    padding: "24px",
  },
  head: {
    display: "flex",
    flexDirection: "row",
  },
  title: {
    fontWeight: 800,
    fontSize: 20,
  },
  dropdownWrapper: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  dropdown: {
    textDecoration: "none",
    fontWeight: 600,
    fontSize: 12,
    color: "black",
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
        <div className={classes.dropdownWrapper}>
          <Link
            ref={anchorRef}
            aria-haspopup="true"
            onClick={handleToggle}
            className={classes.dropdown}
          >
            Filter
            <ExpandMoreRoundedIcon color="primary" />
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
