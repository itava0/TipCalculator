import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
  totalBill = 0;
  service = '';
  numberOfPeople = 1;
  tip = 0;
  tips = [];
  tipData = {};
  idNum = 1;
  historyVisible = false;
  receiptVisible = false;

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

  this.tipData = {id: this.idNum,
                  amount: this.totalBill,
                  people: this.numberOfPeople,
                  service: this.service,
                  total: this.tip};
  this.tips.push(this.tipData);
  this.idNum = this.idNum + 1;
}

handleClear(){
  this.template.querySelectorAll('lightning-input[data-id="reset"]').forEach(element => {
    element.value = null;
  });
  this.template.querySelector('lightning-combobox[data-id="reset"]').value = null;
  this.tip = 0;
}

handleReceipt() {
  this.receiptVisible = !this.receiptVisible;
}

handleHistory() {
  this.historyVisible = !this.historyVisible;
}
}
