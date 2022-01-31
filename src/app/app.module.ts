import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankingComponent } from './component/banking/banking.component';
import { AddAccountComponent } from './component/add-account/add-account.component';
import { PaymentComponent } from './component/payment/payment.component';
import { CheckBalanceComponent } from './component/check-balance/check-balance.component';

@NgModule({
  declarations: [
    AppComponent,
    BankingComponent,
    AddAccountComponent,
    PaymentComponent,
    CheckBalanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
