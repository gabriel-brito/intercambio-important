import { decorate, observable, action } from 'mobx';
import Timeline from './models/Timeline';
import ResultParameters from './models/ResultParameters';
import AccomodationState from './models/AccomodationState';
import StartDate from './models/StartDate';
import Mapa from './models/Mapa';

class AppState {
	step = 1;
	timeline = new Timeline();
	accomodationState = new AccomodationState();
	resultParameters = new ResultParameters();
	startDate = new StartDate();
	mapa = new Mapa();

	loadMap = address => {
		setTimeout(() => {
			this.mapa.loadMarkers([
				{
					type: 'E',
					street: '97 White Lion St, The Angel, London N1 9PF, Reino Unido',
					name: 'Escola de idioma Bartolomeu',
					description: 'Escola renomada no bairro'
				},
				{
					type: 'EH',
					street: '35 White Lion St, The Angel, London N1 9PF, Reino Unido',
					name: 'Pedro e Maria',
					description: 'Casal com 1 cachorro e 2 filhos'
				},
				{
					type: 'EH',
					street: '4 Liverpool Rd The Angel, London N1 0PH Reino Unido',
					name: 'Dona Benta',
					description: 'Idosa muito maneira'
				},
				{
					type: 'SH',
					street: 'Elia Mews The Angel, London Reino Unido',
					name: 'Silvio Santos',
					description: 'Um moço do SBT'
				}
			]);
		}, 2000);
	};

	incrementStep = () => {
		this.step += 1;
	};
}

decorate(AppState, {
	step: observable,
	timeline: observable,
	mapa: observable,

	incrementStep: action,
	loadMap: action
});

const state = new AppState();

export default state;
