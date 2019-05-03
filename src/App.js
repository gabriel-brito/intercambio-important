import React from 'react';
import Routes from './components/routes';

import './App.css';

const App = () => (
	<section className='App'>
		<nav>
			Menu
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/#/timeline">Timeline</a></li>
			</ul>
		</nav>
		<Routes />
	</section>
);

export default App;
