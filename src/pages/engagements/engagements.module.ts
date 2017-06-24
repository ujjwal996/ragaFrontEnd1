import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EngagementsPage } from './engagements';

@NgModule({
  declarations: [
    EngagementsPage,
  ],
  imports: [
    IonicPageModule.forChild(EngagementsPage),
  ],
  exports: [
    EngagementsPage
  ]
})
export class EngagementsPageModule {}
