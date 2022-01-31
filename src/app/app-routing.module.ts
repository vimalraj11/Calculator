import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAccountComponent } from './component/add-account/add-account.component';
import { BankingComponent } from './component/banking/banking.component';
import { CheckBalanceComponent } from './component/check-balance/check-balance.component';
import { PaymentComponent } from './component/payment/payment.component';

const routes: Routes = [
  {
    path:'', component: BankingComponent,
    children:[
      {
        path:'add-account',component:AddAccountComponent
      },
      {
        path:'payment', component:PaymentComponent,
        children:[
          {
            path:'check-balance', component:CheckBalanceComponent
          }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
