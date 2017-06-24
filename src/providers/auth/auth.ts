import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable' ;

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class CustomAuthProvider {
  private authState : Observable<firebase.User>;
  private currentuser : firebase.User;
  constructor(public aauth : AngularFireAuth) {
     this.authState = aauth.authState;
     this.authState.subscribe((user: firebase.User) => {
      this.currentuser = user;
      });
  }

  signInWithFacebook():firebase.Promise<any>{
    return this.aauth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider);
  }

  signInWithGoogle():firebase.Promise<any>{
    return this.aauth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
  }

  logout(){
    this.aauth.auth.signOut();
  }
  
  displayName(): string {
    if (this.currentuser !== null) {
      return this.currentuser.displayName;
    } else {
      return '';
    }
  }

  userInfo(){
    return this.aauth.auth.currentUser;
  }



}
