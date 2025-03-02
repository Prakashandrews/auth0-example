import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import auth0Config from './auth/auth0-config';

ReactDOM.render(
  <Auth0Provider
    domain={auth0Config.domain}
    clientId={auth0Config.clientId}
    redirectUri={window.location.origin}
    scope={auth0Config.scope}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);