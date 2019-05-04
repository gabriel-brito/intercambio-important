import { decorate, observable } from 'mobx';

class AccomodationState {
  address = '';
  classification = '';
  host = '';
  hostImage = '';
  houseNumber = '';
  type = '';
  zipCode = '';
};

decorate(AccomodationState, {
  address: observable,
  classification: observable,
  host: observable,
  hostImage: observable,
  houseNumber: observable,
  type: observable,
  zipCode: observable
});

export default AccomodationState;