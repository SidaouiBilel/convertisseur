import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectRouterState } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;
  // variable used for breadcrumps
  pageList: string[];
  router$: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.router$ = this.store.select(selectRouterState);
    this.router$.subscribe((res) => {
      if (res) {
        this.pageList = ['home'];
        this.pageList = this.pageList.concat(res.state.url.substring(1).split('/').filter((e) => {if ( e !== '' ) { return e; }}));
      }
    });
  }

  // This is used to select the primary pqge in the sidebqr
  isPrimaryPage(page: string): boolean {
    if (this.pageList.length > 0 ) {
      return this.pageList.includes(page);
    }
    return false;
  }

  // This is used to match the name of the route with the ANT JS icons
  matchNameWithIcons(name: string): string {
    switch (name) {
      case 'converter':
        return 'bank';

      default:
        return 'appstore';
    }
  }

  getLinkByIndex(id: number): string {
    let path = '';
    this.pageList.slice(1, id + 1).map((e) => path += '/' + e);
    return path;
  }
}
