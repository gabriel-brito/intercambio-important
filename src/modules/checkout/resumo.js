import React from 'react';
import Grid from '@material-ui/core/Grid';

const Resumo = () => (

	<Grid container spacing={24} className="info-item">
		<Grid item xs={12}>
			<h2>Instituição</h2>
			<h3>OHC Toronto - Semi-intensivo</h3>
			<p>Na OHC, achamos que aprender e estudar inglês deve ser fácil, divertido e recompensador! Nossos alunos parecem concordar conosco desde que começamos a ensinar em 1974 e têm crescido desde então!</p>
			<span className='item-amount'>R$ 6.000,00</span>
		</Grid>

		<Grid item xs={12} className="info-item">
			<h2>Anfitrião</h2>
			<h3>Família Adams</h3>
			<p>[Casa] Alexander Street, N°: 666</p>
			<p>Tipo de acomodação: Casa</p>
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p>
			<span className='item-amount'>R$ 2.259,00</span>
		</Grid>

		<Grid item xs={12} className="info-item">
			<h2>Dados do Vôo</h2>
			<h3>América Airlines</h3>
			<p>Checkin: 02/07/2019 16h30</p>
			<p>Checkout: 30/07/2019 13h10</p>
			<span className='item-amount'>R$ 4.000,00</span>
		</Grid>

		<Grid item xs={12} className='amount info-item'>
			R$ 12.259,00
		</Grid>

	</Grid>

);

export default Resumo;