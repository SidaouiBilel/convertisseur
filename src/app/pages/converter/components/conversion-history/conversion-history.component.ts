import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@src/app/core';
import { Observable } from 'rxjs';
import { ConversionHistory } from '../../store/converter.model';
import { selectHistory } from '../../store/converter.selectors';

@Component({
  selector: 'app-conversion-history',
  templateUrl: './conversion-history.component.html',
  styleUrls: ['./conversion-history.component.scss']
})
export class ConversionHistoryComponent implements OnInit {
  history$: Observable<ConversionHistory[]>;
  constructor(private store: Store<AppState>) {
    this.history$ = this.store.select(selectHistory);
  }

  ngOnInit(): void {
  }

}
