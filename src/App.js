import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './components/Loading';
import Welcome from './components/Welcome';

const App = () => {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Welcome} />
        {/* Add more routes here as needed */}
      </Switch>
    </Router>
  );
};

export default App;