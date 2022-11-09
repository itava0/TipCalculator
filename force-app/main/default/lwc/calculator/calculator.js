import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
  totalBill = 0;
  service = 'good';
  numberOfPeople = 1;
  tip = 0;

  billAmountHandler(event) {
    this.totalBill = event.target.value;
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

}
