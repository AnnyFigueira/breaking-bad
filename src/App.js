import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './screens/Home';
import Profile from './screens/Profile';
import setupStore from './store/setup';

function App() {
  return (
    <div className="App">
      <Provider store={setupStore()}>
        <Router>
          <Header />
          <Switch>
            <Route path="/profile/:characterId" component={Profile} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
