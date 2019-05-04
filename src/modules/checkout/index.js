import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Resumo from './resumo'
import Formulario from './formulario'

const Checkout = () => (
  <section className='checkout'>
    <h1>Checkout</h1>

    <div>
      <Grid container spacing={24}>

        <Grid item xs={6}>
        <Resumo />
        </Grid>
        <Grid item xs={6}>
          <Formulario />
        </Grid>

      </Grid>
    </div>

  </section>
);

export default Checkout;