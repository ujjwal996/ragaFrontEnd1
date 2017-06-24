import { ProfilePage } from './../profile/profile';
import { TabsPage } from './../tabs/tabs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder , FormGroup } from '@angular/forms';
import * as firebase from 'firebase/app';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	loginForm : any;
  captcha:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb:FormBuilder , public af : AngularFireAuth) {
  	this.loginForm = fb.group({
  		emailid : fb.control(null),
  		password : fb.control(null)
  	});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  onSubmit(loginForm){
    console.log("Recorded");
  	this.af.auth.signInWithEmailAndPassword(loginForm.emailid , loginForm.password).then((res)=> {
      console.log(res);
      this.navCtrl.setRoot(TabsPage,{'userinfo': res });
      
    },(err)=>console.log(err));
  }

}
