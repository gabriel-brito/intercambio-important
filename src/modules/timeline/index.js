import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import appState from '../../AppState';

import './index.css'

class Timeline extends Component {
	componentDidMount() {
		appState.timeline.getList();
	}

	render() {
		return (
			<div>
				<div className="timeline-price">R$ {appState.timeline.price}</div>
				<h2>Linha do tempo</h2>
				<ul className="timeline">
					{
						appState.timeline.list
							? appState.timeline.list.map(tm => (
								<li key={tm.id} className="timeline-item">
									<span className="timeline-date">
										<span className="timeline-date-label">{tm.date}</span>
										<span className="timeline-date-bullet"></span>
									</span>
									<Card className="timeline-card">
										<CardHeader
											title={tm.title}
										/>
										<div class="timeline-body">
											<CardMedia
												className="timeline-image"
												image={tm.imageUrl}
											/>
											<CardContent className="timeline-content">
												<Typography>
													{tm.description}
												</Typography>
											</CardContent>
										</div>
									</Card>
								</li>
							))
							: <li>Carregando...</li>
					}
				</ul>
				<div className="timeline-buttons">
					<Button variant="contained" color="primary">
						Continuar
					</Button>
				</div>
			</div>
		);
	}
}

observer(Timeline)

export default Timeline;