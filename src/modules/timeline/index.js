import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import appState from '../../AppState';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import indigo from '@material-ui/core/colors/indigo';

import './index.css'
import { isWidthDown } from '@material-ui/core/withWidth';

class Timeline extends Component {

	componentDidMount() {
		appState.timeline.getList();
	}

	render() {
		return (
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Typography variant="h2" style={{color:indigo[900]}}>
                        Conheça a linha do tempo do seu intercâmbio
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Para quem curte a natureza, há cerca de 200 reservas nacionais ao longo dos seus 94 mil m2 de extensão, o que representa 57% do Reino Unido. Sua excelente estrutura ferroviária garante facilidade de acesso a todas as cidades.
                    </Typography>
                </Grid>
                <Grid item xs={9}>
                    <ul className="timeline">
                        { appState.timeline.list ? appState.timeline.list.map(tm => (
                            <li key={tm.id} className="timeline-item">
                                <span className="timeline-date">
                                    <span className="timeline-date-label">{tm.date}</span>
                                    <span className="timeline-date-bullet"></span>
                                </span>
                                <Card className="timeline-card">
                                    <div className="timeline-body">
                                        <CardMedia
                                            className="timeline-image"
                                            image={tm.imageUrl}
                                        />
                                        <CardContent className="timeline-content">
                                            <h3>{tm.title}</h3>
                                            <p>{tm.description}</p>
                                        </CardContent>
                                    </div>
                                </Card>
                            </li>
                        )) : <li>Carregando...</li>
                        }
                    </ul>
                </Grid>
                <Grid item xs={3}>
                    <div className="box">
                        <Grid item xs={12}>
                            <h2>Instituição</h2>
                            <h3>OHC Toronto - Semi-intensivo</h3>
                        </Grid>
                        <Grid item xs={12} className="info-item">
                            <h2>Anfitrião</h2>
                            <h3>Família Adams</h3>
                            <p>Tipo de acomodação: Casa</p>
                        </Grid>
                    </div>
                    <div className="box">
                        <h2>Dados do Viajante</h2>
                        <Grid container spacing={24}>
								<Grid item xs={12}>
									<TextField
										required
										id="firstName"
										name="firstName"
										label="Nome Completo"
										fullWidth
										autoComplete="fname"
										variant="outlined"
									/>
								</Grid>

								<Grid item xs={12}>
									<TextField
										required
										id="cpf"
										name="cpf"
										label="CPF"
										fullWidth
										autoComplete="fname"
										variant="outlined"
									/>
								</Grid>

								<Grid item xs={12}>
									<TextField
										id="telefone"
										name="telefone"
										label="Telefone"
										variant="outlined"
										fullWidth />
								</Grid>

								<Grid item xs={12}>
									<TextField
										id="email"
										name="email"
										label="E-mail"
										variant="outlined"
										fullWidth />
								</Grid>

(??)							</Grid>
(??)						</div>
(??)					</Grid>

(??)				</Grid>
(??)
(??)				<div className="timeline-buttons">
(??)					<Button 
(??)						variant="contained" 
(??)						color="primary"
(??)						onClick={() => window.location.href = '/#/checkout'}>
(??)						Continuar
(??)					</Button>
(??)				</div>
(??)			</div>
		);
	}
}

observer(Timeline)
export default Timeline;
