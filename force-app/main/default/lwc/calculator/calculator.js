import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
  totalBill = 0;
  service = '';
  numberOfPeople = 1;
  tip = 0;

  billAmountHandler(event) {
    this.totalBill = event.target.value;
  }

  peopleHandler(event) {
    this.numberOfPeople = event.target.value;
  }

  get pickList() {
    return [
        { label: 'Good', value: 'good' },
        { label: 'Excellent', value: 'excellent' },
        { label: 'Bad', value: 'bad' },
    ];
}

handleChange(event) {
  this.service = event.detail.value;
}

handleCalculate() {
  let total = 0;
  let totalbill = this.totalBill;
  let service = this.service;
  let num = this.numberOfPeople;

  if(service === 'good') {
      total = (totalbill *  .10) / num;
  } else if (service === 'excellent') {
    total = (totalbill *  .20) / num;
  }
  else if (service === 'bad') {
    total = (totalbill *  .05) / num;
  }

  this.tip = total;
}

}
