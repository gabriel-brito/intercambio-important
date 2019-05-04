import React from 'react';
import { decorate, observable, action, computed } from 'mobx';
import School from '@material-ui/icons/School';
import SwapHoriz from '@material-ui/icons/SwapHoriz';
import Language from '@material-ui/icons/Language';
import LocationCity from '@material-ui/icons/LocationCity';
import Timeline from './models/Timeline';
import ResultParameters from './models/ResultParameters';
import AccomodationState from './models/AccomodationState';
import StartDate from './models/StartDate';
import Mapa from './models/Mapa';
import mapFamily from './assets/images/timeline/family.png';
import mapFamily2 from './assets/images/timeline/family2.png';
import mapHotel from './assets/images/timeline/hotel.png';
import mapSchool from './assets/images/timeline/school.png';

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
			avatar: <LocationCity />
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
					description: 'Escola renomada no bairro',
					profilePicture: mapSchool
				},
				{
					type: 'H',
					subType: 'F',
					isFromSchoolNetwork: true,
					street: '35 White Lion St, The Angel, London N1 9PF, Reino Unido',
					name: 'Pedro e Maria',
					description: 'Somos uma familia de origem espanhola, com uma filha de 12 anos, um filho pequeno e um gato.',
					price: '2.000,00',
					profilePicture: mapFamily
				},
				{
					type: 'H',
					subType: 'H',
					isFromSchoolNetwork: true,
					street: '4 Liverpool Rd The Angel, London N1 0PH Reino Unido',
					name: 'Hotel da Pizza',
					description: 'Na verdade é uma pizzaria, mas o google maps insiste que é um hotel :/',
					price: '3.000,00',
					profilePicture: mapHotel
				},
				{
					type: 'H',
					subType: 'F',
					isFromSchoolNetwork: false,
					street: 'Elia Mews The Angel, London Reino Unido',
					name: 'Dona Benta',
					description: 'Familia vegetariana, não possui animais de estimação... Somos um casal José Carlos canadense e Madelaine inglesa.',
					price: '1.500,00',
					profilePicture: mapFamily2
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