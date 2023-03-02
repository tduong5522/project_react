import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
import { About, Home, Login } from "./pages";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoutes path="/about">
          <About />
        </PrivateRoutes>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoutes path="/">
          <Home />
        </PrivateRoutes>
      </Switch>
    </Router>
  );
}

export default App;
