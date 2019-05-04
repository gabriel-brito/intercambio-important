import React, { Component } from 'react';
import { observer } from 'mobx-react';
import StepOne from '../../modules/step-one';
import StepTwo from '../../modules/step-two';
import StepThree from '../../modules/step-three';
import Resultado from '../../modules/resultado';
import appState from '../../AppState';

const stepperTemplate = {
	1: <StepOne />,
	2: <StepTwo />,
	3: <StepThree />,
	4: <Resultado />
}

class Stepper extends Component {
	render() {
		return (
			<main>
				{
					appState.step
					? (stepperTemplate[appState.step.id] || '')
					: null
				}
			</main>
		);
	}
}

observer(Stepper);

export default Stepper;
