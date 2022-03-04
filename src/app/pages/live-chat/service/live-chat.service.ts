import { Injectable } from '@angular/core';
import { environment } from '@src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LiveChatService {
  myEventSource: EventSource;
  constructor() {
    this
  }

  getLiveChat(): EventSource {
    return new EventSource(environment.live_api);
  }
}
