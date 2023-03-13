import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
import { About, Home, Login, Unsupport } from "./pages";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <PrivateRoutes path="/about">
          <About />
        </PrivateRoutes>
        <PrivateRoutes exact path="/">
          <Home />
        </PrivateRoutes>
        <PrivateRoutes path="*">
          <Unsupport />
        </PrivateRoutes>
      </Switch>
    </Router>
  );
}

export default App;
