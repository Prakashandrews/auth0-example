import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';

// const Auth0ProviderWithHistory = ({ children }) => {
//   const history = useHistory();

//   const onRedirectCallback = (appState) => {
//     console.log('appState....', appState);
//     history.push(appState?.returnTo || window.location.pathname);
//   };

//   return (
//     <Auth0Provider
//       domain={process.env.REACT_APP_AUTH0_DOMAIN}
//       clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
//       redirectUri={window.location.origin}
//       onRedirectCallback={onRedirectCallback}
//     >
//       {children}
//     </Auth0Provider>
//   );
// };

// export default Auth0ProviderWithHistory;