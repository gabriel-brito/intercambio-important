import React from 'react';
import Routes from './components/routes';

import './App.css';

const App = () => (
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
		<Routes />
	</section>
);

export default App;
