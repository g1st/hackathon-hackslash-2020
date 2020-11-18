// see https://usehooks.com/useAuth/
// and https://reactrouter.com/web/example/auth-workflow
import { useState, useEffect, useContext, createContext } from 'react';

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = (email, password, cb) => {
    // TODO POST to backend for signing in.
    // return fetch('server_url.tld/api/auth/signin', {
    //   method: 'post',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: { email, password },
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setUser(data.user);
    //     cb();
    //     return data.user;
    //   });

    // until no backend set it straight away
    setUser({ name: email });
    localStorage.setItem('user', JSON.stringify({ name: email }));
    cb();
  };

  const signup = (email, password) => {
    // TODO POST to backend for sign up.
    // return fetch('server_url.tld/api/auth/signup', {
    //   method: 'post',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: { email, password },
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setUser(data.user);
    //     return data.user;
    //   });

    // until no backend set it straight away on SignIn button click
    setUser({ name: 'Jane', token: '123' });
  };

  const signout = () => {
    // TODO remove token from localstorage, set user to false
    localStorage.removeItem('user');
    setUser(false);
    return false;
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    // TODO check if user token in localStorage, if yes setUser to that and save token
    // TODO otherwise = setUser(false)
    const user = localStorage.getItem('user');
    if (user) {
      setUser(JSON.parse(user));
    } else {
      setUser(false);
    }
  }, []);

  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout,
  };
}
