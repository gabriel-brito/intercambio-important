import { Component } from 'react';
import { decorate, observable, action } from 'mobx';
import TimelineItem from './TimelineItem';
import museu from '../assets/images/museu.jpg';
import parque from '../assets/images/parque.jpg';

const mock = [
	{
		id: 1,
		title: 'Museu do outro mundo',
		date: '1° dia',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
		imageUrl: [{ original: museu }, { original: parque }]
	},
	{
		id: 2,
		title: 'Parque vira copo',
		date: '2° dia',
		description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
		imageUrl: [{ original: parque }]
	},
	{
		id: 3,
		title: 'Aquário',
		date: '3° dia',
		description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from',
		imageUrl: [{ original: museu }]
	},
	{
		id: 4,
		title: 'Passeio de barco',
		date: '4° dia',
		description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from',
		imageUrl: [{ original: parque }]
	},
	{
		id: 5,
		title: 'Festival de Chopp',
		date: '5° dia',
		description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from',
		imageUrl: [{ original: museu }]
	}
].map(item => new TimelineItem(item));


class Timeline extends Component {
	price = '50.000,00'
	list = null

	getList = () => {
		this.list = null;

		fetch('http://intercambio-env.syupiu5fcm.us-east-2.elasticbeanstalk.com/timeline')
			.then(r => r.json())
			.then(r => {
				if (!r || !r.length) {
					this.list = mock;
				}
				else {
					this.list = r.map(item => {
						const images = item.dsPath && item.dsPath.filter(p => p);

						return {
							id: item.nrOrdem,
							title: item.dsTitulo,
							date: `${item.nrOrdem}° dia`,
							description: item.dsDescritivo,
							imageUrl: images && images.length
								? images.map(p => ({ original: p }))
								: [{ original: museu }]
						}
					})
				}
			});
	}
}

decorate(Timeline, {
	list: observable,
	getList: action,
});

export default Timeline;