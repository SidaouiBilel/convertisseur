import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@src/app/shared/shared.module';
import { RatesRoutingModule } from './rates-routing.module';
import { RatesContainerComponent } from './container/rates-container.component';
import { RateExchangeComponent } from './components/rate-exchange/rate-exchange.component';
import { RatesReducer } from './store/rates.reducer';
import { AddTabComponent } from './modals/add-tab/add-tab.component';


@NgModule({
  imports: [
    SharedModule,
    RatesRoutingModule,
    StoreModule.forFeature('rates', RatesReducer),
  ],
  declarations: [RatesContainerComponent, RateExchangeComponent, AddTabComponent],
  exports: [],
  entryComponents: [AddTabComponent]
})
export class RatesModule { }
