import { NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';
import { ContactPage } from '../contact/contact';
import { EngagementsPage } from '../engagements/engagements';
import { UserDataPage } from '../userdata/userdata';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = EngagementsPage;
  tab3Root = ContactPage;
  tab4Root = UserDataPage;
  uid:any;
  constructor(public navParams: NavParams) {
    this.uid = this.navParams.get("uid")
  }
}
