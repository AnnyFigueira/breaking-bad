import React from 'react';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';

export default function CharactersCardList(list) {
  return <Paper className="">{list.length > 0 && list.map((c) => <Card>{c}</Card>)}</Paper>;
}
