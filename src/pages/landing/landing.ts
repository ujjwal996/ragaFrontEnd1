import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

import { TabsPage } from './../tabs/tabs';
import { CustomAuthProvider } from './../../providers/auth/auth';
import { LoginPage } from './../login/login';
import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the LandingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
  providers:[LoginPage, SignupPage]
})
export class LandingPage {
  userpresent:boolean = false;
  user : Observable<firebase.User>;
  uid:any;
  title:string = "Please login to continue to your Dashboard";
  landingOpt : string = 'login';
  constructor(public navCtrl: NavController, public navParams: NavParams , public _auth:CustomAuthProvider , public afauth:AngularFireAuth) {
    
  }

  ionViewDidLoad() {
    
  }

  ionViewWillEnter(){
   if(this._auth.userInfo()!==null){
     //console.log(this._auth.userInfo(),"From landing");
     this.uid = this._auth.userInfo().uid;
     this.navCtrl.setRoot(TabsPage, {uid : this.uid});
   }

  }

  loginUserWithFacebook(){
    this._auth.signInWithFacebook().then((res)=> this.fbsuccess() );
  }

  loginUserWithGoogle(){
    this._auth.signInWithGoogle().then((res)=>{
      this.googlesuccess();
    })
  }
  openSignUpPage(){
    this.navCtrl.push(SignupPage);
  }
  openLoginPage(){
    this.navCtrl.push(LoginPage);
  }
  fbsuccess(){
    //console.log(this._auth.userInfo() , "From facebook");
    this.uid = this._auth.userInfo().uid;
    this.navCtrl.setRoot(TabsPage, {uid : this.uid});
  }
  googlesuccess(){
    this.uid = this._auth.userInfo().uid;
    this.navCtrl.setRoot(TabsPage, {uid : this.uid} );
  }
}
