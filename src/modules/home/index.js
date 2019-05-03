import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';

import './index.css';

const Home = () => (
  <section className='homepage'>
    <CardMedia src='#' className='homepage__card'>
      Estudar
    </CardMedia>
    <CardMedia src='#' className='homepage__card'>
      Trabalhar
    </CardMedia>
  </section>
);

export default Home;