import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import Logo from "./Logo";
import "./Header.scss";

const Header = () => {
  let history = useHistory();
  let auth = useAuth();

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
          <button className="registerBtn btn-dark">Register</button>
        )}
      </div>
    </header>
  );
};

export default Header;
