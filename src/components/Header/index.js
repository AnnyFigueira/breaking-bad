import React from 'react';
import { withRouter } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  link: {
    cursor: 'pointer',
  },
}));

function Header({ history }) {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <AppBar position="absolute">
        <Toolbar>
          <Typography component="h1" variant="h6" color="inherit" noWrap>
            <Link
              color="inherit"
              underline="none"
              className={classes.link}
              onClick={() => history.push('/')}
            >
              Breaking Bad
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Header);
