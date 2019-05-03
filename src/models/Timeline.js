import { decorate, observable, action } from 'mobx';
import TimelineItem from './TimelineItem';
import museu from '../assets/images/museu.jpg';
import parque from '../assets/images/parque.jpg';

class Timeline {
	price = '50.000,00'
	list = null

	getList = () => {
		this.list = null;

		setTimeout(() => {
			this.list = [
				{
					id: 1,
					title: 'Museu do outro mundo',
					date: '10/07/2019',
					description: 'Museu muito loco',
					imageUrl: museu
				},
				{
					id: 2,
					title: 'Parque vira copo',
					date: '11/07/2019',
					description: 'Parque maneirinho',
					imageUrl: parque
				}
			].map(item => new TimelineItem(item));
		}, 0);
	}
}

decorate(Timeline, {
	list: observable,
	getList: action,
});

export default Timeline;