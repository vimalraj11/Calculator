import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css']
})
export class BankingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Drop down color selected
  selectedloan= {
    name: 'Car Loan 8%',
    precentage:8,
    color: 'cornflowerblue'
  }


  loans = [{
    name: 'Car Loan 8%',
    precentage:8,
    color: 'cornflowerblue'
  }, {
    name: 'Home Loan 7%',
    precentage:7,
    color: 'beige'
  }, {
    name: 'House Loan 10%',
    precentage:10,
    color: 'yellow'
  },]

  compare(c1: any, c2: any): boolean {
    return c1.color === c2.color
  }
  principal:any=undefined;
  rate:any=undefined;
  time:any=undefined;
  si:any=undefined;
  amt:any=undefined;
  monthlyPay:any=undefined;

  simpleInterest(){
    this.si=(this.principal*this.selectedloan.precentage*this.time)/(100*12);
    this.amt=this.si+this.principal;
    this.monthlyPay=this.amt/this.time

  }//SI() ends
  months=[
    {
      no:1,
      name:'January'
    },
    {
      no:2,
      name:'February'
    },
    {
      no:3,
      name:'March'
    },
    {
      no:4,
      name:'April'
    },
    {
      no:5,
      name:'May'
    },
    {
      no:6,
      name:'June'
    },
    {
      no:7,
      name:'July'
    },
    {
      no:8,
      name:'August'
    },
    {
      no:9,
      name:'September'
    },
    {
      no:10,
      name:'October'
    },
    {
      no:11,
      name:'November'
    },
    {
      no:12,
      name:'December'
    },
  ]
}
