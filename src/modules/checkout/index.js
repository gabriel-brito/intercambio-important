import React from 'react';
import Grid from '@material-ui/core/Grid';

import Resumo from './resumo'
import Formulario from './formulario'

import './checkout.css'

const Checkout = () => (
  <section className='checkout'>
    <h1>Informações de pagamento</h1>

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