import { LandingPage } from './../landing/landing';

import { CustomAuthProvider } from './../../providers/auth/auth';

import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { SignupPage } from './../signup/signup';
import { LoginPage } from './../login/login';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  loginInfo:any;
  loginData:any;
  saved:boolean=false;

  displayData = { 
    buissnessName:"",
    buisnessAddress:"",
    phoneNum:"",
    subscriptionModel:"",
    links:{
      longUrl:'',
      shortUrl:''
    },
    inviteMessage : "",
    photoUrl:"",
    emailid:"",
    photoURL:''
   }

  user : Observable<firebase.User>;
  
  clientsList:FirebaseListObservable<any>;
  currentClientObject:FirebaseObjectObservable<any>;
  uid:string;
  authInfo:any;

  constructor(public navCtrl: NavController, public navParams: NavParams , public alertCtrl : AlertController,
   public afauth: AngularFireAuth, public db:AngularFireDatabase, public _auth:CustomAuthProvider) {
    this.user = afauth.authState;   
    this.uid = this.navParams.data;
    console.log("Profile page", this.uid);
    this.currentClientObject = this.db.object("profile/"+this.uid);
    //this.loginData = this.loginInfo.providerData[0] || {};
    //this.authInfo = this._auth.userInfo();
  }

  ionViewWillEnter(){
    this.currentClientObject.subscribe((res)=>{
      console.log(res);
      if(res.$value!==null){
        this.displayData = res;
        console.log("display data from firebase: " , this.displayData);
      }
      
      
    });
  }
  

  bindData(){
    this.currentClientObject.set( this.displayData ).then((res)=>{
      console.log(res);
      let alert = this.alertCtrl.create({
        title : 'Data Saved',
        subTitle : 'You can come back and edit this data whenever you want. But be careful',
        buttons:['OK']
      });
      alert.present();
    },(err)=>{
      console.log(err);
    });
    
  }
  logout(){
    this._auth.logout();
    this.navCtrl.setRoot(LandingPage);
  }

}
