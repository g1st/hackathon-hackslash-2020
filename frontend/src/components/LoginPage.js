import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: '/' } };
  let login = () => {
    auth.signin(email, password, () => {
      setEmail('');
      setPassword('');
      history.replace(from);
    });
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <input type="email" placeholder="email" onChange={changeEmail} />
      <input type="password" placeholder="password" onChange={changePassword} />
      <button onClick={login}>Log in</button>
    </div>
  );
};

export default LoginPage;
