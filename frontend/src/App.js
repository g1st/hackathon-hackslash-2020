import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Classes, Class, Header, PrivateRoute, Home, RegisterPage } from "./components";
import { ProvideAuth } from "./hooks/use-auth";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<Router>
			<ProvideAuth>
				<Header />

				<Container>
					<Switch>
						<Route exact path="/">
              <Home />
              
						</Route>
            <Route exact path="/register">
              <RegisterPage />
              
						</Route>
						<PrivateRoute path="/classes">
							<Classes />
						</PrivateRoute>
						<PrivateRoute path="/class/:className">
							<Class />
						</PrivateRoute>
					</Switch>
				</Container>
				<Footer />
			</ProvideAuth>
		</Router>
	);
}

export default App;
