import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@src/app/core';
import { Random } from '@src/app/shared/utils/numbers.util';
import { interval, Observable, Subscription, timer } from 'rxjs';
import { selectFixedRatio, selectRatio } from './../../store/converter.selectors';
import { ActionrandomRatio } from './../../store/converter.action';

@Component({
  selector: 'app-converter-ratio',
  templateUrl: './converter-ratio.component.html',
  styleUrls: ['./converter-ratio.component.scss']
})
export class ConverterRatioComponent implements OnInit, OnDestroy {
  ratio$: Observable<number>;
  fixedRatio$: Observable<number>;
  interval$: Subscription;
  constructor(private store: Store<AppState>) {
    this.ratio$ = this.store.select(selectRatio);
    this.fixedRatio$ = this.store.select(selectFixedRatio);
  }

  ngOnInit(): void {
    this.interval$ = interval(3000).subscribe(() => {
      this.modifyRatio();
    });
  }

  ngOnDestroy(): void {
    if (this.interval$) {
      this.interval$.unsubscribe();
    }
  }

  modifyRatio(): void {
    const randomRatio = Random(-5, 5) / 100;
    this.store.dispatch(new ActionrandomRatio(randomRatio));
  }

  getUsedRatio(live: number, fixed: number): boolean{
    if (fixed > live + 0.02 || fixed < live - 0.02) {
      return false;
    }
    return true;
  }
}
