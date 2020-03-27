import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';

import { useApiRequest } from '../../hooks';
import CharactersService from '../../services/Characters';
import CharactersCardList from '../../components/CharactersCardList';

const SHOW_ITEMS = 20;

const getPaginatedList = (list, currPage = 1) => {
  const startPos = currPage === 1 ? 0 : SHOW_ITEMS * (currPage - 1);
  const endPos = SHOW_ITEMS * currPage;
  return list.filter((item, idx) => idx >= startPos && idx < endPos);
};

const getListTotalPages = (list) => {
  return list.length < SHOW_ITEMS ? 1 : Math.round(list.length / SHOW_ITEMS);
};

export default function Home() {
  const [page, setPage] = useState(1);

  const [isLoaded, response, error] = useApiRequest(
    { Service: CharactersService, action: 'getCharacters' },
    null,
    'Failure to fetch data',
    false,
  );

  /* TODO: Debug the reason behind this error */
  console.log(error);

  const list = response && response.data && response.data.list ? response.data.list : [];

  return (
    <main className="">
      <div className="" />
      <Container maxWidth="lg" className="">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <CharactersCardList list={getPaginatedList(list, page)} />
          </Grid>
        </Grid>
        <Pagination page={page} />
        <Box pt={4}></Box>
      </Container>
    </main>
  );
}
