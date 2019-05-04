import React from 'react';
import { decorate, observable, action, computed } from 'mobx';
import School from '@material-ui/icons/School';
import SwapHoriz from '@material-ui/icons/SwapHoriz';
import Language from '@material-ui/icons/Language';
import Timeline from './models/Timeline';
import ResultParameters from './models/ResultParameters';
import AccomodationState from './models/AccomodationState';
import StartDate from './models/StartDate';
import Mapa from './models/Mapa';

class AppState {
	steps = [
		{
			id: 1,
			fields: [
				{
					name: 'travelReason',
					value: null
				}
			],
			avatar: <School />
		},
		{
			id: 2,
			fields: [
				{
					name: 'chosenCourse',
					value: null
				}
			],
			avatar: <SwapHoriz />
		},
		{
			id: 3,
			fields: [
				{
					name: 'language',
					value: null
				},
				{
					name: 'location',
					value: null
				}
			],
			avatar: <Language />
		},
		{
			id: 4,
			fields: [
				{
					name: 'school',
					value: null
				}
			],
			avatar: <Language />
		}
	];
	timeline = new Timeline();
	accomodationState = new AccomodationState();
	resultParameters = new ResultParameters();
	startDate = new StartDate();
	mapa = new Mapa();

	get step() {
		return this.steps.find(s => s.fields.some(f => f.value === null));
	}

	setSearchParameter = (name, value) => {
		this.step.fields.find(f => f.name === name).value = value;
		this.resultParameters[name] = value;
	};

	rollbackStep = id => {
		this.steps.filter(s => s.id >= id).forEach(s => s.fields.forEach(f => f.value = null));
	};

	loadMap = address => {
		setTimeout(() => {
			this.mapa.loadMarkers([
				{
					type: 'S',
					street: '97 White Lion St, The Angel, London N1 9PF, Reino Unido',
					name: 'Escola de idioma Bartolomeu',
					description: 'Escola renomada no bairro'
				},
				{
					type: 'H',
					subType: 'F',
					isFromSchoolNetwork: true,
					street: '35 White Lion St, The Angel, London N1 9PF, Reino Unido',
					name: 'Pedro e Maria',
					description: 'Casal com 1 cachorro e 2 filhos'
				},
				{
					type: 'H',
					subType: 'H',
					isFromSchoolNetwork: true,
					street: '4 Liverpool Rd The Angel, London N1 0PH Reino Unido',
					name: 'Dona Benta',
					description: 'Idosa muito maneira'
				},
				{
					type: 'H',
					subType: 'F',
					isFromSchoolNetwork: false,
					street: 'Elia Mews The Angel, London Reino Unido',
					name: 'Silvio Santos',
					description: 'Um moço do SBT'
				}
			]);
		}, 2000);
	};
}

decorate(AppState, {
	steps: observable,
	step: computed,
	timeline: observable,
	mapa: observable,

	loadMap: action,
	setSearchParameter: action,
	rollbackStep: action
});

const state = new AppState();

export default state;
