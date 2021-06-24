import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./components/Layout/Layout";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Layout>
          <Route path="/">
            <Home />
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
};

export default App;
