import React from 'react';
import Routes from './components/routes';
import Header from './modules/header';
import Chips from './modules/chips';


import './App.css';

const App = () => (
	<React.Fragment>
		<Header />
		<section className='App'>
			<nav>
				Menu
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/#/resultado">Resultado</a></li>
					<li><a href="/#/mapa">Mapa</a></li>
					<li><a href="/#/timeline">Timeline</a></li>
				</ul>
			</nav>
			<Chips />
			<Routes />
		</section>
	</React.Fragment>
);

export default App;
