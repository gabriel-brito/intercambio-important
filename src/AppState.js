import { decorate, observable, action } from 'mobx';
import { Component } from 'react';
import Timeline from './models/Timeline';
import ResultParameters from './models/ResultParameters';
import AccomodationState from './models/AccomodationState';
import StartDate from './models/StartDate';

class AppState {
  step = 1;
  timeline = new Timeline();
  accomodationState = new AccomodationState();
  resultParameters = new ResultParameters();
  startDate = new StartDate();

  incrementStep = () => {
    this.step += 1;
  };
}

decorate(AppState, {
  step: observable,
  timeline: observable,
  incrementStep: action
});

const state = new AppState();

export default state;
