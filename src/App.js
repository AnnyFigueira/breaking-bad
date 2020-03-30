import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Header from './components/Header';
import Home from './screens/Home';
import Profile from './screens/Profile';
import setupStore from './store/setup';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 4),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Provider store={setupStore()}>
        <Router>
          <Header />
          <main>
            <div className={classes.heroContent}>
              <Switch>
                <Route path="/profile/:characterId" component={Profile} />
                <Route path="/" component={Home} />
              </Switch>
            </div>
          </main>
          <Box pt={4}></Box>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
