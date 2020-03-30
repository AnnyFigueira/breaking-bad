import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useApiRequest } from '../../hooks';
import CharactersService from '../../services/Characters';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
  },
  card: {
    minHeight: '900px',
    display: 'flex',
    flexDirection: 'row',
  },
  fixedHeight: {
    height: 240,
  },
  cardMedia: {
    width: '50%',
  },
}));

function Profile({ match }) {
  const { characterId } = match.params;

  const [isLoaded, response, error] = useApiRequest(
    { Service: CharactersService, action: 'getById' },
    characterId,
    'Failure to fetch data',
    false,
  );

  const character = response && response.data ? response.data[0] : {};

  console.log(character);

  const classes = useStyles();

  // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Container maxWidth="md" className={classes.container}>
      {isLoaded && (
        <Card className={classes.card}>
          <CardMedia className={classes.cardMedia} image={character.img} title={character.name} />
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h1" variant="h5">
                {character.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Nickname: {character.nickname}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                Occupation:
                {character.occupation.map((occupation, index) =>
                  index === 0 ? occupation : ', ' + occupation,
                )}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                Breaking bad seasons:
                {character.appearance.map((appearance, index) =>
                  index === 0 ? appearance : ', ' + appearance,
                )}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Status: {character.status}
              </Typography>
            </CardContent>
          </div>
        </Card>
      )}
    </Container>
  );
}

export default withRouter(Profile);
