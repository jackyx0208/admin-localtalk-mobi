export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

export const cognitoConfig = {
  userPoolId: process.env.REACT_APP_AWS_COGNITO_USER_POOL_ID,
  clientId: process.env.REACT_APP_AWS_COGNITO_CLIENT_ID
};

export const auth0Config = {
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
  domain: process.env.REACT_APP_AUTH0_DOMAIN
};

export const mapConfig = process.env.REACT_APP_MAP_MAPBOX;

export const googleAnalyticsConfig = process.env.REACT_APP_GA_MEASUREMENT_ID;

// const URL =
// process.env.NODE_ENV !== 'production' ? 'http://localhost:4000/api/v1' : 'http://localtalk.mobi:4000/api/v1';

// const URL = 'http://ves.qtp.mybluehost.me:4848/api/v1';
const URL = 'https://api.localtalk.mobi/api/v1';
// const URL = 'http://10.10.11.143:4000/api/v1';

// const socketURL = process.env.NODE_ENV !== 'production' ? 'ws://localhost:4000' : 'ws://localtalk.mobi:4000';

// const socketURL = 'ws://ves.qtp.mybluehost.me:4848';
const socketURL = 'wss://api.localtalk.mobi';
// const socketURL = 'ws://10.10.11.143:4000';

export const serverConfig = {
  baseUrl: URL,
  socketUrl: socketURL
};
