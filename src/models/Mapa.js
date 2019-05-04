import { decorate, observable, action } from 'mobx';
import systemHost from '../assets/images/system-host.png';
import schoolHost from '../assets/images/school-host.png';
import school from '../assets/images/school.png';

const icons = {
	E: school,
	EH: schoolHost,
	SH: systemHost
};

const geocodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
const apiKey = 'AIzaSyA0p0GnaPDtJQfu7Fy9FETmzTlQJrTdd_0';

class Mapa {
	markers = [];
	currentMarker = null;

	loadMarkers = adresses => {
		this.markers.length = 0;

		Promise.all(adresses.map(a => {
			return (
				fetch(`${geocodeUrl}?key=${apiKey}&address=${a.street}&sensor=true`)
					.then(r => r.json())
					.then(r => ({ ...a, ...r.results[0].geometry.location }))
			);
		})).then(responses => {
			responses.forEach(r => {
				this.markers.push({
					...r,
					icon: {
						url: icons[r.type],
						scaledSize: { height: 50, width: 32 }
					}
				})
			})
		});
	};
}

decorate(Mapa, {
	currentMarker: observable,
	markers: observable,
	loadMarkers: action
});

export default Mapa;