import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { httpInterceptorProviders } from './http-interceptors';
import { LocalStorageService } from './local-storage/local-storage.service';
import { AuthEffects } from './auth/auth.effects';
import { AuthGuardService } from './auth/auth-guard.service';
import { AnimationsService } from './animations/animations.service';
import { TitleService } from './title/title.service';
import { reducers, metaReducers } from './core.state';
import { AppErrorHandler } from './error-handler/app-error-handler.service';
import { CustomSerializer } from './router/custom-serializer';
import { NotificationService } from './notifications/notification.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpErrorHandler } from './error-handler/http-error-handler.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { environment } from '@src/environments/environment';


@NgModule({
  imports: [
    // angular
    // CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // ngrx
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([AuthEffects]),
    environment.production ? [] : StoreDevtoolsModule.instrument({name: 'demo'}),
  ],
  declarations: [],
  providers: [
    NotificationService,
    LocalStorageService,
    AuthGuardService,
    AnimationsService,
    httpInterceptorProviders,
    TitleService,
    NzNotificationService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorHandler, multi: true  },
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ],
  exports: [
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
