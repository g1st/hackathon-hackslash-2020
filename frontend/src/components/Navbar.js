import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';

const Navbar = () => {
  let history = useHistory();
  let auth = useAuth();

  return auth.user ? (
    <p>
      Welcome {auth.user.name}!
      <button
        onClick={() => {
          auth.signout(() => history.push('/'));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <button>Register</button>
  );
};

export default Navbar;
