import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import { useApiRequest } from '../../hooks';
import CharactersService from '../../services/Characters';
import CharactersCardList from '../../components/CharactersCardList';

const SHOW_ITEMS = 21;

const getPaginatedList = (list, currPage = 1) => {
  const startPos = currPage === 1 ? 0 : SHOW_ITEMS * (currPage - 1);
  const endPos = SHOW_ITEMS * currPage;
  return list.filter((item, idx) => idx >= startPos && idx < endPos);
};

const getListTotalPages = (list) => {
  return list.length < SHOW_ITEMS ? 1 : Math.round(list.length / SHOW_ITEMS);
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
    margin: '0 auto',
  },
  grid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export default function Home() {
  const [page, setPage] = useState(1);

  const [isLoaded, response, error] = useApiRequest(
    { Service: CharactersService, action: 'getAll' },
    null,
    'Failure to fetch data',
    false,
  );

  const list = response && response.data ? response.data : [];

  const classes = useStyles();

  return (
    <>
      <CharactersCardList list={getPaginatedList(list, page)} />
      <Container className={classes.grid} maxWidth="md">
        <Grid container spacing={4}>
          <div className={classes.root}>
            <Pagination
              page={page}
              count={getListTotalPages(list)}
              onChange={(e, n) => setPage(parseInt(n))}
            />
          </div>
        </Grid>
      </Container>
    </>
  );
}
