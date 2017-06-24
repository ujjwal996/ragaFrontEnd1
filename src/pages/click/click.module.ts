import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClickPage } from './click';

@NgModule({
  declarations: [
    ClickPage,
  ],
  imports: [
    IonicPageModule.forChild(ClickPage),
  ],
  exports: [
    ClickPage
  ]
})
export class ClickPageModule {}
