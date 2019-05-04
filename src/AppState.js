import { decorate, observable } from 'mobx';
import Timeline from './models/Timeline';

class AppState {
	timeline = new Timeline()
}

decorate(AppState, {
	timeline: observable
});

const state = new AppState();

export default state;