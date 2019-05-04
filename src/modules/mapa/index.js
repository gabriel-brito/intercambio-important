import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import Button from '@material-ui/core/Button';
import appState from '../../AppState';

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

class Mapa extends Component {
	render () {
		const { markers, currentMarker } = appState.mapa;

		return (
			<div className="host">
				<h2>Mapa</h2>
				<div className="host-content">
					<div className="host-map">
						{
							markers.length
							? <MyMapComponent
									googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA0p0GnaPDtJQfu7Fy9FETmzTlQJrTdd_0&v=3.exp&libraries=geometry,drawing,places"
									loadingElement={<div style={{ height: `100%` }} />}
									containerElement={<div style={{ height: `400px` }} />}
									mapElement={<div style={{ height: `100%` }}/>}
									markers={markers}
								/>
							: <div>Carregando...</div>
						}
					</div>
					{
						markers.length
						?
						<aside className="host-info">
						{
							currentMarker
							?
								<div>
									<h3>Informação { currentMarker.type === 'E'? 'da escola': 'do anfitrião' }</h3>
									<div>
										<strong>Nome: </strong>
										<span>{currentMarker.name}</span>
									</div>
									<div>
										<strong>Descrição: </strong>
										<span>{currentMarker.description}</span>
									</div>
									<div>
										<strong>Endereço: </strong>
										<span>{currentMarker.street}</span>
									</div>
									{
										currentMarker.type !== 'E'
										?
											<Button variant="contained" color="primary" className="host-info-btn-select">
												Selecionar
											</Button>
										: null
									}
								</div>
							: <h3>
									{
										markers.length
										? 'Selecione um anfitrião ao lado'
										: null
									}
								</h3>
						}
						</aside>
						: null
					}
				</div>
			</div>
		);
	}
}

observer(Mapa);

appState.loadMap();

export default Mapa;