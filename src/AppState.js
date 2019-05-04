import { Component } from 'react';
import { decorate, observable } from 'mobx';
import Timeline from './models/Timeline';
import ResultParameters from './models/ResultParameters';
import AccomodationState from './models/AccomodationState';
import StartDate from './models/StartDate';

class AppState extends Component {
  timeline = new Timeline();
  accomodationState = new AccomodationState();
  resultParameters = new ResultParameters();
  startDate = new StartDate();
}

decorate(AppState, {
	timeline: observable
});

const state = new AppState();

export default state;