const auth0Config = {
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
  redirectUri: process.env.REACT_APP_AUTH0_REDIRECT_URI,
  //audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  scope: process.env.REACT_APP_AUTH0_SCOPE,
};

export default auth0Config;