import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase , FirebaseListObservable } from "angularfire2/database";

/**
 * Generated class for the UserdataPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-userdata',
  templateUrl: 'userdata.html',
})
export class UserDataPage {
  users: FirebaseListObservable<any[]> ;
  constructor(public navCtrl: NavController, public navParams: NavParams , public db: AngularFireDatabase) {
    this.users = db.list('/data/users');
    console.log(this.users);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserdataPage');
  }

}
