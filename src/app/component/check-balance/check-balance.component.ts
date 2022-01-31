import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-balance',
  templateUrl: './check-balance.component.html',
  styleUrls: ['./check-balance.component.css']
})
export class CheckBalanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  number='';
  amount:any='';

  verify(){
    if(this.number == localStorage.getItem("myNumber")){
      this.amount = localStorage.getItem('myaBalance')
    }
  }

}
