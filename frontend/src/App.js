import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  PublicPage,
  Classes,
  Class,
  LoginPage,
  Navbar,
  PrivateRoute,
} from "./components";
import Logo from "./components/Logo";
import { ProvideAuth } from "./hooks/use-auth";

function App() {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <header>
            <Logo/>
            <Navbar />
          </header>
          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/classes">Classes Page</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/public">
              <PublicPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute path="/classes">
              <Classes />
            </PrivateRoute>
            <PrivateRoute path="/class/:className">
              <Class />
            </PrivateRoute>
          </Switch>
          <footer>footer here</footer>
        </div>
      </Router>
    </ProvideAuth>
  );
}

export default App;
