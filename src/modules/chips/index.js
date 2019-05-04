import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Clear from '@material-ui/icons/Clear';
import appState from '../../AppState';

const styles = {
	root: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		flexGrow: 1,
	},
};

class Chips extends Component {
	handleDelete = stepId => {
		appState.rollbackStep(stepId);
	}

	render () {
		const chips = appState.steps.filter(step => step.fields.every(f => f.value));

		return (
			<div style={styles.root}>
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
		);
	}
}

observer(Chips);

export default withStyles(styles)(Chips)