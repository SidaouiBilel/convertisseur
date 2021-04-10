import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, NotificationService } from '@src/app/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Observable } from 'rxjs';
import { AddTabComponent } from '../modals/add-tab/add-tab.component';
import { ActionDeleteTab, ActionSaveNewTab } from '../store/rates.actions';
import { Tab } from '../store/rates.models';
import { selectTabs } from '../store/rates.selectors';

@Component({
  selector: 'app-rates-container',
  templateUrl: './rates-container.component.html',
  styleUrls: ['./rates-container.component.scss']
})
export class RatesContainerComponent implements OnInit {
  selectedIndex = 0;
  tabs$: Observable<Tab[]>;

  constructor(private store: Store<AppState>, private modal: NzModalService, private not: NotificationService) {
    this.tabs$ = this.store.select(selectTabs);
  }

  ngOnInit(): void {
  }

  newTab(): void {
    const modal = this.modal.create({
      nzTitle: 'Add a new tab',
      nzContent: AddTabComponent,
      nzClosable: false,
      nzCentered: true,
      nzComponentParams: {
      },
      nzOnOk: () => {
        modal.componentInstance.submitForm();
        const form = modal.componentInstance.myForm;
        if (form.invalid) {
          return false;
        } else {
          this.store.dispatch(new ActionSaveNewTab({title: form.controls.title.value, base: form.controls.base.value, closable: true}));
          this.not.success(`The new tab ${form.controls.title.value} has been added successfully;`);
          return true;
        }
      },
    });
  }

  removeTab({ index }: { index: number }): void {
    this.store.dispatch(new ActionDeleteTab(index));
    this.not.success(`Removed successfully`);
  }

}
