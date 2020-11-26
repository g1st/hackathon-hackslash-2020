const production = process.env.NODE_ENV === 'production';

export const serverURL = production
  ? process.env.REACT_APP_SERVER_URL
  : 'http://localhost:3001';
