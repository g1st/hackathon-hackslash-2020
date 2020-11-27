import { useState, useEffect } from 'react';
import { useAuth } from './use-auth';

function useFetch(url, param = '') {
  const [state, setState] = useState({
    status: 'loading',
    data: null,
    error: null,
  });
  let auth = useAuth();

  useEffect(() => {
    setState({
      status: 'loading',
      data: null,
      error: null,
    });
    fetch(url, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + auth?.user?.token,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setState({
          status: 'success',
          data,
          error: null,
        });
      })
      .catch((error) => {
        setState({
          status: 'error',
          data: null,
          error: error,
        });
      });
  }, [url, auth?.user?.token, param]);

  return state;
}

export default useFetch;
