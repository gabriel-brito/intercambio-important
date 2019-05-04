import { decorate, observable } from 'mobx';

class TimelineItem {
	id = 0
	title = ''
	date = new Date()
	description = ''
	imageUrl = ''

	constructor(data) {
		Object.assign(this, data);
	}
}

decorate(TimelineItem, {
	title: observable,
	date: observable,
	description: observable
});

export default TimelineItem;