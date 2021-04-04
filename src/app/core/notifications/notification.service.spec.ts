import { NotificationService } from './notification.service';
import { TestBed } from '@angular/core/testing';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationService, NzMessageService, NzNotificationService]
    });
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('NotificationService should be executable', () => {
    spyOn(service, 'default');
    service.default('test');
    expect(service.default).toHaveBeenCalled();
  });
});
