import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
import { About, AdminPage, Home, Login, Unsupport } from "./pages";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/admin">
          <AdminPage />
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
