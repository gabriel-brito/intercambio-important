import { decorate, observable } from 'mobx';

class ResultParameters {
  chosenCourse: '';
  language: '';
  location: '';
  travelReason: ''
};

decorate(ResultParameters, {
  chosenCourse: observable,
  language: observable,
  location: observable,
  travelReason: observable
});

export default ResultParameters;