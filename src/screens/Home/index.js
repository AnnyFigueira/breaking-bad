import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';

export default function Home() {
  return (
    <main className="">
      <div className="" />
      <Container maxWidth="lg" className="">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className=""></Paper>
          </Grid>
        </Grid>
        <Box pt={4}></Box>
      </Container>
    </main>
  );
}
