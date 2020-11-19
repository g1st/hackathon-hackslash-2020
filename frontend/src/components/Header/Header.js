import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import Logo from "./Logo";
import "./Header.scss";

const Header = () => {
  let history = useHistory();
  let auth = useAuth();

  return (
    <header>
      <Logo />
      {auth.user ? (
        <p>
          Welcome {auth.user.name}!
          <button
            onClick={() => {
              auth.signout(() => history.push("/"));
            }}
          >
            Sign out
          </button>
        </p>
      ) : (
        <button>Register</button>
      )}
    </header>
  );
};

export default Header;
