import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { Actions} from '@ngrx/effects';


@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions<Action>,
    private router: Router
  ) {}

}
