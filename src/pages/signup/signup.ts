import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from "@angular/forms";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
	signupForm : any;
  constructor(public navCtrl: NavController, public navParams: NavParams , private fb : FormBuilder , public af : AngularFireAuth) {
  	this.signupForm = fb.group({
  		emailid : fb.control(null),
  		password : fb.control(null)
  	})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  onSubmit(signupForm){
  	this.af.auth.createUserWithEmailAndPassword(signupForm.emailid , signupForm.password).then((res)=>console.log(res), (err)=>console.log(err));
    this.navCtrl.push(LoginPage);
  }

}
