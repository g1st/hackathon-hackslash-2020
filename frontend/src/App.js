import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Classes, Class, Header, PrivateRoute, Home } from "./components";
import { ProvideAuth } from "./hooks/use-auth";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<ProvideAuth>
			<Router>
				<Header />

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
				<Footer />
			</Router>
		</ProvideAuth>
	);
}

export default App;
