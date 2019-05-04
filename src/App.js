import React from 'react';
import Routes from './components/routes';
import Header from './modules/header';
import Chips from './modules/chips';


import './App.css';

const App = () => (
	<React.Fragment>
		<Header />
		<section className='App'>
			<Chips />
			<Routes />
		</section>
	</React.Fragment>
);

export default App;
