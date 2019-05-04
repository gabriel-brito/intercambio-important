import React, { Component } from 'react';
import { observer } from 'mobx-react';
import StepOne from '../../modules/step-one';
import StepTwo from '../../modules/step-two';
import StepThree from '../../modules/step-three';
import Resultado from '../../modules/resultado';
import appState from '../../AppState';

class Stepper extends Component {
  render() {
    return (
      <main>
        {appState.step === 1 ? <StepOne /> : ''}
        {appState.step === 2 ? <StepTwo /> : ''}
        {appState.step === 3 ? <StepThree /> : ''}
        {appState.step === 4 ? <Resultado /> : ''}
      </main>
    );
  }
}

observer(Stepper);

export default Stepper;
