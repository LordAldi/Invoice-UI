import { Link } from "react-router-dom";
import { Paper } from "@material-ui/core";
const Login = () => {
  return (
    <div>
      <Paper>
        Login page <Link to="/">backto home</Link>
      </Paper>
    </div>
  );
};

export default Login;
