import { useHistory, useLocation, Link } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import Logo from "./Logo";
import "./Header.scss";

const Header = () => {
  let history = useHistory();
  let auth = useAuth();
  let location = useLocation();
  let registerButton =
    location.pathname !== '/register' ? (
      <Link to="/register">
        <button className="registerBtn btn-dark">Register</button>
      </Link>
    ) : (
      <Link to="/">
        <button className="registerBtn btn-dark">Login</button>
      </Link>
    );

  return (
    <header>
      <div>
        <Logo />
      </div>
      <div className="btnDiv">
        {auth.user ? (
          <p>
            Welcome {auth.user.name}!
            <button
              className="registerBtn btn-dark"
              onClick={() => {
                auth.signout(() => history.push("/"));
              }}
            >
              Sign out
            </button>
          </p>
        ) : (
          registerButton
        )}
      </div>
    </header>
  );
};

export default Header;
