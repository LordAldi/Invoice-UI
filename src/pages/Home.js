import { Box, Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box>
      home{" "}
      <h1>Greetings, mermaid!</h1>
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
  );
};

export default Home;
