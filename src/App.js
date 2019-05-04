import React from 'react';
import Routes from './components/routes';
import Header from './modules/header';

import './App.css';

const App = () => (
	<React.Fragment>
		<Header />
		<section className='App'>
			<Routes />
		</section>
	</React.Fragment>
);

export default App;
