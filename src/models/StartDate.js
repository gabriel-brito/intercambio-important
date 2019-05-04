import { decorate, observable } from 'mobx';

class StartDate {
  startDate: '';
}

decorate(StartDate, {
  startDate: observable
});

export default StartDate;