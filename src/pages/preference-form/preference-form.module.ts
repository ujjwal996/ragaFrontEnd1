import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreferenceFormPage } from './preference-form';

@NgModule({
  declarations: [
    PreferenceFormPage,
  ],
  imports: [
    IonicPageModule.forChild(PreferenceFormPage),
  ],
  exports: [
    PreferenceFormPage
  ]
})
export class PreferenceFormPageModule {}
