import { Component, Input, OnInit } from '@angular/core';
import { currencies } from '@src/app/shared/utils/numbers.util';
import { RatesService } from '../../services/rates.service';
import { Tab } from '../../store/rates.models';

@Component({
  selector: 'app-rate-exchange',
  templateUrl: './rate-exchange.component.html',
  styleUrls: ['./rate-exchange.component.scss']
})
export class RateExchangeComponent implements OnInit {
  forexRates: any;
  selectedCurrency: any;
  loading = false;
  currencies = currencies;
  keys = Object.keys;
  @Input() tab: Tab;
  @Input() set index(value: number) {
    this.getData(this.tab.base);
  }
  constructor(private service: RatesService) { }

  ngOnInit(): void {
  }

  getData(base: string): void {
    if (base) {
      this.loading = true;
      this.service.getRates(base).subscribe((result: any) => {
        if (result && result.length > 0) {
          this.forexRates = result[0][base];
          this.loading  = false;
        }
      }, (err) => {
        this.loading = false;
      });
    }
  }

}
