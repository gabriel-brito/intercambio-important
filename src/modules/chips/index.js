import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Clear from '@material-ui/icons/Clear';
import appState from '../../AppState';
import './index.css';

class Chips extends Component {
	handleDelete = stepId => {
		appState.rollbackStep(stepId);
	}

	render () {
		const chips = appState.steps.filter(step => step.fields.every(f => f.value));

		return (
			(chips && chips.length)
			?
			<div className="breadcrumb">
					<h4>Seu objetivo é:</h4>
					{chips.map(step =>
						<Chip
							key={step.id}
							avatar={
								<Avatar>
									{step.avatar}
								</Avatar>
							}
							label={step.fields.map(f => f.value).join(',')}
							deleteIcon={<Clear />}
							onDelete={() => this.handleDelete(step.id)}
						/>
					)}
			</div>
			: null
		);
	}
}

observer(Chips);

export default Chips;