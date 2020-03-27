import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function Header() {
  return (
    <div>
      <CssBaseline />
      <AppBar position="absolute" className="">
        <Toolbar className="">
          <Typography component="h1" variant="h6" color="inherit" noWrap className="">
            Breaking Bad
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
