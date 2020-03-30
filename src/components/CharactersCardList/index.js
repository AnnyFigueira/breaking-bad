import React from 'react';
import { withRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },

  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  cardMedia: {
    paddingTop: '56.25%', // 16:9
    width: '100%',
    height: '350px',
  },
}));

function CharactersCardList({ history, list, loading, error }) {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {loading ? (
          <CircularProgress />
        ) : error ? (
          error
        ) : (
          list.map((c) => (
            <Grid item key={c.char_id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={c.img} title={c.name} />
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {c.name}
                  </Typography>
                  <Typography color="textSecondary">{c.nickname}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => history.push(`/profile/${c.char_id}`)}>
                    Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}

export default withRouter(CharactersCardList);
