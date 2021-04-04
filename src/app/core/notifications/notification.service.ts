import { Injectable, NgZone } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    public snackBar: NzNotificationService,
    private notfication: NzMessageService,
    public zone: NgZone
  ) {
  }

  default(message: string, title?: string): void {
    this.show(message, 'DEFAULT', {
      nzDuration: 3000,
      nzAnimate: true,
      nzPlacement: 'topRight'
    }, title);
  }

  close(id: any): void {
    this.notfication.remove(id);
  }

  loading(message: string): any {
    return this.show(message, 'LOADING', {
      nzDuration: 0,
      nzAnimate: true,
      nzPlacement: 'topRight'
    });
  }

  success(message: string, title?: string): void {
    this.show(message, 'SUCCESS', {
      nzDuration: 3000,
      nzAnimate: true,
      nzPlacement: 'topRight'
    }, title);
  }

  warn(message: string, duration?: number , title?: string): void {
    if (!duration) { duration = 3000; }
    this.show(message, 'WARNING', {
      nzDuration: duration,
      nzAnimate: true,
      nzPlacement: 'topRight'
    }, title);
  }

  error(message: string, title?: string): void {
    this.show(message, 'ERROR', {
      nzDuration: 4500,
      nzAnimate: true,
      nzPlacement: 'topRight'
    }, title);
  }

  private show(message: string, type: string, configuration: any, title?: string): void {
    // Need to open snackBar from Angular zone to prevent issues with its position per
    // https://stackoverflow.com/questions/50101912/snackbar-position-wrong-when-use-errorhandler-in-angular-5-and-material
    const finalConfig: any = {...configuration, nzPauseOnHover: true};
    this.zone.run(() => {
      switch (type) {
        case 'ERROR': {
          this.snackBar.error(title || 'Error', message, finalConfig);
          return null;
        }
        case 'SUCCESS': {
          this.snackBar.success(title || 'Success', message, finalConfig);
          return null;
        }
        case 'WARNING': {
          this.snackBar.warning(title || 'Warning', message, finalConfig);
          return null;
        }
        case 'DEFAULT': {
          this.snackBar.info(title || 'Information', message, finalConfig);
          return null;
        }
        case 'LOADING': {
          return this.notfication.loading(message, finalConfig);
        }
        default:
          return null;
      }
    });
  }
}
