import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import Button from '@material-ui/core/Button';
import appState from '../../AppState';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import indigo from '@material-ui/core/colors/indigo';

import './index.css'

class CustomMarker extends Component {
	state = {
		showInfoWindow: false
	};

	handleMouseOver = e => {
		this.setState({
			showInfoWindow: true
		});
	};

	handleMouseExit = e => {
		this.setState({
			showInfoWindow: false
        });
	};

	handleClick = e => {
		appState.mapa.currentMarker = this.props.marker;
	}

	render() {
		const { showInfoWindow } = this.state;
		const { marker } = this.props;
		return (
            <Marker
                position={{ lat: marker.lat, lng: marker.lng }}
                icon={marker.icon}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseExit}
                onClick={this.handleClick}
            >
                {showInfoWindow && (
                    <InfoWindow>
                                <h4>{marker.name}</h4>
                    </InfoWindow>
                )}
            </Marker>
		);
	}
}

observer(CustomMarker);

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
	<GoogleMap
		defaultZoom={16}
		defaultCenter={props.markers[0]}
	>
		{props.markers.map((m, index) =>
			<CustomMarker
				key={index}
				marker={m}
			/>
		)}
	</GoogleMap>
));

class MapaFiltro extends Component {
	state = {
		showFamilyFromNetwork: true,
		showFamilyOutsideNetwork: true,
		showHotels: true
	};

	handleCheckboxChange = e => {
		this.setState({ [e.target.name]: e.target.checked });
		if (e.target.checked && !appState.mapa.filters.includes(e.target.value)) {
			appState.mapa.filters.push(e.target.value);
		}
		else if (!e.target.checked && appState.mapa.filters.includes(e.target.value)) {
			appState.mapa.filters = appState.mapa.filters.filter(f => f !== e.target.value);
		}
	};

	render() {
		return (
			<div class="host-map-filter">
				<label>
					<input
						type="checkbox"
						name="showFamilyFromNetwork"
						checked={this.state.showFamilyFromNetwork}
						onChange={this.handleCheckboxChange}
						value="HFN"
					/>
					Familias credenciada
				</label>
				<label>
					<input
						type="checkbox"
						name="showFamilyOutsideNetwork"
						checked={this.state.showFamilyOutsideNetwork}
						onChange={this.handleCheckboxChange}
						value="HF"
					/>
					Familias não credenciada
				</label>
				<label>
					<input
						type="checkbox"
						name="showHotels"
						checked={this.state.showHotels}
						onChange={this.handleCheckboxChange}
						value="HHN"
					/>
					Hoteis
				</label>
			</div>
		);
	}
}

const styles = {
    paper: {
        padding: '1rem',
    },
    divider: {
        marginBottom: '1rem',
    }

}

class Mapa extends Component {
	render () {
		const { filteredMarkers, currentMarker } = appState.mapa;

		return (
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Typography variant="h2" gutterBottom style={{color: indigo[900]}}>
                        Escolha a sua acomodação
                    </Typography>
                    <Typography variant="p" gutterBottom>
                        Selecione clicandos nos ícones o seu anfitrião
                    </Typography>
                </Grid>
                <Grid item xs={9}>
                    { filteredMarkers.length ?
                        <Paper style={styles.paper}>
                            <MyMapComponent
                                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA0p0GnaPDtJQfu7Fy9FETmzTlQJrTdd_0&v=3.exp&libraries=geometry,drawing,places"
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `600px` }} />}
                                mapElement={<div style={{ height: `100%` }}/>}
                                markers={filteredMarkers}
                            />
                            <MapaFiltro />
                        </Paper>: <div>Carregando...</div>
                    }
                    </Grid>
                    <Grid item xs={3}>
					{ filteredMarkers.length ?
						<Paper>
						{ currentMarker ?
								<Paper style={styles.paper}>
                                    <Typography variant="h4" gutterBottom>
                                        Informação { currentMarker.type === 'E'? 'da escola': 'do anfitrião' }
                                    </Typography>
                                    <Typography variant="h6" gutterBottom>
                                        Nome
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                        {currentMarker.name}
                                    </Typography>
                                    <Typography variant="h6" gutterBottom>
                                        Descrição
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                        {currentMarker.description}
                                    </Typography>
                                    <Typography variant="h6" gutterBottom>
                                        Endereço
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                        {currentMarker.street}
                                    </Typography>
                                    <Divider style={styles.divider} />
                                    { currentMarker.type !== 'S' ?
                                        <Button
                                            size="large"
                                            style={{
                                                backgroundColor: green[600],
                                                color: grey[50]
                                            }}
                                            onClick={() => window.location.href = '/#/timeline'}>
                                            Selecionar
                                        </Button> : null
                                    }
                                </Paper>
                                : null
                            }
                            </Paper>
                            : null
                        }
                </Grid>
            </Grid>
		);
	}
}

observer(Mapa);
appState.loadMap();

export default Mapa;