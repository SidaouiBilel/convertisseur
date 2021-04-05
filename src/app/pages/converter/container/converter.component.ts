import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, NotificationService } from '@src/app/core';
import { getUsedRatio } from '@src/app/shared/utils/numbers.util';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { ActionDeleteHistory, ActionSaveFixedRatio, ActionSaveHistory, ActionSwitchConversion } from '../store/converter.action';
import { ConversionHistory, Ratio } from '../store/converter.model';
import { selectFixedRatio, selectRatio, selectType } from './../store/converter.selectors';

@Component({
  selector: 'app-wconverter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  amountinEuro: number;
  amountinDollar: number;
  type: 'EuroToDollar' | 'DollarToEuro';
  // Check if value is modifed
  isModified = false;
  visible = false;
  ratio$: Observable<number>;
  fixedRatio$: Observable<number>;
  type$: Observable<any>;
  usd$: Subscription;
  eur$: Subscription;
  constructor(private store: Store<AppState>, private not: NotificationService) {
    this.ratio$ = this.store.select(selectRatio);
    this.fixedRatio$ = this.store.select(selectFixedRatio);
    this.type$ = this.store.select(selectType);
    this.type$.subscribe((res) => {this.type = res; });
  }

  ngOnInit(): void {
  }

  calculate(): void {
    switch (this.type) {
      case 'EuroToDollar':
        if (this.eur$) {this.eur$.unsubscribe(); }
        this.usd$ = combineLatest([this.ratio$, this.fixedRatio$]).subscribe(([live, fixed]: [number, number]) => {
          if (this.amountinEuro) {
            const ratio: Ratio = getUsedRatio(live, fixed);
            this.amountinDollar = Number((this.amountinEuro * ratio.used).toFixed(4));
            this.isModified = false;
            this.addToHistory('Euro', 'Dollar', this.amountinEuro, this.amountinDollar, ratio.live, ratio.fixed, ratio.used);
          }
        });
        break;
      case 'DollarToEuro':
        if (this.usd$) {this.usd$.unsubscribe(); }
        this.eur$ = combineLatest([this.ratio$, this.fixedRatio$]).subscribe(([live, fixed]: [number, number]) => {
          if (this.amountinDollar) {
            const ratio: Ratio = getUsedRatio(live, fixed);
            this.amountinEuro = Number((this.amountinDollar * ratio.used).toFixed(4));
            this.isModified = false;
            this.addToHistory('Dollar', 'Euro', this.amountinDollar, this.amountinEuro, ratio.live, ratio.fixed, ratio.used);
          }
        });
        break;
      default:
        break;
    }
  }

  addToHistory(from, to, fromValue, toValue, changeRatio, fixedRatio, used): void {
    const newEntry: ConversionHistory = {
      from,
      to,
      fromValue,
      toValue,
      changeRatio,
      fixedRatio,
      used: (used === changeRatio) ? 'live' : 'fixed'
    };
    this.store.dispatch(new ActionSaveHistory(newEntry));
  }

  switch(): void {
    switch (this.type) {
      case 'EuroToDollar':
        if (this.usd$) {this.usd$.unsubscribe(); }
        this.store.dispatch(new ActionSwitchConversion('DollarToEuro'));
        this.not.default('You are now converting from Dollar to Euro.');
        break;
        case 'DollarToEuro':
        if (this.eur$) {this.eur$.unsubscribe(); }
        this.store.dispatch(new ActionSwitchConversion('EuroToDollar'));
        this.not.default('You are now converting from Euro to Dollar.');
        break;
      default:
        break;
    }
  }

  deleteHistory(): void {
    this.store.dispatch(new ActionDeleteHistory());
    this.not.success('Conversion history was deleted successfully.');
  }

  saveFixedRatio(ratio: number): void {
    this.store.dispatch(new ActionSaveFixedRatio(ratio));
    this.not.success('The new fixed ratio was saved successfully.')
  }

  unsub(): void {
    if (this.usd$) {this.usd$.unsubscribe(); }
    if (this.eur$) {this.eur$.unsubscribe(); }
    this.isModified = true;
  }

}
