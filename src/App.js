import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
import Header from './components/Header';
import setupStore from './store/setup';

function App() {
  return (
    <div className="App">
      {/* <Provider store={setupStore()}> */}
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
      {/* </Provider> */}
    </div>
  );
}

export default App;
