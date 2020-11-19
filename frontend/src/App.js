import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Classes, Class, Navbar, PrivateRoute, Home } from './components';
import { ProvideAuth } from './hooks/use-auth';

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
        </Container>
        <footer>footer here</footer>
      </Router>
    </ProvideAuth>
  );
}

export default App;
