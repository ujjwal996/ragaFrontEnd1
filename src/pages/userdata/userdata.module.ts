import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserDataPage } from './userdata';

@NgModule({
  declarations: [
    UserDataPage,
  ],
  imports: [
    IonicPageModule.forChild(UserDataPage),
  ],
  exports: [
    UserDataPage
  ]
})
export class UserdataPageModule {}
