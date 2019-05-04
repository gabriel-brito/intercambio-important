import React, { Component } from 'react';
import { observer } from 'mobx-react';
import StepOne from '../../modules/step-one';
import StepTwo from '../../modules/step-two';
import appState from '../../AppState';

class Stepper extends Component {
  render() {
    return (
      <main>
        {appState.step === 1 ? <StepOne /> : ''}
        {appState.step === 2 ? <StepTwo /> : ''}
      </main>
    );
  }
}

observer(Stepper);

export default Stepper;
