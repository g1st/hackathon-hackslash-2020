import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';

// A wrapper for <Route> that redirects to the login
// screen if user not yet authenticated.
const PrivateRoute = ({ children, ...rest }) => {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
