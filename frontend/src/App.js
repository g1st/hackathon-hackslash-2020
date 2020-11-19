
import Logo from "./components/Logo";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Classes, Class, Navbar, PrivateRoute, Home } from './components';
import { ProvideAuth } from './hooks/use-auth';
import Footer from './components/Footer';

function App() {
  return (
    <ProvideAuth>
      <Router>

        <header>
          header here Amanul Islam
          <Navbar />
        </header>
        <Container>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute path="/classes">
              <Classes />
            </PrivateRoute>
            <PrivateRoute path="/class/:className">
              <Class />
            </PrivateRoute>
          </Switch>
          <Footer />
        </Container>
      </Router>
    </ProvideAuth>
  );
}

export default App;
