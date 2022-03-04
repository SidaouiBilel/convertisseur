import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/livechat' },
  { path: 'rates', loadChildren: () => import('./pages/rates/rates.module').then(m => m.RatesModule) },
  { path: 'livechat', loadChildren: () => import('./pages/live-chat/live-chat.module').then(m => m.LiveChatModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
