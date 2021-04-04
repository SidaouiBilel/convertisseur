import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ConverterRoutingModule } from './converter-routing.module';
import { ConverterComponent } from './container/converter.component';
import { ConverterReducer } from './store/converter.reducer';
import { ConverterRatioComponent } from './components/converter-ratio/converter-ratio.component';
import { SharedModule } from '@src/app/shared/shared.module';
import { ConversionHistoryComponent } from './components/conversion-history/conversion-history.component';


@NgModule({
  imports: [
    SharedModule,
    ConverterRoutingModule,
    StoreModule.forFeature('converter', ConverterReducer),
  ],
  declarations: [ConverterComponent, ConverterRatioComponent, ConversionHistoryComponent],
  exports: [ConverterComponent]
})
export class ConverterModule { }
