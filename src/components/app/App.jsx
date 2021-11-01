import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CoordsPage from '../../containers/CoordsPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CoordsPage} />
      </Switch>
    </Router>
  );
}
