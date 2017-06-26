import { LandingPage } from './../landing/landing';
import { CustomAuthProvider } from './../../providers/auth/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { PreferenceFormPage } from './../preference-form/preference-form';
import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EngagementsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-engagements',
  templateUrl: 'engagements.html',
})
export class EngagementsPage {
  
  currentClientObject : FirebaseObjectObservable<any> ; 
  showSetting:boolean=false;
  personalizeForm : any;
  uid: any;
  resData={
    link:{
      shortUrl: "",
      longUrl:""
    },
    inviteMessage:""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb : FormBuilder, public afdb : AngularFireDatabase,
      public _auth : CustomAuthProvider) {
    this.uid= this.navParams.data;
    console.log(this.uid);
    this.currentClientObject = this.afdb.object('profile/'+this.uid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EngagementsPage');
  }
  ionViewWillEnter(){
    
    this.currentClientObject.subscribe((res)=>{
      this.resData = res;
    })

  }

  pushPreferenceForm(){
    this.navCtrl.push(PreferenceFormPage);
  }

  logout(){
    this._auth.logout();
    this.navCtrl.setRoot(LandingPage);
  }

}
