import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@src/app/shared/shared.module';
import { LiveChatComponent } from './container/live-chat.component';
import { LiveChatRoutingModule } from './live-chat-routing.module';
import { LiveChatService } from './service/live-chat.service';


@NgModule({
  imports: [
    SharedModule,
    LiveChatRoutingModule,
    // StoreModule.forFeature('livechat', RatesReducer),
  ],
  declarations: [
    LiveChatComponent
  ],
  exports: [],
  entryComponents: [],
  providers: [
    LiveChatService
  ]
})
export class LiveChatModule { }
