import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Button from '../containers/Button';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Button} />
      </Switch>
    </Router>
  );
}
